export const metadata = { title: "Internet Archaeology :: Wayback Museum" };

const artifacts = [
  "Web rings and circular discovery links",
  "MIDI background music on personal pages",
  "Under Construction GIF banners",
  "Frames-based layouts and nested navigation",
  "Guestbooks and hit counters",
  "Best viewed in IE/Netscape badges",
  "Flash intro splash pages",
  "Dancing baby and early viral media",
  "AOL free trial CD culture"
];

export default function ArchaeologyPage() {
  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-yellow blink-cursor">Internet Archaeology</h1>
        <p className="mt-3 text-3xl text-retro-electric">The strange artifacts that defined everyday browsing culture.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {artifacts.map((item) => (
          <article key={item} className="retro-panel p-3">
            <p className="text-2xl text-[#dff7ff]">{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
