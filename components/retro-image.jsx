"use client";

import Image from "next/image";
import { useState } from "react";

export function RetroImage({ src, alt, className }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-[#0b1230] text-retro-pink ${className || ""}`}>
        <div className="text-center">
          <div className="text-3xl">[x]</div>
          <p className="font-pixel text-[9px]">BROKEN IMAGE</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={640}
      height={360}
      className={className || "h-full w-full object-cover"}
      onError={() => setFailed(true)}
      unoptimized
    />
  );
}
