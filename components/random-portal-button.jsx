"use client";

import { useRouter } from "next/navigation";
import { triggerPortalFlash } from "@/lib/animations";
import { SoundEngine } from "@/lib/soundEngine";

export function RandomPortalButton({ slugs }) {
  const router = useRouter();

  return (
    <button
      className="retro-button"
      onClick={() => {
        if (!slugs?.length) {
          return;
        }
        SoundEngine.play("select");
        SoundEngine.play("navigate", { volume: 0.8 });
        triggerPortalFlash();
        const random = slugs[Math.floor(Math.random() * slugs.length)];
        window.setTimeout(() => router.push(`/archive/${random}`), 180);
      }}
    >
      Random Portal
    </button>
  );
}
