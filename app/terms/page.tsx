import type { Metadata } from "next";
import { LegalDraftPage } from "@/components/legal-draft-page";
import { termsSections } from "@/content/legal";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Terms draft",
  description: "Draft terms-content placeholder for ShiftChef, clearly marked for legal review before production approval.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDraftPage
      kind="Terms"
      title="Clear terms should match the service people actually use."
      lead="This page is intentionally a draft. It provides a replacement-ready structure for approved terms without inventing contractual promises."
      sections={termsSections}
    />
  );
}
