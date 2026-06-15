import FadeIn from "@/components/FadeIn";
import ResourceLinks from "@/components/resources/ResourceLinks";

const cheatSheet = [
  { want: "You want to speak", say: "Raise your placard and wait to be recognised by the chair." },
  { want: "You want to start an informal discussion", say: "“Motion for a moderated caucus on … for X minutes, Y seconds each.”" },
  { want: "You want free time to lobby & write", say: "“Motion for an unmoderated caucus for X minutes.”" },
  { want: "You can't hear / are uncomfortable", say: "“Point of personal privilege.” (the only point that can interrupt a speaker)" },
  { want: "You're confused about the rules", say: "“Point of parliamentary inquiry.”" },
  { want: "You think the chair made a mistake", say: "“Point of order.”" },
  { want: "You want to ask a speaker a question", say: "Wait for them to yield to points of information, then raise your placard." },
  { want: "You think it's time to vote", say: "“Motion to close debate and move into voting procedure.”" },
];

const consultation = [
  {
    title: "Formal consultation",
    body: "The structured part, run under the chair's supervision. Speeches, questions, introducing and debating resolutions — all with the rules of procedure switched on so only one delegate speaks at a time.",
  },
  {
    title: "Informal consultation",
    body: "Everything off-mic: the face-to-face talking, lobbying and deal-making that happens from the moment you walk in. No formal rules — this is where a lot of the real work gets done.",
  },
];

const goldenRules = [
  {
    title: "Speak in the third person",
    body: "Never say “you” or “I”. Instead say “The delegate of ______”. It keeps debate formal and impersonal.",
  },
  {
    title: "Never talk directly to each other",
    body: "Delegates address one another through the chair — or pass notes. Lift a note in the air and an admin delivers it.",
  },
  {
    title: "Raise your placard",
    body: "For roll call, voting, or whenever you want to speak or ask something, raise your placard and wait for the chair to recognise you.",
  },
  {
    title: "Only one resolution passes",
    body: "In the end the committee adopts a single resolution — so make sure yours is the one worth voting for.",
  },
];

const sessionFlow = [
  {
    t: "Roll call",
    d: "The chair reads out each country. Answer “present” — or “present and voting” if you intend to commit to a yes/no on every resolution (it means you can't abstain later).",
  },
  {
    t: "Set the agenda",
    d: "The committee formally adopts the topic it will debate. A simple majority sets it.",
  },
  {
    t: "Speakers' list (formal debate)",
    d: "The backbone of debate. Delegates are queued to give speeches; the default speaking time is usually around 90 seconds unless a motion changes it.",
  },
  {
    t: "Caucusing",
    d: "Debate breaks into moderated caucuses (structured mini-debates) and unmoderated caucuses (free time to lobby and write).",
  },
  {
    t: "Draft resolutions & amendments",
    d: "Delegations team up to write draft resolutions, then propose amendments — changes to the wording — to refine them.",
  },
  {
    t: "Closure of debate",
    d: "When enough drafts are on the floor, a delegate moves to close debate and push the committee into voting.",
  },
  {
    t: "Voting procedure",
    d: "Amendments are voted on first, then the resolutions themselves. Pass, and it becomes the committee's official stance.",
  },
];

const yields = [
  { to: "To another delegate", d: "Hand your leftover time to a delegate, who may accept or decline it." },
  { to: "To points of information", d: "Open the floor to questions from other delegates about your speech." },
  { to: "To the chair", d: "Simply give your remaining time back to the chair." },
];

const motions = [
  { name: "Set the speakers' list", what: "Opens formal debate; delegates queue up to speak.", maj: "Simple" },
  { name: "Moderated caucus", what: "Structured debate on a sub-topic with a set speaker time.", maj: "Simple" },
  { name: "Unmoderated caucus", what: "Free recess to lobby, negotiate and draft — rules are suspended.", maj: "Simple" },
  { name: "Introduce a draft resolution", what: "Brings a sponsor's draft resolution onto the floor.", maj: "Simple" },
  { name: "Divide the question", what: "Vote on individual clauses separately rather than the whole.", maj: "Simple" },
  { name: "Adjourn the debate", what: "Halts work on an item — a “no-action” move that can block a draft.", maj: "Simple" },
  { name: "Close the debate", what: "Ends discussion and moves the committee to voting.", maj: "2/3" },
  { name: "Suspend the meeting", what: "Pauses the session — used for breaks and lunch.", maj: "Simple" },
  { name: "Appeal the chair's decision", what: "Formally challenges a ruling made by the chair.", maj: "2/3" },
  { name: "Adjourn the session", what: "Closes the meeting — used at the very end of the conference.", maj: "Simple" },
];

const speechBeats = [
  { t: "Open strong", d: "One line that frames your country's stance. Skip the “good morning honourable chair” padding if time is tight." },
  { t: "State the problem", d: "Show you understand the issue and why it matters to your country specifically." },
  { t: "Offer a solution", d: "Point to a concrete idea — ideally one that's already in, or could go into, a draft resolution." },
  { t: "Call to action", d: "Tell the room what you want them to do: support a clause, join your bloc, back your draft." },
];

const points = [
  {
    name: "Point of Personal Privilege",
    body: "Used when you're uncomfortable — can't hear a speaker, or need the bathroom. The only point that can interrupt a speaker.",
    accent: true,
  },
  {
    name: "Point of Parliamentary Inquiry",
    body: "A question to the chair about the rules or procedure. Cannot interrupt a speaker.",
  },
  {
    name: "Point of Order",
    body: "Raised when you believe the chair has misapplied the rules. Convention: make a “T” with your hand and placard to signal it.",
  },
  {
    name: "Right of Reply",
    body: "Used when your country or your personal integrity has been insulted and you want to formally respond.",
  },
  {
    name: "Point of Information",
    body: "The right to ask another delegate a question — only during formal debate, when they yield their time to questions.",
  },
];

const wear = [
  "Office / business attire (dress pants, button-ups)",
  "Skirts over the knee",
  "Dress shoes, plain boots or closed heels",
  "A blazer or sweater (recommended, handy if it's cold)",
];

const dontWear = [
  "Denim, shorts or casual shirts (e.g. polos)",
  "Sneakers, open-toe heels or stilettos",
  "Caps, hats or military wear",
  "Deep V-necks, exposed midriff, or political slogans",
];

export default function MunProcedures() {
  return (
    <>
      {/* Intro */}
      <section className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            The Rules of the Room
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl md:text-3xl font-bold mb-5 leading-snug">
            How a committee session actually runs
          </h2>
          <p className="text-[#5a5a5a] text-base leading-relaxed">
            Rules of procedure exist for one reason: to keep order so everyone gets heard. They decide who
            speaks, on what, and when. It can look like a lot at first, but it&apos;s really just a shared
            set of manners.{" "}
            <span className="text-[#0d1b3e] font-medium">
              Rules vary between conferences — each one hands out its own procedure document, so always
              check theirs.
            </span>
          </p>
        </FadeIn>
      </section>

      {/* Quick-reference cheat sheet */}
      <section className="max-w-5xl mx-auto mt-12">
        <FadeIn className="text-center mb-6">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Keep This Open in Committee
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            The “what do I say?” cheat sheet
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            Ninety percent of procedure is knowing the right phrase for the moment. Here&apos;s the short list.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-[#0d1b3e] text-[#c8963e]">
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase">If you want to…</th>
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase">Do / say this</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0ebe2]">
                  {cheatSheet.map((c) => (
                    <tr key={c.want} className="hover:bg-[#faf8f4] transition-colors">
                      <td className="px-5 py-3.5 text-[#0d1b3e] font-semibold text-sm align-top">{c.want}</td>
                      <td className="px-5 py-3.5 text-[#5a5a5a] text-sm leading-relaxed">{c.say}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Formal vs informal */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="mb-6 text-center">
          <h3 className="text-[#0d1b3e] text-sm font-bold tracking-wider uppercase">
            Two modes of debate
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-4">
          {consultation.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm">
                <h4 className="text-[#0d1b3e] font-bold text-lg mb-2">{c.title}</h4>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Golden rules */}
      <section className="max-w-5xl mx-auto mt-16">
        <FadeIn className="mb-6 text-center">
          <h3 className="text-[#0d1b3e] text-sm font-bold tracking-wider uppercase">
            Four rules to never break
          </h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4">
          {goldenRules.map((r, i) => (
            <FadeIn key={r.title} delay={i * 0.06}>
              <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm flex gap-4">
                <span className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#c8963e]/12 text-[#c8963e] text-sm font-bold">
                  {i + 1}
                </span>
                <div>
                  <h4 className="text-[#0d1b3e] font-bold text-base mb-1.5">{r.title}</h4>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed">{r.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Session flow timeline */}
      <section className="max-w-3xl mx-auto mt-20">
        <FadeIn className="text-center mb-10">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Order of Play
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold">
            The flow of a session
          </h3>
        </FadeIn>
        <div className="relative pl-8">
          <span className="absolute left-[11px] top-2 bottom-2 w-px bg-[#c8963e]/30" aria-hidden="true" />
          <div className="space-y-6">
            {sessionFlow.map((s, i) => (
              <FadeIn key={s.t} delay={i * 0.05} direction="left">
                <div className="relative">
                  <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0d1b3e] text-[#e8b96a] text-[11px] font-bold ring-4 ring-[#f7f3eb]">
                    {i + 1}
                  </span>
                  <p className="text-[#0d1b3e] font-semibold text-base leading-tight">{s.t}</p>
                  <p className="text-[#5a5a5a] text-sm leading-relaxed mt-1">{s.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Yields */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            When You Finish a Speech
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            Yielding your time
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            If you don&apos;t use all your speaking time in formal debate, you can <em>yield</em> what&apos;s
            left in one of three ways:
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-4">
          {yields.map((y, i) => (
            <FadeIn key={y.to} delay={i * 0.07}>
              <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm text-center">
                <h4 className="text-[#0d1b3e] font-bold text-sm mb-2">{y.to}</h4>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{y.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Motions table */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Moving Debate Forward
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            Motions you&apos;ll hear most
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            A <em>motion</em> is a request to do something procedural. The chair puts it to the room, and it
            passes if enough delegates agree.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-[#0d1b3e] text-[#c8963e]">
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase">Motion</th>
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase">What it does</th>
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase text-right">Majority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0ebe2]">
                  {motions.map((m) => (
                    <tr key={m.name} className="hover:bg-[#faf8f4] transition-colors">
                      <td className="px-5 py-3.5 text-[#0d1b3e] font-semibold text-sm align-top whitespace-nowrap">
                        {m.name}
                      </td>
                      <td className="px-5 py-3.5 text-[#5a5a5a] text-sm leading-relaxed">{m.what}</td>
                      <td className="px-5 py-3.5 text-right align-top">
                        <span className="inline-block bg-[#c8963e]/12 text-[#9a6f24] text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                          {m.maj}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-[#9a9a9a] text-xs mt-4 leading-relaxed">
            <strong className="text-[#6b6b6b]">Precedence matters.</strong> When several motions are on the
            table at once, the chair takes them in order of disruptiveness: suspend the meeting → adjourn the
            meeting → adjourn the debate → close the debate.
          </p>
        </FadeIn>
      </section>

      {/* Amendments */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Changing the Draft
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            Friendly &amp; unfriendly amendments
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            An <em>amendment</em> adds to, deletes from, or revises part of a draft resolution. There are two
            flavours:
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-4">
          <FadeIn>
            <div className="h-full bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-[#0d1b3e] font-bold text-lg mb-2">Friendly</h4>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                All the sponsors of the resolution agree to the change. Because there&apos;s no dispute, it&apos;s
                simply folded into the draft — no debate, no vote needed.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full bg-white border border-amber-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-[#0d1b3e] font-bold text-lg mb-2">Unfriendly</h4>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                At least one sponsor disagrees. It has to be introduced by motion, debated (typically two
                speakers for, two against), and then put to a committee vote to pass.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Points & Rights */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Your Safety Net
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            Points &amp; rights
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            Where motions move debate, <em>points</em> protect you and keep things running smoothly.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <div
                className={`h-full rounded-2xl p-5 shadow-sm border ${
                  p.accent ? "bg-[#0d1b3e] border-[#0d1b3e]" : "bg-white border-[#ede8de]"
                }`}
              >
                <h4 className={`font-bold text-sm mb-2 ${p.accent ? "text-[#e8b96a]" : "text-[#0d1b3e]"}`}>
                  {p.name}
                </h4>
                <p className={`text-sm leading-relaxed ${p.accent ? "text-white/75" : "text-[#5a5a5a]"}`}>
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Dress code */}
      <section className="max-w-4xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Look the Part
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            The dress code
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            It changes a little from conference to conference, but the spirit is always the same: dress like
            a diplomat.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4">
          <FadeIn>
            <div className="h-full bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5 6 11l5.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <h4 className="text-[#0d1b3e] font-bold text-base">Do wear</h4>
              </div>
              <ul className="space-y-2.5">
                {wear.map((w) => (
                  <li key={w} className="flex gap-2.5 text-[#3a3a3a] text-sm leading-relaxed">
                    <span className="text-emerald-500 mt-0.5">✓</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full bg-white border border-red-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <h4 className="text-[#0d1b3e] font-bold text-base">Don&apos;t wear</h4>
              </div>
              <ul className="space-y-2.5">
                {dontWear.map((w) => (
                  <li key={w} className="flex gap-2.5 text-[#3a3a3a] text-sm leading-relaxed">
                    <span className="text-red-400 mt-0.5">✕</span>
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How to structure a speech */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Make Your 90 Seconds Count
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            How to structure a speech
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            Speaking time is short and precious. A simple four-beat structure keeps you clear under pressure.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {speechBeats.map((s, i) => (
            <FadeIn key={s.t} delay={i * 0.06}>
              <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-5 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0d1b3e] text-[#e8b96a] text-sm font-bold mb-3">
                  {i + 1}
                </span>
                <h4 className="text-[#0d1b3e] font-bold text-sm mb-1.5">{s.t}</h4>
                <p className="text-[#5a5a5a] text-sm leading-relaxed">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <ResourceLinks
        links={[
          { label: "Points & Motions, Used Properly — MUNPrep", href: "https://www.munprep.org/mun-points-and-motions-how-to-use-them-properly/", desc: "A clear breakdown of when and how to use each point and motion." },
          { label: "MUN Amendments Explained — MUNPrep", href: "https://www.munprep.org/mun-amendments/", desc: "Friendly vs unfriendly amendments and how they reach the floor." },
          { label: "Rules of Procedure (Long Form) — UNA-USA", href: "https://mun.fairgaze.com/Document/Commitee/c7d7c969af.pdf", desc: "The full formal rulebook many conferences base their procedure on." },
          { label: "Key Terms Every Delegate Should Know — Oxford Global", href: "https://www.oxfordglobal.org/blog/2026/1/19/model-united-nations-glossary-key-terms-every-delegate-should-know", desc: "A procedure-focused glossary to round out the vocabulary." },
        ]}
      />
    </>
  );
}
