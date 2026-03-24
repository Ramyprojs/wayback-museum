export const metadata = { title: "Dot-Com Graveyard :: Wayback Museum" };

const graves = [
  { name: "Webvan", years: "1996-2001", stat: "Burned around $1.2B before collapse", cause: "Ran Out of Money" },
  { name: "Pets.com", years: "1998-2000", stat: "Super Bowl ad blitz, shutdown months later", cause: "Dot-Com Crash" },
  { name: "Kozmo.com", years: "1998-2001", stat: "Unsustainable free 1-hour delivery model", cause: "Ran Out of Money" },
  { name: "Boo.com", years: "1998-2000", stat: "Over $100M spent in under 2 years", cause: "Dot-Com Crash" },
  { name: "eToys", years: "1997-2001", stat: "High growth then bankruptcy in crash era", cause: "Dot-Com Crash" },
  { name: "TheGlobe.com", years: "1995-2008", stat: "Record IPO spike, long decline", cause: "Better Competitor Arrived" }
];

export default function GraveyardPage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-pink blink-cursor">The Dot-Com Graveyard</h1>
        <p className="mt-3 text-3xl text-retro-electric">A memorial to the crash-era giants that rose fast and vanished faster.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {graves.map((grave) => (
          <article key={grave.name} className="retro-panel p-4 text-center">
            <div className="mx-auto h-24 w-24 rounded-t-[40px] border-2 border-slate-200 bg-[#0a1239]" />
            <p className="mt-2 font-pixel text-[10px] text-retro-yellow">{grave.name}</p>
            <p className="text-xl text-retro-lime">{grave.years}</p>
            <p className="mt-2 text-xl text-[#def6ff]">{grave.stat}</p>
            <p className="mt-1 text-lg text-retro-pink">Cause: {grave.cause}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
