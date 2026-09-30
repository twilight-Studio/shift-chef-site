import type { Metadata } from "next";
import { LegalDraftPage } from "@/components/legal-draft-page";
import { privacySections } from "@/content/legal";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy draft",
  description: "Draft privacy-content placeholder for ShiftChef, clearly marked for legal review before production approval.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDraftPage
      kind="Privacy"
      title="Privacy information belongs in plain sight."
      lead="This page is intentionally a draft. It provides a replacement-ready structure for approved privacy content without making unverified legal promises."
      sections={privacySections}
    />
  );
}
