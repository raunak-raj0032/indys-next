"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#committees", label: "Committees" },
  { href: "/#dates", label: "Dates" },
  { href: "/#partners", label: "Partners" },
];

export default function CommitteeNav({ committeeName }: { committeeName: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b border-[#c8963e]/20 transition-all duration-300 ${
        scrolled ? "bg-[#0d1b3e]/98 backdrop-blur-md" : "bg-[#0d1b3e]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
            <Image
              src="/brand/indys-seal-mark.png"
              alt="INDYS '26"
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-white tracking-wide">
            INDYS<span className="text-[#c8963e]"> &apos;26</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 min-w-0">
          <span className="hidden lg:block text-white/30 text-xs font-medium tracking-widest uppercase truncate max-w-32">
            {committeeName}
          </span>
          <span className="hidden lg:block w-px h-4 bg-white/15" />
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="bg-[#c8963e] hover:bg-[#e8b96a] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            Register
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d1b3e] border-t border-[#c8963e]/20 px-6 py-4 flex flex-col gap-4">
          <Link
            href="/#committees"
            onClick={() => setOpen(false)}
            className="text-[#e8b96a] text-sm font-medium"
          >
            ← All Committees
          </Link>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#e8b96a] text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="bg-[#c8963e] text-white text-sm font-semibold px-5 py-2 rounded-md text-center"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
