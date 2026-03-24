const typedSession = new Set<string>();

export function hasTypedInSession(key: string) {
  if (typedSession.has(key)) {
    return true;
  }
  if (typeof window === "undefined") {
    return false;
  }

  const fullKey = `wayback_typed_${key}`;
  if (sessionStorage.getItem(fullKey) === "1") {
    typedSession.add(key);
    return true;
  }
  return false;
}

export function markTypedInSession(key: string) {
  typedSession.add(key);
  if (typeof window !== "undefined") {
    sessionStorage.setItem(`wayback_typed_${key}`, "1");
  }
}

export function createIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
) {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
    return null;
  }

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => callback(entry));
  }, options);
}

export function triggerPixelExplosion(
  target: HTMLElement,
  colors = ["#b6ff3a", "#36d1ff", "#ff2bd6", "#ffe15b"]
) {
  const rect = target.getBoundingClientRect();
  const container = document.createElement("div");
  container.className = "pixel-explosion";
  container.style.left = `${rect.left + rect.width / 2}px`;
  container.style.top = `${rect.top + rect.height / 2}px`;

  const pieces = 8 + Math.floor(Math.random() * 5);
  for (let i = 0; i < pieces; i += 1) {
    const dot = document.createElement("span");
    dot.className = "pixel-explosion__dot";
    dot.style.background = colors[i % colors.length];
    const angle = (Math.PI * 2 * i) / pieces + Math.random() * 0.4;
    const distance = 22 + Math.random() * 34;
    dot.style.setProperty("--dx", `${Math.cos(angle) * distance}px`);
    dot.style.setProperty("--dy", `${Math.sin(angle) * distance}px`);
    container.appendChild(dot);
  }

  document.body.appendChild(container);
  window.setTimeout(() => {
    container.remove();
  }, 700);
}

export function triggerPortalFlash() {
  const overlay = document.createElement("div");
  overlay.className = "portal-flash-overlay";
  document.body.appendChild(overlay);
  window.setTimeout(() => overlay.remove(), 640);
}
