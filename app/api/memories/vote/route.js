import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request) {
  const body = await request.json();
  const memoryId = String(body.memoryId || "").trim();

  if (!memoryId) {
    return NextResponse.json({ error: "Invalid memory id." }, { status: 400 });
  }

  const client = getSupabaseServerClient();
  if (!client) {
    return NextResponse.json({ error: "Supabase is not configured." }, { status: 500 });
  }

  const { data: row } = await client
    .from("community_memories")
    .select("id,upvotes")
    .eq("id", memoryId)
    .maybeSingle();

  if (!row) {
    return NextResponse.json({ error: "Memory not found." }, { status: 404 });
  }

  const nextUpvotes = Number(row.upvotes || 0) + 1;
  const { error } = await client.from("community_memories").update({ upvotes: nextUpvotes }).eq("id", memoryId);

  if (error) {
    return NextResponse.json({ error: "Could not vote." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, upvotes: nextUpvotes });
}
