import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { secretariat } from "@/lib/data";
import SecretariatCard from "@/components/SecretariatCard";
import SecretariatNav from "@/components/SecretariatNav";
import SubpageFooter from "@/components/SubpageFooter";
import FadeIn from "@/components/FadeIn";
import { createMetadata, jsonLd, secretariatJsonLd } from "@/lib/seo";

const bannerSecretariat = secretariat.filter(
  (member) =>
    !["anubhav-singh", "nikhil-mohan", "tanu-priya", "garima-singh"].includes(member.id),
);

export const metadata: Metadata = createMetadata({
  title: "Meet Our Secretariat - INDYS '26",
  description:
    "Meet the INDYS '26 secretariat leading conference direction, systems, marketing, and outreach.",
  path: "/secretariat",
  image: "/secretariat/yash-sharma.jpg",
  keywords: ["INDYS secretariat", "MUN secretariat", "youth summit leadership"],
});

function cardGridPosition(index: number, total: number) {
  const remainder = total % 3;
  const firstLeftoverIndex = total - remainder;

  if (remainder === 1 && index === firstLeftoverIndex) {
    return "lg:col-start-3";
  }

  if (remainder === 2 && index === firstLeftoverIndex) {
    return "lg:col-start-2";
  }

  if (remainder === 2 && index === firstLeftoverIndex + 1) {
    return "lg:col-start-4";
  }

  return "";
}

export default function SecretariatPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(secretariatJsonLd()) }}
      />
      <SecretariatNav />
      <main>
        <section className="relative flex min-h-[74vh] items-end overflow-hidden bg-[#060c1a] px-6 pb-14 pt-28 md:min-h-[78vh]">
          <div className="absolute inset-0 grid grid-cols-2 gap-1 opacity-85 sm:grid-cols-3 lg:grid-cols-7">
            {bannerSecretariat.map((member, index) => (
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
              href="/"
              className="mb-8 inline-flex items-center gap-1.5 text-base font-semibold uppercase tracking-[0.08em] text-white/78 transition-colors hover:text-[#e8b96a]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 2 4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Home
            </Link>
            <FadeIn className="max-w-3xl">
              <span className="mb-3 block text-base font-extrabold uppercase tracking-[0.08em] text-[#e8b96a] md:text-lg">
                INDYS &apos;26 Leadership
              </span>
              <h1 className="font-[family-name:var(--font-serif)] text-5xl font-bold leading-none text-white md:text-7xl">
                Meet Our Secretariat
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 md:text-lg">
                The secretariat directs conference strategy, representation, systems, marketing,
                sponsorship, and delegate-facing execution for INDYS &apos;26.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="bg-[#eadfce] px-6 py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {secretariat.map((member, index) => (
              <FadeIn
                key={member.id}
                delay={index * 0.04}
                className={`h-full lg:col-span-2 ${cardGridPosition(index, secretariat.length)}`}
              >
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
