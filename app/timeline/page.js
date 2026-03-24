export const metadata = { title: "Era Timelines :: Wayback Museum" };

const eras = [
  { title: "The Wild West", years: "1991-1995", mood: "Experimental, academic, and chaotic", text: "The web was mostly hand-built pages, directories, and frontier protocols." },
  { title: "Gold Rush", years: "1996-1999", mood: "Explosive growth and portal wars", text: "Search engines, homepages, and early communities became mainstream consumer destinations." },
  { title: "The Bubble", years: "1999-2000", mood: "Infinite optimism and impossible valuations", text: "Capital flooded weak business models, and growth forecasts detached from reality." },
  { title: "The Crash", years: "2000-2002", mood: "Mass shutdowns and layoffs", text: "Dozens of household dot-com names disappeared in a short, brutal correction." },
  { title: "The Rebuilding", years: "2002-2004", mood: "Focus on sustainability", text: "Survivors rebuilt with better infrastructure, clearer monetization, and stronger UX." },
  { title: "Web 2.0 Dawn", years: "2004-2007", mood: "Social identity and user-generated media", text: "Feeds, profiles, tags, and online video redefined how people spent time online." }
];

export default function TimelinePage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-yellow blink-cursor">Internet Era Timeline</h1>
      </div>
      <div className="retro-panel overflow-auto p-4">
        <div className="flex min-w-[980px] gap-3">
          {eras.map((era) => (
            <article key={era.title} className="retro-panel w-[280px] p-3">
              <p className="font-pixel text-[9px] text-retro-pink">{era.years}</p>
              <p className="mt-2 text-2xl text-retro-lime">{era.title}</p>
              <p className="mt-2 text-xl text-retro-electric">Mood: {era.mood}</p>
              <p className="mt-2 text-xl text-[#dff7ff]">{era.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
