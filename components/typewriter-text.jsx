"use client";

import { useEffect, useRef, useState } from "react";
import { hasTypedInSession, markTypedInSession } from "@/lib/animations";
import { SoundEngine } from "@/lib/soundEngine";

export function TypewriterText({
  as: Tag = "p",
  text,
  className,
  sessionKey,
  speed = 40,
  playSound = true
}) {
  const [visibleText, setVisibleText] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !text) {
      return;
    }

    if (hasTypedInSession(sessionKey)) {
      setVisibleText(text);
      setDone(true);
      return;
    }

    let timer = null;
    let index = 0;
    let started = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) {
          return;
        }

        started = true;
        const run = () => {
          index += 1;
          setVisibleText(text.slice(0, index));
          if (playSound && index % 3 === 0) {
            SoundEngine.play("type", { volume: 0.7 });
          }
          if (index >= text.length) {
            markTypedInSession(sessionKey);
            setDone(true);
            return;
          }
          timer = window.setTimeout(run, speed);
        };

        run();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [text, sessionKey, speed, playSound]);

  return (
    <Tag ref={ref} className={`typewriter-root ${className || ""}`}>
      {visibleText}
      {!done ? <span className="typewriter-cursor" /> : null}
    </Tag>
  );
}
