import Link from "next/link";

const footerLinks = ["About", "Secretariat", "Committees", "Dates", "Partners"];

export default function SubpageFooter() {
  return (
    <footer className="bg-[#080f20] text-white/72 px-6 pt-12 pb-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-10 pb-8 border-b border-white/8 mb-6">
        <div>
          <Link
            href="/"
            className="block font-[family-name:var(--font-serif)] text-2xl font-black text-[#c8963e] mb-2 hover:text-[#e8b96a] transition-colors"
          >
            INDYS &apos;26
          </Link>
          <p className="text-sm leading-relaxed">
            Indo–Nepal Diplomatic Youth Summit
            <br />
            Model United Nations · Siliguri, India
          </p>
        </div>
        <address className="max-w-sm not-italic text-sm leading-relaxed text-white/62">
          <span className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-[#e8b96a]">
            Dr Marketing office
          </span>
          PRAFULLA NAGAR, CHAMPASARI, P.O:- Champasari BO, P.S:- NA,
          <br />
          District :- Darjeeling, Pincode :- 734003
          <br />
          Ward No. 46
        </address>
        <div className="flex gap-6 flex-wrap items-start">
          {footerLinks.map((l) => (
            <Link
              key={l}
              href={`/#${l.toLowerCase()}`}
              className="text-sm hover:text-[#e8b96a] transition-colors"
            >
              {l}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-center text-xs">
        &copy; 2026 INDYS — Indo-Nepal Diplomatic Youth Summit. All rights reserved.
      </p>
    </footer>
  );
}
