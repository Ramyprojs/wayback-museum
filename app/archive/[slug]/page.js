import Link from "next/link";
import { notFound } from "next/navigation";
import { MemoryForm } from "@/components/memory-form";
import { RetroImage } from "@/components/retro-image";
import { fallbackExhibits } from "@/data/exhibits";
import { getExhibitBySlug, getExhibitMemories } from "@/lib/repository";

const statusLabels = {
  gone: "Gone Forever",
  archived: "Lives in the Wayback Machine",
  reborn: "Reborn As..."
};

export async function generateMetadata({ params }) {
  const exhibit = await getExhibitBySlug(params.slug);
  if (!exhibit) {
    return { title: "Not Found :: Wayback Museum" };
  }
  return {
    title: `${exhibit.name} :: Wayback Museum`
  };
}

export async function generateStaticParams() {
  return fallbackExhibits.map((exhibit) => ({ slug: exhibit.slug }));
}

export default async function ExhibitPage({ params }) {
  const exhibit = await getExhibitBySlug(params.slug);

  if (!exhibit) {
    notFound();
  }

  const memories = await getExhibitMemories(exhibit.id);

  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel overflow-hidden">
        <div className="h-64 w-full border-b-2 border-slate-200 bg-[#0a1236] sm:h-80">
          <RetroImage src={exhibit.thumbnail_url} alt={`${exhibit.name} screenshot`} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-3 p-4">
          <h1 className="font-pixel text-sm text-retro-yellow blink-cursor">{exhibit.name}</h1>
          <p className="text-3xl text-retro-electric">{exhibit.yearsLabel}</p>
          <div className="flex flex-wrap gap-2">
            <span className="retro-panel px-2 py-1 text-xl text-retro-lime">{exhibit.category}</span>
            <span className="retro-panel px-2 py-1 text-xl text-retro-pink">{statusLabels[exhibit.status]}</span>
          </div>
          <blockquote className="border-l-4 border-retro-pink pl-3 text-3xl text-[#ddf5ff]">
            "{exhibit.short_description}"
          </blockquote>
        </div>
      </div>

      <article className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">The Story</h2>
        <div className="mt-3 space-y-4 text-[1.65rem] leading-snug text-[#d4eeff]">
          {String(exhibit.full_story)
            .split("\n\n")
            .map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
        </div>
      </article>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">By The Numbers</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Peak Monthly Visitors" value={exhibit.peak_visitors} />
          <Stat label="Founding Year" value={String(exhibit.years_active_start)} />
          <Stat label="Year Shut Down" value={exhibit.years_active_end ? String(exhibit.years_active_end) : "Still online"} />
          <Stat label="Country of Origin" value={exhibit.country_origin} />
        </div>
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">What Made It Special</h2>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.65rem]">
          {(exhibit.what_made_it_special || []).map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Where It Went</h2>
        <p className="mt-3 text-3xl text-retro-lime">{statusLabels[exhibit.status]}</p>
        {exhibit.status === "archived" && exhibit.wayback_url ? (
          <Link className="mt-2 inline-block text-2xl text-retro-electric underline" href={exhibit.wayback_url} target="_blank">
            Open in Wayback Machine
          </Link>
        ) : null}
        {exhibit.status === "reborn" && exhibit.successor_url ? (
          <Link className="mt-2 inline-block text-2xl text-retro-electric underline" href={exhibit.successor_url} target="_blank">
            Visit successor site
          </Link>
        ) : null}
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Community Memories</h2>
        <div className="mt-3 space-y-2">
          {memories.length ? (
            memories.map((entry) => (
              <article className="retro-panel p-3" key={entry.id}>
                <p className="text-[1.65rem] leading-snug text-[#dff6ff]">{entry.memory}</p>
                <p className="mt-1 text-xl text-retro-lime">
                  {entry.handle || "anonymous"} :: {new Date(entry.created_at).toLocaleDateString()}
                </p>
              </article>
            ))
          ) : (
            <p className="text-2xl text-[#ddf2ff]">No memories posted yet. Be the first witness.</p>
          )}
        </div>
        <MemoryForm slug={exhibit.slug} />
      </section>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="retro-panel p-3">
      <p className="font-pixel text-[9px] text-retro-pink">{label}</p>
      <p className="mt-2 text-2xl text-retro-electric">{value}</p>
    </div>
  );
}
