import FadeIn from "@/components/FadeIn";
import ResourceLinks from "@/components/resources/ResourceLinks";

const compareRows = [
  ["Job", "Sets the scene & justifies action", "States what the committee will actually do"],
  ["Where it sits", "Top of the resolution", "Bottom of the resolution"],
  ["Opener style", "Italicized", "Underlined & numbered"],
  ["Ends with", "A comma", "A semicolon (last one, a period)"],
  ["Can be amended?", "Rarely — they're background", "Yes — this is where amendments happen"],
  ["Example opener", "Recalling, Noting with concern", "Calls upon, Requests, Urges"],
];

const mistakes = [
  "Writing operative clauses that just “condemn” or “express concern” — that's a preamble's job. Operatives must propose action.",
  "Using Condemns or Demands outside the Security Council — those strong verbs are reserved for the UNSC.",
  "Repeating the same opener twice. Re-use it with “Further” or “Strongly” instead.",
  "Forgetting it's one sentence: commas after preambles, semicolons after operatives, and a single period at the very end.",
  "A solution with no “how”. Strong clauses say who does what, funded how, and monitored by whom.",
  "Leaving a single lonely sub-clause. If you open sub-clauses, you need at least two.",
];

const preambPhrases = [
  "Recalling", "Reaffirming", "Noting with concern", "Bearing in mind", "Deeply convinced",
  "Alarmed by", "Recognizing", "Emphasizing", "Aware of", "Guided by", "Welcoming", "Having examined",
];

const operativePhrases = [
  "Calls upon", "Recommends", "Requests", "Urges", "Encourages", "Authorizes",
  "Declares", "Resolves", "Supports", "Endorses", "Further requests", "Strongly urges",
];

const formatRules = [
  "The whole resolution is one very long sentence — it begins with the committee's name and ends with a single period.",
  "The opening word of each preambulatory clause is italicized; commas separate the clauses.",
  "The opening word of each operative clause is underlined and numbered; semicolons separate them.",
  "The first letter of every clause opener is capitalized, and no opener is repeated (re-use it with “Further” or “Strongly”).",
  "Sub-clauses are lettered a, b, c; sub-sub-clauses use roman numerals i, ii, iii — and aren't capitalized.",
  "A colon introduces sub-clauses, which are indented with tabs (never spaces). A single lone sub-clause isn't allowed.",
  "Acronyms are written out in full the first time, e.g. “International Atomic Energy Agency (IAEA)”.",
  "Keep it tidy: typically 12pt Times New Roman, single spacing, and no longer than about two pages.",
];

const committeeTypes = [
  {
    name: "Full Resolution",
    body: "The most common format. You bring a complete resolution and speeches, and the committee debates and votes on it as a whole.",
  },
  {
    name: "Clause-by-Clause",
    body: "Used in high-stakes bodies like the UNSC. Each clause is debated, amended and voted on individually — precise and detailed.",
  },
  {
    name: "Crisis",
    body: "An evolving scenario is dropped on the room mid-session. You think on your feet and draft brand-new clauses to respond in real time.",
  },
];

export default function Resolutions() {
  return (
    <>
      {/* Intro */}
      <section className="max-w-3xl mx-auto">
        <FadeIn>
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            The Whole Point
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl md:text-3xl font-bold mb-5 leading-snug">
            A resolution is the document everything builds toward
          </h2>
          <p className="text-[#3a3a3a] text-lg leading-relaxed mb-4">
            In MUN, a <strong className="text-[#0d1b3e]">resolution</strong> is a formal document that lays
            out proposed solutions to the issue your committee is tackling.
          </p>
          <p className="text-[#5a5a5a] text-base leading-relaxed">
            It&apos;s the main way delegates work together to address a global challenge and reach consensus.
            Throughout the session you debate and negotiate its content, gathering support — and once a
            resolution is approved by a majority vote, it becomes the official stance of the committee.
          </p>
        </FadeIn>
      </section>

      {/* Quick comparison table */}
      <section className="max-w-4xl mx-auto mt-12">
        <FadeIn className="text-center mb-6">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            The Two Halves, Side by Side
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            Preamble vs. operative, at a glance
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            Every resolution has two kinds of clauses. If you remember nothing else, remember this table.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[560px]">
                <thead>
                  <tr className="bg-[#0d1b3e] text-[#c8963e]">
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase"> </th>
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase">Preambulatory</th>
                    <th className="px-5 py-3 text-xs font-bold tracking-wider uppercase">Operative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0ebe2]">
                  {compareRows.map(([k, p, o]) => (
                    <tr key={k} className="hover:bg-[#faf8f4] transition-colors">
                      <td className="px-5 py-3.5 text-[#0d1b3e] font-semibold text-sm align-top whitespace-nowrap">{k}</td>
                      <td className="px-5 py-3.5 text-[#5a5a5a] text-sm leading-relaxed align-top">{p}</td>
                      <td className="px-5 py-3.5 text-[#5a5a5a] text-sm leading-relaxed align-top">{o}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Anatomy diagram */}
      <section className="max-w-4xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Anatomy of a Resolution
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold">
            What it looks like on paper
          </h3>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl shadow-sm overflow-hidden">
            {/* Header block */}
            <div className="bg-[#0d1b3e] px-6 py-5">
              <p className="text-[#c8963e] text-[10px] font-bold tracking-widest uppercase mb-3">
                The Header — who &amp; what
              </p>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5 font-[family-name:var(--font-serif)]">
                <p className="text-white/90 text-sm"><span className="text-white/45">COMMITTEE:</span> UNHCR</p>
                <p className="text-white/90 text-sm"><span className="text-white/45">QUESTION OF:</span> Climate displacement</p>
                <p className="text-white/90 text-sm"><span className="text-white/45">MAIN SUBMITTER:</span> India</p>
                <p className="text-white/90 text-sm"><span className="text-white/45">CO-SUBMITTERS:</span> Nepal, Bhutan…</p>
              </div>
            </div>

            {/* Subject line */}
            <div className="px-6 pt-5 pb-3">
              <p className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-sm font-bold tracking-wide">
                THE UN HIGH COMMISSIONER FOR REFUGEES,
              </p>
            </div>

            {/* Preamble */}
            <div className="px-6 py-4 border-b border-[#f0ebe2]">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-block bg-[#c8963e]/12 text-[#9a6f24] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                  Preambulatory clauses
                </span>
                <span className="text-[#9a9a9a] text-xs">— the “why”. Opener <em>italicized</em>, ends in a comma.</span>
              </div>
              <div className="font-[family-name:var(--font-serif)] text-[#3a3a3a] text-sm leading-relaxed space-y-2">
                <p><em>Recalling</em> the 1951 Refugee Convention,</p>
                <p><em>Deeply concerned</em> by rising displacement across the Bay of Bengal region,</p>
              </div>
            </div>

            {/* Operative */}
            <div className="px-6 py-4">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-block bg-[#0d1b3e]/8 text-[#0d1b3e] text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded">
                  Operative clauses
                </span>
                <span className="text-[#9a9a9a] text-xs">— the “what”. Opener <span className="underline">underlined</span> &amp; numbered, ends in a semicolon.</span>
              </div>
              <div className="font-[family-name:var(--font-serif)] text-[#3a3a3a] text-sm leading-relaxed space-y-2">
                <p>1. <span className="underline">Calls upon</span> member states to establish a regional relief fund;</p>
                <p>2. <span className="underline">Requests</span> the creation of a monitoring body that:</p>
                <p className="pl-6">a. reports annually on displacement figures,</p>
                <p className="pl-6">b. coordinates cross-border shelter.</p>
              </div>
            </div>
          </div>
          <p className="text-center text-[#9a9a9a] text-xs mt-4 italic">
            An illustrative example — the whole thing reads as one long sentence, ending in a single period.
          </p>
        </FadeIn>
      </section>

      {/* Grammar note */}
      <section className="max-w-3xl mx-auto mt-16">
        <FadeIn>
          <div className="bg-[#faf8f4] border border-[#ede8de] rounded-2xl p-6 md:p-7">
            <h3 className="text-[#0d1b3e] text-sm font-bold tracking-wider uppercase mb-3">
              The “one sentence” trick
            </h3>
            <p className="text-[#5a5a5a] text-sm leading-relaxed">
              Here&apos;s the secret that makes the formatting click: the entire resolution is grammatically{" "}
              <strong className="text-[#0d1b3e]">one sentence</strong>. The committee&apos;s name is the{" "}
              <em>subject</em>. The preambulatory clauses are descriptive phrases setting out its frame of
              mind. The operative clauses are the <em>predicate</em> — the actions it&apos;s taking — which is
              why every operative clause opens with a present-tense verb in the third person (<em>Calls upon</em>,{" "}
              <em>Requests</em>, <em>Urges</em>). String them together and it reads as one long, formal sentence.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Preamble vs Operative */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Two Kinds of Clauses
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold">
            Preambulatory vs. operative
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-5">
          <FadeIn>
            <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm">
              <h4 className="text-[#0d1b3e] font-bold text-lg mb-1">Preambulatory</h4>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                The historic justification for action — they cite past resolutions, precedents and the
                purpose behind what you&apos;re proposing. Openers are <em>italicized</em>.
              </p>
              <div className="flex flex-wrap gap-2">
                {preambPhrases.map((p) => (
                  <span key={p} className="bg-[#c8963e]/10 text-[#9a6f24] text-xs font-medium px-3 py-1.5 rounded-full font-[family-name:var(--font-serif)] italic">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="h-full bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm">
              <h4 className="text-[#0d1b3e] font-bold text-lg mb-1">Operative</h4>
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-4">
                The actual policies your resolution creates — they spell out what the committee will{" "}
                <em>do</em>. Openers are <span className="underline">underlined</span>. (<em>Condemns</em> and{" "}
                <em>Demands</em> are reserved for the Security Council.)
              </p>
              <div className="flex flex-wrap gap-2">
                {operativePhrases.map((p) => (
                  <span key={p} className="bg-[#0d1b3e]/8 text-[#0d1b3e] text-xs font-medium px-3 py-1.5 rounded-full font-[family-name:var(--font-serif)] underline">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Formatting rules */}
      <section className="max-w-3xl mx-auto mt-20">
        <FadeIn className="mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3 text-center">
            Get the Format Right
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold text-center">
            The formatting rules that trip people up
          </h3>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm">
            <ul className="space-y-3">
              {formatRules.map((r) => (
                <li key={r} className="flex gap-3 text-[#3a3a3a] text-sm leading-relaxed">
                  <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#c8963e]/12 text-[#c8963e] mt-0.5">
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M2.5 7.5 6 11l5.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* Committee types */}
      <section className="max-w-5xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Where Resolutions Live
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold mb-2">
            How committees handle them
          </h3>
          <p className="text-[#6b6b6b] text-sm max-w-xl mx-auto">
            Different committee formats treat the resolution differently — it&apos;s worth knowing which one
            you&apos;re walking into.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-4">
          {committeeTypes.map((c, i) => (
            <FadeIn key={c.name} delay={i * 0.07}>
              <div className="h-full bg-[#0d1b3e] rounded-2xl p-6">
                <h4 className="text-[#e8b96a] font-bold text-base mb-2">{c.name}</h4>
                <p className="text-white/70 text-sm leading-relaxed">{c.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Common mistakes */}
      <section className="max-w-3xl mx-auto mt-20">
        <FadeIn className="text-center mb-8">
          <span className="block text-[#c8963e] text-xs font-semibold tracking-[0.14em] uppercase mb-3">
            Learn From Others
          </span>
          <h3 className="font-[family-name:var(--font-serif)] text-[#0d1b3e] text-2xl font-bold">
            Mistakes first-timers always make
          </h3>
        </FadeIn>
        <FadeIn>
          <div className="bg-white border border-[#ede8de] rounded-2xl p-6 shadow-sm">
            <ul className="space-y-3">
              {mistakes.map((m) => (
                <li key={m} className="flex gap-3 text-[#3a3a3a] text-sm leading-relaxed">
                  <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500 mt-0.5">
                    <svg width="11" height="11" viewBox="0 0 14 14" fill="none"><path d="M3.5 3.5l7 7M10.5 3.5l-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      <ResourceLinks
        links={[
          { label: "How to Write a Resolution — Model Diplomat", href: "https://blog.modeldiplomat.com/how-to-write-a-position-paper-mun", desc: "From position paper to finished draft, step by step." },
          { label: "MUN Amendments Explained — MUNPrep", href: "https://www.munprep.org/mun-amendments/", desc: "How clauses get changed once your draft hits the floor." },
          { label: "Preambulatory & Operative Phrase Bank — WiseMee", href: "https://www.wisemee.com/mun-glossary/", desc: "A bigger list of clause openers to vary your writing." },
          { label: "UN Documentation: Resolutions — UN Library", href: "https://research.un.org/en/docs/resolutions", desc: "See how the real thing is structured at the actual UN." },
        ]}
      />
    </>
  );
}
