import { fallbackExhibits } from "@/data/exhibits";
import { getSupabaseServerClient } from "@/lib/supabase";
import { getVisitorCount } from "@/lib/visitor-counter";

function withDerived(exhibit) {
  const start = exhibit.years_active_start;
  const end = exhibit.years_active_end || new Date().getFullYear();
  const story = String(exhibit.full_story || "");
  const words = story.split(/\s+/).filter(Boolean).length;

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
    yearDied: exhibit.years_active_end || end,
    readingMinutes: Math.max(2, Math.round(words / 220))
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

export async function getHomepageStats() {
  const exhibits = await getAllExhibits();
  const totalExhibits = exhibits.length;
  const totalYears = exhibits.reduce((sum, item) => {
    const end = item.years_active_end || new Date().getFullYear();
    return sum + Math.max(0, end - item.years_active_start);
  }, 0);

  const totalVisitors = await getVisitorCount();

  const client = getSupabaseServerClient();
  if (!client) {
    return {
      totalExhibits,
      totalYears,
      totalMemories: 0,
      totalVisitors
    };
  }

  const { count } = await client
    .from("community_memories")
    .select("id", { count: "exact", head: true })
    .eq("flagged", false);

  return {
    totalExhibits,
    totalYears,
    totalMemories: count || 0,
    totalVisitors
  };
}

export function getPagedExhibits(exhibits, page = 1, pageSize = 20) {
  const safePage = Number.isFinite(page) ? Math.max(1, page) : 1;
  const totalPages = Math.max(1, Math.ceil(exhibits.length / pageSize));
  const pageStart = (safePage - 1) * pageSize;

  return {
    page: safePage,
    totalPages,
    items: exhibits.slice(pageStart, pageStart + pageSize)
  };
}

export function filterExhibits(exhibits, query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) {
    return exhibits;
  }

  return exhibits.filter((item) => {
    return (
      String(item.name || "").toLowerCase().includes(q) ||
      String(item.short_description || "").toLowerCase().includes(q) ||
      String(item.full_story || "").toLowerCase().includes(q) ||
      String(item.category || "").toLowerCase().includes(q)
    );
  });
}

export function getConnectionEdges(exhibits) {
  const byName = new Set(exhibits.map((item) => item.name));
  const edges = [];

  exhibits.forEach((item) => {
    (item.competitors || []).forEach((name) => {
      if (byName.has(name)) {
        edges.push({ from: item.name, to: name, type: "competed" });
      }
    });
    (item.inspired_by || []).forEach((name) => {
      if (byName.has(name)) {
        edges.push({ from: item.name, to: name, type: "inspired" });
      }
    });
    if (item.acquired_by) {
      edges.push({ from: item.name, to: item.acquired_by, type: "acquired" });
    }
  });

  return edges;
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

export async function getRecentlyAdded(limit = 4) {
  const exhibits = await getAllExhibits();
  return exhibits.slice(0, limit);
}

export async function getMostRemembered(limit = 4) {
  const client = getSupabaseServerClient();
  if (!client) {
    return (await getAllExhibits()).slice(0, limit);
  }

  const { data } = await client
    .from("community_memories")
    .select("exhibit_id")
    .eq("flagged", false);

  if (!data?.length) {
    return (await getAllExhibits()).slice(0, limit);
  }

  const counts = data.reduce((acc, item) => {
    const id = item.exhibit_id;
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const exhibits = await getAllExhibits();
  return exhibits
    .map((item) => ({ ...item, memoryCount: counts[item.id] || 0 }))
    .sort((a, b) => b.memoryCount - a.memoryCount)
    .slice(0, limit);
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
    .select("id,handle,memory,decade_tag,upvotes,created_at")
    .eq("exhibit_id", exhibitId)
    .eq("flagged", false)
    .order("upvotes", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(30);

  return data || [];
}
