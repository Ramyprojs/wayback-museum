import Link from "next/link";
import { BootIntro } from "@/components/boot-intro";
import { ExhibitCard } from "@/components/exhibit-card";
import { RandomPortalButton } from "@/components/random-portal-button";
import { VisitorCounterStat } from "@/components/visitor-counter-stat";
import { getTodayEvents } from "@/data/on-this-day";
import { marqueeSites } from "@/data/exhibits";
import { getFeaturedExhibits, getHomepageStats, getMostRemembered, getRecentlyAdded } from "@/lib/repository";

export const metadata = {
  title: "Home :: Wayback Museum"
};

export default async function HomePage() {
  const featured = await getFeaturedExhibits(6);
  const stats = await getHomepageStats();
  const recentlyAdded = await getRecentlyAdded(4);
  const mostRemembered = await getMostRemembered(4);
  const todayEvents = getTodayEvents();

  return (
    <>
      <BootIntro />
      <section className="retro-panel stat-grid mt-4 grid gap-2 p-3 sm:grid-cols-4">
        <Stat label="Total Exhibits" value={String(stats.totalExhibits)} />
        <Stat label="Years Covered" value={String(stats.totalYears)} />
        <Stat label="Community Memories" value={String(stats.totalMemories)} />
        <VisitorCounterStat initialCount={stats.totalVisitors} />
      </section>

      <section className="retro-panel mt-4 p-4 sm:p-6">
        <p className="font-pixel text-[10px] text-retro-lime">BOOTED SUCCESSFULLY</p>
        <h1 className="mt-3 font-pixel text-sm text-retro-yellow blink-cursor">A Museum for the Internet That Was</h1>
        <p className="mt-4 text-3xl leading-tight text-[#daf8ff]">
          Dead Websites Museum preserves the legendary portals, personal pages, and communities that once defined the web.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/archive" className="retro-button">
            Enter Archive
          </Link>
          <RandomPortalButton slugs={featured.map((item) => item.slug)} />
        </div>
      </section>

      <section className="mt-4">
        <h2 className="font-pixel text-[10px] text-retro-pink">Featured Exhibits</h2>
        <div className="museum-grid mt-3">
          {featured.map((item, idx) => (
            <ExhibitCard key={item.slug} exhibit={item} index={idx} />
          ))}
        </div>
      </section>

      <section className="retro-panel mt-4 p-4">
        <h2 className="font-pixel text-[10px] text-retro-pink">On This Day in Internet History</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6 text-2xl text-[#dff7ff]">
          {todayEvents.map((event, idx) => (
            <li key={`${event}-${idx}`}>{event}</li>
          ))}
        </ul>
      </section>

      <section className="mt-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Recently Added to Archive</h2>
        <div className="museum-grid mt-3">
          {recentlyAdded.map((item, idx) => (
            <ExhibitCard key={`recent-${item.slug}`} exhibit={item} index={idx} />
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h2 className="font-pixel text-[10px] text-retro-lime">Most Remembered</h2>
        <div className="museum-grid mt-3">
          {mostRemembered.map((item, idx) => (
            <ExhibitCard key={`memory-${item.slug}`} exhibit={item} index={idx} />
          ))}
        </div>
      </section>

      <section className="retro-panel mt-4 overflow-hidden p-2">
        <div className="marquee-track gap-10 whitespace-nowrap text-2xl text-retro-electric">
          {marqueeSites.concat(marqueeSites).map((name, index) => (
            <span key={`${name}-${index}`}>+++ {name} :: internet legend remembered here +++</span>
          ))}
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <article className="retro-panel p-2">
      <p className="font-pixel text-[9px] text-retro-yellow">{label}</p>
      <p className="text-2xl text-retro-electric">{value}</p>
    </article>
  );
}
