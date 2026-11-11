import type { Metadata } from "next";

import { ButtonLink, Container, Eyebrow } from "@/components/primitives";
import { createPageMetadata } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Support",
  description: "Get practical help with ShiftChef sign-in, workspace access, schedules, requests, service work, and app issues.",
  path: "/support",
});

const supportRoutes = [
  ["01", "Sign-in and invitations", "Use the in-app recovery flow for a forgotten password or verification issue. If an invitation is expired, addressed to the wrong email, or tied to the wrong workspace, ask the person who sent it or a workspace owner or administrator to review it."],
  ["02", "Roles and workplaces", "Workspace owners, administrators, and permitted managers handle role and workplace access. Share the screen or action you need, but never send a password, verification code, session token, or private export."],
  ["03", "Shifts, requests, and daily work", "Questions about an assignment, availability response, time-off request, shift-cover request, checklist, or handover should go first to the manager or supervisor responsible for that service."],
  ["04", "App or website problems", "If a screen will not load or an action fails, record what you were doing, the exact error, the approximate time and timezone, and the app version and device operating system before contacting ShiftChef."],
];

const requestDetails = [
  "Workspace and workplace name, with no private employee details.",
  "The screen, action and result you expected.",
  "Exact error message and approximate time, including timezone.",
  "App version, device model and operating-system version.",
  "A redacted screenshot with no passwords, codes or sensitive staff data.",
];

export default function SupportPage() {
  return (
    <>
      <section className="simple-revamp-hero support-revamp-hero"><Container><Eyebrow>Support</Eyebrow><h1>Get the right help without losing service context.</h1><p>Start with the person who owns the decision, then give ShiftChef the precise, privacy-safe detail needed to investigate a product issue.</p><ButtonLink href="#support-routes">Find the right help</ButtonLink></Container></section>

      <section className="support-routes-revamp" id="support-routes">
        <Container><p className="micro-label">Where to start</p><h2>Put each question with the person who can act.</h2><div className="support-routes-grid-revamp">{supportRoutes.map(([number, title, body]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div></Container>
      </section>

      <section className="support-request-revamp" id="prepare-support-request">
        <Container><p className="micro-label">Prepare your request</p><h2>Useful detail gets you closer to an answer.</h2><ol>{requestDetails.map((detail, index) => <li key={detail}><span>{String(index + 1).padStart(2, "0")}</span><p>{detail}</p></li>)}</ol><p className="support-request-note">Use your organization’s approved support route. A public support inbox is not configured on this website.</p><ButtonLink href="/security" variant="secondary">Security and access</ButtonLink></Container>
      </section>
    </>
  );
}
