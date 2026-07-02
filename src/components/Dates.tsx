import FadeIn from "./FadeIn";

export default function Dates() {
  return (
    <section id="dates" className="bg-[#0d1b3e] py-16 px-4 text-white sm:px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-4">
          <span className="section-eyebrow mb-3 text-[#e8b96a]">
            Event Dates
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold">
            20 · 21 · 22 November 2026
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-9 md:mb-14">
          <p className="dark-copy mx-auto max-w-2xl">
            November is the perfect window — post-monsoon, pre-winter, and aligned with academic
            calendars in both India and Nepal. The cool Siliguri air, no examination conflicts,
            and maximum delegate availability make the summit a full arc:{" "}
            <em>open, debate, resolve.</em>
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {[
            { num: "20", title: "Open" },
            { num: "21", title: "Debate" },
            { num: "22", title: "Resolve" },
          ].map((d, i) => (
            <FadeIn key={d.num} delay={i * 0.1}>
              <div className="rounded-xl p-6 text-center border bg-white/5 border-[#c8963e]/30 hover:bg-white/8 transition-colors md:p-9">
                <div className="font-[family-name:var(--font-serif)] text-5xl font-black text-[#c8963e] leading-none md:text-6xl">
                  {d.num}
                </div>
                <div className="text-xs text-white/88 tracking-widest uppercase mt-1 mb-3 md:mb-5">
                  November
                </div>
                <h3 className="font-[family-name:var(--font-serif)] font-bold text-lg">
                  {d.title}
                </h3>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="dark-card-copy mx-auto max-w-2xl rounded-xl border border-[#c8963e]/30 bg-[#c8963e]/10 px-5 py-5 text-center md:px-8 md:py-6">
            Three days designed for maximum delegate availability, sustained debate, and a complete
            summit journey from opening session to final resolution.
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
