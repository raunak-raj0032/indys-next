import Image from "next/image";
import { reasons } from "@/lib/data";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-[#f7f3eb] px-6 py-16 md:py-18">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-8 max-w-3xl">
          <span className="section-eyebrow mb-2">
            South Asia&apos;s first bilateral youth diplomacy conclave
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl font-bold leading-tight text-[#0d1b3e] md:text-4xl">
            What is INDYS, and why Siliguri?
          </h2>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_410px] lg:items-stretch">
          <FadeIn direction="left" className="space-y-5">
            <div className="border-l-2 border-[#c8963e]/45 pl-5">
              <h3 className="font-[family-name:var(--font-serif)] mb-3 text-xl font-bold text-[#0d1b3e] md:text-2xl">
                INDYS is built around one live diplomatic relationship.
              </h3>
              <div className="space-y-3 text-[1rem] leading-[1.65] text-[#303030]">
                <p>
                  INDYS is an authorized, government-recognised Model United Nations conference
                  bringing student delegates from India and Nepal under one roof.
                </p>
                <p>
                  Unlike a generic conference, INDYS is anchored in the geography of the
                  India-Nepal relationship. Its committees move from global diplomacy to the
                  local questions that shape trade, transit, water, security, media, and
                  people-to-people ties across the border.
                </p>
                <p>
                  The centrepiece is the Indo-Nepal Bilateral Meet: a first-of-its-kind room
                  where delegates negotiate the relationship this summit was created to
                  strengthen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Metric value="30 km" label="to the Panitanki-Kakarbhitta border crossing" />
              <Metric value="4 nations" label="India, Nepal, Bhutan, and Bangladesh in one corridor" />
              <Metric value="11" label="committees across diplomacy, crisis, law, trade, and press" />
              <Metric value="500+" label="delegates from schools and colleges across the region" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <SiliguriMap />
          </FadeIn>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.num} delay={index * 0.05}>
              <div className="h-full border border-[#e4dccd] bg-white px-4 py-4 shadow-sm">
                <div className="mb-2.5 flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0d1b3e] text-xs font-bold text-[#e8b96a]">
                    {reason.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-lg font-bold leading-snug text-[#9a6f24]">
                    {reason.heading}
                  </h3>
                </div>
                <p className="card-copy">{reason.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-[#e4dccd] bg-white px-4 py-3 shadow-sm">
      <p className="font-[family-name:var(--font-serif)] text-2xl font-black leading-none text-[#c8963e]">
        {value}
      </p>
      <p className="mt-1.5 text-sm font-medium leading-snug text-[#454545]">{label}</p>
    </div>
  );
}

function SiliguriMap() {
  return (
    <div className="relative overflow-hidden border border-[#d9cfbd] bg-[#071225] p-4 text-white shadow-2xl shadow-[#0d1b3e]/20">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#e8b96a]">
            Strategic Location
          </p>
          <h3 className="font-[family-name:var(--font-serif)] mt-1 text-2xl font-bold leading-tight">
            Siliguri sits at the diplomatic hinge.
          </h3>
        </div>
        <span className="shrink-0 border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-white/82">
          Map view
        </span>
      </div>

      <div className="relative aspect-[16/11] overflow-hidden bg-[#0d1b3e]">
        <Image
          src="/maps/siliguri-kakarbhitta-osm.png"
          alt="OpenStreetMap view of the Siliguri, Panitanki, and Kakarbhitta border corridor"
          fill
          sizes="(min-width: 1024px) 440px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3 grid gap-3 text-sm leading-snug text-white/78 sm:grid-cols-2">
        <p>
          Siliguri is the Indian city closest to the summit&apos;s bilateral story: the Nepal
          border is close enough to be part of the city&apos;s daily economic life.
        </p>
        <p>
          That makes INDYS more than a conference theme. The venue sits inside the same
          corridor delegates will debate.
        </p>
      </div>
      <p className="mt-3 text-xs leading-snug text-white/55">
        Map data ©{" "}
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
        >
          OpenStreetMap contributors
        </a>
        .
      </p>
    </div>
  );
}
