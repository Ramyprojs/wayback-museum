"use client";

import { useEffect } from "react";
import { useState } from "react";
import { SoundEngine } from "@/lib/soundEngine";

export function MemoryForm({ slug }) {
  const [handle, setHandle] = useState("");
  const [memory, setMemory] = useState("");
  const [decadeTag, setDecadeTag] = useState("2000s");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!status || busy || status === "Posting memory...") {
      return;
    }

    const timer = setTimeout(() => setStatus(""), 4200);
    return () => clearTimeout(timer);
  }, [status, busy]);

  async function submit(e) {
    e.preventDefault();
    if (memory.trim().length < 8) {
      setStatus("Memory is too short.");
      SoundEngine.play("error");
      return;
    }

    setBusy(true);
    setStatus("Posting memory...");

    try {
      const res = await fetch("/api/memories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, handle, memory, decadeTag })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit memory.");
      }
      setMemory("");
      setHandle("");
      setStatus("Memory saved. Reload to see it in the timeline.");
      SoundEngine.play("success");
    } catch (error) {
      setStatus(error.message || "Failed to submit memory.");
      SoundEngine.play("error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="retro-panel mt-3 space-y-3 sm:space-y-2 p-3" onSubmit={submit}>
      <p className="font-pixel text-[10px] text-retro-yellow">Share your memory</p>
      <input
        value={handle}
        onChange={(e) => setHandle(e.target.value)}
        placeholder="Handle (optional)"
        maxLength={60}
        className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
      />
      <textarea
        value={memory}
        onChange={(e) => setMemory(e.target.value)}
        maxLength={500}
        rows={4}
        placeholder="I used this site after school and waited forever for images to load..."
        className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
      />
      <div className="flex flex-wrap items-center gap-2">
        <select
          value={decadeTag}
          onChange={(e) => setDecadeTag(e.target.value)}
          className="border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-xl"
        >
          <option value="1990s">I was there in 1990s</option>
          <option value="2000s">I was there in 2000s</option>
          <option value="2010s">I was there in 2010s</option>
          <option value="2020s">I discovered it later</option>
        </select>
        <p className="text-xl text-retro-electric">{memory.length}/500</p>
      </div>
      <button disabled={busy} className="retro-button" type="submit">
        {busy ? "Saving..." : "Submit Memory"}
      </button>
      <p className="text-xl text-retro-lime">{status}</p>
    </form>
  );
}
