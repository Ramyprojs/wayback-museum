import { createClient } from "@supabase/supabase-js";
import { fallbackExhibits } from "../data/exhibits.js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  process.exit(1);
}

const supabase = createClient(url, key, { auth: { persistSession: false } });

const required = [
  "GeoCities",
  "Napster",
  "AltaVista",
  "Ask Jeeves",
  "MySpace",
  "Friendster",
  "Neopets",
  "Homestar Runner",
  "Newgrounds",
  "Xanga",
  "LiveJournal",
  "Bolt.com",
  "iVillage",
  "Excite",
  "Lycos",
  "TheGlobe.com",
  "Deja News",
  "MP3.com",
  "Kazaa",
  "Angelfire"
];

const requiredRows = required
  .map((name) => fallbackExhibits.find((item) => item.name === name))
  .filter(Boolean);

if (requiredRows.length < 20) {
  console.error("Missing required exhibits in dataset.");
  process.exit(1);
}

const { error } = await supabase.from("exhibits").upsert(requiredRows, { onConflict: "slug" });

if (error) {
  console.error("Seed failed:", error.message);
  process.exit(1);
}

console.log(`Seed completed. Upserted ${requiredRows.length} required exhibits.`);
