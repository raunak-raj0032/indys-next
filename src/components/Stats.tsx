import { stats } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Stats() {
  return (
    <section className="bg-[#0d1b3e] border-b border-[#c8963e]/20 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08} className="text-center text-white flex flex-col items-center">
            <span
              className="block font-[family-name:var(--font-serif)] font-light text-[#c8963e] leading-none"
              style={{ fontSize: "clamp(3.5rem, 6vw, 5rem)" }}
            >
              {s.num}
            </span>
            <span className="mt-3 mb-3 block w-6 h-px bg-[#c8963e]/40" />
            <span className="block text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white/90">
              {s.label}
            </span>
            <span className="block text-xs text-white/45 leading-relaxed mt-2 max-w-[160px]">
              {s.sub}
            </span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
