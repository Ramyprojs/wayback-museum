"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SoundEngine } from "@/lib/soundEngine";

const links = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/graveyard", label: "Graveyard" },
  { href: "/firsts", label: "Firsts" },
  { href: "/timeline", label: "Timeline" },
  { href: "/dialup", label: "Dial-Up" },
  { href: "/archaeology", label: "Archaeology" },
  { href: "/acquisitions", label: "Acquisitions" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" }
];

export function Taskbar() {
  const [clock, setClock] = useState("00:00:00");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [soundState, setSoundState] = useState(SoundEngine.getState());

  useEffect(() => {
    const tick = () => {
      setClock(
        new Date().toLocaleTimeString("en-US", {
          hour12: false
        })
      );
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => SoundEngine.subscribe(setSoundState), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-slate-200 bg-[#13205a] px-3 py-2 shadow-[0_2px_0_#000]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="retro-button bg-[#234198] px-2 py-2 text-[9px]">Start</div>
          <span className="font-pixel text-[10px] text-retro-yellow">Wayback Museum</span>
        </div>
        <nav className="hidden items-center gap-2 sm:flex">
          {links.map((link) => (
            <Link key={link.href} className="retro-button text-[9px]" href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            className="retro-button px-2 py-1 text-[9px]"
            aria-label="Toggle sound mute"
            onClick={() => SoundEngine.toggleMute()}
          >
            {soundState.muted ? "MUTE" : "SND"}
          </button>
          <div className="relative">
            <button className="retro-button px-2 py-1 text-[9px]" onClick={() => setSettingsOpen((v) => !v)}>
              Settings
            </button>
            {settingsOpen ? (
              <div className="taskbar-settings retro-panel absolute left-1/2 top-9 z-[70] w-[260px] -translate-x-1/2 space-y-2 p-2 text-[#dff9ff]">
                <label className="block text-xl">
                  <span className="text-retro-yellow">Volume</span>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={Math.round(soundState.volume * 100)}
                    onChange={(e) => SoundEngine.setVolume(Number(e.target.value) / 100)}
                    className="w-full"
                  />
                </label>
                <label className="flex items-center gap-2 text-xl">
                  <input
                    type="checkbox"
                    checked={soundState.ambientMode}
                    onChange={(e) => SoundEngine.setAmbientMode(e.target.checked)}
                  />
                  Ambient Mode
                </label>
                <button className="retro-button w-full text-[9px]" onClick={() => setSettingsOpen(false)}>
                  Close
                </button>
              </div>
            ) : null}
          </div>
          <div className="retro-panel px-3 py-1 text-xl leading-none text-retro-lime">{clock}</div>
        </div>
      </div>
    </header>
  );
}
