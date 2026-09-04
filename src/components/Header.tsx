"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { STROKE_WIDTH } from "@/lib/design-system";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/10 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link href="/" className="font-heading text-xl tracking-wide text-foreground">
          Triumph Web Works
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden sm:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-cta px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-cta/90"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-foreground sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X strokeWidth={STROKE_WIDTH} /> : <Menu strokeWidth={STROKE_WIDTH} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-foreground/10 px-6 pb-6 sm:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-sm bg-cta px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-cta/90"
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
