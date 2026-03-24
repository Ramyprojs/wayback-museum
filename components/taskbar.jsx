"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/archive", label: "Archive" },
  { href: "/submit", label: "Submit" },
  { href: "/about", label: "About" }
];

export function Taskbar() {
  const [clock, setClock] = useState("00:00:00");

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
        <div className="retro-panel px-3 py-1 text-xl leading-none text-retro-lime">{clock}</div>
      </div>
    </header>
  );
}
