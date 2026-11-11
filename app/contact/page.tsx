import type { Metadata } from "next";

import { DemoForm } from "@/components/demo-form";
import { Container, Eyebrow } from "@/components/primitives";
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
      <section className="simple-revamp-hero contact-revamp-hero"><Container><Eyebrow>Contact</Eyebrow><h1>See ShiftChef around your operation.</h1><p>Tell us how your team plans and runs service. We’ll use the conversation to focus the demo on the roles, workplaces, and workflows that matter to you.</p></Container></section>
      <section className="contact-revamp-section">
        <Container className="contact-revamp-grid">
          <aside><p className="micro-label">What we’ll cover</p><h2>A useful conversation, shaped around your service.</h2><ol>{contactCoverage.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></aside>
          <div className="contact-form-wrap"><h2>Book your demo</h2><p>Tell us about your operation. We’ll focus the conversation on what matters to your team.</p><DemoForm /></div>
        </Container>
      </section>
    </>
  );
}
