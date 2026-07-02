import { stats } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Stats() {
  return (
    <section className="bg-[#0d1b3e] border-b border-[#c8963e]/20 py-12 px-4 sm:px-6 md:py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-9 md:gap-6">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08} className="text-center text-white flex flex-col items-center">
            <span
              className="block font-[family-name:var(--font-serif)] font-light text-[#c8963e] leading-none"
              style={{ fontSize: "clamp(2.75rem, 14vw, 5rem)" }}
            >
              {s.num}
            </span>
            <span className="mt-2 mb-2 block w-6 h-px bg-[#c8963e]/40 sm:mt-3 sm:mb-3" />
            <span className="block text-[0.68rem] font-bold tracking-[0.12em] uppercase text-white sm:text-xs sm:tracking-[0.16em]">
              {s.label}
            </span>
            <span className="mt-1.5 block max-w-[180px] text-[0.82rem] leading-[1.45] text-white/78 sm:mt-2 sm:text-[0.9rem] sm:leading-[1.55]">
              {s.sub}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
