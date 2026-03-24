import { ArchiveBrowser } from "@/components/archive-browser";
import { getAllExhibits } from "@/lib/repository";

export const metadata = {
  title: "Archive :: Wayback Museum"
};

export default async function ArchivePage() {
  const exhibits = await getAllExhibits();

  return (
    <section className="space-y-4 pt-4">
      <div className="retro-panel p-4">
        <h1 className="font-pixel text-xs text-retro-yellow blink-cursor">Archive Browser</h1>
        <p className="mt-3 text-3xl text-retro-electric">
          Search by name, filter by era and category, and inspect the old web one portal at a time.
        </p>
      </div>
      <ArchiveBrowser exhibits={exhibits} />
    </section>
  );
}
