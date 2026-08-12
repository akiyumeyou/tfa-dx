import { instructors } from "@/data/people";
import { faqs, sessions } from "@/data/program";
import { links, overview, site } from "@/data/site";

/** 中間交流会（no: null）を除いた本編のみを日程の範囲とする */
const numberedSessions = sessions.filter((session) => session.no !== null);
const firstSession = numberedSessions[0];
const lastSession = numberedSessions[numberedSessions.length - 1];

const provider = {
  "@type": "GovernmentOrganization",
  name: site.organizer,
  url: "https://www.pref.tokushima.lg.jp/",
} as const;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/icon.png`,
  image: `${site.url}/images/og/ogp.jpg`,
  description: site.description,
  email: site.contactEmail,
  areaServed: {
    "@type": "AdministrativeArea",
    name: "徳島県",
  },
  parentOrganization: provider,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  inLanguage: "ja",
  publisher: { "@type": "Organization", name: site.contractor },
};

export const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: `${site.name}（女性向けDX人材育成プログラム）`,
  description: site.description,
  url: site.url,
  inLanguage: "ja",
  provider,
  isAccessibleForFree: true,
  educationalLevel: "初心者",
  teaches: ["生成AIの活用", "DXの基礎", "課題発見と業務改善", "データ活用"],
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: overview.target,
  },
  offers: {
    "@type": "Offer",
    price: 0,
    priceCurrency: "JPY",
    category: "Free",
    availability: "https://schema.org/LimitedAvailability",
    url: links.apply,
    validThrough: "2026-09-09T23:59:00+09:00",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      name: `${site.name} 2026年度`,
      /* 第6回のみ会場開催のため online ではなく blended */
      courseMode: "Blended",
      inLanguage: "ja",
      startDate: firstSession.isoDate,
      endDate: lastSession.isoDate,
      courseSchedule: {
        "@type": "Schedule",
        startDate: firstSession.isoDate,
        endDate: lastSession.isoDate,
        repeatFrequency: "P2W",
        repeatCount: numberedSessions.length,
        byDay: "https://schema.org/Wednesday",
        startTime: "19:00:00",
        endTime: "21:30:00",
        scheduleTimezone: "Asia/Tokyo",
      },
      location: {
        "@type": "Place",
        name: overview.venue,
        address: {
          "@type": "PostalAddress",
          addressRegion: "徳島県",
          addressCountry: "JP",
        },
      },
      instructor: instructors.map((instructor) => ({
        "@type": "Person",
        name: instructor.name,
        jobTitle: instructor.titles[0],
      })),
      offers: {
        "@type": "Offer",
        price: 0,
        priceCurrency: "JPY",
        url: links.apply,
      },
    },
  ],
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
