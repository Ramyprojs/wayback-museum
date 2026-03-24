"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "r" || event.key === "R") {
        router.push("/archive?surprise=1");
      }

      if (event.key === "/") {
        const search = document.getElementById("archive-search");
        if (search) {
          event.preventDefault();
          search.focus();
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return null;
}
