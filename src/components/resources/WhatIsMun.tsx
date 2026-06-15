import FadeIn from "@/components/FadeIn";
import ResourceLinks from "@/components/resources/ResourceLinks";

const flow = [
  { label: "You become a delegate", sub: "representing a country or organisation" },
  { label: "You join a committee", sub: "a simulated UN body with one big topic" },
  { label: "You debate the issue", sub: "speeches, questions, negotiation" },
  { label: "You draft a resolution", sub: "a written plan to solve it" },
  { label: "The committee votes", sub: "the best resolution passes" },
];

const benefits = [
  {
    title: "Research skills",
    body: "A good delegate thoroughly researches their country's position — and everyone else's too.",
    icon: "M11 4a7 7 0 1 0 4.9 12L21 21M11 4a7 7 0 0 1 7 7",
  },
  {
    title: "Communication",
    body: "You have to “lobby” — sell your ideas and win other delegates over to your side.",
    icon: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
  },
  {
    title: "Thinking on your feet",
    body: "Issues move fast. You learn to think critically and respond in the moment.",
    icon: "M13 2 3 14h7l-1 8 10-12h-7l1-8z",
  },
  {
    title: "University applications",
    body: "For humanities-leaning applicants especially, MUN experience looks like gold.",
    icon: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5",
  },
  {
    title: "Public speaking",
    body: "Few activities throw you in front of a room this often. Nerves fade fast with practice.",
    icon: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2M12 19v4",
  },
  {
    title: "Networking",
    body: "You meet people across schools and countries — friends you may even study with one day.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 .01M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
];

const topics = ["Climate change", "Human rights", "Security & conflict", "Economic development", "Global health", "Disarmament"];

const committeeTypes = [
  {
    abbr: "GA",
    name: "General Assembly",
    size: "Large · 50–150+",
    body: "The biggest committees, where every member state has a seat. Broad global topics, lots of delegates, plenty of formal debate.",
  },
  {
    abbr: "ECOSOC",
    name: "Economic & Social Council",
    size: "Mid · 30–80",
    body: "Mid-sized, resolution-based committees on social, economic and environmental issues — from women's rights to pandemic response.",
  },
  {
    abbr: "UNSC",
    name: "Security Council",
    size: "Small · 15",
    body: "Small, fast and high-pressure. Deals with peace and security, debates clause-by-clause, and can pass binding action.",
  },
  {
    abbr: "Crisis",
    name: "Crisis / Specialised",
    size: "Small · 10–30",
    body: "Historical, regional or fictional cabinets where the situation changes mid-session. You react in real time with directives.",
  },
];

const roles = [
  { role: "Delegate", what: "You. You represent one country or character and argue its position." },
  { role: "The Dais / Chair", what: "The committee staff at the front who run debate, keep time and recognise speakers." },
  { role: "Bloc", what: "An informal group of delegates with shared interests who write a resolution together." },
  { role: "Main Submitter", what: "The delegate who authors and formally presents a draft resolution to the room." },
  { role: "Admin / Runner", what: "Volunteers who pass notes between delegates and help the dais." },
];

const prepSteps = [
  {
    n: "Know your country",
    d: "Most delegates over-research the topic and under-research the country. Your edge is your country's actual record, allies and red lines on the issue.",
  },
  {
    n: "Research the topic",
    d: "Understand the problem, what the UN has already tried, and where the deadlock is. Skim past resolutions on it.",
  },
  {
    n: "Write a position paper",
    d: "A one-page summary of your country's stance — usually three short paragraphs: the problem, your country's position, and your proposed solutions.",
  },
  {
    n: "Prepare an opening speech",
    d: "A short, punchy statement of where you stand. It's the first impression the room gets of your delegation.",
  },
];

const glossary = [
  { term: "Placard", def: "The name card you raise to vote or to ask to speak." },
  { term: "Motion", def: "A formal request to do something procedural — like start a caucus or move to a vote." },
  { term: "Caucus", def: "A break from formal debate: moderated (short speeches on a sub-topic) or unmoderated (free lobbying time)." },
  { term: "Resolution", def: "The written document of solutions the committee debates and ultimately votes on." },
  { term: "Amendment", def: "A proposed change to the wording of a draft resolution." },
  { term: "Quorum", def: "The minimum number of delegates that must be present for the committee to do business." },
];

export default function WhatIsMun() {
  return (
    <>
      {/* Definition */}
      <section className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            The Basics
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl md:text-3xl font-bold mb-5 leading-snug">
            So… what actually is a MUN?
          </h2>
          <p className="text-[#3a3a3a] text-lg leading-relaxed mb-4">
            <strong className="text-[#0d1b3e]">MUN stands for Model United Nations.</strong> It&apos;s an
            educational activity where students learn about diplomacy, international relations, and the
            United Nations — by actually <em>doing</em> it.
          </p>
          <p className="text-[#5a5a5a] text-base leading-relaxed">
            At a conference, you (the delegate) represent a country or organisation inside a simulation of
            a real UN committee. You discuss and debate global issues with everyone else in the room, and
            try to find solutions through diplomacy — exactly the way real UN delegates do. Conferences run
            anywhere from your local school hall all the way up to big international stages.
          </p>
        </FadeIn>
      </section>

      {/* Quick facts table */}
      <section className="max-w-3xl mx-auto mt-12">
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-[#0d1b3e] px-6 py-3">
              <p className="text-[#c8963e] text-xs font-bold tracking-widest uppercase">MUN at a glance</p>
            </div>
            <dl className="divide-y divide-[#f0ebe2]">
              {[
                ["What it is", "A simulation of UN committees where students role-play as country delegates."],
                ["Who you are", "A “delegate” assigned to represent a specific country (not your own opinions)."],
                ["The goal", "Debate a global issue and pass a written resolution through diplomacy."],
                ["Where it runs", "School halls, universities, and international conferences worldwide."],
                ["What you take away", "Research, public speaking, negotiation and a serious CV booster."],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-4 px-6 py-3.5">
                  <dt className="text-[#0d1b3e] font-semibold text-sm">{k}</dt>
                  <dd className="text-[#5a5a5a] text-sm leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </FadeIn>
      </section>

      {/* History */}
      <section className="max-w-3xl mx-auto mt-20">
        <FadeIn>
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            A Bit of History
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-5">
            Older than the UN itself
          </h3>
          <p className="text-[#5a5a5a] text-base leading-relaxed mb-4">
            Students were simulating world diplomacy before the United Nations even existed. The first
            recorded conference ran at the <strong className="text-[#0d1b3e]">University of Oxford in 1921</strong>{" "}
            — as a <em>Model League of Nations</em>, since the UN wasn&apos;t founded until 1945. The idea
            crossed the Atlantic to Harvard in the 1920s, and through the 1940s the simulations switched
            from the failed League over to the new United Nations.
          </p>
          <p className="text-[#5a5a5a] text-base leading-relaxed">
            Today MUN is one of the largest student activities in the world, with conferences on every
            continent and hundreds of thousands of delegates each year.
          </p>
        </FadeIn>
      </section>

      {/* How it works flow diagram */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn>
          <h3 className="text-center text-[#0d1b3e] text-sm font-bold tracking-wider uppercase mb-10">
            How a MUN works, start to finish
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-5 gap-4 md:gap-2">
          {flow.map((step, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="relative h-full">
                <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-5 shadow-sm flex flex-col">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0d1b3e] text-[#e8b96a] text-sm font-bold mb-3">
                    {i + 1}
                  </span>
                  <p className="text-[#0d1b3e] font-semibold text-sm leading-snug mb-1">{step.label}</p>
                  <p className="text-[#6b6b6b] text-xs leading-relaxed">{step.sub}</p>
                </div>
                {/* connector arrow (desktop) */}
                {i < flow.length - 1 && (
                  <svg
                    className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#c8963e] z-10"
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                  >
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Committee types */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-10">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            The Rooms You Can Sit In
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            Types of committees
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            Not all committees feel the same. Bigger rooms are more formal and beginner-friendly; smaller
            ones move fast and reward quick thinking.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4">
          {committeeTypes.map((c, i) => (
            <FadeIn key={c.abbr} delay={i * 0.06}>
              <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm flex gap-4">
                <span className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1b3e] text-[#e8b96a] text-xs font-bold tracking-wide">
                  {c.abbr}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 mb-1.5">
                    <h4 className="text-[#0d1b3e] font-bold text-base">{c.name}</h4>
                    <span className="text-[#9a6f24] text-[11px] font-semibold">{c.size}</span>
                  </div>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">{c.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Who's who */}
      <section className="max-w-3xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Who&apos;s Who
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold">
            The people in the room
          </h3>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl overflow-hidden shadow-sm divide-y divide-[#f0ebe2]">
            {roles.map((r) => (
              <div key={r.role} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-1 sm:gap-4 px-6 py-4">
                <p className="text-[#0d1b3e] font-bold text-sm">{r.role}</p>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{r.what}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* How to prepare */}
      <section className="max-w-3xl mx-auto mt-20">
        <FadeIn className="text-center mb-10">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Before You Walk In
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold">
            How a delegate prepares
          </h3>
        </FadeIn>
        <div className="relative pl-8">
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-[#c8963e]/30" aria-hidden="true" />
          <div className="space-y-6">
            {prepSteps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.05} direction="left">
                <div className="relative">
                  <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0d1b3e] text-[#e8b96a] text-[11px] font-bold ring-4 ring-[#f7f3eb]">
                    {i + 1}
                  </span>
                  <p className="text-[#0d1b3e] font-semibold text-base leading-tight">{s.n}</p>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed mt-1">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-10">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Why bother?
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold">
            What you get out of it
          </h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.06}>
              <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c8963e]/12 text-[#c8963e] mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={b.icon} />
                  </svg>
                </span>
                <h4 className="text-[#0d1b3e] font-bold text-base mb-2">{b.title}</h4>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{b.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Glossary */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Speak the Language
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            Six words you&apos;ll hear on day one
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            MUN has its own vocabulary. Learn these and the rest of the jargon falls into place quickly.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {glossary.map((g, i) => (
            <FadeIn key={g.term} delay={i * 0.05}>
              <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-5 shadow-sm">
                <h4 className="text-[#0d1b3e] font-bold text-sm mb-1.5">{g.term}</h4>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{g.def}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-3xl mx-auto mt-20">
        <FadeIn>
          <div className="bg-[#0d1b3e] rounded-2xl p-8 text-center">
            <h3 className="font-[family-name:var(--font-serif)] text-white text-xl font-bold mb-3">
              What do committees actually debate?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
              Pretty much anything that matters on the world stage. A few of the classics:
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {topics.map((t) => (
                <span
                  key={t}
                  className="bg-white/8 text-white/80 text-sm font-medium px-4 py-2 rounded-full border border-white/12"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <ResourceLinks
        links={[
          { label: "Beginner's Guide to MUN — Global Citizen Academy", href: "https://www.theglobalcitizenacademy.com/blog/a-beginners-guide-to-model-united-nations-mun-starter-kit", desc: "A friendly starter kit covering everything a first-timer needs." },
          { label: "A Brief History of Model UN — Oxford Global", href: "https://www.oxfordglobal.org/blog/2020/10/6/a-brief-history-of-model-united-nations", desc: "How MUN grew from the 1921 Model League of Nations to today." },
          { label: "MUN Glossary — WiseMee", href: "https://www.wisemee.com/mun-glossary/", desc: "A plain-English dictionary of every term you'll hear in committee." },
          { label: "Guide to UN Committees — Model Diplomat", href: "https://blog.modeldiplomat.com/guide-to-united-nations-committees", desc: "What each real UN body does and how it's simulated at MUN." },
        ]}
      />
    </>
  );
}
