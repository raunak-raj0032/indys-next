"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";
import FadeIn from "./FadeIn";
import { useTimeSync } from "./TimeGate";
import { registrationOpenAtMs } from "@/lib/registration";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(nowMs: number): TimeLeft {
  const remaining = Math.max(0, registrationOpenAtMs - nowMs);
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function format(value: number) {
  return value.toString().padStart(2, "0");
}

export default function RegistrationCountdown() {
  const timeSync = useTimeSync();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    let isMounted = true;

    const nowMs = () => timeSync.serverTimeMs + (performance.now() - timeSync.syncedPerformanceMs);

    const tick = () => {
      if (isMounted) {
        setTimeLeft(getTimeLeft(nowMs()));
      }
    };

    tick();
    const timer = window.setInterval(tick, 1000);

    return () => {
      isMounted = false;
      window.clearInterval(timer);
    };
  }, [timeSync]);

  const units = useMemo(
    () => timeLeft ? [
      { label: "Days", value: format(timeLeft.days) },
      { label: "Hours", value: format(timeLeft.hours) },
      { label: "Minutes", value: format(timeLeft.minutes) },
      { label: "Seconds", value: format(timeLeft.seconds) },
    ] : [],
    [timeLeft],
  );

  const isOpen = timeLeft !== null && Object.values(timeLeft).every((value) => value === 0);

  return (
    <section
      id="registration"
      className="relative overflow-hidden bg-[#0d1b3e] px-4 py-12 text-white scroll-mt-20 sm:px-6 md:py-20"
      aria-labelledby="registration-countdown-title"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(200,150,62,0.16),transparent_38%,rgba(19,33,80,0.72))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#c8963e]/40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#c8963e]/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <FadeIn className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em] text-[#e8b96a] sm:text-sm sm:tracking-[0.14em]">
              Registrations Opening Soon
            </span>
            <h2
              id="registration-countdown-title"
              className="font-[family-name:var(--font-serif)] text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            >
              Delegate registrations open on 15 August 2026 at 8:00 PM IST.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/78 sm:text-base md:text-lg">
              The registration desk is currently preparing for launch. Mark your calendars and prepare to secure your spot.
            </p>
          </div>

          <div className="flex min-h-24 flex-nowrap items-center justify-center gap-1 overflow-visible sm:min-h-40 sm:gap-3 md:gap-4" aria-live="polite">
            {timeLeft === null ? (
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#e8b96a]">
                Syncing official time…
              </p>
            ) : (
              units.map((unit, index) => (
                <div key={unit.label} className="flex min-w-0 items-stretch gap-1 sm:gap-3 md:gap-4">
                  {index > 0 && (
                    <span
                      className="flex items-center pb-5 font-[family-name:var(--font-serif)] text-2xl font-black leading-none text-[#e8b96a] sm:pb-9 sm:text-5xl md:pb-10 md:text-6xl"
                      aria-hidden="true"
                    >
                      :
                    </span>
                  )}
                  <TimeBlock label={unit.label} value={unit.value} />
                </div>
              ))
            )}
          </div>

          {isOpen && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative mt-8 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[#e8b96a] lg:col-span-2"
            >
              Registrations are now open.
            </motion.p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}

function TimeBlock({ label, value }: { label: string; value: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="group relative overflow-hidden rounded-lg border border-[#c8963e]/28 bg-[#071225] shadow-2xl shadow-black/25">
      <div className="relative flex min-h-14 items-center justify-center gap-0.5 border-b border-black/70 bg-black px-1.5 py-2.5 sm:min-h-32 sm:gap-1.5 sm:px-4 sm:py-5">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b96a]/45 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,185,106,0.08),transparent_44%)]" />

        {value.split("").map((digit, index) => (
          <DigitSlide
            key={`${label}-${index}`}
            digit={digit}
            index={index}
            reduceMotion={Boolean(shouldReduceMotion)}
          />
        ))}
      </div>
      <div className="bg-[#c8963e] px-1 py-1 text-center text-[0.46rem] font-extrabold uppercase tracking-[0.06em] text-white sm:px-3 sm:py-2 sm:text-[0.7rem] sm:tracking-[0.16em]">
        {label}
      </div>
    </div>
  );
}

function DigitSlide({
  digit,
  index,
  reduceMotion,
}: {
  digit: string;
  index: number;
  reduceMotion: boolean;
}) {
  const [currentDigit, setCurrentDigit] = useState(digit);
  const [previousDigit, setPreviousDigit] = useState(digit);
  const [flipKey, setFlipKey] = useState(0);
  const isFlipping = currentDigit !== previousDigit;

  useEffect(() => {
    if (digit === currentDigit) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      if (reduceMotion) {
        setPreviousDigit(digit);
        setCurrentDigit(digit);
        return;
      }

      setPreviousDigit(currentDigit);
      setCurrentDigit(digit);
      setFlipKey((key) => key + 1);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [currentDigit, digit, reduceMotion]);

  return (
    <div
      className="flip-clock-card relative h-9 w-[1.125rem] rounded border border-white/10 bg-black shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-14px_24px_rgba(0,0,0,0.42)] [perspective:680px] sm:h-20 sm:w-10 sm:rounded-md md:h-24 md:w-12"
      style={{ "--flip-delay": `${index * 25}ms` } as CSSProperties}
    >
      <DigitHalf digit={currentDigit} position="top" />
      <DigitHalf
        digit={isFlipping && !reduceMotion ? previousDigit : currentDigit}
        position="bottom"
      />

      {isFlipping && !reduceMotion && (
        <div key={flipKey} className="absolute inset-0 z-30">
          <DigitHalf
            digit={previousDigit}
            position="top"
            className="flip-clock-card__top-flap"
          />
          <DigitHalf
            digit={currentDigit}
            position="bottom"
            className="flip-clock-card__bottom-flap"
            onAnimationEnd={() => setPreviousDigit(currentDigit)}
          />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(circle_at_50%_0%,rgba(232,185,106,0.08),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-b from-black/35 via-transparent to-black/40" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-40 h-[2px] -translate-y-1/2 bg-black/60 shadow-[0_1px_0_rgba(255,255,255,0.08)]" />
    </div>
  );
}

function DigitHalf({
  digit,
  position,
  className = "",
  onAnimationEnd,
}: {
  digit: string;
  position: "top" | "bottom";
  className?: string;
  onAnimationEnd?: () => void;
}) {
  const isTop = position === "top";

  return (
    <span
      className={[
        "absolute inset-x-0 h-1/2 overflow-hidden",
        "before:absolute before:left-0 before:flex before:h-[200%] before:w-full before:items-center before:justify-center before:font-[family-name:var(--font-serif)] before:text-xl before:font-black before:leading-none before:text-white before:content-[attr(data-value)] before:[font-variant-numeric:tabular-nums] sm:before:text-5xl md:before:text-6xl",
        isTop
          ? "top-0 rounded-t-md bg-[#202020] before:top-0 before:border-b before:border-black/70 before:text-white/82"
          : "bottom-0 rounded-b-md bg-[#323232] before:-top-full before:text-white",
        className,
      ].join(" ")}
      data-value={digit}
      onAnimationEnd={onAnimationEnd}
    />
  );
}
