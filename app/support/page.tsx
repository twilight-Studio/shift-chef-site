import type { Metadata } from "next";
import {
  CalendarClock,
  KeyRound,
  LifeBuoy,
  MonitorSmartphone,
  ShieldAlert,
  UsersRound,
} from "lucide-react";
import { ButtonLink, Container, PageHero, SectionHeading } from "@/components/primitives";
import { SiteLink as Link } from "@/components/site-link";
import { createPageMetadata, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Support",
  description:
    "Get practical help with ShiftChef sign-in, workspace access, schedules, requests, service work, and app issues.",
  path: "/support",
});

const supportRoutes = [
  {
    eyebrow: "Account",
    title: "Sign-in and invitations",
    body: "Use the in-app recovery flow for a forgotten password or verification issue. If an invitation is expired, addressed to the wrong email, or tied to the wrong workspace, ask the person who sent it or a workspace owner or administrator to review it.",
    icon: KeyRound,
  },
  {
    eyebrow: "Access",
    title: "Roles and workplaces",
    body: "Workspace owners, administrators, and permitted managers handle role and workplace access. Share the screen or action you need, but never send a password, verification code, session token, or private export.",
    icon: UsersRound,
  },
  {
    eyebrow: "Operations",
    title: "Shifts, requests, and daily work",
    body: "Questions about an assignment, availability response, time-off request, shift-cover request, checklist, or handover should go first to the manager or supervisor responsible for that service.",
    icon: CalendarClock,
  },
  {
    eyebrow: "Technical",
    title: "App or website problems",
    body: "If a screen will not load or an action fails, record what you were doing, the exact error, the approximate time and timezone, and the app version and device operating system before contacting ShiftChef.",
    icon: MonitorSmartphone,
  },
];

const requestDetails = [
  "Your workspace and workplace name, without private employee details.",
  "The screen, action, and result you expected to see.",
  "The exact error message and the approximate time it appeared.",
  "Your ShiftChef app version, device model, and operating-system version.",
  "A redacted screenshot only when it contains no passwords, codes, tokens, or sensitive staff data.",
];

export default function SupportPage() {
  const supportHref = siteConfig.supportEmail
    ? `mailto:${siteConfig.supportEmail}`
    : null;

  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Get the right help without losing service context."
        lead="Start with the person who owns the decision, then give ShiftChef the precise, privacy-safe detail needed to investigate a product issue."
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="#support-routes" variant="inverse">
            Find the right route
          </ButtonLink>
          {supportHref ? (
            <ButtonLink href={supportHref} variant="secondary">
              Email ShiftChef support
            </ButtonLink>
          ) : (
            <ButtonLink href="#prepare-support-request" variant="secondary">
              Prepare your request
            </ButtonLink>
          )}
        </div>
      </PageHero>

      <section className="section-shell" id="support-routes">
        <Container>
          <SectionHeading
            eyebrow="Where to start"
            title="Put each question with the person who can act on it."
            description="ShiftChef keeps authority close to the workspace. That means operational decisions stay with your team, while technical product issues come to ShiftChef with enough context to investigate safely."
          />
          <div className="support-route-grid">
            {supportRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <article className="support-route-card" key={route.title}>
                  <Icon aria-hidden="true" />
                  <p className="eyebrow text-primary">{route.eyebrow}</p>
                  <h2>{route.title}</h2>
                  <p>{route.body}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        className="section-shell support-prepare-section"
        id="prepare-support-request"
      >
        <Container className="support-prepare-grid">
          <SectionHeading
            eyebrow="Prepare the request"
            title="Useful detail shortens the path to an answer."
            description="A concise report helps separate an access decision, a data question, and a reproducible product fault. Include only what is necessary."
          />
          <div className="support-checklist-card">
            <ol>
              {requestDetails.map((detail, index) => (
                <li key={detail}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p>{detail}</p>
                </li>
              ))}
            </ol>
            <aside className="support-safety-note" role="note">
              <ShieldAlert aria-hidden="true" />
              <div>
                <strong>Keep secrets out of support messages.</strong>
                <p>
                  ShiftChef does not need your password, six-digit verification
                  code, session token, deployment credential, or an unredacted
                  employee export to investigate a problem.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="section-shell pt-0">
        <Container>
          <div className="support-contact-panel">
            <div className="support-contact-copy">
              <LifeBuoy aria-hidden="true" />
              <div>
                <p className="eyebrow text-lime">Still need help?</p>
                <h2>Bring ShiftChef the smallest useful version of the issue.</h2>
                <p>
                  {siteConfig.supportEmail
                    ? `Use ${siteConfig.supportEmail} for a product support request and include the details above.`
                    : "Use the approved support route provided by your organization and include the details above. A public ShiftChef support inbox has not been configured on this website."}
                </p>
              </div>
            </div>
            <div className="support-contact-actions">
              {supportHref ? (
                <ButtonLink href={supportHref} variant="inverse">
                  Email ShiftChef support
                </ButtonLink>
              ) : (
                <ButtonLink href="#prepare-support-request" variant="inverse">
                  Review the request checklist
                </ButtonLink>
              )}
              <nav aria-label="Related support information">
                <Link href="/security">Security and access</Link>
                <Link href="/privacy-policy">Privacy policy draft</Link>
                <Link href="/how-it-works">How ShiftChef works</Link>
              </nav>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
