import type { Metadata } from "next";
import { ButtonLink, Container, DarkCtaPanel, PageHero, SectionHeading } from "@/components/primitives";
import { WorkflowTimeline } from "@/components/workflow-timeline";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "How ShiftChef works",
  description: "Follow a fictional Friday dinner service from workplace setup and staffing through handover, follow-up, scorecards, and review.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Follow one service from plan to review."
        lead="A realistic Friday dinner service shows how ShiftChef keeps every handoff clear without turning the service itself into a software exercise."
      >
        <div className="mt-8"><ButtonLink href="/contact" variant="inverse">Book a demo</ButtonLink></div>
      </PageHero>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Friday dinner service"
            title="Who acts, what they see, and what remains."
            description="The example is fictional and contains no personal data. Availability stays separate from assignment, and acknowledgments confirm visibility—not attendance."
          />
          <div className="mt-12"><WorkflowTimeline detailed /></div>
        </Container>
      </section>

      <section className="workflow-result-band">
        <Container>
          <p>The result is not more software during service. It is less uncertainty around it.</p>
          <ButtonLink href="/contact" variant="inverse">Book a demo</ButtonLink>
        </Container>
      </section>

      <DarkCtaPanel title="Bring your own service flow into the room." body="We’ll focus the demo on the workplaces, roles, and decisions that matter to your team." />
    </>
  );
}
