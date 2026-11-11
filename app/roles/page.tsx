import type { Metadata } from "next";

import { CapabilityMatrix } from "@/components/capability-matrix";
import { RoleTabs } from "@/components/interactive";
import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Roles and access",
  description: "See how ShiftChef gives owners, administrators, managers, supervisors, team members, and reports viewers the right operating view.",
  path: "/roles",
});

export default function RolesPage() {
  return (
    <>
      <section className="roles-revamp-hero">
        <Container>
          <Eyebrow>Roles</Eyebrow>
          <h1>Give everyone the view their work requires.</h1>
          <p>Access roles define what people can do. Job titles describe the work they are qualified to perform. Keep both clear, with the right workplace scope.</p>
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </Container>
      </section>

      <section className="roles-page-showcase roles-showcase">
        <Container>
          <p className="micro-label">The right view for the work</p>
          <h2>One team. The right tools for each role.</h2>
          <RoleTabs />
          <p className="roles-note">Role previews illustrate capabilities. See the comparison for access details.</p>
        </Container>
      </section>

      <section className="roles-matrix-section">
        <Container>
          <p className="micro-label">Who can do what</p>
          <h2>A clearer view of responsibility.</h2>
          <CapabilityMatrix />
          <p className="roles-matrix-note">This summary explains the operating model. Workplace scope and server-side permissions always apply.</p>
        </Container>
      </section>

      <section className="roles-cta-section">
        <Container>
          <div className="roles-cta">
            <div><h2>Make room for<br />better service.</h2><p>See how ShiftChef fits the way your team works.</p></div>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
