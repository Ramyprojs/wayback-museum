"use client";

import { useEffect } from "react";
import { SoundEngine } from "@/lib/soundEngine";

export function ExhibitSoundCue({ slug }) {
  useEffect(() => {
    SoundEngine.play("notification");
    const key = "wayback_viewed_exhibits";
    const current = Number(sessionStorage.getItem(key) || "0");
    sessionStorage.setItem(key, String(current + 1));
    sessionStorage.setItem("wayback_last_exhibit", slug);
  }, [slug]);

  return null;
}
