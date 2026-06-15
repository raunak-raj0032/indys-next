"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { committees } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#dates", label: "Dates" },
  { href: "#partners", label: "Partners" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [committeesOpen, setCommitteesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCommitteesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b border-[#c8963e]/20 transition-all duration-300 ${
        scrolled ? "bg-[#0d1b3e]/98 backdrop-blur-md" : "bg-[#0d1b3e]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
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
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <a
              href="#about"
              className="text-white/70 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
            >
              About
            </a>
          </li>

          {/* Committees dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setCommitteesOpen((v) => !v)}
              className="flex items-center gap-1.5 text-white/70 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
              aria-expanded={committeesOpen}
            >
              Committees
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${committeesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {committeesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 max-h-[70vh] overflow-y-auto rounded-xl border border-[#c8963e]/20 bg-[#0d1b3e] shadow-2xl shadow-black/40 p-2">
                {committees.map((c) => (
                  <Link
                    key={c.id}
                    href={`/committees/${c.id}`}
                    onClick={() => setCommitteesOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 transition-colors"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/95 p-1">
                      <Image
                        src={c.logo}
                        alt={c.logoAlt}
                        width={28}
                        height={28}
                        className="max-h-full w-auto object-contain"
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-white/85 text-sm font-medium leading-tight truncate">
                        {c.abbr}
                      </span>
                      <span className="block text-white/40 text-xs leading-tight truncate">
                        {c.name}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {links.slice(1).map((l) => (
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
        <div className="md:hidden bg-[#0d1b3e] border-t border-[#c8963e]/20 px-6 py-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="text-white/80 hover:text-[#e8b96a] text-sm font-medium transition-colors"
          >
            About
          </a>

          {/* Committees list */}
          <div>
            <span className="block text-[#c8963e] text-xs font-semibold tracking-widest uppercase mb-2">
              Committees
            </span>
            <div className="flex flex-col gap-2">
              {committees.map((c) => (
                <Link
                  key={c.id}
                  href={`/committees/${c.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-white/80 hover:text-[#e8b96a] text-sm font-medium transition-colors"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/95 p-1">
                    <Image
                      src={c.logo}
                      alt={c.logoAlt}
                      width={24}
                      height={24}
                      className="max-h-full w-auto object-contain"
                    />
                  </span>
                  {c.abbr}
                </Link>
              ))}
            </div>
          </div>

          <span className="w-full h-px bg-white/10" />

          {links.slice(1).map((l) => (
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
