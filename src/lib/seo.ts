import type { Metadata } from "next";
import { committees, resources, secretariat } from "@/lib/data";

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  "https://indysofficial.com";

export const siteUrl = rawSiteUrl.startsWith("http")
  ? rawSiteUrl.replace(/\/$/, "")
  : `https://${rawSiteUrl.replace(/\/$/, "")}`;

export const siteName = "INDYS '26";
export const organizationName = "INDYS";
export const defaultTitle = "INDYS 2026 - Indo-Nepal MUN & Diplomatic Youth Summit";
export const defaultDescription =
  "INDYS 2026 is an Indo-Nepal Model United Nations and youth diplomacy summit in Siliguri, India, bringing 500+ delegates and 11 committees together from November 20-22, 2026.";
export const defaultOgImage = "/brand/indys-seal-mark.png";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncateDescription(description: string, max = 155) {
  if (description.length <= max) return description;
  const trimmed = description.slice(0, max - 1);
  return `${trimmed.slice(0, trimmed.lastIndexOf(" "))}.`;
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = defaultOgImage,
  type = "website",
  keywords = [],
}: SeoOptions): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const clippedDescription = truncateDescription(description);

  return {
    title,
    description: clippedDescription,
    keywords: [
      "INDYS",
      "INDYS 2026",
      "Indo-Nepal Diplomatic Youth Summit",
      "Indo Nepal MUN",
      "Indo-Nepal MUN",
      "India Nepal MUN",
      "Nepal MUN",
      "India MUN",
      "best MUN in Nepal",
      "best MUN in India",
      "best MUN conference",
      "Nepal best MUN",
      "India best MUN",
      "Model United Nations Siliguri",
      "Model United Nations India Nepal",
      "youth diplomacy summit",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: clippedDescription,
      url,
      siteName,
      type,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: clippedDescription,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const baseOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${siteUrl}/#organization`,
  name: organizationName,
  legalName: "Indo-Nepal Diplomatic Youth Summit",
  alternateName: [
    siteName,
    "INDYS 2026",
    "INDYS Indo-Nepal MUN",
    "Indo-Nepal Diplomatic Youth Summit",
  ],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/brand/indys-seal-mark.png"),
    width: 1804,
    height: 1804,
  },
  image: absoluteUrl("/brand/indys-seal-mark.png"),
  email: "info@indysofficial.com",
  foundingDate: "2026",
  areaServed: ["India", "Nepal", "South Asia"],
  keywords:
    "INDYS, INDYS 2026, Indo-Nepal MUN, Nepal MUN, India MUN, Model United Nations, youth diplomacy summit",
  knowsAbout: [
    "Model United Nations",
    "India-Nepal relations",
    "Youth diplomacy",
    "South Asian diplomacy",
    "Student leadership",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Siliguri",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
};

export const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationEvent",
  "@id": `${siteUrl}/#event`,
  name: defaultTitle,
  alternateName: siteName,
  description: defaultDescription,
  startDate: "2026-11-20",
  endDate: "2026-11-22",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  url: siteUrl,
  image: [absoluteUrl("/brand/indys-seal-mark.png"), absoluteUrl("/committees/bilateral-hero.jpg")],
  location: {
    "@type": "Place",
    name: "Siliguri, India",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Siliguri",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
  },
  organizer: {
    "@id": `${siteUrl}/#organization`,
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student delegate",
  },
};

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    alternateName: ["INDYS", "INDYS 2026", "Indo-Nepal MUN"],
    description: defaultDescription,
    url: siteUrl,
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

export function homePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: defaultTitle,
    description: defaultDescription,
    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },
    about: [
      { "@id": `${siteUrl}/#event` },
      { "@id": `${siteUrl}/#organization` },
    ],
  };
}

export function committeeListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/committees#webpage`,
    url: absoluteUrl("/committees"),
    name: "INDYS '26 Committees",
    description: "Explore all committees at INDYS '26.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: committees.map((committee, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/committees/${committee.id}`),
        name: committee.name,
      })),
    },
  };
}

export function committeeJsonLd(committee: (typeof committees)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${siteUrl}/committees/${committee.id}#course`,
    name: `${committee.name} at INDYS '26`,
    alternateName: committee.abbr,
    description: truncateDescription(committee.description, 300),
    url: absoluteUrl(`/committees/${committee.id}`),
    image: absoluteUrl(committee.heroImage),
    provider: {
      "@id": `${siteUrl}/#organization`,
    },
    teaches: committee.agenda,
    educationalLevel: committee.difficulty,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      location: "Siliguri, India",
      startDate: "2026-11-20",
      endDate: "2026-11-22",
    },
  };
}

export function resourceJsonLd(resource: (typeof resources)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}/resources/${resource.id}#article`,
    headline: `${resource.title} - INDYS '26 Resources`,
    description: truncateDescription(resource.description),
    url: absoluteUrl(`/resources/${resource.id}`),
    image: absoluteUrl(resource.heroImage),
    inLanguage: "en-IN",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    author: {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function secretariatJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${siteUrl}/secretariat#webpage`,
    url: absoluteUrl("/secretariat"),
    name: "INDYS '26 Secretariat",
    description: "Meet the INDYS '26 secretariat.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: secretariat.map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Person",
          name: member.name,
          jobTitle: member.title,
          image: member.image ? absoluteUrl(member.image) : undefined,
        },
      })),
    },
  };
}
