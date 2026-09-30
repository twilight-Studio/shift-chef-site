import type { Metadata } from "next";
import { ButtonLink, Container, Eyebrow } from "@/components/primitives";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page is not part of today’s ShiftChef service.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="not-found-section">
      <Container>
        <div className="not-found-card">
          <div className="not-found-ticket" aria-hidden="true"><span>404</span><strong>OFF RAIL</strong></div>
          <div>
            <Eyebrow>This ticket left the rail</Eyebrow>
            <h1>This ticket left the rail.</h1>
            <p>The page you were looking for is not part of today’s service.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/">Back home</ButtonLink>
              <ButtonLink href="/product" variant="secondary">Explore the product</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
