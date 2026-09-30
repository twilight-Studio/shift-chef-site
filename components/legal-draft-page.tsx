import { AlertTriangle } from "lucide-react";
import { Container, PageHero } from "@/components/primitives";
import { SiteLink as Link } from "@/components/site-link";
import type { LegalSection } from "@/content/legal";

export function LegalDraftPage({
  kind,
  title,
  lead,
  sections,
}: {
  kind: "Privacy" | "Terms";
  title: string;
  lead: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={`${kind} · draft`} title={title} lead={lead} />
      <section className="section-shell">
        <Container className="legal-layout">
          <aside className="legal-draft-notice" role="note">
            <AlertTriangle aria-hidden="true" />
            <div>
              <strong>Draft for review</strong>
              <p>This page is a structured placeholder, not approved legal advice or a production policy. Replace it with reviewed copy before launch.</p>
            </div>
          </aside>
          <article className="legal-content">
            {sections.map((section) => (
              <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>
            ))}
            <div className="legal-next-step">
              <h2>Before approval</h2>
              <p>Confirm the business identity, service model, jurisdiction, contact route, effective date, and all product promises with qualified legal counsel.</p>
              <Link href="/contact">Contact the ShiftChef team</Link>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
