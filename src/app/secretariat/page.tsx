import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { secretariat } from "@/lib/data";
import SecretariatCard from "@/components/SecretariatCard";
import SecretariatNav from "@/components/SecretariatNav";
import SubpageFooter from "@/components/SubpageFooter";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Meet Our Secretariat - INDYS '26",
  description:
    "Meet the INDYS '26 secretariat leading conference direction, systems, marketing, and outreach.",
};

export default function SecretariatPage() {
  return (
    <>
      <SecretariatNav />
      <main>
        <section className="relative flex min-h-[74vh] items-end overflow-hidden bg-[#060c1a] px-6 pb-14 pt-28 md:min-h-[78vh]">
          <div className="absolute inset-0 grid grid-cols-2 gap-1 opacity-85 sm:grid-cols-3 lg:grid-cols-7">
            {secretariat.map((member, index) => (
              <div
                key={member.id}
                className={`relative min-h-44 overflow-hidden bg-[#0d1b3e] ${
                  index % 3 === 1 ? "translate-y-6" : index % 3 === 2 ? "-translate-y-4" : ""
                }`}
                aria-hidden="true"
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 640px) 34vw, 50vw"
                    className="object-cover object-center grayscale-[15%]"
                    priority={index < 3}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="flex h-24 w-24 items-center justify-center rounded-full border border-[#c8963e]/35 bg-[#c8963e]/15 text-3xl font-bold text-[#e8b96a]">
                      {member.initials}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-[#060c1a]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/86 via-[#060c1a]/48 to-[#060c1a]/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a]/88 via-transparent to-[#060c1a]/22" />

          <div className="relative mx-auto w-full max-w-6xl">
            <Link
              href="/#secretariat"
              className="mb-8 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/55 transition-colors hover:text-[#e8b96a]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Home
            </Link>
            <FadeIn className="max-w-3xl">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#e8b96a]">
                INDYS &apos;26 Leadership
              </span>
              <h1 className="font-[family-name:var(--font-serif)] text-5xl font-bold leading-none text-white md:text-7xl">
                Meet Our Secretariat
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                The secretariat directs conference strategy, representation, systems, marketing,
                sponsorship, and delegate-facing execution for INDYS &apos;26.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/82">
                  7-member team
                </span>
                <span className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/82">
                  India-Nepal representation
                </span>
                <span className="rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/82">
                  Conference execution
                </span>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#f7f3eb] px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {secretariat.map((member, index) => (
              <FadeIn key={member.id} delay={index * 0.04} className="h-full">
                <SecretariatCard member={member} priority={index < 3} />
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <SubpageFooter />
    </>
  );
}
