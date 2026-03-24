"use client";

import { useState } from "react";
import { SoundEngine } from "@/lib/soundEngine";

const categories = [
  "Social",
  "Gaming",
  "News & Media",
  "Personal/GeoCities",
  "Shopping",
  "Search Engines",
  "Forums",
  "Entertainment"
];

const initialState = {
  name: "",
  url_original: "",
  years_active_start: "",
  years_active_end: "",
  category: "Social",
  short_description: "",
  why_it_deserves: "",
  submitter_handle: "",
  wayback_url: ""
};

export function SubmitForm() {
  const [form, setForm] = useState(initialState);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState("");

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function submit(e) {
    e.preventDefault();

    if (!form.name.trim() || !form.url_original.trim() || !form.short_description.trim() || !form.why_it_deserves.trim()) {
      setMessage("Please complete all required fields.");
      SoundEngine.play("error");
      return;
    }

    setBusy(true);
    setMessage("Sending transmission...");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }
      setDone(true);
      setMessage("Your message has been sent! A wizard will review your submission shortly.");
      setForm(initialState);
      SoundEngine.play("success");
    } catch (error) {
      setMessage(error.message || "Submission failed.");
      SoundEngine.play("error");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="retro-panel p-4">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Transmission complete</h2>
        <p className="mt-3 text-3xl text-retro-lime">{message}</p>
      </div>
    );
  }

  return (
    <form className="retro-panel space-y-3 p-4" onSubmit={submit}>
      <Field label="Site Name">
        <input
          required
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />
      </Field>

      <Field label="Original URL">
        <input
          required
          type="url"
          value={form.url_original}
          onChange={(e) => updateField("url_original", e.target.value)}
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />
      </Field>

      <div className="form-grid grid gap-3 sm:grid-cols-2">
        <Field label="Years Active From">
          <input
            required
            type="number"
            min={1990}
            max={2030}
            value={form.years_active_start}
            onChange={(e) => updateField("years_active_start", e.target.value)}
            className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
          />
        </Field>
        <Field label="Years Active To">
          <input
            type="number"
            min={1990}
            max={2030}
            value={form.years_active_end}
            onChange={(e) => updateField("years_active_end", e.target.value)}
            className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
          />
        </Field>
      </div>

      <Field label="Category">
        <select
          value={form.category}
          onChange={(e) => updateField("category", e.target.value)}
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Short Description">
        <textarea
          required
          rows={2}
          maxLength={260}
          value={form.short_description}
          onChange={(e) => updateField("short_description", e.target.value)}
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />
      </Field>

      <Field label="Why It Deserves To Be Here">
        <textarea
          required
          rows={4}
          value={form.why_it_deserves}
          onChange={(e) => updateField("why_it_deserves", e.target.value)}
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />
      </Field>

      <Field label="Submitter Handle (optional)">
        <input
          value={form.submitter_handle}
          onChange={(e) => updateField("submitter_handle", e.target.value)}
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />
      </Field>

      <Field label="Wayback Snapshot URL (optional)">
        <input
          type="url"
          value={form.wayback_url}
          onChange={(e) => updateField("wayback_url", e.target.value)}
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />
      </Field>

      <button className="retro-button" disabled={busy} type="submit">
        {busy ? "Sending..." : "Submit Entry"}
      </button>
      <p className="text-xl text-retro-lime">{message}</p>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block text-xl">
      <span className="mb-1 block text-retro-lime">{label}</span>
      {children}
    </label>
  );
}
