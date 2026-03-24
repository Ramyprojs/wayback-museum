"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SoundEngine } from "@/lib/soundEngine";

export function NotFoundGameOver() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(9);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(Number(sessionStorage.getItem("wayback_viewed_exhibits") || "0"));
    SoundEngine.play("error");
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
      return;
    }

    const timer = window.setTimeout(() => setCountdown((value) => value - 1), 1000);
    return () => window.clearTimeout(timer);
  }, [countdown, router]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center pt-6">
      <div className="retro-panel w-full max-w-2xl p-5 text-center">
        <h1 className="font-pixel text-sm text-retro-pink">GAME OVER</h1>
        <div className="mx-auto mt-4 h-20 w-20 rounded-t-[32px] border-2 border-slate-200 bg-[#0a1239]" />
        <p className="mt-3 text-3xl text-retro-electric">404 :: This page has vanished.</p>
        <p className="mt-2 text-2xl text-retro-lime">Score: {score} exhibits viewed</p>
        <p className="mt-2 text-3xl text-retro-yellow">CONTINUE? {countdown}</p>
        <Link href="/" className="retro-button mt-5 inline-block">Return Home</Link>
      </div>
    </section>
  );
}
