import Link from "next/link";
import { secretariat } from "@/lib/data";
import FadeIn from "./FadeIn";
import SecretariatCard from "./SecretariatCard";

const featuredSecretariat = secretariat.filter((member) => member.featured);

export default function Secretariat() {
  return (
    <section id="secretariat" className="bg-white px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 md:mb-12">
          <FadeIn>
            <span className="section-eyebrow mb-3">
              The team behind INDYS
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold leading-tight text-[#0d1b3e] md:text-5xl">
              Meet Our Secretariat
            </h2>
          </FadeIn>
        </div>

        <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4">
          {featuredSecretariat.map((member, index) => (
            <FadeIn
              key={member.id}
              delay={index * 0.06}
              className="h-full min-w-[76vw] snap-start sm:min-w-0"
            >
              <SecretariatCard member={member} priority={index < 2} />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.1} className="mt-8 text-center">
          <Link
            href="/secretariat"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0d1b3e] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#132150] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8963e]"
          >
            See All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
