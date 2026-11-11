import type { Metadata } from "next";
import { Check } from "lucide-react";

import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { howItWorksSteps } from "@/content/site";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "How ShiftChef works",
  description: "Follow a fictional Friday dinner service from workplace setup and staffing through handover, follow-up, scorecards, and review.",
  path: "/how-it-works",
});

function RhythmCard({ step, label, title, children }: { step: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <article className="how-rhythm-card">
      <p>{step} / {label}</p>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <section className="how-revamp-hero">
        <Container>
          <Eyebrow>How it works</Eyebrow>
          <h1>Follow one service from plan to review.</h1>
          <p>A realistic Friday dinner service shows how ShiftChef keeps every handoff clear without turning the service itself into a software exercise.</p>
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </Container>
      </section>

      <section className="how-rhythm-band">
        <Container>
          <p className="micro-label">Before, during, after.</p>
          <h2>A clear rhythm for every service.</h2>
          <div className="how-rhythm-grid">
            <RhythmCard step="01" label="PLAN" title="Draft the rota">
              <p>Friday service <b>Draft</b></p><p>Kitchen <b>2 roles</b></p><p>Dining room <b>3 roles</b></p>
            </RhythmCard>
            <RhythmCard step="02" label="SHARE" title="Publish with context">
              <p>Roster <b>Published</b></p><p>Acknowledgements</p><i><em /></i><p>8 of 12 people</p>
            </RhythmCard>
            <RhythmCard step="03" label="RUN" title="Keep service moving">
              <p>Opening checks <b>2 / 3</b></p><p><Check /> Prep surfaces</p><p><span /> Review briefing</p>
            </RhythmCard>
            <RhythmCard step="04" label="REVIEW" title="Bring the record together">
              <p>Service review <b>Summary</b></p><p>Follow-ups <b>2 open</b></p><p>Feedback <b>3 entries</b></p>
            </RhythmCard>
          </div>
        </Container>
      </section>

      <section className="handoff-section">
        <Container>
          <p className="micro-label">Friday dinner service</p>
          <h2>One service. Every handoff clear.</h2>
          <p className="handoff-intro">Fictional example. Availability stays separate from assignment; acknowledgements confirm visibility, not attendance.</p>
          <ol className="handoff-list">
            {howItWorksSteps.map((step, index) => (
              <li id={`step-${index + 1}`} key={step.title}>
                <strong className="handoff-number">{String(index + 1).padStart(2, "0")}</strong>
                <div className="handoff-copy">
                  <p>{step.actor}</p>
                  <h3>{step.title}</h3>
                  <span>{step.description}</span>
                </div>
                <aside className="handoff-record">
                  <small>What remains</small>
                  <p>{step.record}</p>
                </aside>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="how-cta-section">
        <Container>
          <div className="how-cta">
            <div><h2>Make room for<br />better service.</h2><p>See how ShiftChef fits the way your team works.</p></div>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
