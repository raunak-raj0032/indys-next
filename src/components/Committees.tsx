import Image from "next/image";
import Link from "next/link";
import { committees } from "@/lib/data";
import FadeIn from "./FadeIn";

const homeCommittees = committees.slice(0, 4);

export default function Committees() {
  return (
    <section id="committees" className="bg-[#f7f3eb] py-16 px-4 sm:px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-4">
          <span className="section-eyebrow mb-3">
            Eleven Committees. One Stage.
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl font-bold text-[#0d1b3e] leading-tight">
            Every Committee at INDYS<br className="hidden sm:block" /> is Chosen for a Reason.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="text-center mb-9 md:mb-14">
          <p className="section-copy mx-auto max-w-2xl">
            Together they represent the full spectrum of international diplomacy — from the world&apos;s
            highest security chamber to a crisis room that has no rules except power, with a press
            corps recording the summit in real time.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {homeCommittees.map((c, i) => {
            if (c.span === "full") {
              return (
                <FadeIn key={c.id} delay={0} className="md:col-span-3">
                  <Link href={`/committees/${c.id}`} className="group block">
                    <div className="bg-[#0d1b3e] border-2 border-[#c8963e] rounded-xl p-5 sm:p-8 md:p-10 overflow-hidden group-hover:border-[#e8b96a] transition-colors duration-200">
                      <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-center md:gap-8">
                        <div>
                          <span className="inline-block bg-[#c8963e] text-white text-[0.68rem] font-bold tracking-widest uppercase px-3 py-1 rounded mb-4 sm:text-xs sm:mb-5">
                            {c.tag}
                          </span>
                          <h3 className="font-[family-name:var(--font-serif)] text-white text-2xl sm:text-3xl font-bold mb-1 group-hover:text-[#e8b96a] transition-colors duration-200">
                            {c.name}
                          </h3>
                          {c.subtitle && (
                            <p className="italic text-[#e8b96a] text-sm mb-5">{c.subtitle}</p>
                          )}
                          <p className="dark-copy max-w-2xl">{c.description}</p>
                          <span className="inline-flex items-center gap-1.5 mt-6 text-[#c8963e] group-hover:text-[#e8b96a] text-xs font-semibold tracking-widest uppercase transition-colors">
                            Explore Committee
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                        <CommitteeLogo c={c} featured />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            }

            return (
              <FadeIn
                key={c.id}
                delay={i * 0.05}
                className={`h-full ${c.id === "ipc" ? "md:col-start-2" : ""}`}
              >
                <CommitteeCard c={c} />
              </FadeIn>
            );
          })}
        </div>
        <FadeIn delay={0.18} className="mt-10 text-center">
          <Link
            href="/committees"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0d1b3e] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#132150] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8963e]"
          >
            See All Committees
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function CommitteeCard({ c }: { c: (typeof committees)[number] }) {
  return (
    <Link href={`/committees/${c.id}`} className="group block h-full">
      <div className="bg-white border border-[#ede8de] rounded-xl p-5 sm:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 h-full flex flex-col">
        <div className="mb-4 flex min-h-16 items-start justify-between gap-4 sm:mb-5 sm:min-h-20 sm:gap-5">
          <div>
            {c.abbr && (
              <div className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl font-black text-[#c8963e] leading-none mb-2">
                {c.abbr}
              </div>
            )}
            <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] font-bold text-lg mb-1 group-hover:text-[#c8963e] transition-colors">
              {c.name}
            </h3>
            {c.subtitle && (
              <p className="fine-copy italic">{c.subtitle}</p>
            )}
          </div>
          <CommitteeLogo c={c} />
        </div>
        <p className="card-copy flex-1">{c.description}</p>
        <span className="inline-flex items-center gap-1 mt-4 text-[#c8963e]/70 group-hover:text-[#c8963e] text-xs font-semibold tracking-wider uppercase transition-colors">
          Learn More
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M2.5 5h5M5 2.5l2.5 2.5L5 7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

export function CommitteeLogo({
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
          ? "mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white/96 p-5 shadow-2xl shadow-black/20 sm:h-48 sm:w-48 sm:p-7"
          : "shrink-0 flex h-16 w-16 items-center justify-center rounded-full bg-[#faf4e8] p-2.5 sm:h-20 sm:w-20 sm:p-3"
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
