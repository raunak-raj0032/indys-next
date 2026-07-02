import Image from "next/image";
import { secretariat } from "@/lib/data";

type SecretariatMember = (typeof secretariat)[number];

export default function SecretariatCard({
  member,
  priority = false,
}: {
  member: SecretariatMember;
  priority?: boolean;
}) {
  return (
    <article className="group h-full overflow-hidden rounded-xl border border-[#ede8de] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#c8963e]/45 hover:shadow-xl">
      <div className="px-5 pt-5">
        <div className="relative mx-auto aspect-square w-full max-w-56 overflow-hidden rounded-full border border-[#ede8de] bg-[#0d1b3e] shadow-sm ring-4 ring-[#f7f3eb]">
          {member.image ? (
            <Image
              src={member.image}
              alt={`${member.name}, ${member.title}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]"
              priority={priority}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#0d1b3e]">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#c8963e]/35 bg-[#c8963e]/12 text-4xl font-bold text-[#e8b96a]">
                {member.initials}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold leading-tight text-[#0d1b3e]">
          {member.name}
        </h3>
        <p className="mt-2 flex items-center justify-center gap-2 text-[0.9rem] font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#9a6f24]">
          {member.flag && <FlagBadge flag={member.flag} />}
          {member.title}
        </p>
      </div>
    </article>
  );
}

function FlagBadge({ flag }: { flag: "india" | "nepal" }) {
  const flagMeta = {
    india: {
      src: "/flags/india.svg",
      alt: "Flag of India",
      className: "h-4 w-6 rounded-[2px] border border-black/15 bg-white object-cover",
    },
    nepal: {
      src: "/flags/nepal.svg",
      alt: "Flag of Nepal",
      className: "h-5 w-5 object-contain",
    },
  }[flag];

  return (
    <span className="inline-flex shrink-0 items-center justify-center" title={flagMeta.alt}>
      <Image
        src={flagMeta.src}
        alt={flagMeta.alt}
        width={flag === "india" ? 24 : 20}
        height={flag === "india" ? 16 : 20}
        className={flagMeta.className}
      />
    </span>
  );
}
