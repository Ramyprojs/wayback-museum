"use client";

import { useEffect, useRef } from "react";
import { SoundEngine } from "@/lib/soundEngine";

export function GraveyardExperience() {
  const canvasRef = useRef(null);

  useEffect(() => {
    SoundEngine.play("explosion", { volume: 0.55 });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const domains = ["www", ".com", ".net", "404", "portal", "dialup", "guestbook"];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array.from({ length: columns }, () => Math.random() * -height);
    let raf = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.fillStyle = "rgba(0, 8, 16, 0.14)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i += 1) {
        const text = domains[Math.floor(Math.random() * domains.length)];
        ctx.fillStyle = "#8eff8e";
        ctx.fillText(text, i * fontSize, drops[i]);
        drops[i] += fontSize * 0.9;
        if (drops[i] > height && Math.random() > 0.975) {
          drops[i] = -fontSize;
        }
      }

      raf = window.requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}
