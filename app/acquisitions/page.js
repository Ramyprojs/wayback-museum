export const metadata = { title: "Acquisition Graveyard :: Wayback Museum" };

const chains = [
  { site: "GeoCities", chain: "Yahoo -> shutdown (2009)", note: "Massive user page deletion." },
  { site: "Delicious", chain: "Yahoo -> AVOS -> multiple resales", note: "Identity diluted after ownership churn." },
  { site: "Tumblr", chain: "Yahoo -> Verizon -> Automattic", note: "Policy changes and strategic drift." },
  { site: "MySpace", chain: "News Corp -> Specific Media -> Time Inc", note: "Social dominance never recovered." },
  { site: "Vine", chain: "Twitter -> shutdown", note: "Cultural giant, product sunset." },
  { site: "Jaiku", chain: "Google -> open sourced -> discontinued", note: "Early microblogging trailblazer." }
];

export default function AcquisitionsPage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-pink blink-cursor">Acquisition Graveyard</h1>
        <p className="mt-3 text-3xl text-retro-electric">A murder-board of beloved services consumed by bigger platforms.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {chains.map((item) => (
          <article key={item.site} className="retro-panel p-3">
            <p className="font-pixel text-[10px] text-retro-yellow">{item.site}</p>
            <p className="mt-2 text-2xl text-retro-lime">{item.chain}</p>
            <p className="mt-2 text-xl text-[#dff7ff]">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
