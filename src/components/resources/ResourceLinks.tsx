import FadeIn from "@/components/FadeIn";

type LinkItem = { label: string; href: string; desc: string };

export default function ResourceLinks({ links }: { links: LinkItem[] }) {
  return (
    <section className="max-w-3xl mx-auto mt-20">
      <FadeIn className="text-center mb-8">
        <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
          Go Deeper
        </span>
        <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
          Good places to learn more
        </h3>
        <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
          We pulled this together from a few trusted guides. If you want to keep reading, these are the
          ones worth your time:
        </p>
      </FadeIn>
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map((l, i) => (
          <FadeIn key={l.href} delay={i * 0.05}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 h-full bg-white border border-[#ede8de] hover:border-[#c8963e]/50 rounded-2xl p-5 shadow-sm transition-colors"
            >
              <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-[#c8963e]/12 text-[#c8963e] mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 14 21 3M21 3h-7M21 3v7M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[#0d1b3e] group-hover:text-[#9a6f24] font-semibold text-sm leading-snug transition-colors">
                  {l.label}
                </span>
                <span className="block text-[#6b6b6b] text-xs leading-relaxed mt-1">{l.desc}</span>
              </span>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
