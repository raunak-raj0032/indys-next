"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center px-6 pt-24 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080f20] via-[#0d1b3e] to-[#132150]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(200,150,62,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(200,150,62,0.08),transparent_55%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#e8b96a] text-xs font-semibold tracking-[0.22em] uppercase mb-6"
        >
          ★ Youth Minds. Diplomatic Futures. ★
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-[family-name:var(--font-playfair)] font-black text-white leading-none tracking-tight"
          style={{ fontSize: "clamp(5rem, 16vw, 11rem)" }}
        >
          INDYS{" "}
          <span className="text-[#c8963e]">&apos;26</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-[family-name:var(--font-playfair)] text-white/90 mt-3"
          style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)" }}
        >
          Indo–Nepal Diplomatic Youth Summit
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-[family-name:var(--font-playfair)] italic text-[#e8b96a] text-lg mt-2 mb-7"
        >
          Two Nations. One Dialogue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3 text-xs text-white/50 tracking-widest uppercase mb-10"
        >
          <span>First Edition</span>
          <span className="text-[#c8963e]">·</span>
          <span>Siliguri, India</span>
          <span className="text-[#c8963e]">·</span>
          <span>Nov 20–22, 2026</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
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

      {/* Scroll caret */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-2xl z-10"
      >
        ↓
      </motion.div>
    </section>
  );
}
