"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { executiveBoardApplicationHref, resources } from "@/lib/data";
import ResourceIcon from "@/components/ResourceIcon";

const links = [
  { href: "#about", label: "About" },
  { href: "/secretariat", label: "Secretariat" },
  { href: "#dates", label: "Dates" },
  { href: "#partners", label: "Partners" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [matrixOpen, setMatrixOpen] = useState(false);
  const resourcesRef = useRef<HTMLLIElement>(null);
  const matrixRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
      if (matrixRef.current && !matrixRef.current.contains(e.target as Node)) {
        setMatrixOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <nav
      aria-label="Primary navigation"
      className={`fixed top-0 inset-x-0 z-50 border-b border-[#c8963e]/20 transition-all duration-300 ${
        scrolled ? "bg-[#0d1b3e]/98 backdrop-blur-md" : "bg-[#0d1b3e]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
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
          <span className="font-[family-name:var(--font-serif)] text-lg font-bold tracking-wide text-white sm:text-xl">
            INDYS<span className="text-[#c8963e]"> &apos;26</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 md:flex lg:gap-7">
          <li>
            <a
              href="#about"
              className="text-white/82 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
            >
              About
            </a>
          </li>

          <li>
            <Link
              href="/committees"
              className="text-white/82 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
            >
              Committees
            </Link>
          </li>

          {/* Resources dropdown */}
          <li className="relative" ref={resourcesRef}>
          <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              className="flex items-center gap-1.5 text-white/82 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
              aria-expanded={resourcesOpen}
            >
              Resources
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {resourcesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 max-h-[70vh] overflow-y-auto rounded-xl border border-[#c8963e]/20 bg-[#0d1b3e] shadow-2xl shadow-black/40 p-2">
                {resources.map((r) => (
                  <Link
                    key={r.id}
                    href={`/resources/${r.id}`}
                    onClick={() => setResourcesOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 transition-colors"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c8963e]/15 text-[#e8b96a]">
                      <ResourceIcon icon={r.icon} className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-white/85 text-sm font-medium leading-tight truncate">
                        {r.short}
                      </span>
                      <span className="block text-white/68 text-xs leading-tight truncate">
                        {r.subtitle}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="relative" ref={matrixRef}>
            <button
              type="button"
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
              <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-64 rounded-xl border border-[#c8963e]/20 bg-[#0d1b3e] p-2 shadow-2xl shadow-black/40">
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
          </li>

          {links.slice(1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/82 hover:text-[#e8b96a] text-sm font-medium tracking-wide transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-2">
            <a
              href={executiveBoardApplicationHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e8b96a]/70 px-3.5 text-xs font-extrabold tracking-wide text-[#f4cf8c] transition duration-200 hover:-translate-y-0.5 hover:border-[#f4cf8c] hover:bg-[#e8b96a]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] lg:px-4"
            >
              Executive Board
            </a>
            <a
              href="/register"
              className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#e8b96a] to-[#c8963e] px-4 text-sm font-extrabold text-[#0d1b3e] shadow-[0_6px_18px_rgba(200,150,62,0.25)] transition duration-200 hover:-translate-y-0.5 hover:from-[#f4cf8c] hover:to-[#e8b96a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] lg:px-5"
            >
              Register
              <span aria-hidden="true" className="text-base leading-none transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8b96a] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="flex max-h-[calc(100svh-4rem)] flex-col gap-1 overflow-y-auto border-t border-[#c8963e]/20 bg-[#0d1b3e] px-4 py-3 pb-5 sm:px-6 md:hidden">
          <a
            href="#about"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-white/88 transition-colors hover:bg-white/5 hover:text-[#e8b96a]"
          >
            About
          </a>

          <Link
            href="/committees"
            onClick={() => setOpen(false)}
            className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-white/88 transition-colors hover:bg-white/5 hover:text-[#e8b96a]"
          >
            Committees
          </Link>

          <span className="my-2 h-px w-full bg-white/10" />

          {/* Resources list */}
          <div>
            <span className="mb-2 block px-3 text-xs font-semibold uppercase tracking-widest text-[#c8963e]">
              Resources
            </span>
            <div className="flex flex-col gap-2">
              {resources.map((r) => (
                <Link
                  key={r.id}
                  href={`/resources/${r.id}`}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium text-white/88 transition-colors hover:bg-white/5 hover:text-[#e8b96a]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c8963e]/15 text-[#e8b96a]">
                    <ResourceIcon icon={r.icon} className="h-3.5 w-3.5" />
                  </span>
                  {r.short}
                </Link>
              ))}
            </div>
          </div>

          <span className="my-2 h-px w-full bg-white/10" />

          <div>
            <button
              type="button"
              onClick={() => setMatrixOpen((v) => !v)}
              className="flex min-h-11 w-full items-center justify-between rounded-lg px-3 text-sm font-medium text-white/88 transition-colors hover:bg-white/5 hover:text-[#e8b96a]"
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
                className="mt-1 flex min-h-11 items-center rounded-lg px-6 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-[#e8b96a]"
              >
                Open Portfolio Matrix
              </a>
            )}
          </div>

          <span className="my-2 h-px w-full bg-white/10" />

          {links.slice(1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
            className="flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-white/88 transition-colors hover:bg-white/5 hover:text-[#e8b96a]"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <a
              href={executiveBoardApplicationHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#e8b96a]/70 px-5 text-sm font-extrabold text-[#f4cf8c] transition-colors hover:bg-[#e8b96a]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a]"
            >
              Executive Board Application
            </a>
            <a
              href="/register"
              onClick={() => setOpen(false)}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e8b96a] to-[#c8963e] px-5 text-sm font-extrabold text-[#0d1b3e] shadow-[0_6px_18px_rgba(200,150,62,0.25)] transition duration-200 hover:from-[#f4cf8c] hover:to-[#e8b96a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a]"
            >
              Register
              <span aria-hidden="true" className="text-base leading-none">→</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
