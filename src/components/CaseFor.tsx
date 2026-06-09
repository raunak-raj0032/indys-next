import { casePoints } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function CaseFor() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            02 — Why This Matters
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold text-[#0d1b3e]">
            The Case for INDYS
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {casePoints.map((p, i) => (
            <FadeIn
              key={p.num}
              delay={i * 0.07}
              className="border border-[#ede8de] rounded-xl p-8 hover:border-[#c8963e] hover:shadow-lg transition-all duration-200 group"
            >
              <span className="block font-[family-name:var(--font-serif)] text-5xl font-black text-[#ede8de] leading-none mb-3 group-hover:text-[#f0e2ca] transition-colors">
                {p.num}
              </span>
              <h3 className="font-[family-name:var(--font-serif)] text-[#c8963e] font-bold text-lg mb-3">
                {p.heading}
              </h3>
              <p className="text-[#6b6b6b] text-sm leading-relaxed">{p.body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
