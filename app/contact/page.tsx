import type { Metadata } from "next";
import { Check } from "lucide-react";
import { DemoForm } from "@/components/demo-form";
import { Container, PageHero, SectionHeading } from "@/components/primitives";
import { contactCoverage } from "@/content/site";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Book a demo",
  description: "Tell ShiftChef how your hospitality team plans and runs service so the demo can focus on your roles, workplaces, and workflows.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title="See ShiftChef around your operation."
        lead="Tell us how your team plans and runs service. We’ll use the conversation to focus the demo on the roles, workplaces, and workflows that matter to you."
      />

      <section className="section-shell">
        <Container className="contact-grid">
          <aside className="contact-aside">
            <SectionHeading eyebrow="What we’ll cover" title="A useful conversation, shaped around your service." />
            <ul>{contactCoverage.map((item) => <li key={item}><Check aria-hidden="true" /> {item}</li>)}</ul>
            <div className="contact-note">
              <p className="eyebrow text-primary">No invented handoff</p>
              <p>We only show a success message after a configured endpoint confirms delivery. Until then, the form clearly stays in preview mode and sends nothing.</p>
            </div>
          </aside>
          <DemoForm />
        </Container>
      </section>
    </>
  );
}
