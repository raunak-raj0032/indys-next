import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { committees } from "@/lib/data";
import { CommitteeCard, CommitteeLogo } from "@/components/Committees";
import CommitteeNav from "@/components/CommitteeNav";
import FadeIn from "@/components/FadeIn";
import SubpageFooter from "@/components/SubpageFooter";
import { committeeListJsonLd, createMetadata, jsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Committees - INDYS '26",
  description:
    "Explore all INDYS '26 committees, from the Indo-Nepal Bilateral Meet to UN bodies, regional forums, crisis simulations, and press.",
  path: "/committees",
  image: "/committees/bilateral-hero.jpg",
  keywords: ["INDYS committees", "MUN committees", "UNSC MUN", "Indo-Nepal Bilateral Meet"],
});

export default function CommitteesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(committeeListJsonLd()) }}
      />
      <CommitteeNav committeeName="Committees" />
      <main>
        <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-[#060c1a] px-6 pb-14 pt-28">
          <Image
            src="/committees/bilateral-hero.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-38"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/92 via-[#060c1a]/68 to-[#060c1a]/28" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a]/90 via-transparent to-[#060c1a]/20" />

          <div className="relative mx-auto w-full max-w-6xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-[0.1em] text-white/78 transition-colors hover:text-[#e8b96a]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Home
            </Link>
            <FadeIn className="max-w-3xl">
              <span className="mb-3 block text-base font-extrabold uppercase tracking-[0.08em] text-[#e8b96a] md:text-lg">
                INDYS &apos;26 Committees
              </span>
              <h1 className="font-[family-name:var(--font-serif)] text-5xl font-bold leading-none text-white md:text-7xl">
                Every Committee at INDYS
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-lg">
                Explore all diplomatic rooms, regional bodies, crisis simulations, and press tracks
                built for the INDYS &apos;26 delegate experience.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#f7f3eb] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            {committees.map((committee, index) => {
              if (committee.span === "full") {
                return (
                  <FadeIn key={committee.id} delay={0} className="md:col-span-3">
                    <Link href={`/committees/${committee.id}`} className="group block">
                      <div className="overflow-hidden rounded-xl border-2 border-[#c8963e] bg-[#0d1b3e] p-8 transition-colors duration-200 group-hover:border-[#e8b96a] md:p-10">
                        <div className="grid gap-8 md:grid-cols-[1fr_220px] md:items-center">
                          <div>
                            <span className="mb-5 inline-block rounded bg-[#c8963e] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                              {committee.tag}
                            </span>
                            <h2 className="font-[family-name:var(--font-serif)] mb-1 text-3xl font-bold text-white transition-colors duration-200 group-hover:text-[#e8b96a]">
                              {committee.name}
                            </h2>
                            {committee.subtitle && (
                              <p className="mb-5 text-sm italic text-[#e8b96a]">{committee.subtitle}</p>
                            )}
                            <p className="dark-copy max-w-2xl">{committee.description}</p>
                            <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#c8963e] transition-colors group-hover:text-[#e8b96a]">
                              Explore Committee
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                                <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          </div>
                          <CommitteeLogo c={committee} featured />
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                );
              }

              return (
                <FadeIn key={committee.id} delay={index * 0.04} className="h-full">
                  <CommitteeCard c={committee} />
                </FadeIn>
              );
            })}
          </div>
        </section>
      </main>
      <SubpageFooter />
    </>
  );
}
