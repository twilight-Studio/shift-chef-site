import type { Metadata } from "next";
import { Check, LockKeyhole } from "lucide-react";

import { FaqAccordion, RoleTabs } from "@/components/interactive";
import { PhoneFrame } from "@/components/product-visuals";
import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { faqs } from "@/content/site";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "ShiftChef | Better shifts. Better service." },
  description: "Plan shifts, connect your people, and keep every hospitality service moving from staffing to review.",
  alternates: { canonical: absoluteUrl("/") },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

function RhythmCard({ step, label, title, children }: { step: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <article className="rhythm-card">
      <p className="micro-label">{step} / {label}</p>
      <h3>{title}</h3>
      <div className="rhythm-card-ui">{children}</div>
    </article>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="revamp-hero">
        <Container className="revamp-hero-grid">
          <div className="revamp-hero-copy">
            <Eyebrow>Hospitality in sync</Eyebrow>
            <h1>Great teams.<br />Smooth service.</h1>
            <p>Plan shifts. Connect your people. Keep every service moving—from the first staffing decision to the final review.</p>
            <div className="revamp-actions">
              <ButtonLink href="/contact">Book a demo</ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">See how it works</ButtonLink>
            </div>
            <small>ShiftChef includes teams. Your current tools stay intact.</small>
          </div>

          <div className="hero-phones" aria-label="ShiftChef product views">
            <div className="hero-phone hero-phone-left">
              <PhoneFrame src="/screenshots/shifts-manager.png" alt="ShiftChef manager scheduling view" priority />
              <span>MY SHIFTS</span>
            </div>
            <div className="hero-phone hero-phone-center">
              <PhoneFrame src="/screenshots/home-team-member.png" alt="ShiftChef team member home view" priority />
              <span>STAFF HOME</span>
            </div>
            <div className="hero-phone hero-phone-right">
              <PhoneFrame src="/screenshots/operations-manager.png" alt="ShiftChef manager tools view" priority />
              <span>MANAGER TOOLS</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="rhythm-band">
        <Container>
          <Eyebrow inverse>Before, during, after.</Eyebrow>
          <h2>A clear rhythm for every service.</h2>
          <div className="rhythm-grid-revamp">
            <RhythmCard step="01" label="PLAN" title="Draft the rota">
              <div className="mini-list"><span>Friday service <b>Draft</b></span><span>Kitchen <b>3 roles</b></span><span>Dining room <b>5 roles</b></span></div>
            </RhythmCard>
            <RhythmCard step="02" label="SHARE" title="Publish with context">
              <div className="mini-list"><span>Roster <b>Published</b></span><span>Acknowledgments</span><i><em /></i><span>8 of 9 people</span></div>
            </RhythmCard>
            <RhythmCard step="03" label="RUN" title="Keep service moving">
              <div className="mini-checks"><b>Opening checks <small>2 / 3</small></b><span><Check /> Prep stations</span><span><i /> Review briefing</span></div>
            </RhythmCard>
            <RhythmCard step="04" label="REVIEW" title="Bring the record together">
              <div className="mini-list"><span>Service review <b>Summary</b></span><span>Follow-ups <b>2 open</b></span><span>Feedback <b>4 entries</b></span></div>
            </RhythmCard>
          </div>
        </Container>
      </section>

      <section className="scheduling-section">
        <Container className="scheduling-grid">
          <div className="scheduling-copy">
            <p className="micro-label">01 / SCHEDULING</p>
            <h2>Build the roster<br />with the whole<br />picture.</h2>
            <p>Create shifts, reuse saved plans, collect availability, and resolve conflicts before publishing a schedule your team can understand.</p>
          </div>
          <div className="schedule-phone">
            <PhoneFrame src="/screenshots/shifts-manager.png" alt="ShiftChef shifts schedule" />
            <small>ShiftChef mobile app · Sample data</small>
          </div>
          <article className="assignment-card">
            <span className="soft-pill">Final / confirmed</span>
            <h3>Dinner Service — Grill &amp; Sauté</h3>
            <p>Today · Main Kitchen · Line 2<br />4:00 PM–11:30 PM<br />7.5 hrs · 30m unpaid break<br />Grill Station · 4 on roster<br />Shift lead: Chef Mauro</p>
            <button type="button">View &amp; acknowledge</button>
            <button type="button" className="outline-button">Request swap</button>
          </article>
        </Container>
      </section>

      <section className="daily-work-section">
        <Container className="daily-work-grid">
          <article className="work-feature work-feature-checklist">
            <p className="micro-label">03 / DAILY WORK</p>
            <h2>Give routines a clear finish line.</h2>
            <p>Assign checklists, capture required responses and supporting links, and preserve completion and reopening history.</p>
            <div className="work-ui-card">
              <div><span>Line stations 1 &amp; 2</span><b>8 / 10 done</b></div>
              <h3>Opening Line Prep &amp;<br />Sanitization</h3>
              <i><em /></i>
              <p>Prep station cutting boards sanitised</p>
              <button type="button">Continue</button>
            </div>
          </article>
          <article className="work-feature work-feature-comms">
            <p className="micro-label">04 / COMMUNICATION</p>
            <h2>Keep the right people in the loop.</h2>
            <p>Separate everyday conversations from briefings and announcements that need a read acknowledgment.</p>
            <div className="work-ui-card announcement-card">
              <span className="soft-pill">Pinned announcement</span>
              <h3>Special Tasting Menu Briefing for Friday night service</h3>
              <p>Chef Marcus · Head Chef · 1h ago<br /><br />All BOH &amp; FOH line captains: 15-minute briefing at 4:30 PM sharp regarding allergen prep for the Autumn seasonal rollout.</p>
              <button type="button">Read &amp; acknowledge</button>
            </div>
          </article>
        </Container>
      </section>

      <section className="roles-showcase">
        <Container>
          <p className="micro-label">The right view for the work</p>
          <h2>One team. The right tools for each role.</h2>
          <RoleTabs />
          <p className="roles-note">Role previews illustrate typical capabilities. See role comparisons for more detail.</p>
        </Container>
      </section>

      <section className="scope-section">
        <Container className="scope-revamp-grid">
          <div className="scope-preview">
            <p className="micro-label">Friday service group</p>
            <div><strong>Dining room</strong><span>All locations</span></div>
            <div><strong>Garden terrace</strong><span>Manager view</span></div>
            <div><strong>Event kitchen</strong><span>Selected team</span></div>
          </div>
          <div className="scope-revamp-copy">
            <p className="micro-label">One operation. Clear scope.</p>
            <h2>One workplace or a whole operating group.</h2>
            <p>Keep workplaces, local time zones, job titles, people and access organised within each workspace. Switch organisations without mixing records.</p>
            <ul><li>Location-scoped access</li><li>Scheduling in local time</li><li>Controlled invitations and change history</li></ul>
            <ButtonLink href="/security" variant="secondary"><LockKeyhole /> Security and access</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="faq-section" id="faq">
        <Container>
          <p className="micro-label">Common questions</p>
          <h2>Straight answers before the demo.</h2>
          <FaqAccordion defaultOpenIndex={0} />
        </Container>
      </section>

      <section className="revamp-cta-section">
        <Container>
          <div className="revamp-cta">
            <div><h2>Make room for<br />better service.</h2><p>See how ShiftChef fits the way your team works.</p></div>
            <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
          </div>
        </Container>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
