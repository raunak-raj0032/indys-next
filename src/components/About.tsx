import { reasons } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-[#f7f3eb] py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left — text */}
        <FadeIn direction="left">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            South Asia&apos;s first bilateral youth diplomacy conclave
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-tight mb-6">
            What is INDYS?
          </h2>
          <div className="space-y-4 text-[#6b6b6b] text-[1.05rem] leading-relaxed">
            <p>
              INDYS is an authorized, government-recognised Model United Nations conference
              bringing together student delegates from India and Nepal under one roof for the
              first time.
            </p>
            <p>
              Anchored in Siliguri — the geographic, cultural, and commercial gateway between
              the two nations — INDYS simulates the world&apos;s most consequential multilateral
              bodies across 10 committees and a dedicated International Press Corps.
            </p>
            <p>
              From the chambers of the UN Security Council to a first-of-its-kind
              Indo-Nepal Bilateral Meet, INDYS is designed for delegates who understand that
              diplomacy is not abstract —{" "}
              <strong className="text-[#1a1a1a]">
                it is urgent, local, and deeply human.
              </strong>
            </p>
          </div>
        </FadeIn>

        {/* Right — why Siliguri */}
        <FadeIn direction="right" delay={0.1}>
          <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold text-[#0d1b3e] mb-7">
            Why Siliguri?
          </h3>
          <div className="space-y-6">
            {reasons.map((r) => (
              <div key={r.num} className="flex gap-5">
                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-[#c8963e] text-white text-sm font-bold flex items-center justify-center mt-0.5">
                  {r.num}
                </span>
                <div>
                  <h4 className="font-[family-name:var(--font-serif)] text-[#c8963e] font-semibold mb-1">
                    {r.heading}
                  </h4>
                  <p className="text-[#6b6b6b] text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
