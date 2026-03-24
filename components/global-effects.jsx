"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SoundEngine } from "@/lib/soundEngine";
import { MusicPlayer } from "@/components/music-player";
import { LowBatteryWarning } from "@/components/low-battery-warning";

const INTERACTIVE_SELECTOR = "button,a,.retro-button,input,textarea,select,[role='button']";

export function GlobalEffects() {
  const pathname = usePathname();
  const [transitionClass, setTransitionClass] = useState("");
  const lastPath = useRef(pathname);

  useEffect(() => {
    const onMouseOver = (event) => {
      const target = event.target instanceof HTMLElement ? event.target.closest(INTERACTIVE_SELECTOR) : null;
      if (!target) {
        return;
      }
      const now = Date.now();
      const last = Number(target.getAttribute("data-hover-ts") || "0");
      if (now - last > 120) {
        target.setAttribute("data-hover-ts", String(now));
        SoundEngine.play("hover", { volume: 0.55 });
      }
    };

    const onMouseDown = (event) => {
      const target = event.target instanceof HTMLElement ? event.target.closest(INTERACTIVE_SELECTOR) : null;
      if (!target) {
        return;
      }
      target.classList.add("is-pressed");
      SoundEngine.play("click");
      window.setTimeout(() => {
        target.classList.remove("is-pressed");
        target.classList.add("release-pop");
        window.setTimeout(() => target.classList.remove("release-pop"), 140);
      }, 70);
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mousedown", onMouseDown);

    return () => {
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  useEffect(() => {
    if (lastPath.current !== pathname) {
      setTransitionClass("active leave");
      SoundEngine.play("navigate");
      const first = window.setTimeout(() => {
        setTransitionClass("active");
      }, 280);
      const second = window.setTimeout(() => {
        setTransitionClass("");
      }, 760);
      lastPath.current = pathname;
      return () => {
        window.clearTimeout(first);
        window.clearTimeout(second);
      };
    }

    return undefined;
  }, [pathname]);

  useEffect(() => {
    let timer = 0;
    const schedule = () => {
      const delay = 45000 + Math.floor(Math.random() * 45000);
      timer = window.setTimeout(() => {
        document.body.classList.add("page-glitching");
        window.setTimeout(() => document.body.classList.remove("page-glitching"), 260);
        schedule();
      }, delay);
    };

    schedule();
    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className={`gb-transition-layer ${transitionClass}`} />
      <LowBatteryWarning />
      <MusicPlayer />
    </>
  );
}
