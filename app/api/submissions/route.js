import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request) {
  const body = await request.json();

  const payload = {
    name: String(body.name || "").trim(),
    url_original: String(body.url_original || "").trim(),
    years_active_start: Number(body.years_active_start || 0),
    years_active_end: body.years_active_end ? Number(body.years_active_end) : null,
    category: String(body.category || "").trim(),
    short_description: String(body.short_description || "").trim(),
    why_it_deserves: String(body.why_it_deserves || "").trim(),
    submitter_handle: body.submitter_handle ? String(body.submitter_handle).trim() : null,
    wayback_url: body.wayback_url ? String(body.wayback_url).trim() : null,
    status: "pending"
  };

  if (!payload.name || !payload.url_original || !payload.category || !payload.short_description || !payload.why_it_deserves) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (!payload.years_active_start || payload.years_active_start < 1990) {
    return NextResponse.json({ error: "Invalid years active start." }, { status: 400 });
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return NextResponse.json({ error: "Supabase is not configured." }, { status: 500 });
  }

  const { error } = await client.from("pending_submissions").insert(payload);

  if (error) {
    return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
