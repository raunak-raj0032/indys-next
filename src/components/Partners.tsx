import { tiers } from "@/lib/data";
import FadeIn from "./FadeIn";

const tierStyles: Record<string, { card: string; heading: string; check: string; role: string }> = {
  platinum: {
    card: "bg-[#0d1b3e] border-[#c8963e] text-white",
    heading: "text-white",
    check: "text-[#c8963e]",
    role: "text-white/50",
  },
  gold: {
    card: "bg-[#fff8ed] border-[#c8963e]",
    heading: "text-[#0d1b3e]",
    check: "text-[#c8963e]",
    role: "text-[#0d1b3e]/50",
  },
  silver: {
    card: "bg-white border-[#c0c0c0]",
    heading: "text-[#0d1b3e]",
    check: "text-[#888]",
    role: "text-[#0d1b3e]/50",
  },
  venue: {
    card: "bg-[#f0f4ff] border-[#0d1b3e]",
    heading: "text-[#0d1b3e]",
    check: "text-[#0d1b3e]",
    role: "text-[#0d1b3e]/50",
  },
};

export default function Partners() {
  return (
    <section id="partners" className="bg-[#f7f3eb] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-4">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            05 — Partnership Tiers
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-tight">
            Invest in the Room<br className="hidden sm:block" /> Where Decisions Begin
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-14">
          <p className="text-[#6b6b6b] max-w-xl mx-auto">
            INDYS offers partners direct access to 500+ high-achieving students, their families,
            and the educators and policymakers who attend. Every tier is designed to deliver brand
            presence at the moments of maximum attention.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {tiers.map((t, i) => {
            const s = tierStyles[t.id];
            return (
              <FadeIn key={t.id} delay={i * 0.08}>
                <div className={`border-2 rounded-xl p-8 ${s.card}`}>
                  <div className="mb-5">
                    <h3 className={`font-[family-name:var(--font-playfair)] text-2xl font-bold ${s.heading}`}>
                      {t.name}
                    </h3>
                    <span className={`text-xs font-semibold tracking-widest uppercase ${s.role}`}>
                      {t.role}
                    </span>
                  </div>
                  <p className={`text-xs mb-5 opacity-60 ${s.heading}`}>{t.category}</p>
                  <ul className="space-y-2.5">
                    {t.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-2 text-sm">
                        <span className={`font-bold mt-px ${s.check}`}>✓</span>
                        <span className={t.id === "platinum" ? "text-white/80" : "text-[#6b6b6b]"}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
