import type { Metadata } from "next";

const fallbackSiteUrl = "https://shiftchef-service-operations.aqua-bay-9211.chatgpt.site";

export const siteConfig = {
  name: "ShiftChef",
  category: "Hospitality scheduling and service operations",
  description:
    "Plan shifts, coordinate teams, manage service work, and review outcomes in one role-aware hospitality workspace.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, ""),
  demoEndpoint: process.env.NEXT_PUBLIC_DEMO_ENDPOINT,
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadata): Metadata {
  const canonical = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url: canonical,
      images: [
        {
          url: absoluteUrl("/social/shiftchef-social.png"),
          width: 1200,
          height: 630,
          alt: "ShiftChef: Run service, not spreadsheets.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/social/shiftchef-social.png")],
    },
  };
}
