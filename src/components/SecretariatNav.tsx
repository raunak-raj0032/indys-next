"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#secretariat", label: "Secretariat" },
  { href: "/#committees", label: "Committees" },
  { href: "/#dates", label: "Dates" },
];

export default function SecretariatNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b border-[#c8963e]/20 transition-all duration-300 ${
        scrolled ? "bg-[#0d1b3e]/98 backdrop-blur-md" : "bg-[#0d1b3e]/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-sm">
            <Image
              src="/brand/indys-seal-mark.png"
              alt="INDYS '26"
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="font-[family-name:var(--font-serif)] text-xl font-bold tracking-wide text-white">
            INDYS<span className="text-[#c8963e]"> &apos;26</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <span className="hidden max-w-40 truncate text-xs font-medium uppercase tracking-widest text-white/60 lg:block">
            Secretariat
          </span>
          <span className="hidden h-4 w-px bg-white/15 lg:block" />
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/70 transition-colors hover:text-[#e8b96a]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-md bg-[#c8963e] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#e8b96a]"
          >
            Register
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/8 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M4 7h14M4 11h14M4 15h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="flex max-h-[80vh] flex-col gap-4 overflow-y-auto border-t border-[#c8963e]/20 bg-[#0d1b3e] px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-white/80 transition-colors hover:text-[#e8b96a]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="rounded-md bg-[#c8963e] px-5 py-2 text-center text-sm font-semibold text-white"
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
