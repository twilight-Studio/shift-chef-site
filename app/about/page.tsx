import type { Metadata } from "next";
import { Check, X } from "lucide-react";
import { ButtonLink, Container, DarkCtaPanel, PageHero, SectionHeading } from "@/components/primitives";
import { principles } from "@/content/site";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "About ShiftChef",
  description: "ShiftChef is built to give hospitality teams a calm, accountable view of what matters now, what happens next, and what changed.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Hospitality work moves fast. The tools around it should create calm."
        lead="ShiftChef is being built around a simple idea: every person should know what matters now, what they can do next, and how their work connects to the wider service."
      >
        <div className="mt-8"><ButtonLink href="/contact" variant="inverse">Book a demo</ButtonLink></div>
      </PageHero>

      <section className="section-shell">
        <Container>
          <SectionHeading eyebrow="Product principles" title="Clarity that holds up under pressure." />
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.number}><span>{principle.number}</span><h2>{principle.title}</h2><p>{principle.body}</p></article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell about-identity-section">
        <Container>
          <SectionHeading
            eyebrow="A practical boundary"
            title="Built for the work around service."
            description="ShiftChef brings staffing decisions and service operations into one operating rhythm. It stays honest about the jobs it is not designed to do."
          />
          <div className="is-is-not-grid">
            <section>
              <p className="eyebrow text-primary">What ShiftChef is</p>
              <h2>Scheduling and service operations</h2>
              <ul>
                <li><Check aria-hidden="true" /> Roster planning and availability</li>
                <li><Check aria-hidden="true" /> Requests, tasks, and checklists</li>
                <li><Check aria-hidden="true" /> Chats, announcements, and handover</li>
                <li><Check aria-hidden="true" /> Feedback, reports, and change history</li>
              </ul>
            </section>
            <section>
              <p className="eyebrow text-primary">What ShiftChef is not</p>
              <h2>Timekeeping or payroll</h2>
              <ul>
                <li><X aria-hidden="true" /> No clock-in or clock-out</li>
                <li><X aria-hidden="true" /> No attendance or break tracking</li>
                <li><X aria-hidden="true" /> No timesheets or worked-hours verification</li>
                <li><X aria-hidden="true" /> No payroll processing</li>
              </ul>
            </section>
          </div>
        </Container>
      </section>

      <DarkCtaPanel title="Create calm before the first ticket lands." body="See how ShiftChef can bring your roster, service work, and review into one clearer rhythm." />
    </>
  );
}
