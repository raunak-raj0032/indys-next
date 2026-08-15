import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Register for INDYS '26",
  description: "Choose the INDYS '26 registration form that matches your location.",
  path: "/register",
});

const registrationLinks = [
  {
    eyebrow: "Individual delegate registration",
    title: "Register from India",
    description: "Use this form for individual delegates registering from India.",
    href: "https://forms.gle/ThYcCGQ4w1XnfLJx9",
    flag: "/flags/india.svg",
    flagAlt: "Flag of India",
  },
  {
    eyebrow: "Individual delegate registration",
    title: "Register from Nepal",
    description: "Use this form for individual delegates registering from Nepal.",
    href: "https://forms.gle/pS3uDqjE3CiNiT9p8",
    flag: "/flags/nepal.svg",
    flagAlt: "Flag of Nepal",
  },
] as const;

export default function RegisterPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071225] px-5 py-8 text-white sm:px-8 sm:py-12">
      <div className="pointer-events-none absolute -left-40 top-[-18rem] h-[38rem] w-[38rem] rounded-full bg-[#c8963e]/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-[-20rem] h-[42rem] w-[42rem] rounded-full bg-[#19356b]/45 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-xl flex-col items-center justify-center">
        <header className="w-full text-center">
          <Link href="/" className="group inline-flex items-center gap-3 rounded-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a]">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-1 shadow-[0_0_0_5px_rgba(200,150,62,0.16)] transition-transform group-hover:rotate-6">
              <Image src="/brand/indys-seal-mark.png" alt="INDYS seal" width={56} height={56} className="h-full w-full object-contain" priority />
            </span>
            <span>
              <span className="block font-[family-name:var(--font-serif)] text-2xl font-bold tracking-wide">INDYS <span className="text-[#e8b96a]">&apos;26</span></span>
              <span className="block text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/55">Indo-Nepal Diplomatic Youth Summit</span>
            </span>
          </Link>

          <div className="mt-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-[#e8b96a]">Choose your registration path</p>
            <h1 className="mt-4 font-[family-name:var(--font-serif)] text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#f7f3eb] sm:text-6xl">Your seat at the table starts here.</h1>
            <p className="mx-auto mt-6 max-w-md text-[1.05rem] leading-7 text-white/65">Find the committee that matches your voice, ambition, and style of diplomacy—and take your place at the Indo–Nepal Diplomatic Youth Summit.</p>
          </div>
        </header>

        <a
          href="https://docs.google.com/spreadsheets/d/1OZLgTOBqVHnCInLgcerF7fVJNjt0IIHuFMGm2Sb61z4/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="mt-8 flex w-full items-center justify-between rounded-xl border border-[#c8963e]/35 bg-[#c8963e]/10 px-5 py-4 text-sm text-white/80 transition hover:border-[#e8b96a] hover:bg-[#c8963e]/16 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a]"
        >
          <span>
            <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-[#e8b96a]">Before you register</span>
            <span className="mt-1 block font-semibold">View the Portfolio Matrix</span>
          </span>
          <span aria-hidden="true" className="text-xl text-[#e8b96a]">↗</span>
        </a>

        <section className="mt-10 w-full space-y-4" aria-label="Registration forms">
          {registrationLinks.map((registration) => (
            <a
              key={registration.href}
              href={registration.href}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-2xl border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#e8b96a]/70 hover:bg-white/[0.12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] sm:p-6"
            >
              <span className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c8963e]/55 bg-white/95 p-1">
                  <Image src={registration.flag} alt={registration.flagAlt} width={36} height={28} className="h-7 w-8 object-contain" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.68rem] font-extrabold uppercase tracking-[0.17em] text-[#e8b96a]">{registration.eyebrow}</span>
                  <span className="mt-1 block font-[family-name:var(--font-serif)] text-2xl font-semibold text-[#f7f3eb]">{registration.title}</span>
                  <span className="mt-1 block text-sm leading-6 text-white/60">{registration.description}</span>
                </span>
                <span aria-hidden="true" className="pt-1 text-2xl text-white/45 transition-transform group-hover:translate-x-1 group-hover:text-[#e8b96a]">↗</span>
              </span>
            </a>
          ))}
        </section>

        <footer className="mt-12 text-center text-xs uppercase tracking-[0.18em] text-white/35">
          <span>INDYS Secretariat</span>
          <span className="mx-2 text-[#c8963e]">·</span>
          <Link href="/" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a]">Return to site</Link>
        </footer>
      </div>
    </main>
  );
}
