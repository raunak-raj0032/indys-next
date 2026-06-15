import { resources } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ResourceNav from "@/components/ResourceNav";
import SubpageFooter from "@/components/SubpageFooter";
import ResourceIcon from "@/components/ResourceIcon";
import FadeIn from "@/components/FadeIn";
import WhatIsMun from "@/components/resources/WhatIsMun";
import MunProcedures from "@/components/resources/MunProcedures";
import Resolutions from "@/components/resources/Resolutions";

export function generateStaticParams() {
  return resources.map((r) => ({ id: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = resources.find((r) => r.id === id);
  if (!resource) return {};
  return {
    title: `${resource.title} — INDYS '26 Resources`,
    description: resource.description,
  };
}

const contentMap: Record<string, React.ReactNode> = {
  "what-is-mun": <WhatIsMun />,
  procedures: <MunProcedures />,
  resolutions: <Resolutions />,
};

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = resources.find((r) => r.id === id);
  if (!resource) notFound();

  const otherResources = resources.filter((r) => r.id !== id);

  return (
    <>
      <ResourceNav resourceName={resource.title} />

      <main>
        {/* ── Hero ── */}
        <section className="relative bg-[#060c1a] pt-24 pb-0 px-6 overflow-hidden">
          {/* Background photo */}
          <Image
            src={resource.heroImage}
            alt=""
            fill
            className="object-cover object-center opacity-[0.24] mix-blend-luminosity"
            priority
            aria-hidden="true"
          />
          {/* Dark gradient vignette over photo */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060c1a]/65 via-[#0d1b3e]/45 to-[#060c1a]/95" />
          {/* Dot-grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #c8963e 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          {/* Radial glow */}
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
            <div className="w-[600px] h-[400px] rounded-full bg-[#c8963e]/8 blur-3xl -translate-y-1/4" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center pb-16">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#e8b96a] text-xs font-semibold tracking-widest uppercase transition-colors mb-10"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Resources
            </Link>

            {/* Icon mark */}
            <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-[#c8963e]/25 bg-[#c8963e]/10 text-[#e8b96a] shadow-2xl shadow-black/50 ring-1 ring-white/10">
              <ResourceIcon icon={resource.icon} className="h-12 w-12" />
            </div>

            {/* Tag badge */}
            <span className="inline-block bg-[#c8963e] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 rounded mb-5">
              {resource.tagline}
            </span>

            {/* Title */}
            <h1
              className="font-[family-name:var(--font-serif)] text-white font-bold leading-tight mb-3"
              style={{ fontSize: "clamp(1.9rem, 5vw, 3rem)" }}
            >
              {resource.title}
            </h1>

            {/* Subtitle */}
            <p className="font-[family-name:var(--font-serif)] italic text-[#e8b96a] text-lg mb-6">
              {resource.subtitle}
            </p>

            {/* Description */}
            <p className="text-white/65 text-base leading-relaxed max-w-2xl mx-auto">
              {resource.description}
            </p>
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

        {/* ── Body content ── */}
        <section className="bg-[#f7f3eb] py-20 px-6">
          {contentMap[resource.id]}
        </section>

        {/* ── Other resources ── */}
        <section className="bg-[#0d1b3e] py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-10">
              <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
                Keep Learning
              </span>
              <h2 className="font-[family-name:var(--font-serif)] text-white text-2xl font-bold">
                More from the Resource Library
              </h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherResources.map((r, i) => (
                <FadeIn key={r.id} delay={i * 0.07}>
                  <Link
                    href={`/resources/${r.id}`}
                    className="group flex items-start gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c8963e]/40 rounded-xl p-5 transition-all duration-200"
                  >
                    <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-[#c8963e]/15 text-[#e8b96a]">
                      <ResourceIcon icon={r.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-white/85 group-hover:text-white text-base font-semibold leading-tight transition-colors">
                        {r.short}
                      </span>
                      <span className="block text-white/50 text-sm leading-snug mt-1">
                        {r.subtitle}
                      </span>
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SubpageFooter />
    </>
  );
}
