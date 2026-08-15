import Link from "next/link";
import FadeIn from "./FadeIn";

export default function RegistrationCountdown() {
  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-[#0d1b3e] px-4 py-12 text-white scroll-mt-20 sm:px-6 md:py-20"
      aria-labelledby="registration-title"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(200,150,62,0.16),transparent_38%,rgba(19,33,80,0.72))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#c8963e]/40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#c8963e]/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeIn className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#e8b96a] sm:text-sm sm:tracking-[0.14em]">
              Individual delegate registration
            </span>
            <h2
              id="registration-title"
              className="font-[family-name:var(--font-serif)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              Individual delegate registration is now open.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/78 sm:text-base md:text-lg">
              Choose your registration form for India or Nepal and take your place at the Indo–Nepal Diplomatic Youth Summit.
            </p>
          </div>

          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-lg bg-[#c8963e] px-6 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-black/20 transition-colors hover:bg-[#e8b96a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] sm:px-8"
          >
            Register
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
