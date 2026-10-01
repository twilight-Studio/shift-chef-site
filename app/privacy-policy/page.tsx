import type { Metadata } from "next";
import { LegalDraftPage } from "@/components/legal-draft-page";
import { privacySections } from "@/content/legal";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy policy draft",
  description:
    "Review the clearly marked draft structure for ShiftChef website, product, support, and privacy information before legal approval.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDraftPage
      kind="Privacy"
      title="Privacy information belongs in plain sight."
      lead="This page is intentionally a draft. It provides a replacement-ready structure for approved privacy content without making unverified legal promises."
      sections={privacySections}
    />
  );
}
