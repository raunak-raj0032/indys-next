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
      <div className="relative aspect-[4/5] overflow-hidden bg-[#0d1b3e]">
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
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080f20]/80 to-transparent" />
      </div>
      <div className="p-5">
        <h3 className="font-[family-name:var(--font-serif)] text-2xl font-bold leading-tight text-[#0d1b3e]">
          {member.name}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#c8963e]">
          {member.title}
        </p>
      </div>
    </article>
  );
}
