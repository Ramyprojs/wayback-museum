import Link from "next/link";
import { notFound } from "next/navigation";
import { MemoryForm } from "@/components/memory-form";
import { MemoryList } from "@/components/memory-list";
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
    title: `${exhibit.name} :: Wayback Museum`,
    description: exhibit.short_description,
    openGraph: {
      title: `${exhibit.name} :: Wayback Museum`,
      description: `${exhibit.short_description} (${exhibit.years_active_start} - ${
        exhibit.years_active_end || "Present"
      })`,
      type: "article"
    }
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
  const timelineEvents = Array.isArray(exhibit.timeline_events) ? exhibit.timeline_events : [];
  const founders = Array.isArray(exhibit.founders) ? exhibit.founders : [];
  const pressClippings = Array.isArray(exhibit.press_clippings) ? exhibit.press_clippings : [];
  const snapshots = Array.isArray(exhibit.snapshot_links) ? exhibit.snapshot_links : [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HistoricalEvent",
    name: exhibit.name,
    description: exhibit.short_description,
    startDate: String(exhibit.years_active_start),
    endDate: exhibit.years_active_end ? String(exhibit.years_active_end) : undefined,
    url: exhibit.url_original
  };

  return (
    <section className="space-y-4 pt-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
          <Stat label="Peak Registered Users" value={exhibit.peak_registered_users || "Unknown"} />
          <Stat label="Year-over-Year Growth" value={exhibit.yoy_growth || "Unknown"} />
          <Stat label="Peak Valuation" value={exhibit.valuation_peak || "Unknown"} />
          <Stat label="Acquisition Price" value={exhibit.acquisition_price || "Not acquired"} />
          <Stat label="Employees at Peak" value={exhibit.employees_peak || "Unknown"} />
          <Stat label="Bandwidth at Peak" value={exhibit.bandwidth_peak || "Unknown"} />
          <Stat label="Founding Year" value={String(exhibit.years_active_start)} />
          <Stat label="Year Shut Down" value={exhibit.years_active_end ? String(exhibit.years_active_end) : "Still online"} />
          <Stat label="Country of Origin" value={exhibit.country_origin} />
          <Stat label="Countries Served" value={exhibit.countries_served || "Global"} />
        </div>
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Timeline</h2>
        <div className="mt-3 space-y-2 border-l-4 border-retro-electric pl-4">
          {timelineEvents.length ? (
            timelineEvents.map((event, idx) => (
              <article key={`${event.date}-${idx}`} className="relative retro-panel p-2">
                <span className="absolute -left-[18px] top-3 h-2 w-2 rounded-full bg-retro-pink" />
                <p className="font-pixel text-[9px] text-retro-yellow">{event.date}</p>
                <p className="text-2xl text-[#dff7ff]">{event.title}</p>
              </article>
            ))
          ) : (
            <p className="text-2xl text-[#dff7ff]">Timeline entries are being cataloged.</p>
          )}
        </div>
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Founders</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {founders.length ? (
            founders.map((founder, idx) => (
              <article key={`${founder.name}-${idx}`} className="retro-panel p-3">
                <div className="flex h-24 w-full items-center justify-center border-2 border-dashed border-retro-pink text-retro-pink">
                  Broken Photo :: {founder.name}
                </div>
                <p className="mt-2 text-2xl text-retro-electric">{founder.name}</p>
                <p className="text-xl text-[#dff7ff]">{founder.role}</p>
                <p className="text-xl text-[#dff7ff]">Before: {founder.before || "Unknown"}</p>
                <p className="text-xl text-[#dff7ff]">After: {founder.after || "Unknown"}</p>
                {founder.quote ? <blockquote className="mt-2 text-xl text-retro-lime">"{founder.quote}"</blockquote> : null}
              </article>
            ))
          ) : (
            <p className="text-2xl text-[#dff7ff]">Founder dossiers are being assembled.</p>
          )}
        </div>
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Press Clippings Wall</h2>
        <div className="mt-3 grid gap-3 bg-[repeating-linear-gradient(45deg,#4b2d14,#4b2d14_8px,#5e391b_8px,#5e391b_16px)] p-3 md:grid-cols-2">
          {pressClippings.length ? (
            pressClippings.map((clip, idx) => (
              <article
                key={`${clip.headline}-${idx}`}
                className="retro-panel bg-[#f3ecd2] p-3 text-[#2c2418]"
                style={{ transform: `rotate(${idx % 2 === 0 ? -2 : 2}deg)` }}
              >
                <p className="font-pixel text-[9px] text-[#4e3118]">{clip.publication} :: {clip.date}</p>
                <p className="mt-2 text-2xl">{clip.headline}</p>
              </article>
            ))
          ) : (
            <p className="text-2xl text-retro-yellow">No clippings pinned yet.</p>
          )}
        </div>
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Wayback Snapshot Viewer</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {snapshots.length ? (
            snapshots.map((shot, idx) => (
              <Link key={`${shot.year}-${idx}`} className="retro-button" href={shot.url} target="_blank">
                See it in {shot.year}
              </Link>
            ))
          ) : (
            <Link className="retro-button" href={exhibit.wayback_url || "https://web.archive.org/"} target="_blank">
              Browse snapshots
            </Link>
          )}
        </div>
      </section>

      <section className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Legacy & Influence</h2>
        <p className="mt-3 text-2xl text-[#dff7ff]">
          {exhibit.legacy_influence ||
            "This site helped define interaction patterns, business assumptions, and internet culture that modern platforms still echo."}
        </p>
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
        <MemoryList initialMemories={memories} />
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
