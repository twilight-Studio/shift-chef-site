import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
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
      <section className="legal-revamp-hero">
        <Container>
          <Eyebrow>{kind === "Privacy" ? "Privacy policy" : "Terms"}</Eyebrow>
          <h1>{title}</h1>
          <p>{lead}</p>
        </Container>
      </section>

      <section className="legal-revamp-body">
        <Container className="legal-revamp-container">
          <article className="legal-revamp-content">
            <aside className="legal-revamp-notice" role="note">
              <strong>Draft for review</strong>
              <p>This is a structured placeholder, not an approved production policy. Reviewed content must replace it before launch.</p>
            </aside>
            {sections.map((section) => (
              <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>
            ))}
            <section className="legal-revamp-before">
              <h2>Before approval</h2>
              <p>Confirm the business identity, service model, jurisdiction, contact route, effective date, and all product promises with qualified legal counsel.</p>
            </section>
            <div className="legal-revamp-action">
              <ButtonLink href="/contact" variant="secondary">Contact the team</ButtonLink>
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
