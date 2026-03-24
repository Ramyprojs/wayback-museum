"use client";

import { SoundEngine } from "@/lib/soundEngine";

export function GraveyardBoard({ graves }) {
  return (
    <div className="graveyard-content grid gap-3 md:grid-cols-3">
      {graves.map((grave, index) => (
        <article
          key={grave.name}
          className="tombstone-card retro-panel p-4 text-center"
          onMouseEnter={() => {
            SoundEngine.play("hover", { volume: 0.3 + (index % 3) * 0.12 });
            SoundEngine.play("explosion", { volume: 0.12 });
          }}
        >
          <span className="skull-pop" aria-hidden="true" />
          <div className="mx-auto h-24 w-24 rounded-t-[40px] border-2 border-slate-200 bg-[#0a1239]" />
          <p className="mt-2 font-pixel text-[10px] text-retro-yellow">{grave.name}</p>
          <p className="text-xl text-retro-lime">{grave.years}</p>
          <p className="mt-2 text-xl text-[#def6ff]">{grave.stat}</p>
          <p className="mt-1 text-lg text-retro-pink">Cause: {grave.cause}</p>
        </article>
      ))}
    </div>
  );
}
