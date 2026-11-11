import type { Metadata } from "next";

import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { principles } from "@/content/site";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "About ShiftChef",
  description: "ShiftChef is built to give hospitality teams a calm, accountable view of what matters now, what happens next, and what changed.",
  path: "/about",
});

const isItems = ["Roster planning and availability", "Requests, tasks and checklists", "Chats, announcements and handover", "Feedback, reports and change history"];
const isNotItems = ["No clock-in or clock-out", "No attendance or break tracking", "No timesheets or worked-hours verification", "No payroll processing"];

export default function AboutPage() {
  return (
    <>
      <section className="simple-revamp-hero about-revamp-hero"><Container><Eyebrow>About</Eyebrow><h1>Hospitality work moves fast. The tools around it should create calm.</h1><p>ShiftChef is being built around a simple idea: every person should know what matters now, what they can do next, and how their work connects to the wider service.</p><ButtonLink href="/contact">Book a demo</ButtonLink></Container></section>

      <section className="about-principles-section">
        <Container><p className="micro-label">Our approach</p><h2>Clarity that holds up under pressure.</h2><div className="about-principles-grid">{principles.map((principle) => <article key={principle.number}><span>{principle.number}</span><h3>{principle.title}</h3><p>{principle.body}</p></article>)}</div></Container>
      </section>

      <section className="about-boundary-section">
        <Container><p className="micro-label">A practical boundary</p><h2>Built for the work around service.</h2><div className="about-boundary-grid">
          <article><p>What ShiftChef is</p><h3>Scheduling and service operations</h3><ul>{isItems.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><p>What ShiftChef is not</p><h3>Timekeeping or payroll</h3><ul>{isNotItems.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div></Container>
      </section>

      <section className="simple-cta-section"><Container><div className="simple-cta"><div><h2>Make room for<br />better service.</h2><p>See how ShiftChef fits the way your team works.</p></div><ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink></div></Container></section>
    </>
  );
}
