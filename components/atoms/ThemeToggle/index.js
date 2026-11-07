"use client";

import { useLayoutEffect } from "react";

const storageKey = "theme";

function preferredDark() {
  const stored = localStorage.getItem(storageKey);
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem(storageKey, dark ? "dark" : "light");
}

export default function ThemeToggle() {
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", preferredDark());
  }, []);

  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      onClick={() =>
        applyTheme(!document.documentElement.classList.contains("dark"))
      }
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-grey-blue text-foreground transition-colors hover:bg-neutral-silver focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-neutral-d-grey dark:hover:bg-neutral-d-grey"
    >
      <SunIcon className="hidden h-5 w-5 dark:block" />
      <MoonIcon className="h-5 w-5 dark:hidden" />
    </button>
  );
}

function MoonIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z"
      />
    </svg>
  );
}

function SunIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path
        strokeLinecap="round"
        d="M12 3v1.5M12 19.5V21M4.9 4.9l1.1 1.1M18 18l1.1 1.1M3 12h1.5M19.5 12H21M4.9 19.1 6 18M18 6l1.1-1.1"
      />
    </svg>
  );
}
