import Link from "next/link";
import { secretariat } from "@/lib/data";
import FadeIn from "./FadeIn";
import SecretariatCard from "./SecretariatCard";

const featuredSecretariat = secretariat.filter((member) => member.featured);

export default function Secretariat() {
  return (
    <section id="secretariat" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <FadeIn>
            <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#c8963e]">
              The team behind INDYS
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl">
              Meet Our Secretariat
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} direction="right">
            <Link
              href="/secretariat"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0d1b3e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#132150] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8963e]"
            >
              See All
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeIn>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredSecretariat.map((member, index) => (
            <FadeIn key={member.id} delay={index * 0.06} className="h-full">
              <SecretariatCard member={member} priority={index < 2} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
