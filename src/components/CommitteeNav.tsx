"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/#about", label: "About" },
  { href: "/secretariat", label: "Secretariat" },
  { href: "/#dates", label: "Dates" },
  { href: "/#partners", label: "Partners" },
];

export default function CommitteeNav({ committeeName }: { committeeName: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [matrixOpen, setMatrixOpen] = useState(false);
  const matrixRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (matrixRef.current && !matrixRef.current.contains(e.target as Node)) {
        setMatrixOpen(false);
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
          <span className="hidden lg:block text-white/78 text-xs font-medium tracking-widest uppercase truncate max-w-32">
            {committeeName}
          </span>
          <span className="hidden lg:block w-px h-4 bg-white/15" />

          <Link
            href="/committees"
            className="text-white/82 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
          >
            Committees
          </Link>

          <div className="relative" ref={matrixRef}>
            <button
              onClick={() => setMatrixOpen((v) => !v)}
              className="flex items-center gap-1.5 text-white/82 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
              aria-expanded={matrixOpen}
            >
              Portfolio Matrix
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${matrixOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {matrixOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-xl border border-[#c8963e]/20 bg-[#0d1b3e] p-2 shadow-2xl shadow-black/40">
                <a
                  href="https://docs.google.com/spreadsheets/d/1OZLgTOBqVHnCInLgcerF7fVJNjt0IIHuFMGm2Sb61z4/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMatrixOpen(false)}
                  className="block rounded-lg px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/5 hover:text-[#e8b96a]"
                >
                  Open Portfolio Matrix
                </a>
              </div>
            )}
          </div>

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/82 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/register"
            className="bg-[#c8963e] hover:bg-[#e8b96a] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors"
          >
            Individual registration
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
        <div className="md:hidden bg-[#0d1b3e] border-t border-[#c8963e]/20 px-6 py-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link
            href="/committees"
            onClick={() => setOpen(false)}
            className="text-white/88 hover:text-[#e8b96a] text-sm font-medium transition-colors"
          >
            Committees
          </Link>

          <div>
            <button
              onClick={() => setMatrixOpen((v) => !v)}
              className="flex w-full items-center justify-between text-white/88 hover:text-[#e8b96a] text-sm font-medium transition-colors"
              aria-expanded={matrixOpen}
            >
              Portfolio Matrix
              <span aria-hidden="true" className={`text-[#c8963e] transition-transform ${matrixOpen ? "rotate-180" : ""}`}>⌄</span>
            </button>
            {matrixOpen && (
              <a
                href="https://docs.google.com/spreadsheets/d/1OZLgTOBqVHnCInLgcerF7fVJNjt0IIHuFMGm2Sb61z4/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  setMatrixOpen(false);
                  setOpen(false);
                }}
                className="mt-2 block pl-3 text-sm text-white/70 transition-colors hover:text-[#e8b96a]"
              >
                Open Portfolio Matrix
              </a>
            )}
          </div>

          <span className="w-full h-px bg-white/10" />

          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white/88 hover:text-[#e8b96a] text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="bg-[#c8963e] text-white text-sm font-semibold px-5 py-2 rounded-md text-center"
          >
            Individual registration
          </Link>
        </div>
      )}
    </nav>
  );
}
