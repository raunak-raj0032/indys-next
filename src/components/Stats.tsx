import { stats } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Stats() {
  return (
    <section className="bg-[#0d1b3e] border-b border-[#c8963e]/20 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.08} className="text-center text-white">
            <span className="block font-[family-name:var(--font-playfair)] text-5xl font-black text-[#c8963e] leading-none">
              {s.num}
            </span>
            <span className="block font-semibold text-sm mt-2 mb-1">{s.label}</span>
            <span className="block text-xs text-white/40 leading-snug">{s.sub}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
