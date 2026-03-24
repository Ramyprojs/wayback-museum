"use client";

import { useState } from "react";

export function MemoryList({ initialMemories }) {
  const [items, setItems] = useState(initialMemories || []);

  async function vote(memoryId) {
    const snapshot = [...items];
    setItems((prev) =>
      prev.map((entry) =>
        entry.id === memoryId ? { ...entry, upvotes: Number(entry.upvotes || 0) + 1 } : entry
      )
    );

    try {
      const res = await fetch("/api/memories/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memoryId })
      });
      if (!res.ok) {
        throw new Error("Vote failed");
      }
    } catch (_error) {
      setItems(snapshot);
    }
  }

  if (!items.length) {
    return <p className="text-2xl text-[#ddf2ff]">No memories posted yet. Be the first witness.</p>;
  }

  return (
    <div className="mt-3 space-y-2">
      {items.map((entry) => (
        <article className="retro-panel p-3" key={entry.id}>
          <p className="text-[1.65rem] leading-snug text-[#dff6ff]">{entry.memory}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xl text-retro-lime">
            <span>{entry.handle || "anonymous"}</span>
            <span>::</span>
            <span>{new Date(entry.created_at).toLocaleDateString()}</span>
            {entry.decade_tag ? (
              <span className="retro-panel px-2 py-0.5 text-retro-pink">{entry.decade_tag}</span>
            ) : null}
            <button className="retro-button" onClick={() => vote(entry.id)}>
              Upvote ({Number(entry.upvotes || 0)})
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
