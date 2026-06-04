export const committees = [
  {
    id: "bilateral",
    abbr: null,
    tag: "Flagship · Unique to INDYS",
    name: "Indo–Nepal Bilateral Meet",
    subtitle: "The Himalayan Dialogue",
    description:
      "The committee unique to INDYS and to no other MUN conference in the world. Indian and Nepali delegates negotiate directly — trade, transit, water rights, and people-to-people connectivity — as representatives of their own nations. This is not simulation. This is the relationship this conference was built to strengthen.",
    logo: "/brand/regional-body.png",
    logoAlt: "Regional Body committee mark",
    featured: true,
    span: "full",
  },
  {
    id: "unsc",
    abbr: "UNSC",
    tag: null,
    name: "UN Security Council",
    subtitle: null,
    description:
      "The crown jewel of any MUN program. Chosen with a specifically regional agenda — Himalayan border tensions, water rights disputes, and the India-China-Nepal triangle. Only 15 delegates, intense debate, highest difficulty. The most coveted committee at the summit.",
    logo: "/brand/un-emblem.png",
    logoAlt: "United Nations committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "unhrc",
    abbr: "UNHRC",
    tag: null,
    name: "UN Human Rights Council",
    subtitle: null,
    description:
      "Human rights in the digital age is the most urgent issue for both India and Nepal's Gen Z population. Relevant to tech companies as potential sponsors and gives delegates a genuinely contemporary issue to wrestle with.",
    logo: "/brand/un-human-rights.png",
    logoAlt: "UN Human Rights committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "uncsw",
    abbr: "UNCSW",
    tag: null,
    name: "UN Commission on the Status of Women",
    subtitle: null,
    description:
      "Essential for inclusivity and for attracting women-focused brand sponsors. South Asia is one of the world's worst regions for female economic participation — this committee is personally relevant for every delegate from India and Nepal.",
    logo: "/brand/un-women.png",
    logoAlt: "UN Women committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "disec",
    abbr: "DISEC",
    tag: null,
    name: "Disarmament & Security",
    subtitle: "UNGA First Committee",
    description:
      "Covers cutting-edge topics in autonomous weapons, cyber warfare, and arms control — highly relevant to the regional security landscape shaping Indo-Nepal relations.",
    logo: "/brand/un-emblem.png",
    logoAlt: "United Nations committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "aippm",
    abbr: "AIPPM",
    tag: null,
    name: "All India Political Parties Meet",
    subtitle: "Indian Parliament",
    description:
      "Delegates simulate Indian political parties debating a live, real-world issue — the renegotiation of the foundational India-Nepal treaty. High drama, high context, very shareable content.",
    logo: "/brand/regional-body.png",
    logoAlt: "Regional Body committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "unpbc",
    abbr: "UNPBC",
    tag: null,
    name: "UN Peacebuilding Commission",
    subtitle: null,
    description:
      "The United Nations' dedicated forum for post-conflict reconstruction and institution-building. Delegates design governance frameworks, reconciliation processes, and economic recovery plans for real post-conflict states.",
    logo: "/brand/un-emblem.png",
    logoAlt: "United Nations committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "ictr",
    abbr: "ICTR",
    tag: null,
    name: "International Criminal Tribunal for Rwanda",
    subtitle: "Historical Tribunal",
    description:
      "A deeply immersive historical simulation. Delegates prosecute and defend cases from the 1994 Rwandan genocide, engaging with evidence, legal procedure, and the moral weight of international justice.",
    logo: "/brand/un-emblem.png",
    logoAlt: "United Nations committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "ccc",
    abbr: "CCC",
    tag: null,
    name: "Continuous Crisis Committee",
    subtitle: "Crisis Room",
    description:
      "A committee that never sleeps. The CCC runs a live, escalating global crisis across all three conference days — new developments injected every 60 minutes, alliances shifting in real time. There are no procedures here. There is only the crisis.",
    logo: "/brand/crisis-room.png",
    logoAlt: "Crisis Room committee mark",
    featured: false,
    span: "single",
  },
  {
    id: "ipc",
    abbr: "IPC",
    tag: null,
    name: "International Press Corps",
    subtitle: "Creative Press Corps",
    description:
      "Not a committee — a media machine. IPC delegates cover all other committees in real time, producing articles, photographs, and caricatures published in the INDYS gazette. This committee generates the summit's visual record, feeds social media, and ensures sponsors are documented in delegate-produced content.",
    logo: "/brand/creative-press-corps.png",
    logoAlt: "Creative Press Corps committee mark",
    featured: false,
    span: "double",
  },
] as const;

export const stats = [
  { num: "500+", label: "Total Delegates", sub: "Students from 30+ schools across India & Nepal" },
  { num: "9",    label: "Committees",       sub: "UN bodies, regional forums, crisis simulations & press" },
  { num: "3",    label: "Conference Days",  sub: "Nov 20, 21 & 22 — full committee sessions each day" },
  { num: "1",    label: "Historic First",   sub: "First authorized bilateral India–Nepal MUN conference" },
] as const;

export const reasons = [
  {
    num: "1",
    heading: "Nepal's border crossing is 30 km away",
    body: "The Panitanki–Kakarbhitta crossing — India's most active Nepal border crossing — is under 30 km from the city centre. No delegate travels far to reach INDYS.",
  },
  {
    num: "2",
    heading: "Nepal's Consulate General is here",
    body: "The Consulate General of Nepal has its permanent headquarters in Siliguri — an extraordinary distinction that gives INDYS direct access to official bilateral diplomatic channels.",
  },
  {
    num: "3",
    heading: "Gateway to four nations",
    body: "Siliguri sits at the junction of India, Nepal, Bhutan, and Bangladesh. No other city in India has this four-nation geographic significance.",
  },
  {
    num: "4",
    heading: "Hub of Indo–Nepal bilateral commerce",
    body: "Siliguri is the de facto capital of Indo–Nepal trade, transit, and logistics. The economic relationship INDYS's committees debate is the same one that built this city.",
  },
] as const;

export const casePoints = [
  {
    num: "01",
    heading: "Geopolitical Timing",
    body: "Nepal's new government, India's Neighbourhood First policy, and China's growing influence in eastern Nepal create a once-in-a-decade window for youth diplomacy programming at this border.",
  },
  {
    num: "02",
    heading: "Unique Geography",
    body: "Siliguri borders Nepal, Bhutan, and Bangladesh and is the only gateway to Northeast India. No other city provides this bilateral narrative — the venue itself is the statement.",
  },
  {
    num: "03",
    heading: "Real Talent Pipeline",
    body: "Delegates are Class 9–12 and undergraduate students — exactly the demographic that institutions, universities, and brands compete to reach early. This is where future policymakers are found first.",
  },
  {
    num: "04",
    heading: "Built-in Press Corps",
    body: "An International Press Corps with Journalism, Photography, and Caricature sub-tracks means every sponsor's presence is documented, reported, and amplified by the delegates themselves.",
  },
  {
    num: "05",
    heading: "Flagship Innovation",
    body: "The CCC and Bilateral Meet — both firsts for the region — will generate more social media content, debate, and press coverage than any traditional committee at any MUN in the region.",
  },
] as const;

export const days = [
  {
    num: "20",
    month: "November",
    title: "Opening Ceremony Day",
    body: "Grand opening, keynote address by Secretary General, committee inauguration, cultural program, delegate networking dinner. Sponsors receive maximum visibility at the highest-attendance moment.",
    highlight: false,
  },
  {
    num: "21",
    month: "November",
    title: "Full Committee Day",
    body: "All committees in full session. Guest speakers, committee journalism, sponsor stall activations, delegate photography tour, cultural exchange program. The summit's operational core.",
    highlight: true,
  },
  {
    num: "22",
    month: "November",
    title: "Closing & Awards Day",
    body: "Final resolutions, awards ceremony, INDYS gazette release, closing address, gala dinner. Awards give sponsors a moment for brand acknowledgment in front of the full delegate body.",
    highlight: false,
  },
] as const;

export const tiers = [
  {
    id: "platinum",
    name: "Platinum",
    role: "Title Partner",
    category: "Schools · Banks · Real Estate · Hotels",
    perks: [
      "Name in summit title",
      "Stage branding",
      "Opening keynote slot",
      "Banner at all venues",
      "Logo on all materials",
      "Gazette front page",
      "Social media feature",
      "Delegate kit inclusion",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    role: "Powered By",
    category: "Coaching · EdTech · Retail · FMCG",
    perks: [
      "Stage banner",
      "Logo on certificates",
      "Stall at venue",
      "Social media posts (3)",
      "Delegate kit inclusion",
      "Gazette inside page",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    role: "Associate Partner",
    category: "Local brands · Restaurants · Services",
    perks: [
      "Logo on banners",
      "Social media post (1)",
      "Gazette mention",
    ],
  },
  {
    id: "venue",
    name: "Venue Partner",
    role: "Host / Venue Partner",
    category: "Schools in Siliguri & North Bengal",
    perks: [
      "Designated home committee",
      "Host school branding",
      "Principal on stage",
      "Priority delegate spots",
      "Media coverage",
      "MOU with INDYS",
    ],
  },
] as const;
