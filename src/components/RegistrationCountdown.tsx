import Link from "next/link";
import Image from "next/image";
import FadeIn from "./FadeIn";

export default function RegistrationCountdown() {
  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-[#0d1b3e] px-4 py-10 text-white scroll-mt-20 sm:px-6 md:py-16"
      aria-labelledby="registration-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_50%,rgba(232,185,106,0.2),transparent_26%),radial-gradient(circle_at_92%_0%,rgba(73,119,209,0.25),transparent_35%),linear-gradient(120deg,#132150,#0d1b3e_58%,#071225)]" />
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-[#e8b96a]/15" />
      <div className="absolute -right-8 -top-12 h-40 w-40 rounded-full border border-[#e8b96a]/10" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c8963e] via-[#e8b96a] to-[#c8963e]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#e8b96a]/35" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeIn className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex min-w-0 flex-1 items-start gap-5 sm:gap-7">
            <div className="relative mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#e8b96a]/70 bg-white p-1.5 shadow-[0_0_0_6px_rgba(232,185,106,0.1),0_12px_30px_rgba(0,0,0,0.25)] sm:h-20 sm:w-20">
              <div className="absolute inset-0 rounded-full border border-white/50" />
              <Image src="/brand/indys-seal-mark.png" alt="INDYS seal" width={80} height={80} className="h-full w-full object-contain" />
            </div>
            <div className="min-w-0">
              <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#e8b96a] sm:text-sm sm:tracking-[0.14em]">
                Individual delegate registration
              </span>
              <h2
                id="registration-title"
                className="font-[family-name:var(--font-serif)] text-3xl font-bold leading-[1.02] text-white sm:text-4xl md:text-5xl"
              >
                Individual delegate registration is now open.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
                Find the committee that matches your voice, ambition, and style of diplomacy—and take your place at the Indo–Nepal Diplomatic Youth Summit.
              </p>
            </div>
          </div>

          <Link
            href="/register"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#e8b96a] to-[#c8963e] px-7 py-4 text-center text-sm font-extrabold text-[#0d1b3e] shadow-[0_10px_25px_rgba(200,150,62,0.28)] transition duration-200 hover:-translate-y-1 hover:from-[#f4cf8c] hover:to-[#e8b96a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8b96a] sm:px-9"
          >
            Register
            <span aria-hidden="true" className="text-xl leading-none transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
