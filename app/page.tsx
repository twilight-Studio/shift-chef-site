import type { Metadata } from "next";
import { ArrowRight, Check, LockKeyhole, MapPinned } from "lucide-react";
import { FaqAccordion, RoleTabs } from "@/components/interactive";
import { PhoneFrame, ScreenshotStack } from "@/components/product-visuals";
import {
  BentoGrid,
  ButtonLink,
  Container,
  DarkCtaPanel,
  Eyebrow,
  FeatureCard,
  SectionHeading,
  StatusPill,
} from "@/components/primitives";
import { WorkflowTimeline } from "@/components/workflow-timeline";
import { SiteLink as Link } from "@/components/site-link";
import {
  faqs,
  features,
  operatingScopeItems,
  valueItems,
} from "@/content/site";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "ShiftChef | Hospitality Scheduling & Service Operations" },
  description:
    "Plan shifts, coordinate teams, manage service work, and review outcomes in one role-aware hospitality workspace.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    title: "ShiftChef | Hospitality Scheduling & Service Operations",
    description: "Plan shifts, coordinate teams, manage service work, and review outcomes in one role-aware hospitality workspace.",
    url: absoluteUrl("/"),
    type: "website",
    images: [{ url: absoluteUrl("/social/shiftchef-social.png"), width: 1200, height: 630, alt: "ShiftChef: Run service, not spreadsheets." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShiftChef | Hospitality Scheduling & Service Operations",
    description: "Plan shifts, coordinate teams, manage service work, and review outcomes in one role-aware hospitality workspace.",
    images: [absoluteUrl("/social/shiftchef-social.png")],
  },
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

export default function HomePage() {
  return (
    <>
      <section className="home-hero-wrap">
        <Container>
          <div className="home-hero">
            <div className="home-hero-copy">
              <Eyebrow inverse>Hospitality operations, in one place</Eyebrow>
              <h1>Run service, not spreadsheets.</h1>
              <p className="home-hero-lead">
                Plan shifts, match the right people, handle requests, and keep every team member aligned from the first staffing decision to the post-service review.
              </p>
              <div className="home-hero-actions">
                <ButtonLink href="/contact" variant="inverse">Book a demo</ButtonLink>
                <ButtonLink href="/how-it-works" variant="secondary">See how it works</ButtonLink>
              </div>
              <p className="home-hero-support">
                Built for owners, managers, supervisors, team members, and operations reviewers.
              </p>
            </div>
            <ScreenshotStack />
          </div>
          <ul className="value-strip" aria-label="ShiftChef operating rhythm">
            {valueItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.label}><Icon aria-hidden="true" /><span>{item.label}</span></li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Before the doors open"
            title="Make the next decision obvious."
            description="When schedules, requests, messages, and service notes live in different places, managers spend the day reconstructing context. ShiftChef gives each role a clear view of what matters now and what happens next."
          />
          <div className="outcome-grid">
            <FeatureCard>
              <span className="card-index">01</span>
              <h3>Plan with the whole picture</h3>
              <p>Build shifts around workplaces, job titles, availability, staffing needs, and scheduling conflicts.</p>
            </FeatureCard>
            <FeatureCard>
              <span className="card-index coral-index">02</span>
              <h3>Give every role a useful home</h3>
              <p>Owners see control, managers see action, team members see their work, and reviewers see the record.</p>
            </FeatureCard>
            <FeatureCard>
              <span className="card-index lime-index">03</span>
              <h3>Keep the reason with the change</h3>
              <p>Preserve acknowledgments, revision reasons, follow-up work, reports, and change history.</p>
            </FeatureCard>
          </div>
        </Container>
      </section>

      <section className="section-shell connected-flow-section">
        <Container>
          <SectionHeading
            eyebrow="One service, one connected flow"
            title="From first draft to final review."
          />
          <WorkflowTimeline />
          <div className="section-link-row">
            <Link className="text-link" href="/how-it-works">See the full workflow <ArrowRight aria-hidden="true" /></Link>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="The work around service"
            title="Everything your team needs to stay in step."
          />
          <BentoGrid>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <FeatureCard className={`bento-card bento-card-${index + 1}`} key={feature.title}>
                  <div className={`feature-icon feature-icon-${feature.tone ?? "green"}`}><Icon aria-hidden="true" /></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  {feature.screenshot ? (
                    <div className="bento-phone-wrap">
                      <PhoneFrame src={feature.screenshot.src} alt={feature.screenshot.alt} />
                    </div>
                  ) : null}
                </FeatureCard>
              );
            })}
          </BentoGrid>
        </Container>
      </section>

      <section className="role-band section-shell">
        <Container>
          <SectionHeading
            eyebrow="The right view for the work"
            title="One workspace. Six levels of access. No one-size-fits-all dashboard."
            description="ShiftChef changes what people see and can do according to their workspace role and workplace scope. The API remains authoritative; hiding a button is never treated as authorization."
            inverse
          />
          <RoleTabs />
          <div className="mt-8">
            <ButtonLink href="/roles" variant="inverse">Explore every role</ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section-shell">
        <Container className="multi-location-grid">
          <div>
            <SectionHeading
              eyebrow="One operation, clear scope"
              title="Built for one workplace or a whole operating group."
              description="Keep workplaces, local time zones, job titles, people, and location access organized inside each workspace. Switch between organizations without mixing their records."
            />
            <ul className="check-list">
              {operatingScopeItems.map((item) => <li key={item}><Check aria-hidden="true" /> {item}</li>)}
            </ul>
          </div>
          <div className="scope-card" role="group" aria-label="Illustration of workplace access scope">
            <div className="scope-card-head"><MapPinned aria-hidden="true" /><div><strong>Friday service group</strong><span>Local time and access stay in scope</span></div></div>
            <div className="scope-list">
              <div><span>Dining room</span><StatusPill tone="lime">All access</StatusPill></div>
              <div><span>Garden terrace</span><StatusPill tone="green">Manager view</StatusPill></div>
              <div><span>Event kitchen</span><StatusPill tone="coral">Selected team</StatusPill></div>
            </div>
            <div className="scope-foot"><LockKeyhole aria-hidden="true" /><span>Workplace scope travels with every decision.</span></div>
          </div>
        </Container>
      </section>

      <section className="security-teaser-section">
        <Container className="security-teaser">
          <div className="security-lock" aria-hidden="true"><LockKeyhole /></div>
          <div>
            <Eyebrow>Permission-aware by design</Eyebrow>
            <h2>Clear access. Safer decisions.</h2>
            <p>Role and workplace scope shape every experience. Sensitive actions keep their reasons and history, while server-side authorization remains the source of truth.</p>
          </div>
          <ButtonLink href="/security" variant="secondary">How ShiftChef handles access</ButtonLink>
        </Container>
      </section>

      <section className="section-shell" id="faq">
        <Container className="faq-grid">
          <SectionHeading eyebrow="Common questions" title="Straight answers before the demo." />
          <FaqAccordion />
        </Container>
      </section>

      <DarkCtaPanel />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
