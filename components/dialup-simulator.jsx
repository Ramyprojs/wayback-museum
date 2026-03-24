"use client";

import { useMemo, useState } from "react";
import { SoundEngine } from "@/lib/soundEngine";

export function DialupSimulator() {
  const [url, setUrl] = useState("https://example.com");
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);

  const lines = useMemo(
    () => [
      "Resolving host...",
      "Dialing modem...",
      "Handshake at 56k...",
      "Downloading HTML...",
      "Loading table layout...",
      "Loading inline gifs...",
      "Rendering text...",
      "Done."
    ],
    []
  );

  async function runSimulation() {
    setRunning(true);
    setProgress(0);
    setLineIndex(0);
    SoundEngine.play("dial_up", { volume: 0.5 });

    for (let i = 0; i < lines.length; i += 1) {
      setLineIndex(i);
      setProgress(Math.round(((i + 1) / lines.length) * 100));
      SoundEngine.play("type", { volume: 0.4 });
      await new Promise((resolve) => setTimeout(resolve, 900));
    }

    setRunning(false);
  }

  const estimatedSeconds = Math.max(8, Math.round((url.length * 120) / 56));

  return (
    <section className="retro-panel p-4">
      <p className="font-pixel text-[10px] text-retro-yellow">Dial-Up Speed Test</p>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="mt-2 w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
      />
      <p className="mt-2 text-xl text-retro-electric">Estimated 56k load time: ~{estimatedSeconds} seconds</p>
      <button className="retro-button mt-2" disabled={running} onClick={runSimulation}>
        {running ? "Simulating..." : "Run 56k Simulation"}
      </button>
      <div className="mt-3 h-5 border-2 border-slate-200 p-1">
        <div className="h-full bg-gradient-to-r from-retro-pink to-retro-lime" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 text-2xl text-[#dff7ff]">{lines[lineIndex]}</p>
    </section>
  );
}
