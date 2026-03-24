"use client";

import { useEffect, useMemo, useState } from "react";

export function LowBatteryWarning() {
  const [showLed, setShowLed] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowLed(true), 30 * 60 * 1000);
    return () => window.clearTimeout(timer);
  }, []);

  const saved = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("wayback_saved_graveyard") || "[]");
    } catch (_error) {
      return [];
    }
  }, [open]);

  function exportList() {
    const lines = ["WAYBACK MUSEUM :: MY GRAVEYARD", "", ...saved.map((slug, idx) => `${idx + 1}. ${slug}`)];
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wayback-graveyard.txt";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!showLed) {
    return null;
  }

  return (
    <>
      <button className="low-battery-led" aria-label="Low battery warning" onClick={() => setOpen(true)} />
      {open ? (
        <div className="fixed inset-0 z-[130] grid place-items-center bg-black/65 p-4">
          <div className="retro-panel max-w-lg p-4">
            <h2 className="font-pixel text-xs text-retro-pink">BATTERY LOW</h2>
            <p className="mt-3 text-2xl text-[#dff7ff]">Save your progress before the power cuts out.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button className="retro-button" onClick={exportList}>Export Graveyard .txt</button>
              <button className="retro-button" onClick={() => setOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
