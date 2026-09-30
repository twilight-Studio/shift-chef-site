import type { Metadata } from "next";
import { CapabilityMatrix } from "@/components/capability-matrix";
import { ButtonLink, Container, DarkCtaPanel, PageHero, SectionHeading } from "@/components/primitives";
import { audienceStories, roles } from "@/content/site";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Roles and access",
  description: "See how ShiftChef gives owners, administrators, managers, supervisors, team members, and reports viewers the right operating view.",
  path: "/roles",
});

export default function RolesPage() {
  return (
    <>
      <PageHero
        eyebrow="Roles"
        title="Give everyone the view their work requires."
        lead="Access roles control what someone can do. Job titles describe the work they are qualified to perform. ShiftChef keeps those two ideas separate."
      >
        <div className="mt-8"><ButtonLink href="/contact" variant="inverse">Book a demo</ButtonLink></div>
      </PageHero>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Six access levels"
            title="Useful by default. Scoped by responsibility."
            description="Roles may be combined, and exact visibility also depends on workplace scope and the API’s authorization decisions."
          />
          <div className="role-card-grid">
            {roles.map((role, index) => (
              <article className="role-card" key={role.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{role.name}</h2>
                <p>{role.summary}</p>
                <ul>{role.focus.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell role-stories-section">
        <Container>
          <SectionHeading eyebrow="In practice" title="Four perspectives on the same operation." />
          <div className="audience-story-grid">
            {audienceStories.map((story) => (
              <article key={story.title}><h3>{story.title}</h3><p>{story.body}</p></article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Capability matrix"
            title="A clearer view of who can do what."
            description="These summaries explain the operating model, not a substitute for authorization. Workplace scope and server-side decisions always apply."
          />
          <div className="mt-10"><CapabilityMatrix /></div>
        </Container>
      </section>

      <DarkCtaPanel title="Show every role what matters next." body="See how role and workplace scope can fit the way your operation already works." />
    </>
  );
}
