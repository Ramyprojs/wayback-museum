export const metadata = { title: "Hall of Firsts :: Wayback Museum" };

const firsts = [
  { label: "First widely-clicked banner ad", date: "1994", detail: "AT&T's 'Have you ever clicked your mouse right here?' banner ran on HotWired." },
  { label: "First major social network", date: "1997", detail: "SixDegrees.com brought friend graphs into mainstream web usage." },
  { label: "First YouTube upload", date: "2005", detail: "Me at the zoo, uploaded by Jawed Karim on April 23, 2005." },
  { label: "First tweet", date: "2006", detail: "Jack Dorsey posted: just setting up my twttr." },
  { label: "First Wikipedia edit", date: "2001", detail: "Wikipedia opens with early edits in January 2001." },
  { label: "First Amazon order", date: "1995", detail: "The first known Amazon order was a science book in July 1995." }
];

export default function FirstsPage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-yellow blink-cursor">Hall of Firsts</h1>
        <p className="mt-3 text-3xl text-retro-electric">The moments that quietly rewired how the internet works.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {firsts.map((item) => (
          <article key={item.label} className="retro-panel p-3">
            <p className="font-pixel text-[10px] text-retro-pink">{item.date}</p>
            <p className="mt-2 text-2xl text-retro-lime">{item.label}</p>
            <p className="mt-2 text-2xl text-[#dff7ff]">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
