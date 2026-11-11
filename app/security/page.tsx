import type { Metadata } from "next";

import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { securityPrinciples } from "@/content/site";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Security and access",
  description: "Learn how ShiftChef uses server-authoritative permissions, six access levels, workplace scope, controlled sessions, and change history.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <>
      <section className="simple-revamp-hero"><Container><Eyebrow>Security</Eyebrow><h1>Access that follows responsibility.</h1><p>ShiftChef is designed around minimum-necessary access, explicit invitations, controlled sessions, and an accountable record of important operational decisions.</p><ButtonLink href="/contact">Book a demo</ButtonLink></Container></section>

      <section className="security-principles-revamp">
        <Container>
          <p className="micro-label">Permission-aware by design</p>
          <h2>Clear access. Accountable decisions.</h2>
          <div className="security-principles-grid-revamp">
            {securityPrinciples.map((principle, index) => <article key={principle.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{principle.title}</h3><p>{principle.body}</p></article>)}
          </div>
        </Container>
      </section>

      <section className="security-decision-section">
        <Container className="security-decision-grid">
          <div><p className="micro-label">Designed for review</p><h2>Keep the reason beside the decision.</h2><p>Actor, action, target, time, reason and request reference stay together so important changes can be understood later.</p><ul><li>Reasons stay with controlled revisions</li><li>Cancellations keep an explanation</li><li>Share exports through approved channels</li></ul></div>
          <article className="decision-record-card">
            <div><h3>Friday Dinner Service</h3><span>Recorded</span></div>
            <dl><dt>Action</dt><dd>Roster revision shared</dd><dt>Actor</dt><dd>Jordan Lee · Manager</dd><dt>Reason</dt><dd>Terrace section reopened</dd><dt>Request reference</dt><dd>SC-DEMO-1042</dd><dt>Recorded</dt><dd>Friday · 16:20 local time</dd></dl>
            <small>Fictional example for illustration only.</small>
          </article>
        </Container>
      </section>

      <section className="security-boundary-section">
        <Container>
          <p className="micro-label">Privacy starts with scope</p>
          <h2>Three records. One intentional boundary.</h2>
          <div className="security-boundary-grid">
            <article><span>01</span><h3>Account</h3><p>Personal sign-in, verification, recovery and device sessions.</p></article>
            <article><span>02</span><h3>Membership</h3><p>Access role and workplace scope inside one workspace.</p></article>
            <article><span>03</span><h3>Staff profile</h3><p>Job details, scheduling context and permitted operational records.</p></article>
          </div>
        </Container>
      </section>

      <section className="simple-cta-section"><Container><div className="simple-cta"><div><h2>Make room for<br />better service.</h2><p>See how ShiftChef fits the way your team works.</p></div><ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink></div></Container></section>
    </>
  );
}
