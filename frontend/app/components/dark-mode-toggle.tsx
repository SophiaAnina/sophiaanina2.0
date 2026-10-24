"use client";

import { useSyncExternalStore } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";

type Theme = "light" | "dark";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

// The server can't know the theme; the inline script in layout sets it before hydration.
const getServerSnapshot = (): Theme => "light";

export default function DarkModeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  function toggle() {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button
      type="button"
      className="toggle"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle dark mode"
      onClick={toggle}
    >
      <span className="drag" aria-hidden="true"></span>
      <IoMdSunny className="toggle-icon" />
      <IoMdMoon className="toggle-icon" />
    </button>
  );
}