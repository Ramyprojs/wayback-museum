"use client";

import { useRouter } from "next/navigation";

export function RandomPortalButton({ slugs }) {
  const router = useRouter();

  return (
    <button
      className="retro-button"
      onClick={() => {
        if (!slugs?.length) {
          return;
        }
        const random = slugs[Math.floor(Math.random() * slugs.length)];
        router.push(`/archive/${random}`);
      }}
    >
      Random Portal
    </button>
  );
}
