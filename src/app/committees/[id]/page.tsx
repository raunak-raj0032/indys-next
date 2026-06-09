import { committees } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CommitteeNav from "@/components/CommitteeNav";
import SubpageFooter from "@/components/SubpageFooter";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return committees.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const committee = committees.find((c) => c.id === id);
  if (!committee) return {};
  return {
    title: `${committee.name} — INDYS '26`,
    description: committee.description,
  };
}

const difficultyStyles: Record<string, { bg: string; text: string; ring: string }> = {
  Beginner:     { bg: "bg-emerald-500",  text: "text-white", ring: "ring-emerald-400/30" },
  Intermediate: { bg: "bg-blue-500",     text: "text-white", ring: "ring-blue-400/30" },
  Advanced:     { bg: "bg-amber-500",    text: "text-white", ring: "ring-amber-400/30" },
  Expert:       { bg: "bg-red-600",      text: "text-white", ring: "ring-red-400/30" },
  Open:         { bg: "bg-purple-500",   text: "text-white", ring: "ring-purple-400/30" },
};

export default async function CommitteePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const committee = committees.find((c) => c.id === id);
  if (!committee) notFound();

  const diff = difficultyStyles[committee.difficulty] ?? { bg: "bg-gray-500", text: "text-white", ring: "ring-gray-400/30" };

  const otherCommittees = committees
    .filter((c) => c.id !== id)
    .slice(0, 3);

  const displayName = committee.abbr ?? committee.name;

  return (
    <>
      <CommitteeNav committeeName={displayName} />

      <main>
        {/* ── Hero ── */}
        <section className="relative bg-[#060c1a] pt-24 pb-0 px-6 overflow-hidden">
          {/* Background photo */}
          <Image
            src={committee.heroImage}
            alt=""
            fill
            className="object-cover object-center opacity-[0.22] mix-blend-luminosity"
            priority
            aria-hidden="true"
          />
          {/* Dark gradient vignette over photo */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060c1a]/60 via-[#0d1b3e]/40 to-[#060c1a]/95" />
          {/* Dot-grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, #c8963e 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Radial glow */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
            <div className="w-[600px] h-[400px] rounded-full bg-[#c8963e]/5 blur-3xl -translate-y-1/4" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center pb-16">
            {/* Back link */}
            <Link
              href="/#committees"
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#e8b96a] text-xs font-semibold tracking-widest uppercase transition-colors mb-10"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              All Committees
            </Link>

            {/* Logo mark */}
            <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full border border-[#c8963e]/25 bg-white/96 p-5 shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <Image
                src={committee.logo}
                alt={committee.logoAlt}
                width={160}
                height={140}
                className="max-h-full w-auto object-contain"
                priority
              />
            </div>

            {/* Tag badge */}
            {committee.tag && (
              <span className="inline-block bg-[#c8963e] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-5">
                {committee.tag}
              </span>
            )}

            {/* Abbreviation */}
            {committee.abbr && (
              <div className="font-[family-name:var(--font-serif)] text-[#c8963e] text-6xl font-black leading-none mb-2 drop-shadow-lg">
                {committee.abbr}
              </div>
            )}

            {/* Full name */}
            <h1
              className="font-[family-name:var(--font-serif)] text-white font-bold leading-tight mb-3"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)" }}
            >
              {committee.name}
            </h1>

            {/* Subtitle */}
            {committee.subtitle && (
              <p className="font-[family-name:var(--font-serif)] italic text-[#e8b96a] text-lg mb-8">
                {committee.subtitle}
              </p>
            )}

            {/* Chips */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
              <span
                className={`inline-flex items-center gap-1.5 ${diff.bg} ${diff.text} text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm ring-1 ${diff.ring}`}
              >
                {committee.difficulty}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 text-white/70 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/12">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-60">
                  <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 2.5v2.5l1.5 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                {committee.seats} Delegates
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/8 text-white/70 text-xs font-medium px-3.5 py-1.5 rounded-full border border-white/12">
                {committee.format}
              </span>
            </div>
          </div>

          {/* Wave separator */}
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full -mb-px"
            preserveAspectRatio="none"
          >
            <path
              d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
              fill="#f7f3eb"
            />
          </svg>
        </section>

        {/* ── About ── */}
        <section className="bg-[#f7f3eb] py-20 px-6">
          <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Description */}
            <FadeIn>
              <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                About the Committee
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl md:text-3xl font-bold mb-5 leading-snug">
                {committee.name}
              </h2>
              <div className="border-l-2 border-[#c8963e]/40 pl-5 mb-6">
                <p className="text-[#3a3a3a] text-base leading-relaxed italic">
                  &ldquo;{committee.description}&rdquo;
                </p>
              </div>
              {/* Agenda list */}
              <div>
                <h3 className="text-[#0d1b3e] text-sm font-bold tracking-wider uppercase mb-4">
                  Agenda Items
                </h3>
                <ol className="space-y-3">
                  {committee.agenda.map((item, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="shrink-0 w-6 h-6 rounded-full bg-[#0d1b3e] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-[#3a3a3a] text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>

            {/* Info panel */}
            <FadeIn delay={0.15} direction="right">
              <div className="bg-white border border-[#ede8de] rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-[#0d1b3e] px-6 py-4">
                  <p className="text-[#c8963e] text-xs font-bold tracking-widest uppercase">
                    Committee Profile
                  </p>
                </div>
                <div className="px-6 py-5 divide-y divide-[#f0ebe2] space-y-0">
                  <InfoRow label="Difficulty">
                    <span
                      className={`inline-block ${diff.bg} ${diff.text} text-xs font-bold px-2.5 py-0.5 rounded-full`}
                    >
                      {committee.difficulty}
                    </span>
                  </InfoRow>
                  <InfoRow label="Delegates">
                    <span className="text-[#0d1b3e] font-semibold text-sm">{committee.seats}</span>
                  </InfoRow>
                  <InfoRow label="Format">
                    <span className="text-[#0d1b3e] text-sm font-medium">{committee.format}</span>
                  </InfoRow>
                  <InfoRow label="Conference Days">
                    <span className="text-[#0d1b3e] text-sm font-medium">Nov 20–22, 2026</span>
                  </InfoRow>
                  <InfoRow label="Venue">
                    <span className="text-[#0d1b3e] text-sm font-medium">Siliguri, India</span>
                  </InfoRow>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Background Guide Placeholder ── */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-12">
              <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Research Material
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-3xl font-bold mb-3">
                Background Guide
              </h2>
              <p className="text-[#6b6b6b] max-w-lg mx-auto text-sm leading-relaxed">
                The official research document for this committee. It will cover all agenda
                items, historical context, key stakeholders, bloc positions, and guiding
                questions for debate.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative border-2 border-dashed border-[#e2ddd4] rounded-2xl p-10 md:p-14 bg-[#faf8f4] overflow-hidden">
                {/* Watermark */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
                  <span className="font-[family-name:var(--font-serif)] font-black text-[#0d1b3e]/[0.035] leading-none"
                    style={{ fontSize: "clamp(6rem, 20vw, 14rem)" }}>
                    BG
                  </span>
                </div>

                {/* Status badge */}
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-amber-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    Coming Soon
                  </span>
                </div>

                <div className="relative text-center">
                  {/* Document icon */}
                  <div className="mx-auto mb-6 w-16 h-16 bg-[#0d1b3e] rounded-2xl flex items-center justify-center shadow-xl">
                    <svg width="28" height="32" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="20" height="28" rx="2.5" stroke="#c8963e" strokeWidth="1.5"/>
                      <path d="M5 7h12M5 11h12M5 15h8" stroke="#c8963e" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="14" y="20" width="13" height="13" rx="2" fill="#c8963e"/>
                      <path d="M20.5 24v5M18 26.5h5" stroke="#0d1b3e" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-1">
                    {displayName} Background Guide
                  </h3>
                  <p className="text-[#6b6b6b] text-sm mb-8">
                    Releasing ahead of the conference — November 2026
                  </p>

                  {/* Topics / agenda chips */}
                  <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {committee.agenda.map((item, i) => (
                      <span
                        key={i}
                        className="bg-[#0d1b3e]/5 text-[#0d1b3e]/70 text-xs px-3 py-1.5 rounded-full border border-[#0d1b3e]/8 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Disabled download */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      disabled
                      className="inline-flex items-center gap-2 bg-[#0d1b3e]/20 text-[#0d1b3e]/40 font-semibold text-sm px-7 py-3 rounded-lg cursor-not-allowed select-none"
                    >
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                        <path d="M7 1v8M4 7l3 3 3-3M2 12.5h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Download PDF
                    </button>
                    <p className="text-[#6b6b6b] text-xs">
                      Available once released
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── Other Committees ── */}
        <section className="bg-[#0d1b3e] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-10">
              <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Also at INDYS &apos;26
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-white text-2xl font-bold">
                Explore Other Committees
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {otherCommittees.map((c, i) => (
                <FadeIn key={c.id} delay={i * 0.07}>
                  <Link
                    href={`/committees/${c.id}`}
                    className="group block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c8963e]/40 rounded-xl p-5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 p-1.5">
                        <Image
                          src={c.logo}
                          alt={c.logoAlt}
                          width={36}
                          height={36}
                          className="max-h-full w-auto object-contain"
                        />
                      </div>
                      {c.abbr && (
                        <span className="font-[family-name:var(--font-serif)] text-[#c8963e] font-black text-xl leading-none">
                          {c.abbr}
                        </span>
                      )}
                    </div>
                    <h3 className="text-white/80 group-hover:text-white text-sm font-semibold leading-snug transition-colors">
                      {c.name}
                    </h3>
                  </Link>
                </FadeIn>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/#committees"
                className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#e8b96a] text-sm font-medium transition-colors"
              >
                View all 10 committees
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SubpageFooter />
    </>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3.5">
      <span className="text-[#6b6b6b] text-xs font-medium uppercase tracking-wider shrink-0">
        {label}
      </span>
      <div className="text-right">{children}</div>
    </div>
  );
}
