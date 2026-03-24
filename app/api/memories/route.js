import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request) {
  const body = await request.json();
  const slug = String(body.slug || "").trim();
  const memory = String(body.memory || "").trim();
  const handle = String(body.handle || "").trim();

  if (!slug || memory.length < 8 || memory.length > 500) {
    return NextResponse.json({ error: "Invalid memory payload." }, { status: 400 });
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return NextResponse.json({ error: "Supabase is not configured." }, { status: 500 });
  }

  const { data: exhibit } = await client.from("exhibits").select("id").eq("slug", slug).maybeSingle();
  if (!exhibit) {
    return NextResponse.json({ error: "Exhibit not found." }, { status: 404 });
  }

  const { error } = await client.from("community_memories").insert({
    exhibit_id: exhibit.id,
    handle: handle || null,
    memory,
    flagged: false
  });

  if (error) {
    return NextResponse.json({ error: "Failed to save memory." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
