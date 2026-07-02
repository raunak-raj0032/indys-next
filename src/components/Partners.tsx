import { tiers } from "@/lib/data";
import FadeIn from "./FadeIn";

const partnershipEmailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=info@indysofficial.com&su=INDYS%20Partnership%20Inquiry";

const getTierEmailHref = (tierName: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=info@indysofficial.com&su=${encodeURIComponent(
    `INDYS ${tierName} Partnership Inquiry`,
  )}`;

const tierStyles: Record<
  string,
  {
    accent: string;
    badge: string;
    border: string;
    surface: string;
    title: string;
    role: string;
    copy: string;
    icon: string;
    featured?: boolean;
  }
> = {
  platinum: {
    accent: "bg-[#c8963e]",
    badge: "border-[#e8b96a]/45 bg-[#e8b96a]/16 text-[#ffe0a0]",
    border: "border-[#c8963e]",
    surface: "bg-[#0d1b3e] text-white shadow-2xl shadow-[#0d1b3e]/18",
    title: "text-white",
    role: "text-[#e8b96a]",
    copy: "text-white/82",
    icon: "border-[#e8b96a]/35 bg-[#e8b96a]/14 text-[#e8b96a]",
    featured: true,
  },
  gold: {
    accent: "bg-[#c8963e]",
    badge: "border-[#c8963e]/25 bg-[#c8963e]/10 text-[#8a5b18]",
    border: "border-[#d8b36f]",
    surface: "bg-white text-[#151515] shadow-lg shadow-[#0d1b3e]/6",
    title: "text-[#0d1b3e]",
    role: "text-[#9a6f24]",
    copy: "text-[#454545]",
    icon: "border-[#c8963e]/25 bg-[#c8963e]/10 text-[#9a6f24]",
  },
  silver: {
    accent: "bg-[#8f98a8]",
    badge: "border-[#aeb6c2]/40 bg-[#eef1f5] text-[#3f4650]",
    border: "border-[#d6d9df]",
    surface: "bg-white text-[#151515] shadow-lg shadow-[#0d1b3e]/6",
    title: "text-[#0d1b3e]",
    role: "text-[#4d5664]",
    copy: "text-[#454545]",
    icon: "border-[#aeb6c2]/45 bg-[#eef1f5] text-[#4d5664]",
  },
  venue: {
    accent: "bg-[#0d1b3e]",
    badge: "border-[#0d1b3e]/18 bg-[#0d1b3e]/8 text-[#0d1b3e]",
    border: "border-[#b8c4d8]",
    surface: "bg-white text-[#151515] shadow-lg shadow-[#0d1b3e]/6",
    title: "text-[#0d1b3e]",
    role: "text-[#0d1b3e]",
    copy: "text-[#454545]",
    icon: "border-[#0d1b3e]/18 bg-[#0d1b3e]/8 text-[#0d1b3e]",
  },
};

const partnerMetrics = [
  ["500+", "delegate reach"],
  ["3 days", "onsite visibility"],
  ["11", "committee touchpoints"],
] as const;

export default function Partners() {
  return (
    <section id="partners" className="bg-[#f7f3eb] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <FadeIn>
            <span className="section-eyebrow mb-3">Partnership Tiers</span>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl">
              Invest in the Room Where Decisions Begin
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} direction="right">
            <p className="section-copy max-w-2xl lg:ml-auto">
              INDYS gives partners direct access to high-achieving students, families, educators,
              and policy-facing guests. The tiers below separate summit ownership, venue
              presence, student touchpoints, and targeted brand visibility.
            </p>
            <div className="mt-7 grid grid-cols-3 overflow-hidden rounded-lg border border-[#e1d5bd] bg-white">
              {partnerMetrics.map(([value, label]) => (
                <div key={label} className="border-r border-[#ede8de] px-4 py-4 last:border-r-0">
                  <p className="font-[family-name:var(--font-serif)] text-2xl font-bold leading-none text-[#0d1b3e]">
                    {value}
                  </p>
                  <p className="mt-1 text-sm font-medium leading-snug text-[#555555]">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {tiers.map((tier, index) => {
            const style = tierStyles[tier.id];

            return (
              <FadeIn key={tier.id} delay={index * 0.06}>
                <article
                  className={`group relative flex h-full flex-col overflow-hidden rounded-xl border-2 ${style.border} ${style.surface} transition-all duration-200 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className={`h-1.5 w-full ${style.accent}`} />
                  <div className="flex h-full flex-col p-7 md:p-8">
                    <div className="mb-7 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${style.badge}`}
                        >
                          {tier.role}
                        </span>
                        <h3
                          className={`mt-4 font-[family-name:var(--font-serif)] text-3xl font-bold leading-tight ${style.title}`}
                        >
                          {tier.name}
                        </h3>
                      </div>
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${style.icon}`}
                        aria-hidden="true"
                      >
                        <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M12 3.5 14.65 8.87l5.93.86-4.29 4.18 1.01 5.9L12 17.02 6.7 19.81l1.01-5.9-4.29-4.18 5.93-.86L12 3.5Z"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className={`mb-7 text-base font-semibold leading-relaxed ${style.copy}`}>
                      {tier.category}
                    </p>

                    <div className="mb-7 grid gap-3 sm:grid-cols-2">
                      {tier.perks.map((perk) => (
                        <div key={perk} className="flex items-start gap-3">
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${style.icon}`}
                            aria-hidden="true"
                          >
                            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                              <path
                                d="M3 7.2 5.8 10 11.2 4"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          <span className={`text-[0.97rem] leading-relaxed ${style.copy}`}>{perk}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={getTierEmailHref(tier.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        style.featured
                          ? "bg-[#c8963e] text-white hover:bg-[#e8b96a] focus-visible:outline-[#e8b96a]"
                          : "bg-[#0d1b3e] text-white hover:bg-[#132150] focus-visible:outline-[#c8963e]"
                      }`}
                    >
                      Discuss This Tier
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.12} className="mt-10">
          <div className="grid gap-5 rounded-xl border border-[#d9c7a5] bg-white px-6 py-7 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:px-8">
            <div>
              <p className="section-eyebrow mb-2">Partner with Us</p>
              <p className="section-copy max-w-2xl">
                For sponsorships, venue partnerships, and institutional collaborations, contact
                the INDYS partnerships team.
              </p>
              <p className="fine-copy mt-2">info@indysofficial.com</p>
            </div>
            <a
              href={partnershipEmailHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#0d1b3e] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#132150] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c8963e]"
            >
              Write Email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
