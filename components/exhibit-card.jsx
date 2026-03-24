import Link from "next/link";
import { RetroImage } from "@/components/retro-image";

const statusMap = {
  gone: "Fully Gone",
  archived: "Partially Archived",
  reborn: "Reborn/Successor Exists"
};

export function ExhibitCard({ exhibit }) {
  return (
    <Link
      href={`/archive/${exhibit.slug}`}
      className="retro-panel group overflow-hidden transition duration-200 hover:brightness-110 hover:saturate-150"
    >
      <div className="h-40 w-full border-b-2 border-slate-300 bg-[#071032]">
        <RetroImage src={exhibit.thumbnail_url} alt={`${exhibit.name} screenshot`} className="h-full w-full object-cover" />
      </div>
      <div className="space-y-2 p-3">
        <h3 className="font-pixel text-[10px] text-retro-yellow">{exhibit.name}</h3>
        <p className="text-lg text-retro-electric">{exhibit.yearsLabel}</p>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="retro-panel px-2 py-1 text-retro-pink">{exhibit.category}</span>
          <span className="retro-panel px-2 py-1 text-retro-lime">{statusMap[exhibit.status]}</span>
        </div>
        <p className="line-clamp-3 text-xl leading-tight text-[#d4ecff]">{exhibit.short_description}</p>
      </div>
    </Link>
  );
}
