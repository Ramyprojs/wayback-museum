"use client";

import { useEffect, useState } from "react";

export function BootIntro() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("wayback_boot_seen");
    if (seen) {
      setHide(true);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem("wayback_boot_seen", "1");
      setHide(true);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  if (hide) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] bg-[#060812] p-4 text-retro-lime">
      <div className="retro-panel mx-auto mt-20 max-w-3xl p-5">
        <p className="font-pixel text-[10px] text-retro-yellow">WAYBACK MUSEUM BIOS v1.99</p>
        <p className="mt-4 text-2xl">Initializing nostalgia subsystem...</p>
        <p className="text-2xl">Checking modem tone...</p>
        <p className="text-2xl">Loading dead websites archive...</p>
        <div className="mt-4 h-5 border border-slate-200 p-1">
          <div className="h-full w-full animate-pulse bg-gradient-to-r from-retro-electric via-retro-pink to-retro-lime" />
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
