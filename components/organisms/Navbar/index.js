"use client";

import { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import NavItem from "@/components/molecules/NavItem";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#journal", label: "Journal" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-silver bg-background/90 backdrop-blur dark:border-neutral-d-grey">
      <div className="container flex items-center justify-between gap-3 py-3">
        <Logo />

        <nav className="hidden items-center gap-4 md:flex lg:gap-8" aria-label="Primary">
          {links.map((link) => (
            <NavItem key={link.href} href={link.href}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <Button href="#contact" variant="outline">
              Contact
            </Button>
            <Button href="#contact">
              <span className="lg:hidden">Start</span>
              <span className="hidden lg:inline">Start a project</span>
            </Button>
          </div>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-grey-blue text-foreground md:hidden dark:border-neutral-d-grey"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-navigation"
          className="container border-t border-neutral-silver py-4 md:hidden dark:border-neutral-d-grey"
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-2 py-3 text-base"
              >
                {link.label}
              </NavItem>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <Button
              href="#contact"
              variant="outline"
              className="w-full"
              onClick={closeMenu}
            >
              Contact
            </Button>
            <Button href="#contact" className="w-full" onClick={closeMenu}>
              Start a project
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
