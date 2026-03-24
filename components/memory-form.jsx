"use client";

import { useState } from "react";

export function MemoryForm({ slug }) {
  const [handle, setHandle] = useState("");
  const [memory, setMemory] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (memory.trim().length < 8) {
      setStatus("Memory is too short.");
      return;
    }

    setBusy(true);
    setStatus("Posting memory...");

    try {
      const res = await fetch("/api/memories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, handle, memory })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit memory.");
      }
      setMemory("");
      setHandle("");
      setStatus("Memory saved. Reload to see it in the timeline.");
    } catch (error) {
      setStatus(error.message || "Failed to submit memory.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="retro-panel mt-3 space-y-2 p-3" onSubmit={submit}>
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
      <button disabled={busy} className="retro-button" type="submit">
        {busy ? "Saving..." : "Submit Memory"}
      </button>
      <p className="text-xl text-retro-lime">{status}</p>
    </form>
  );
}
