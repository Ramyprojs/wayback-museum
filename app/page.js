import Link from "next/link";
import { BootIntro } from "@/components/boot-intro";
import { ExhibitCard } from "@/components/exhibit-card";
import { RandomPortalButton } from "@/components/random-portal-button";
import { marqueeSites } from "@/data/exhibits";
import { getFeaturedExhibits } from "@/lib/repository";

export const metadata = {
  title: "Home :: Wayback Museum"
};

export default async function HomePage() {
  const featured = await getFeaturedExhibits(6);

  return (
    <>
      <BootIntro />
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
          {featured.map((item) => (
            <ExhibitCard key={item.slug} exhibit={item} />
          ))}
        </div>
      </section>

      <section className="retro-panel mt-4 overflow-hidden p-2">
        <div className="marquee-track gap-10 whitespace-nowrap text-2xl text-retro-electric">
          {marqueeSites.concat(marqueeSites).map((name, index) => (
            <span key={`${name}-${index}`}>+++ {name} +++</span>
          ))}
        </div>
      </section>
    </>
  );
}
