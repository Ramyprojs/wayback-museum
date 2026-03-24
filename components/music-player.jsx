"use client";

import { useEffect, useState } from "react";
import { SoundEngine } from "@/lib/soundEngine";

export function MusicPlayer() {
  const [state, setState] = useState(SoundEngine.getState());
  const tracks = SoundEngine.getTracks();

  useEffect(() => SoundEngine.subscribe(setState), []);

  return (
    <aside className="music-player" aria-label="8-bit music player">
      <p className="font-pixel text-[9px] text-retro-yellow">8-Bit Player</p>
      <p className="mt-1 text-xl text-retro-lime">{tracks[state.activeTrack]?.name}</p>
      <div className="mt-2 flex gap-2">
        <button className="retro-button text-[8px]" onMouseDown={() => SoundEngine.play("click")} onClick={() => SoundEngine.toggleMusic()}>
          {state.musicPlaying ? "Pause" : "Play"}
        </button>
        <button className="retro-button text-[8px]" onMouseDown={() => SoundEngine.play("click")} onClick={() => SoundEngine.nextTrack()}>
          Next
        </button>
      </div>
      <label className="mt-2 block text-xl text-retro-electric">
        Music Vol
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(state.musicVolume * 100)}
          onChange={(e) => SoundEngine.setMusicVolume(Number(e.target.value) / 100)}
          className="w-full"
        />
      </label>
    </aside>
  );
}
