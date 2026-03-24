"use client";

import { useEffect, useState } from "react";

export function FooterBar() {
  const [hits, setHits] = useState(81245);

  useEffect(() => {
    const key = "wayback_museum_hits";
    const current = Number(localStorage.getItem(key) || "81245");
    const updated = current + 1;
    localStorage.setItem(key, String(updated));
    setHits(updated);
  }, []);

  return (
    <footer className="mx-auto mt-8 w-full max-w-[1200px] px-3 pb-4 sm:px-5">
      <div className="retro-panel flex flex-wrap items-center justify-between gap-3 px-4 py-3 text-lg">
        <div className="flex items-center gap-3">
          <span className="inline-block h-4 w-4 animate-spin-slow rounded-full border-2 border-retro-pink border-t-transparent" />
          <span>This site is best viewed in Netscape Navigator 4.7</span>
        </div>
        <div className="font-pixel text-[10px] text-retro-yellow">HITS: {hits.toLocaleString()}</div>
      </div>
    </footer>
  );
}
