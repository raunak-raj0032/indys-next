import { days } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Dates() {
  return (
    <section id="dates" className="bg-[#0d1b3e] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-4">
          <span className="block text-[#e8b96a] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            04 — Event Dates
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold">
            20 · 21 · 22 November 2026
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-14">
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            November is the perfect window — post-monsoon, pre-winter, and aligned with academic
            calendars in both India and Nepal. Three days designed as a full arc:{" "}
            <em>open, debate, resolve.</em>
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {days.map((d, i) => (
            <FadeIn key={d.num} delay={i * 0.1}>
              <div
                className={`rounded-xl p-9 text-center border transition-colors ${
                  d.highlight
                    ? "bg-[#c8963e]/15 border-[#c8963e]"
                    : "bg-white/5 border-[#c8963e]/30 hover:bg-white/8"
                }`}
              >
                <div className="font-[family-name:var(--font-playfair)] text-6xl font-black text-[#c8963e] leading-none">
                  {d.num}
                </div>
                <div className="text-xs text-white/40 tracking-widest uppercase mt-1 mb-5">
                  {d.month}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] font-bold text-lg mb-3">
                  {d.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{d.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto bg-[#c8963e]/10 border border-[#c8963e]/30 rounded-xl px-8 py-6 text-center text-sm text-white/65 leading-relaxed">
            <strong className="text-[#e8b96a]">Why November 20–22 specifically:</strong>{" "}
            November 19 is World Citizens Day — the perfect symbolic date to inaugurate a summit
            about bilateral diplomacy and global citizenship. The timing was not accidental.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
