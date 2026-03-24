"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { triggerPixelExplosion } from "@/lib/animations";
import { SoundEngine } from "@/lib/soundEngine";
import { RetroImage } from "@/components/retro-image";

const statusMap = {
  gone: "Fully Gone",
  archived: "Partially Archived",
  reborn: "Reborn/Successor Exists"
};

export function ExhibitCard({ exhibit, index = 0 }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) {
      return;
    }

    node.classList.add("gb-card");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }
        node.style.setProperty("--gb-delay", `${index * 80}ms`);
        node.classList.add("in-view");
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function saveToGraveyard(event) {
    const key = "wayback_saved_graveyard";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    const next = Array.from(new Set([exhibit.slug, ...prev])).slice(0, 80);
    localStorage.setItem(key, JSON.stringify(next));
    SoundEngine.play("coin");
    triggerPixelExplosion(event.currentTarget);
  }

  return (
    <article ref={cardRef} className="retro-panel group relative overflow-hidden transition duration-200 hover:brightness-110 hover:saturate-150">
      <Link href={`/archive/${exhibit.slug}`} className="block">
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
        <p className="text-lg text-retro-lime">{exhibit.readingMinutes || 3} min read</p>
      </div>
      </Link>
      <div className="px-3 pb-3">
        <button className="retro-button" onClick={saveToGraveyard}>
          Save to My Graveyard
        </button>
      </div>
    </article>
  );
}
