const moodInput = document.getElementById("moodInput");
const recommendBtn = document.getElementById("recommendBtn");
const statusNode = document.getElementById("status");
const resultsNode = document.getElementById("results");
const historyNode = document.getElementById("history");
const saveHistoryBtn = document.getElementById("saveHistoryBtn");
const clearHistoryBtn = document.getElementById("clearHistoryBtn");

const sliders = {
  energy: document.getElementById("energy"),
  openness: document.getElementById("openness"),
  social: document.getElementById("social")
};

const outputs = {
  energy: document.getElementById("energyValue"),
  openness: document.getElementById("opennessValue"),
  social: document.getElementById("socialValue")
};

const HISTORY_KEY = "mood_movie_history_v1";

let currentSession = null;

function getVibe() {
  return {
    energy: Number(sliders.energy.value),
    openness: Number(sliders.openness.value),
    social: Number(sliders.social.value)
  };
}

function setStatus(message, isError = false) {
  statusNode.textContent = message;
  statusNode.style.color = isError ? "#a33a1c" : "";
}

function makeEmptyMessage(text) {
  const p = document.createElement("p");
  p.className = "empty";
  p.textContent = text;
  return p;
}

function renderRecommendations(recommendations) {
  resultsNode.innerHTML = "";

  recommendations.forEach((item) => {
    const card = document.createElement("article");
    card.className = "result-card";

    const top = document.createElement("div");
    top.className = "result-top";

    const title = document.createElement("h3");
    title.className = "result-title";
    title.textContent = item.title || "Untitled";

    const year = document.createElement("span");
    year.className = "result-year";
    year.textContent = item.year ? String(item.year) : "Year n/a";

    top.append(title, year);

    const reason = document.createElement("p");
    reason.className = "result-reason";
    reason.textContent = item.reason || "Recommended for your current mood.";

    const note = document.createElement("p");
    note.className = "result-note";
    note.textContent = `Content note: ${item.contentNote || "None highlighted."}`;

    card.append(top, reason, note);
    resultsNode.appendChild(card);
  });
}

function readHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  } catch (_error) {
    return [];
  }
}

function writeHistory(entries) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(entries.slice(0, 30)));
}

function renderHistory() {
  const history = readHistory();
  historyNode.innerHTML = "";

  if (!history.length) {
    historyNode.appendChild(makeEmptyMessage("No saved sessions yet."));
    return;
  }

  history.forEach((entry) => {
    const wrap = document.createElement("article");
    wrap.className = "history-item";

    const meta = document.createElement("p");
    meta.className = "history-meta";
    meta.textContent = new Date(entry.timestamp).toLocaleString();

    const mood = document.createElement("p");
    mood.className = "history-mood";
    mood.textContent = `Mood: ${entry.mood}`;

    const list = document.createElement("ul");
    list.className = "history-list";
    (entry.recommendations || []).forEach((rec) => {
      const li = document.createElement("li");
      li.textContent = rec.title || "Untitled";
      list.appendChild(li);
    });

    wrap.append(meta, mood, list);
    historyNode.appendChild(wrap);
  });
}

async function fetchRecommendations() {
  const mood = moodInput.value.trim();
  if (mood.length < 4) {
    setStatus("Describe your mood with a bit more detail.", true);
    return;
  }

  recommendBtn.disabled = true;
  saveHistoryBtn.disabled = true;
  setStatus("Mapping your vibe to cinema...");

  try {
    const response = await fetch("/api/recommendations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood, vibe: getVibe() })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "Request failed.");
    }

    const recs = Array.isArray(data.recommendations) ? data.recommendations : [];
    if (!recs.length) {
      throw new Error("No recommendations returned.");
    }

    renderRecommendations(recs);
    currentSession = {
      timestamp: Date.now(),
      mood,
      vibe: getVibe(),
      recommendations: recs
    };
    saveHistoryBtn.disabled = false;
    setStatus("Fresh picks are ready.");
  } catch (error) {
    const message = error && error.message ? error.message : "Could not fetch recommendations.";
    resultsNode.innerHTML = "";
    resultsNode.appendChild(makeEmptyMessage("No picks yet. Try adjusting your mood description."));
    setStatus(message, true);
  } finally {
    recommendBtn.disabled = false;
  }
}

function saveCurrentSession() {
  if (!currentSession) {
    return;
  }

  const history = readHistory();
  history.unshift(currentSession);
  writeHistory(history);
  renderHistory();
  setStatus("Session saved to watch history.");
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistory();
  setStatus("History cleared.");
}

Object.keys(sliders).forEach((key) => {
  sliders[key].addEventListener("input", () => {
    outputs[key].textContent = sliders[key].value;
  });
});

document.querySelectorAll(".preset-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    moodInput.value = chip.dataset.text || "";
    moodInput.focus();
  });
});

recommendBtn.addEventListener("click", fetchRecommendations);
saveHistoryBtn.addEventListener("click", saveCurrentSession);
clearHistoryBtn.addEventListener("click", clearHistory);

resultsNode.appendChild(makeEmptyMessage("Describe your mood and click Find my movies."));
renderHistory();
