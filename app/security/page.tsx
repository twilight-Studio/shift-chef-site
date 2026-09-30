import type { Metadata } from "next";
import { CheckCircle2, FileClock, MapPin, ShieldCheck } from "lucide-react";
import { ButtonLink, Container, DarkCtaPanel, PageHero, SectionHeading, StatusPill } from "@/components/primitives";
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
      <PageHero
        eyebrow="Security"
        title="Access that follows responsibility."
        lead="ShiftChef is designed around minimum-necessary access, explicit invitations, controlled sessions, and an accountable record of important operational decisions."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="inverse">Talk through your access model</ButtonLink>
          <ButtonLink href="/roles" variant="secondary">Explore roles</ButtonLink>
        </div>
      </PageHero>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Verified product principles"
            title="A clear boundary between convenience and control."
            description="ShiftChef does not treat a hidden button as security. The product’s permission model stays authoritative at the server, with the mobile experience reflecting only the actions a person should use."
          />
          <div className="security-principle-grid">
            {securityPrinciples.map((principle) => {
              const Icon = principle.icon;
              return <article key={principle.title}><Icon aria-hidden="true" /><h2>{principle.title}</h2><p>{principle.body}</p></article>;
            })}
          </div>
        </Container>
      </section>

      <section className="section-shell accountable-section">
        <Container className="accountable-grid">
          <div>
            <SectionHeading
              eyebrow="Designed for accountable operations"
              title="Keep the reason beside the decision."
              description="Important changes are easier to review when the actor, action, target, time, reason, and request reference stay together. This fictional card shows the shape of that record."
              inverse
            />
            <ul className="security-note-list">
              <li><CheckCircle2 aria-hidden="true" /> Revision reasons stay with controlled schedule changes.</li>
              <li><CheckCircle2 aria-hidden="true" /> Cancellation paths ask for an explanation.</li>
              <li><CheckCircle2 aria-hidden="true" /> CSV exports should travel only through approved channels.</li>
            </ul>
          </div>
          <article className="history-card">
            <div className="history-card-head"><div className="history-icon"><FileClock aria-hidden="true" /></div><div><p>Change history</p><h2>Friday Dinner Service</h2></div><StatusPill tone="lime">Recorded</StatusPill></div>
            <dl>
              <div><dt>Action</dt><dd>Roster revision shared</dd></div>
              <div><dt>Actor</dt><dd>Jordan Lee · Manager</dd></div>
              <div><dt>Reason</dt><dd>Terrace section reopened</dd></div>
              <div><dt>Request reference</dt><dd>SC-DEMO-1042</dd></div>
              <div><dt>Recorded</dt><dd>Friday · 16:20 local time</dd></div>
            </dl>
            <p className="history-disclaimer">Fictional example for illustration only.</p>
          </article>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Privacy starts with the right scope"
            title="Three records. One intentional boundary."
            description="An account identifies the person signing in. Workspace membership defines access. A staff profile holds employment context inside that workspace. Keeping those ideas separate supports clearer decisions."
          />
          <div className="scope-levels">
            <article><ShieldCheck aria-hidden="true" /><span>01</span><h2>Account</h2><p>Personal sign-in, verification, password recovery, and device sessions.</p></article>
            <article><MapPin aria-hidden="true" /><span>02</span><h2>Membership</h2><p>Access role plus all-locations or selected-location scope inside one workspace.</p></article>
            <article><FileClock aria-hidden="true" /><span>03</span><h2>Staff profile</h2><p>Workplace-specific job details, scheduling context, and permitted operational records.</p></article>
          </div>
          <div className="security-caution">
            <strong>Operational care still matters.</strong>
            <p>Private data should stay out of public screenshots and casual exports. Share CSV files only through approved channels, and configure native push delivery only with valid deployment credentials.</p>
          </div>
        </Container>
      </section>

      <DarkCtaPanel title="Map access to the way responsibility already works." body="We’ll use your roles and workplace structure to make the security conversation concrete." />
    </>
  );
}
