import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ScreenshotPair } from "@/components/product-visuals";
import { ButtonLink, Container, DarkCtaPanel, PageHero, SectionHeading } from "@/components/primitives";
import { productFeatureGroups, productRhythm } from "@/content/site";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Product overview",
  description: "Explore how ShiftChef connects scheduling, requests, daily work, communication, follow-up, reports, and change history.",
  path: "/product",
});

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="Everything around service, connected."
        lead="ShiftChef brings scheduling, team operations, communication, and review into one role-aware mobile workspace—without turning everyday work into admin work."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="inverse">Book a demo</ButtonLink>
          <ButtonLink href="/how-it-works" variant="secondary">See how it works</ButtonLink>
        </div>
      </PageHero>

      <section className="section-shell">
        <Container>
          <SectionHeading
            eyebrow="Six connected parts"
            title="One operating view from roster to review."
            description="Each part solves a clear job on its own. Together, they keep the decision, the work, and the record close enough to be useful."
          />
          <div className="product-feature-list">
            {productFeatureGroups.map((feature, index) => (
              <article className="product-feature-row" key={feature.title}>
                <div className="product-feature-copy">
                  <p className="eyebrow text-primary">{feature.eyebrow}</p>
                  <h2>{feature.title}</h2>
                  <p>{feature.copy}</p>
                  <div className="product-feature-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</div>
                </div>
                <div className="product-feature-visual">
                  <div className="product-visual-halo" aria-hidden="true" />
                  <ScreenshotPair
                    primary={{ src: feature.screenshot, alt: feature.alt }}
                    secondary={{ src: feature.secondaryScreenshot, alt: feature.secondaryAlt }}
                  />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-shell rhythm-section">
        <Container>
          <SectionHeading
            eyebrow="One connected operating rhythm"
            title="The right context at every stage."
            description="ShiftChef keeps planning, service work, and review distinct—without making them separate stories."
          />
          <div className="rhythm-grid">
            {productRhythm.map((column, index) => (
              <section key={column.phase}>
                <span className="rhythm-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{column.phase}</h3>
                <ul>{column.items.map((item) => <li key={item}><Check aria-hidden="true" /> {item}</li>)}</ul>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <DarkCtaPanel />
    </>
  );
}
