"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { executiveBoardApplicationHref } from "@/lib/data";

export default function Hero() {
  const [introComplete, setIntroComplete] = useState(false);
  const [isPortrait, setIsPortrait] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(orientation: portrait)");
    const update = (e: MediaQueryList | MediaQueryListEvent) => setIsPortrait(e.matches);
    update(mq);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pb-16 pt-24 text-center sm:px-6 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#080f20] via-[#0d1b3e] to-[#132150]" />

      <video
        key={isPortrait ? "portrait" : "landscape"}
        className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
          introComplete ? "opacity-35 mix-blend-screen" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        onEnded={() => setIntroComplete(true)}
        aria-hidden="true"
      >
        <source src={isPortrait ? "/brand/indys_logo_portrait.mp4" : "/brand/indys_banner_logo_vid.mp4"} type="video/mp4" />
      </video>

      <div
        className={`absolute inset-0 bg-[#080f20] transition-opacity duration-1000 ${
          introComplete ? "opacity-70" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#080f20]/50 via-[#0d1b3e]/45 to-[#080f20]/90 transition-opacity duration-1000 ${
          introComplete ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`relative z-10 max-w-3xl mx-auto transition-all duration-1000 ${
          introComplete ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!introComplete}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={introComplete ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 16 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border border-[#c8963e]/35 bg-white/95 p-2 shadow-2xl shadow-black/25 sm:mb-6 sm:h-44 sm:w-44"
        >
          <Image
            src="/brand/indys-seal-mark.png"
            alt="INDYS seal"
            width={200}
            height={200}
            priority
            className="h-full w-full object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-[family-name:var(--font-serif)] font-black text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          INDYS <span className="text-[#c8963e]">&apos;26</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-[family-name:var(--font-serif)] text-white/90 mt-3"
          style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
        >
          Indo-Nepal Diplomatic Youth Summit
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-[family-name:var(--font-serif)] italic text-[#e8b96a] text-base mt-2 mb-6 sm:text-lg sm:mb-7"
        >
          Two Nations. One Dialogue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-[0.68rem] text-white/72 tracking-widest uppercase mb-8 sm:gap-3 sm:text-xs sm:mb-10"
        >
          <span>First Edition</span>
          <span className="text-[#c8963e]">/</span>
          <span>Siliguri, India</span>
          <span className="text-[#c8963e]">/</span>
          <span>Nov 20-22, 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mx-auto flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
        >
          <a
            href={executiveBoardApplicationHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#c8963e] px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#e8b96a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] sm:px-8 sm:py-3.5"
          >
            Executive Board Application
          </a>
          <a
            href="/register"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] sm:px-8 sm:py-3.5"
          >
            Register as a Delegate
          </a>
          <a
            href="#committees"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold tracking-wide text-white/90 transition-colors hover:border-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] sm:px-8 sm:py-3.5"
          >
            Explore Committees
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-2xl text-white/30 transition-opacity duration-700 ${
          introComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        v
      </motion.div>
    </section>
  );
}
