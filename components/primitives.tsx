import type { ReactNode } from "react";
import { SiteLink as Link } from "@/components/site-link";
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("site-container", className)}>{children}</div>;
}

export function Eyebrow({ children, inverse = false }: { children: ReactNode; inverse?: boolean }) {
  return (
    <p className={cn("eyebrow", inverse ? "text-lime" : "text-primary")}>{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "section-heading",
        align === "center" && "mx-auto text-center",
        inverse && "text-white",
        className,
      )}
    >
      {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {description ? (
        <p className={cn("section-lead", inverse && "text-hero-copy")}>{description}</p>
      ) : null}
    </div>
  );
}

const buttonStyles = {
  primary:
    "bg-primary text-white border-primary hover:bg-primary-dark hover:border-primary-dark",
  secondary:
    "bg-surface-raised text-primary border-border hover:border-primary hover:bg-soft",
  inverse:
    "bg-lime text-primary-dark border-lime hover:bg-white hover:border-white",
  ghost: "bg-transparent text-primary border-transparent hover:bg-soft",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonStyles;
  className?: string;
}) {
  return (
    <Link className={cn("button-link", buttonStyles[variant], className)} href={href}>
      {children}
    </Link>
  );
}

export function StatusPill({ children, tone = "green" }: { children: ReactNode; tone?: "green" | "lime" | "coral" | "gold" }) {
  return <span className={cn("status-pill", `status-${tone}`)}>{children}</span>;
}

export function FeatureCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <article className={cn("feature-card", className)}>{children}</article>;
}

export function BentoGrid({ children }: { children: ReactNode }) {
  return <div className="bento-grid">{children}</div>;
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero section-shell">
      <Container>
        <div className="page-hero-panel">
          <div className="page-hero-copy">
            <Eyebrow inverse>{eyebrow}</Eyebrow>
            <h1>{title}</h1>
            <p>{lead}</p>
            {children}
          </div>
          <div className="page-hero-ticket" aria-hidden="true">
            <span>SHIFT</span>
            <strong>SC</strong>
            <small>READY</small>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function DarkCtaPanel({
  title = "Put the whole service on the same page.",
  body = "See how ShiftChef can connect planning, people, daily work, and review for your operation.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-shell pt-0">
      <Container>
        <div className="dark-cta-panel">
          <div className="dark-cta-ring" aria-hidden="true" />
          <div className="relative z-10 max-w-3xl">
            <Eyebrow inverse>NEXT SERVICE</Eyebrow>
            <h2>{title}</h2>
            <p>{body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="inverse">Book a demo</ButtonLink>
              <ButtonLink href="/product" variant="secondary">Explore the product</ButtonLink>
            </div>
          </div>
          <div className="dark-cta-ticket" aria-hidden="true">
            <span>NEXT</span>
            <strong>01</strong>
            <span>SERVICE</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
