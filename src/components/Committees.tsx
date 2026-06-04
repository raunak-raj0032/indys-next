import Image from "next/image";
import { committees } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function Committees() {
  return (
    <section id="committees" className="bg-[#f7f3eb] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-4">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Nine Committees. One Stage.
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#0d1b3e] leading-tight">
            Every Committee at INDYS<br className="hidden sm:block" /> is Chosen for a Reason.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-14">
          <p className="text-[#6b6b6b] max-w-xl mx-auto">
            Together they represent the full spectrum of international diplomacy — from the world&apos;s
            highest security chamber to a crisis room that has no rules except power.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {committees.map((c, i) => {
            if (c.span === "full") {
              return (
                <FadeIn key={c.id} delay={0} className="md:col-span-3">
                  <div className="bg-[#0d1b3e] border-2 border-[#c8963e] rounded-xl p-8 md:p-10 overflow-hidden">
                    <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
                      <div>
                        <span className="inline-block bg-[#c8963e] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-5">
                          {c.tag}
                        </span>
                        <h3 className="font-[family-name:var(--font-playfair)] text-white text-3xl font-bold mb-1">
                          {c.name}
                        </h3>
                        {c.subtitle && (
                          <p className="italic text-[#e8b96a] text-sm mb-5">{c.subtitle}</p>
                        )}
                        <p className="text-white/70 text-base max-w-2xl leading-relaxed">{c.description}</p>
                      </div>
                      <CommitteeLogo c={c} featured />
                    </div>
                  </div>
                </FadeIn>
              );
            }

            if (c.span === "double") {
              return (
                <FadeIn key={c.id} delay={i * 0.05} className="md:col-span-2">
                  <CommitteeCard c={c} />
                </FadeIn>
              );
            }

            return (
              <FadeIn key={c.id} delay={i * 0.05}>
                <CommitteeCard c={c} />
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CommitteeCard({ c }: { c: (typeof committees)[number] }) {
  return (
    <div className="bg-white border border-[#ede8de] rounded-xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full">
      <div className="mb-5 flex min-h-20 items-start justify-between gap-5">
        <div>
          {c.abbr && (
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-[#c8963e] leading-none mb-2">
              {c.abbr}
            </div>
          )}
          <h3 className="font-[family-name:var(--font-playfair)] text-[#0d1b3e] font-bold text-lg mb-1">
            {c.name}
          </h3>
          {c.subtitle && (
            <p className="text-xs text-[#6b6b6b] italic">{c.subtitle}</p>
          )}
        </div>
        <CommitteeLogo c={c} />
      </div>
      <p className="text-[#6b6b6b] text-sm leading-relaxed">{c.description}</p>
    </div>
  );
}

function CommitteeLogo({
  c,
  featured = false,
}: {
  c: (typeof committees)[number];
  featured?: boolean;
}) {
  return (
    <div
      className={
        featured
          ? "mx-auto flex h-48 w-48 items-center justify-center rounded-full bg-white/96 p-7 shadow-2xl shadow-black/20"
          : "shrink-0 flex h-20 w-20 items-center justify-center rounded-full bg-[#faf4e8] p-3"
      }
    >
      <Image
        src={c.logo}
        alt={c.logoAlt}
        width={featured ? 220 : 120}
        height={featured ? 180 : 100}
        className="max-h-full w-auto object-contain"
      />
    </div>
  );
}
