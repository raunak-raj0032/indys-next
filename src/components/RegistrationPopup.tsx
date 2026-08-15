"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const COOKIE_NAME = "indys_individual_registration_popup_seen";
const COOKIE_MAX_AGE_SECONDS = 5 * 24 * 60 * 60;

function hasSeenPopup() {
  return document.cookie.split("; ").some((cookie) => cookie.startsWith(`${COOKIE_NAME}=`));
}

function rememberPopup() {
  document.cookie = `${COOKIE_NAME}=1; Max-Age=${COOKIE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax`;
}

export default function RegistrationPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (hasSeenPopup()) {
      return;
    }

    const timer = window.setTimeout(() => {
      rememberPopup();
      setIsOpen(true);
    }, 15_000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-[#050b18]/75 p-4 backdrop-blur-sm sm:items-center sm:p-6" role="presentation">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="registration-popup-title"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[#c8963e]/45 bg-[#f7f3eb] p-7 text-[#151515] shadow-2xl shadow-black/40 sm:p-9"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-[#c8963e]" />
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close registration announcement"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#454545] transition-colors hover:bg-[#ede8de] hover:text-[#0d1b3e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8963e]"
        >
          ×
        </button>

        <p className="pr-10 text-xs font-extrabold uppercase tracking-[0.2em] text-[#a86f1f]">Individual delegate registration</p>
        <h2 id="registration-popup-title" className="mt-3 max-w-sm font-[family-name:var(--font-serif)] text-4xl font-bold leading-[0.98] text-[#0d1b3e] sm:text-5xl">
          Registrations are open.
        </h2>
        <p className="mt-5 max-w-md text-base leading-7 text-[#454545]">
          Apply as an individual delegate for INDYS &apos;26. Choose the India or Nepal form and begin your application.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-lg bg-[#0d1b3e] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#132150] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8963e]"
          >
            Register
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-[#454545] transition-colors hover:bg-[#ede8de] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8963e]"
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    </div>
  );
}
