"use client";

import { useEffect, useState } from "react";
import { SoundEngine } from "@/lib/soundEngine";

export function BootIntro() {
  const [hide, setHide] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const seen = sessionStorage.getItem("wayback_boot_seen");
    if (seen) {
      setHide(true);
      return;
    }

    const timers = [
      window.setTimeout(() => setStage(1), 700),
      window.setTimeout(() => {
        setStage(2);
        SoundEngine.play("dial_up", { volume: 0.45 });
      }, 1800),
      window.setTimeout(() => {
        setStage(3);
        SoundEngine.play("boot");
      }, 3500),
      window.setTimeout(() => {
        sessionStorage.setItem("wayback_boot_seen", "1");
        setHide(true);
      }, 4800)
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  if (hide) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] bg-black p-4 text-retro-lime">
      <div className="retro-panel mx-auto mt-14 max-w-3xl p-5">
        <p className="font-pixel text-[10px] text-retro-yellow">WAYBACK MUSEUM BIOS v1.99</p>
        <div className="mt-6 flex justify-center">
          <div className="h-20 w-40 border border-slate-200 bg-[#050910] p-2">
            <div className={`h-full w-full bg-[radial-gradient(circle_at_center,#36d1ff_8%,#14224f_70%)] ${stage >= 1 ? "animate-pulse" : "opacity-40"}`} />
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div
            className="h-[2px] bg-white transition-all duration-700"
            style={{ width: stage >= 2 ? "220px" : "6px", opacity: stage >= 1 ? 1 : 0.2 }}
          />
        </div>
        {stage >= 1 ? <p className="mt-4 text-2xl">Drawing Game Boy logo pixels...</p> : null}
        {stage >= 2 ? <p className="text-2xl">Dialing modem and syncing cartridge...</p> : null}
        {stage >= 3 ? (
          <>
            <p className="text-2xl text-retro-yellow">BOOTED SUCCESSFULLY</p>
            <p className="text-2xl">Loading dead websites archive...</p>
          </>
        ) : null}
        <div className="mt-4 h-5 border border-slate-200 p-1">
          <div
            className="h-full bg-gradient-to-r from-retro-electric via-retro-pink to-retro-lime transition-all duration-300"
            style={{ width: `${Math.min(100, stage * 33 + 1)}%` }}
          />
        </div>
        <button
          className="retro-button mt-5"
          onClick={() => {
            sessionStorage.setItem("wayback_boot_seen", "1");
            setHide(true);
          }}
        >
          Skip Intro
        </button>
      </div>
    </div>
  );
}
