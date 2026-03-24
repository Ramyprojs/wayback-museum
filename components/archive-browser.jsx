"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
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
const deathCauses = [
  "All",
  "Dot-Com Crash",
  "Acquisition & Neglect",
  "Better Competitor Arrived",
  "Legal Trouble",
  "Ran Out of Money",
  "Pivoted Away",
  "Still Limping Along"
];
const PAGE_SIZE = 20;

export function ArchiveBrowser({ exhibits }) {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [era, setEra] = useState("All");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [deathCause, setDeathCause] = useState("All");
  const [sortBy, setSortBy] = useState("added");
  const [page, setPage] = useState(1);
  const [compareA, setCompareA] = useState("");
  const [compareB, setCompareB] = useState("");
  const [showConnections, setShowConnections] = useState(false);

  const filtered = useMemo(() => {
    const base = exhibits.filter((item) => {
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.short_description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        String(item.full_story || "").toLowerCase().includes(q);
      const matchEra = era === "All" || item.era === era;
      const matchCategory = category === "All" || item.category === category;
      const matchStatus = status === "All" || item.status === status;
      const matchDeathCause = deathCause === "All" || item.death_cause === deathCause;
      return matchSearch && matchEra && matchCategory && matchStatus && matchDeathCause;
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
  }, [exhibits, search, era, category, status, deathCause, sortBy]);

  useEffect(() => {
    setPage(1);
  }, [search, era, category, status, deathCause, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const nodeData = filtered.slice(0, 10).map((item, index) => ({
    ...item,
    x: 80 + (index % 5) * 180,
    y: 80 + Math.floor(index / 5) * 160
  }));

  function surpriseMe() {
    const randomEra = eraBuckets[1 + Math.floor(Math.random() * (eraBuckets.length - 1))];
    const randomCategory = categories[1 + Math.floor(Math.random() * (categories.length - 1))];
    setEra(randomEra);
    setCategory(randomCategory);
    setStatus("All");
    setDeathCause("All");
  }

  useEffect(() => {
    if (searchParams.get("surprise") === "1") {
      surpriseMe();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const compareExhibitA = filtered.find((item) => item.slug === compareA);
  const compareExhibitB = filtered.find((item) => item.slug === compareB);

  return (
    <section className="grid gap-4 md:grid-cols-[280px,1fr]">
      <aside className="retro-panel h-fit space-y-3 p-3">
        <h2 className="font-pixel text-[10px] text-retro-yellow">Filters</h2>
        <div className="gb-sidebar-sprites" aria-hidden="true">
          <span className="gb-sprite floppy" />
          <span className="gb-sprite monitor" />
          <span className="gb-sprite modem" />
          <span className="gb-sprite cdrom" />
        </div>
        <input
          id="archive-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search name, summary, or full story"
          className="w-full border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-2xl"
        />

        <FilterSelect label="Era" value={era} setValue={setEra} options={eraBuckets} />
        <FilterSelect label="Category" value={category} setValue={setCategory} options={categories} />
        <FilterSelect label="Status" value={status} setValue={setStatus} options={statuses} />
        <FilterSelect label="Death Cause" value={deathCause} setValue={setDeathCause} options={deathCauses} />
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
        <button className="retro-button" onClick={surpriseMe}>
          Surprise Me
        </button>
        <button className="retro-button" onClick={() => setShowConnections((v) => !v)}>
          {showConnections ? "Hide Connections" : "Connections View"}
        </button>
      </aside>

      <div className="space-y-2">
        <p className="text-2xl text-retro-electric">
          Showing {filtered.length} exhibits :: Page {page}/{totalPages}
        </p>

        <section className="retro-panel p-3">
          <p className="font-pixel text-[10px] text-retro-yellow">Comparison Mode</p>
          <div className="comparison-grid mt-2 grid gap-2 md:grid-cols-2">
            <select value={compareA} onChange={(e) => setCompareA(e.target.value)} className="border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-xl">
              <option value="">Select site A</option>
              {filtered.map((item) => (
                <option key={item.slug} value={item.slug}>{item.name}</option>
              ))}
            </select>
            <select value={compareB} onChange={(e) => setCompareB(e.target.value)} className="border-2 border-[#f8f8f8] bg-[#0b1232] p-2 text-xl">
              <option value="">Select site B</option>
              {filtered.map((item) => (
                <option key={item.slug} value={item.slug}>{item.name}</option>
              ))}
            </select>
          </div>
          {compareExhibitA && compareExhibitB ? (
            <div className="comparison-grid mt-3 grid gap-3 md:grid-cols-2">
              <CompareCard exhibit={compareExhibitA} />
              <CompareCard exhibit={compareExhibitB} />
            </div>
          ) : null}
        </section>

        {showConnections ? (
          <section className="retro-panel overflow-auto p-3">
            <p className="font-pixel text-[10px] text-retro-yellow">Connections (sample graph)</p>
            <div className="connections-view overflow-x-auto">
              <svg width="980" height="380" viewBox="0 0 980 380" className="mt-2 min-w-full">
                {nodeData.slice(0, -1).map((node, idx) => (
                  <line
                    key={`line-${node.slug}`}
                    x1={node.x}
                    y1={node.y}
                    x2={nodeData[idx + 1].x}
                    y2={nodeData[idx + 1].y}
                    stroke="#36d1ff"
                    strokeDasharray="4 3"
                  />
                ))}
                {nodeData.map((node) => (
                  <g key={`node-${node.slug}`}>
                    <circle cx={node.x} cy={node.y} r="18" fill="#ff2bd6" />
                    <text x={node.x + 24} y={node.y + 5} fill="#dff9ff" fontSize="18">{node.name}</text>
                  </g>
                ))}
              </svg>
            </div>
          </section>
        ) : null}

        <div className="museum-grid">
          {paged.map((item, idx) => (
            <ExhibitCard key={item.slug} exhibit={item} index={idx} />
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="retro-button" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
            Prev
          </button>
          <button className="retro-button" disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

function CompareCard({ exhibit }) {
  return (
    <article className="retro-panel p-3">
      <p className="font-pixel text-[10px] text-retro-yellow">{exhibit.name}</p>
      <p className="text-2xl text-retro-electric">{exhibit.yearsLabel}</p>
      <p className="text-xl">{exhibit.peak_visitors || "Unknown traffic"}</p>
      <p className="text-xl">Status: {exhibit.status}</p>
      <p className="text-xl">Cause: {exhibit.death_cause || "Unlisted"}</p>
    </article>
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
