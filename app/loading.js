"use client";

import { useEffect, useMemo, useState } from "react";
import { SoundEngine } from "@/lib/soundEngine";

const messages = ["LOADING CARTRIDGE...", "READING SAVE DATA...", "INITIALIZING..."];

export default function Loading() {
  const [step, setStep] = useState(0);
  const cells = useMemo(() => Array.from({ length: 24 }, (_, i) => i), []);

  useEffect(() => {
    SoundEngine.play("dial_up", { volume: 0.35 });
    const timer = window.setInterval(() => {
      setStep((value) => (value + 1) % messages.length);
    }, 700);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="retro-panel w-full max-w-xl p-5 text-center">
        <h2 className="font-pixel text-xs text-retro-yellow">Connecting To Wayback Museum...</h2>
        <div className="gb-loading mt-4">
          <div className="gb-loading__bar">
            {cells.map((cell) => (
              <span key={cell} className={`gb-loading__cell ${cell <= step * 8 + 7 ? "on" : ""}`} style={{ "--i": cell }} />
            ))}
          </div>
          <p className="mt-3 text-2xl text-retro-electric">{messages[step]}</p>
        </div>
      </div>
    </div>
  );
}
