"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#committees", label: "Committees" },
  { href: "#dates", label: "Dates" },
  { href: "#partners", label: "Partners" },
];

export default function Nav() {
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
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-0.5">
          <span className="font-[family-name:var(--font-playfair)] text-2xl font-black text-white tracking-wide">
            INDYS
          </span>
          <span className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#c8963e]">
            &apos;26
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/70 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="bg-[#c8963e] hover:bg-[#e8b96a] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
            >
              Register
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d1b3e] border-t border-[#c8963e]/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-[#e8b96a] text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#c8963e] text-white text-sm font-semibold px-5 py-2 rounded-md text-center"
          >
            Register
          </a>
        </div>
      )}
    </nav>
  );
}
