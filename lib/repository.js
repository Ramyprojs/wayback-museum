import { fallbackExhibits } from "@/data/exhibits";
import { getSupabaseServerClient } from "@/lib/supabase";

function withDerived(exhibit) {
  const start = exhibit.years_active_start;
  const end = exhibit.years_active_end || new Date().getFullYear();

  return {
    ...exhibit,
    yearsLabel: exhibit.years_active_end ? `${start} - ${exhibit.years_active_end}` : `${start} - Present`,
    era:
      start <= 1996
        ? "1993-1996"
        : start <= 1999
          ? "1997-1999"
          : start <= 2003
            ? "2000-2003"
            : "2004-2007",
    yearDied: exhibit.years_active_end || end
  };
}

function normalizeRows(rows) {
  return (rows || []).map(withDerived);
}

export async function getAllExhibits() {
  const client = getSupabaseServerClient();

  if (!client) {
    return fallbackExhibits.map(withDerived);
  }

  const { data, error } = await client.from("exhibits").select("*").order("created_at", { ascending: false });

  if (error || !data) {
    return fallbackExhibits.map(withDerived);
  }

  return normalizeRows(data);
}

export async function getFeaturedExhibits(limit = 6) {
  const client = getSupabaseServerClient();

  if (!client) {
    return fallbackExhibits.filter((item) => item.featured).slice(0, limit).map(withDerived);
  }

  const { data, error } = await client
    .from("exhibits")
    .select("*")
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error || !data?.length) {
    return fallbackExhibits.filter((item) => item.featured).slice(0, limit).map(withDerived);
  }

  return normalizeRows(data);
}

export async function getExhibitBySlug(slug) {
  const client = getSupabaseServerClient();

  if (!client) {
    const found = fallbackExhibits.find((item) => item.slug === slug);
    return found ? withDerived(found) : null;
  }

  const { data } = await client.from("exhibits").select("*").eq("slug", slug).maybeSingle();

  if (!data) {
    const found = fallbackExhibits.find((item) => item.slug === slug);
    return found ? withDerived(found) : null;
  }

  return withDerived(data);
}

export async function getExhibitMemories(exhibitId) {
  const client = getSupabaseServerClient();
  if (!client || !exhibitId) {
    return [];
  }

  const { data } = await client
    .from("community_memories")
    .select("id,handle,memory,created_at")
    .eq("exhibit_id", exhibitId)
    .eq("flagged", false)
    .order("created_at", { ascending: false })
    .limit(30);

  return data || [];
}
