import Image from "next/image";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-[#f7f3eb] px-4 py-14 sm:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-7 max-w-4xl">
          <span className="mb-2 block text-sm font-extrabold uppercase tracking-[0.12em] text-[#a86f1f] md:text-base">
            South Asia&apos;s first bilateral youth diplomacy conclave
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold leading-tight text-[#0d1b3e] md:text-4xl">
            What is INDYS, and why Siliguri?
          </h2>
        </FadeIn>

        <div className="grid overflow-hidden border border-[#d9cfbd] bg-white shadow-xl shadow-[#0d1b3e]/8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)] lg:items-center">
          <FadeIn direction="left" className="p-5 sm:p-6 lg:p-7">
            <span className="mb-3 inline-flex bg-[#0d1b3e] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#e8b96a]">
              Conference Focus
            </span>
            <h3 className="max-w-2xl font-[family-name:var(--font-serif)] text-2xl font-bold leading-tight text-[#0d1b3e] md:text-3xl">
              A summit built around one live diplomatic relationship.
            </h3>
            <div className="mt-4 space-y-3 text-[0.98rem] leading-[1.62] text-[#303030]">
              <p>
                INDYS is an authorized, government-recognised Model United Nations conference
                bringing student delegates from India and Nepal under one roof.
              </p>
              <p>
                For delegates searching for a serious India-Nepal MUN, a Nepal MUN, or a
                Model United Nations conference in India with real bilateral substance, INDYS
                is built around depth rather than spectacle.
              </p>
              <p>
                Its committees move from global diplomacy to the local questions that shape
                trade, transit, water, security, media, and people-to-people ties.
              </p>
              <p>
                The centrepiece is the Indo-Nepal Bilateral Meet: a first-of-its-kind room
                where delegates negotiate the relationship this summit was created to strengthen.
              </p>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <Metric value="11" label="committees" />
              <Metric value="500+" label="delegates" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="border-t border-[#d9cfbd] bg-[#071225] p-2 sm:p-3 lg:border-l lg:border-t-0">
            <SiliguriMap />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-[#e4dccd] bg-[#f7f3eb] px-4 py-3">
      <p className="font-[family-name:var(--font-serif)] text-2xl font-black leading-none text-[#c8963e]">
        {value}
      </p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.1em] text-[#454545]">{label}</p>
    </div>
  );
}

function SiliguriMap() {
  return (
    <div className="mx-auto max-w-[560px] overflow-hidden bg-[#071225] lg:max-w-[500px]">
      <Image
        src="/maps/siliguri-critical-corridor.png"
        alt="Map infographic showing Siliguri as the critical corridor for Indo-Nepal bilateral cooperation"
        width={1366}
        height={768}
        sizes="(min-width: 1024px) 500px, 100vw"
        className="h-auto w-full"
      />
    </div>
  );
}
