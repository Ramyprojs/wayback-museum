"use client";

import { useMemo, useState } from "react";
import { ExhibitCard } from "@/components/exhibit-card";

const eraBuckets = ["All", "1993-1996", "1997-1999", "2000-2003", "2004-2007"];
const categories = [
  "All",
  "Social",
  "Gaming",
  "News & Media",
  "Personal/GeoCities",
  "Shopping",
  "Search Engines",
  "Forums",
  "Entertainment"
];
const statuses = [
  { value: "All", label: "All" },
  { value: "gone", label: "Fully Gone" },
  { value: "archived", label: "Partially Archived" },
  { value: "reborn", label: "Reborn/Successor Exists" }
];

export function ArchiveBrowser({ exhibits }) {
  const [search, setSearch] = useState("");
  const [era, setEra] = useState("All");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("added");

  const filtered = useMemo(() => {
    const base = exhibits.filter((item) => {
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.short_description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      const matchEra = era === "All" || item.era === era;
      const matchCategory = category === "All" || item.category === category;
      const matchStatus = status === "All" || item.status === status;
      return matchSearch && matchEra && matchCategory && matchStatus;
    });

    if (sortBy === "founded") {
      return [...base].sort((a, b) => a.years_active_start - b.years_active_start);
    }

    if (sortBy === "died") {
      return [...base].sort((a, b) => (a.yearDied || 3000) - (b.yearDied || 3000));
    }

    if (sortBy === "alpha") {
      return [...base].sort((a, b) => a.name.localeCompare(b.name));
    }

    return [...base].sort((a, b) => String(b.created_at).localeCompare(String(a.created_at)));
  }, [exhibits, search, era, category, status, sortBy]);

  return (
    <section className="grid gap-4 md:grid-cols-[280px,1fr]">
      <aside className="retro-panel h-fit space-y-3 p-3">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Filters</h2>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or vibe"
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />

        <FilterSelect label="Era" value={era} setValue={setEra} options={eraBuckets} />
        <FilterSelect label="Category" value={category} setValue={setCategory} options={categories} />
        <FilterSelect label="Status" value={status} setValue={setStatus} options={statuses} />
        <FilterSelect
          label="Sort"
          value={sortBy}
          setValue={setSortBy}
          options={[
            { label: "Most Recently Added", value: "added" },
            { label: "Year Founded", value: "founded" },
            { label: "Year Died", value: "died" },
            { label: "Alphabetical", value: "alpha" }
          ]}
        />
      </aside>

      <div className="space-y-2">
        <p className="text-2xl text-retro-electric">Showing {filtered.length} exhibits</p>
        <div className="museum-grid">
          {filtered.map((item) => (
            <ExhibitCard key={item.slug} exhibit={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterSelect({ label, value, setValue, options }) {
  const normalized = options.map((option) =>
    typeof option === "string" ? { value: option, label: option } : option
  );

  return (
    <label className="block text-xl">
      <span className="mb-1 block text-retro-lime">{label}</span>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
      >
        {normalized.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
