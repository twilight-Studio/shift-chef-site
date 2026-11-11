import type { Metadata } from "next";
import { Check } from "lucide-react";

import { PhoneFrame } from "@/components/product-visuals";
import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Product overview",
  description: "Explore how ShiftChef connects scheduling, requests, daily work, communication, follow-up, reports, and change history.",
  path: "/product",
});

function ProductFeature({
  number,
  label,
  title,
  description,
  visual,
  visualFirst = false,
  tone = "white",
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  visual: React.ReactNode;
  visualFirst?: boolean;
  tone?: "white" | "soft";
}) {
  return (
    <section className={`product-story product-story-${tone}`}>
      <Container className={`product-story-grid${visualFirst ? " product-story-visual-first" : ""}`}>
        <div className="product-story-copy">
          <p className="micro-label">{number} / {label}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="product-story-visual">{visual}</div>
      </Container>
    </section>
  );
}

function ProductRhythmCard({ step, label, title, children }: { step: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <article className="product-rhythm-card">
      <p>{step} / {label}</p>
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export default function ProductPage() {
  return (
    <>
      <section className="product-revamp-hero">
        <Container>
          <Eyebrow>Product</Eyebrow>
          <h1>Everything around service,<br />connected.</h1>
          <p>ShiftChef brings scheduling, team operations, communication, and review into one role-aware mobile workspace without turning everyday work into admin work.</p>
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </Container>
      </section>

      <ProductFeature
        number="01"
        label="SCHEDULING"
        title="Build the roster with the whole picture."
        description="Create shifts, reuse saved plans, collect availability and resolve conflicts before publishing a schedule your team can understand."
        visual={
          <div className="product-schedule-visual">
            <div className="product-schedule-phone">
              <PhoneFrame src="/screenshots/shifts-manager.png" alt="ShiftChef scheduling view showing confirmed services" />
              <small>ShiftChef mobile app · Sample data</small>
            </div>
            <article className="product-interface-card product-assignment-card">
              <span>Final / confirmed</span>
              <h3>Dinner Service — Grill &amp; Sauté</h3>
              <p>Today · Main Kitchen · Line 2<br />4:00 PM–11:30 PM<br />7.5 hrs · 30m unpaid break<br />Grill Station · 4 on roster<br />Shift lead: Chef Marco</p>
              <button type="button">View &amp; acknowledge</button>
              <button type="button" className="product-outline-button">Request swap</button>
            </article>
          </div>
        }
      />

      <ProductFeature
        number="02"
        label="REQUESTS"
        title="Keep every request in context."
        description="Review time off and shift cover alongside the service they affect, with clear status and replacement decisions."
        visualFirst
        tone="soft"
        visual={
          <div className="product-visual-caption">
            <article className="product-interface-card product-request-card">
              <span>Cover request · 12m ago</span>
              <h3>Sarah M. needs cover</h3>
              <p>Prep Cook · Tomorrow (Thu)<br />10:00 AM–4:30 PM<br />“Doctor appointment rescheduled last minute, swap or cover greatly appreciated!”</p>
              <button type="button">Claim shift</button>
              <button type="button" className="product-outline-button">Decline</button>
            </article>
            <small>ShiftChef mobile app · Sample data</small>
          </div>
        }
      />

      <ProductFeature
        number="03"
        label="DAILY WORK"
        title="Give routines a clear finish line."
        description="Assign checklists, capture required responses and supporting links, and preserve completion and reopening history."
        visual={
          <div className="product-visual-caption">
            <article className="product-interface-card product-checklist-card">
              <div><b>Line stations 1 &amp; 2</b><span>8 / 10 done</span></div>
              <h3>Opening Line Prep &amp;<br />Sanitization</h3>
              <i><em /></i>
              <p>Prep station cutting boards sanitised</p>
              <button type="button" className="product-outline-button">Continue</button>
            </article>
            <small>ShiftChef mobile app · Sample data</small>
          </div>
        }
      />

      <ProductFeature
        number="04"
        label="COMMUNICATION"
        title="Keep the right people in the loop."
        description="Separate everyday conversations from briefings and announcements that need a read acknowledgment."
        visualFirst
        tone="soft"
        visual={
          <div className="product-visual-caption">
            <article className="product-interface-card product-announcement-card">
              <span>Pinned announcement</span>
              <h3>Special Tasting Menu Briefing for Friday night service</h3>
              <p>Chef Marcus · Head Chef · 1h ago<br />All BOH &amp; FOH line captains: 15-minute briefing at 4:30 PM sharp regarding allergen prep for the Autumn seasonal rollout.</p>
              <button type="button">Read &amp; acknowledge</button>
            </article>
            <small>ShiftChef mobile app · Sample data</small>
          </div>
        }
      />

      <ProductFeature
        number="05"
        label="FOLLOW-UP"
        title="Carry the handover forward."
        description="Record service issues, assign follow-up work and connect feedback, recognition and coaching to the right people."
        visual={
          <div className="product-visual-caption">
            <article className="product-interface-card product-handover-card">
              <span>Lunch service</span>
              <h3>Lunch handover</h3>
              <p>Elena · Today · Line Cook &amp; Pass<br />Prepared backup sauces for dinner.<br />Protein cuts still need checking.</p>
            </article>
            <small>ShiftChef mobile app · Sample data</small>
          </div>
        }
      />

      <ProductFeature
        number="06"
        label="REVIEW"
        title="See the story behind the service."
        description="Explore summaries, scorecards, reports, CSV exports and change history within the access your role permits."
        visualFirst
        tone="soft"
        visual={
          <div className="product-visual-caption">
            <article className="product-interface-card product-report-card">
              <div><span>Service review</span><b>Read only</b></div>
              <h3>Friday Dinner Service</h3>
              <small>Downtown · Service scorecard</small>
              <hr />
              <p><span>Checklist responses</span><b>8 / 12</b></p>
              <p><span>Follow-up tasks</span><b>2 open</b></p>
              <p><span>Feedback entries</span><b>3</b></p>
              <a href="/how-it-works">View report · →</a>
            </article>
            <small>Illustrative reporting view · Sample data</small>
          </div>
        }
      />

      <section className="product-rhythm-band">
        <Container>
          <p className="micro-label">Before, during, after.</p>
          <h2>A clear rhythm for every service.</h2>
          <div className="product-rhythm-grid">
            <ProductRhythmCard step="01" label="PLAN" title="Draft the rota">
              <p>Friday service <b>Draft</b></p><p>Kitchen <b>2 roles</b></p><p>Dining room <b>3 roles</b></p>
            </ProductRhythmCard>
            <ProductRhythmCard step="02" label="SHARE" title="Publish with context">
              <p>Roster <b>Published</b></p><p>Acknowledgements</p><i><em /></i><p>8 of 12 people</p>
            </ProductRhythmCard>
            <ProductRhythmCard step="03" label="RUN" title="Keep service moving">
              <p>Opening checks <b>2 / 3</b></p><p><Check /> Prep surfaces</p><p><span /> Review briefing</p>
            </ProductRhythmCard>
            <ProductRhythmCard step="04" label="REVIEW" title="Bring the record together">
              <p>Service review <b>Summary</b></p><p>Follow-ups <b>2 open</b></p><p>Feedback <b>3 entries</b></p>
            </ProductRhythmCard>
          </div>
        </Container>
      </section>

      <section className="product-cta-section">
        <Container>
          <div className="product-cta">
            <div><h2>Make room for<br />better service.</h2><p>See how ShiftChef fits the way your team works.</p></div>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
