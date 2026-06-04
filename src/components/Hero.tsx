"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center px-6 pt-24 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#080f20] via-[#0d1b3e] to-[#132150]" />
      <video
        className={`absolute inset-0 h-full w-full object-cover object-[50%_64%] transition-opacity duration-1000 md:object-[50%_68%] ${
          introComplete ? "opacity-35 mix-blend-screen" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        onEnded={() => setIntroComplete(true)}
        aria-hidden="true"
      >
        <source src="/brand/indys-logo-animation.mp4" type="video/mp4" />
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
          initial={{ opacity: 0, y: 16 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7 }}
          className="absolute -right-4 -top-14 hidden h-24 w-24 items-center justify-center rounded-full border border-[#c8963e]/35 bg-white/95 p-2 shadow-2xl shadow-black/25 md:flex lg:-right-28 lg:top-0"
        >
          <Image
            src="/brand/indys-seal-mark.png"
            alt="INDYS seal"
            width={128}
            height={128}
            priority
            className="h-full w-full object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#e8b96a] text-xs font-semibold tracking-[0.22em] uppercase mb-6"
        >
          Youth Minds. Diplomatic Futures.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-playfair)] font-black text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(5rem, 16vw, 11rem)" }}
        >
          INDYS <span className="text-[#c8963e]">&apos;26</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-[family-name:var(--font-playfair)] text-white/90 mt-3"
          style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
        >
          Indo-Nepal Diplomatic Youth Summit
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-[family-name:var(--font-playfair)] italic text-[#e8b96a] text-lg mt-2 mb-7"
        >
          Two Nations. One Dialogue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 text-xs text-white/50 tracking-widest uppercase mb-10"
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
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#committees"
            className="bg-[#c8963e] hover:bg-[#e8b96a] text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm tracking-wide"
          >
            Explore Committees
          </a>
          <a
            href="#partners"
            className="border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-md transition-colors text-sm tracking-wide"
          >
            Become a Partner
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
