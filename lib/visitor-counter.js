import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { getSupabaseServerClient } from "@/lib/supabase";

const VISITOR_METRIC_KEY = "visitors_total";
const COUNTER_FILE_PATH = path.join(process.cwd(), ".runtime", "visitor-count.json");

async function readFileCounter() {
  try {
    const raw = await readFile(COUNTER_FILE_PATH, "utf8");
    const parsed = JSON.parse(raw);
    const value = Number(parsed.value || 0);
    return Number.isFinite(value) && value >= 0 ? value : 0;
  } catch (_error) {
    return 0;
  }
}

async function writeFileCounter(value) {
  await mkdir(path.dirname(COUNTER_FILE_PATH), { recursive: true });
  await writeFile(COUNTER_FILE_PATH, JSON.stringify({ value }, null, 2), "utf8");
}

export async function getVisitorCount() {
  const client = getSupabaseServerClient();
  if (!client) {
    return readFileCounter();
  }

  const { data, error } = await client
    .from("site_metrics")
    .select("metric_value")
    .eq("metric_key", VISITOR_METRIC_KEY)
    .maybeSingle();

  if (error) {
    return readFileCounter();
  }

  return Number(data?.metric_value || 0);
}

export async function incrementVisitorCount() {
  const client = getSupabaseServerClient();
  if (!client) {
    const current = await readFileCounter();
    const next = current + 1;
    await writeFileCounter(next);
    return next;
  }

  const { error: upsertError } = await client
    .from("site_metrics")
    .upsert({ metric_key: VISITOR_METRIC_KEY, metric_value: 0 }, { onConflict: "metric_key" });

  if (upsertError) {
    const current = await readFileCounter();
    const next = current + 1;
    await writeFileCounter(next);
    return next;
  }

  const { data, error: selectError } = await client
    .from("site_metrics")
    .select("metric_value")
    .eq("metric_key", VISITOR_METRIC_KEY)
    .maybeSingle();

  if (selectError) {
    const current = await readFileCounter();
    const next = current + 1;
    await writeFileCounter(next);
    return next;
  }

  const next = Number(data?.metric_value || 0) + 1;

  const { error: updateError } = await client
    .from("site_metrics")
    .update({ metric_value: next })
    .eq("metric_key", VISITOR_METRIC_KEY);

  if (updateError) {
    const fileCurrent = await readFileCounter();
    const fileNext = fileCurrent + 1;
    await writeFileCounter(fileNext);
    return fileNext;
  }

  return next;
}
