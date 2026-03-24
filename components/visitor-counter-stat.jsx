"use client";

import { useEffect, useState } from "react";

export function VisitorCounterStat({ initialCount = 0 }) {
  const [count, setCount] = useState(Number(initialCount) || 0);

  useEffect(() => {
    let cancelled = false;

    async function syncVisitorCount() {
      try {
        const alreadyCounted = sessionStorage.getItem("wayback_visit_counted") === "1";
        const method = alreadyCounted ? "GET" : "POST";
        const response = await fetch("/api/visitors", {
          method,
          cache: "no-store"
        });
        const data = await response.json();

        if (!cancelled && typeof data?.totalVisitors === "number") {
          setCount(data.totalVisitors);
        }

        if (!alreadyCounted) {
          sessionStorage.setItem("wayback_visit_counted", "1");
        }
      } catch (_error) {
        // Keep initial server value if request fails.
      }
    }

    syncVisitorCount();

    return () => {
      cancelled = true;
    };
  }, []);

  return <Stat label="Visitors Counted" value={count.toLocaleString()} />;
}

function Stat({ label, value }) {
  return (
    <article className="retro-panel p-2">
      <p className="font-pixel text-[9px] text-retro-yellow">{label}</p>
      <p className="text-2xl text-retro-electric">{value}</p>
    </article>
  );
}
