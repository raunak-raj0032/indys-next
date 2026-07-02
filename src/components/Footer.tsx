export default function Footer() {
  const links = ["About", "Secretariat", "Committees", "Dates", "Partners"];

  return (
    <footer className="bg-[#080f20] text-white/72 px-4 pt-10 pb-6 sm:px-6 sm:pt-12">
      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-6 pb-7 border-b border-white/8 mb-6 sm:flex-row sm:flex-wrap sm:gap-10 sm:pb-8">
        <div>
          <span className="block font-[family-name:var(--font-serif)] text-2xl font-black text-[#c8963e] mb-2">
            INDYS &apos;26
          </span>
          <p className="text-sm leading-relaxed">
            Indo–Nepal Diplomatic Youth Summit<br />
            Model United Nations · Siliguri, India
          </p>
        </div>
        <div className="flex gap-x-5 gap-y-3 flex-wrap items-start">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm hover:text-[#e8b96a] transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-xs">
        &copy; 2026 INDYS — Indo-Nepal Diplomatic Youth Summit. All rights reserved.
      </p>
    </footer>
  );
}
