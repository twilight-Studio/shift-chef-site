import type { LucideIcon } from "lucide-react";
import {
  BellRing,
  Building2,
  CalendarCheck2,
  ClipboardCheck,
  FileClock,
  KeyRound,
  ListChecks,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

export type NavItem = { label: string; href: string };
export type Role = {
  id: string;
  name: string;
  shortName: string;
  summary: string;
  focus: string[];
};
export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone?: "lime" | "coral" | "green";
  screenshot?: { src: string; alt: string };
};
export type Faq = { question: string; answer: string };

export const mainNavigation: NavItem[] = [
  { label: "Product", href: "/product" },
  { label: "Roles", href: "/roles" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Security", href: "/security" },
  { label: "About", href: "/about" },
];

export const footerNavigation: Record<string, NavItem[]> = {
  Product: [
    { label: "Product overview", href: "/product" },
    { label: "Role-aware access", href: "/roles" },
    { label: "Service workflow", href: "/how-it-works" },
  ],
  Company: [
    { label: "About ShiftChef", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Security", href: "/security" },
    { label: "Book a demo", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy draft", href: "/privacy" },
    { label: "Terms draft", href: "/terms" },
  ],
};

export const roles: Role[] = [
  {
    id: "owner",
    name: "Owner",
    shortName: "Owner",
    summary: "Govern the workspace, people, scheduling, operations, reports, and history.",
    focus: ["Workspace lifecycle", "People and access", "Every operating view"],
  },
  {
    id: "administrator",
    name: "Administrator",
    shortName: "Admin",
    summary: "Run broad administration without taking over owner-only lifecycle actions.",
    focus: ["Workplace setup", "Invitations and records", "Operational administration"],
  },
  {
    id: "manager",
    name: "Manager",
    shortName: "Manager",
    summary: "Turn staffing requirements into a workable roster and keep daily operations moving.",
    focus: ["Roster planning", "Requests and tasks", "Review and reporting"],
  },
  {
    id: "supervisor",
    name: "Supervisor",
    shortName: "Supervisor",
    summary: "Coordinate service work, handovers, communications, and permitted team activity.",
    focus: ["Daily coordination", "Handover context", "Team communication"],
  },
  {
    id: "team-member",
    name: "Team member",
    shortName: "Team member",
    summary: "See assignments, share availability, submit requests, complete work, and stay informed.",
    focus: ["My shifts", "Requests and checklists", "Messages and feedback"],
  },
  {
    id: "reports-viewer",
    name: "Reports viewer",
    shortName: "Reports",
    summary: "Review schedules, workforce records, scorecards, reports, and audit history without changing setup.",
    focus: ["Read-only schedules", "Reports and scorecards", "Change history"],
  },
];

export const valueItems = [
  { label: "Plan coverage", icon: CalendarCheck2 },
  { label: "Share the roster", icon: UsersRound },
  { label: "Run daily work", icon: ListChecks },
  { label: "Review what changed", icon: FileClock },
];

export const serviceJourney = [
  {
    title: "Set the service",
    description: "Choose the workplace, local time, notes, and staffing requirements.",
  },
  {
    title: "Ask or assign",
    description: "Collect availability or assign eligible people directly with the right context.",
  },
  {
    title: "Share the schedule",
    description: "Publish the roster, capture acknowledgments, and keep revisions clear.",
  },
  {
    title: "Run daily work",
    description: "Handle tasks, requests, briefings, messages, and service logbook follow-up.",
  },
  {
    title: "Review the outcome",
    description: "Use feedback, scorecards, reports, exports, and change history.",
  },
];

export const features: Feature[] = [
  {
    title: "Scheduling that follows the service",
    description:
      "Create shifts, reuse saved plans, define staffing needs, collect availability, and publish a roster everyone can understand.",
    icon: CalendarCheck2,
    tone: "lime",
    screenshot: {
      src: "/screenshots/shifts-manager.png",
      alt: "ShiftChef manager schedule showing service shifts and roster planning controls.",
    },
  },
  {
    title: "Requests without side-channel chaos",
    description:
      "Keep time-off and shift-cover requests visible, reviewable, and connected to the schedule.",
    icon: BellRing,
    tone: "coral",
  },
  {
    title: "Daily work with a clear finish line",
    description:
      "Assign recurring checklists, capture required responses, and turn service issues into follow-up work.",
    icon: ClipboardCheck,
    tone: "green",
    screenshot: {
      src: "/screenshots/operations-manager.png",
      alt: "ShiftChef manager operations screen with daily tasks and service follow-up tools.",
    },
  },
  {
    title: "Conversations and briefings",
    description:
      "Keep everyday chats separate from formal announcements that need a read acknowledgment.",
    icon: MessageSquareText,
    tone: "green",
  },
  {
    title: "Feedback that stays useful",
    description:
      "Collect recognition, service feedback, reviews, and coaching context with the right visibility.",
    icon: Sparkles,
    tone: "coral",
  },
  {
    title: "Reports and history you can trace",
    description:
      "Review schedules, operational insights, scorecards, exports, and a permission-aware change record.",
    icon: ShieldCheck,
    tone: "lime",
  },
];

export const faqs: Faq[] = [
  {
    question: "What kinds of hospitality teams is ShiftChef for?",
    answer:
      "ShiftChef is designed for hospitality owners, operators, managers, supervisors, team members, and reviewers who need one shared operating rhythm across scheduling and service work.",
  },
  {
    question: "Can one business manage multiple workplaces?",
    answer:
      "Yes. Workspaces can contain multiple workplaces, location groups, job roles, people, and location-scoped access, with scheduling shown in each workplace’s local time.",
  },
  {
    question: "How does staff availability become a published assignment?",
    answer:
      "A manager can collect availability or assign an eligible person directly, review conflicts and staffing needs, build the roster privately, then share it. Availability is never treated as an assignment.",
  },
  {
    question: "What can team members do in the app?",
    answer:
      "Team members can see their shifts, share availability, submit time-off and shift-cover requests, complete assigned checklists, read messages and briefings, and share permitted feedback.",
  },
  {
    question: "Does ShiftChef replace a timeclock or payroll system?",
    answer:
      "ShiftChef coordinates the work around service. It is not currently a timeclock, attendance, payroll, or timesheet product.",
  },
  {
    question: "Can access be limited by role and workplace?",
    answer:
      "Yes. Six access levels combine with all-locations or selected-location scope. Server-side authorization remains the source of truth for every action.",
  },
  {
    question: "How are schedule changes communicated and recorded?",
    answer:
      "Published assignments can be acknowledged, and controlled revisions keep their reasons and history so teams can understand what changed without treating an acknowledgment as attendance proof.",
  },
];

export const productFeatureGroups = [
  {
    eyebrow: "SCHEDULE",
    title: "Build, staff, publish, and close every service.",
    copy: "Start from a reusable plan, define staffing requirements, collect availability or assign eligible people directly, and review conflicts before sharing a private roster. Published assignments can be acknowledged, revisions keep their reasons, and a shift can be locked, finished, or cancelled with clear context.",
    screenshot: "/screenshots/shifts-manager.png",
    alt: "ShiftChef manager schedule showing service shifts, shared rosters, and planning controls.",
    secondaryScreenshot: "/screenshots/home-team-member.png",
    secondaryAlt: "ShiftChef team member home showing the next service and personal schedule actions.",
  },
  {
    eyebrow: "REQUESTS",
    title: "Keep requests attached to the work they affect.",
    copy: "Time-off and shift-cover requests stay visible with their status and schedule context. Proposed replacements and leader review keep the decision in the same place as the work it changes.",
    screenshot: "/screenshots/shifts-team-member.png",
    alt: "ShiftChef team member shifts screen showing assignments and schedule requests.",
    secondaryScreenshot: "/screenshots/inbox-manager.png",
    secondaryAlt: "ShiftChef manager Inbox showing request and schedule updates together.",
  },
  {
    eyebrow: "DAILY WORK",
    title: "Turn routines into clear daily work.",
    copy: "Reuse task and checklist templates, assign the right people, require the information that matters, add supporting links, and preserve due state, reopening, and completion history.",
    screenshot: "/screenshots/operations-manager.png",
    alt: "ShiftChef operations screen showing daily tasks, requests, and service tools.",
    secondaryScreenshot: "/screenshots/service-team-member.png",
    secondaryAlt: "ShiftChef team member service view showing assigned checklists and handover work.",
  },
  {
    eyebrow: "COMMUNICATION",
    title: "Separate conversation from formal communication.",
    copy: "Direct and group conversations handle everyday coordination. Briefings and announcements target the right audience, carry read states and acknowledgments, and arrive through the Inbox and native alerts without mixing every update into chat.",
    screenshot: "/screenshots/communications-manager.png",
    alt: "ShiftChef communications screen separating conversations from formal briefings.",
    secondaryScreenshot: "/screenshots/inbox-manager.png",
    secondaryAlt: "ShiftChef manager Inbox collecting operational updates and formal communication.",
  },
  {
    eyebrow: "FOLLOW-UP",
    title: "Carry service context into follow-up.",
    copy: "Record service logbook entries, discuss issues, assign follow-up work, and connect recognition, feedback, performance reviews, and coaching notes to the people who can act on them.",
    screenshot: "/screenshots/service-team-member.png",
    alt: "ShiftChef team member service screen showing checklists, handover, and feedback tools.",
    secondaryScreenshot: "/screenshots/operations-manager.png",
    secondaryAlt: "ShiftChef manager operations view showing service follow-up and daily work.",
  },
  {
    eyebrow: "REVIEW",
    title: "Review the operation without losing the trail.",
    copy: "Use employee and location summaries, scorecards, reports, CSV exports, audit history, revision reasons, and request references to understand decisions while keeping access permission-aware.",
    screenshot: "/screenshots/inbox-manager.png",
    alt: "ShiftChef Inbox showing operational updates and schedule communication in one place.",
    secondaryScreenshot: "/screenshots/operations-manager.png",
    secondaryAlt: "ShiftChef operations view showing the work and context available for later review.",
  },
];

export type CapabilityValue = "Manage" | "View" | "Limited" | "Not available";
export const capabilities: Array<{
  capability: string;
  values: Record<string, CapabilityValue>;
}> = [
  {
    capability: "Workspace & access",
    values: { owner: "Manage", administrator: "Manage", manager: "Limited", supervisor: "View", "team-member": "View", "reports-viewer": "View" },
  },
  {
    capability: "People & invitations",
    values: { owner: "Manage", administrator: "Manage", manager: "Limited", supervisor: "Limited", "team-member": "View", "reports-viewer": "View" },
  },
  {
    capability: "Schedules & rosters",
    values: { owner: "Manage", administrator: "Manage", manager: "Manage", supervisor: "Limited", "team-member": "View", "reports-viewer": "View" },
  },
  {
    capability: "Daily work & requests",
    values: { owner: "Manage", administrator: "Manage", manager: "Manage", supervisor: "Manage", "team-member": "Limited", "reports-viewer": "View" },
  },
  {
    capability: "Reports & history",
    values: { owner: "Manage", administrator: "View", manager: "View", supervisor: "Limited", "team-member": "Limited", "reports-viewer": "View" },
  },
  {
    capability: "Change history",
    values: { owner: "View", administrator: "View", manager: "Not available", supervisor: "Not available", "team-member": "Not available", "reports-viewer": "View" },
  },
];

export const howItWorksSteps = [
  { actor: "Owner", title: "Shape the operating space", description: "Set up workplaces, job roles, and the access each person needs.", record: "Workspace structure, invitations, and location scope" },
  { actor: "Manager", title: "Create Friday Dinner Service", description: "Choose the workplace and local time, add notes, then define the staffing requirements by job role.", record: "A private draft with open staffing needs" },
  { actor: "Team members", title: "Share availability", description: "Respond for the service without turning that response into an assignment.", record: "Availability responses with clear status" },
  { actor: "Manager", title: "Build the roster", description: "Review eligible candidates, conflicts, capacity, and any slots still open.", record: "A decision-ready private roster" },
  { actor: "Manager & team", title: "Share and acknowledge", description: "Publish the roster so assigned people can see and acknowledge their assignments.", record: "Published schedule, acknowledgments, and revision reasons" },
  { actor: "Supervisor → manager", title: "Capture and route a service issue", description: "A supervisor records the issue during handover; a manager assigns the follow-up to the right person.", record: "A service entry and owned follow-up task" },
  { actor: "Team member", title: "Close the follow-up", description: "Complete the task and share permitted post-service feedback.", record: "Checklist completion and feedback context" },
  { actor: "Manager & reports viewer", title: "Review the outcome", description: "Read the scorecard, reports, and change history without changing the setup.", record: "A traceable view from plan to review" },
];

export const audienceStories = [
  { title: "Owners & administrators", body: "Set up the workspace, workplaces, location groups, job roles, invitations, people, and access. Stay close to scheduling, operations, reports, and change history without forcing everyone into the same view." },
  { title: "Managers", body: "Turn staffing needs into a workable roster, handle requests, publish clear schedules, set up daily work, communicate with the team, and review what happened." },
  { title: "Supervisors & team members", body: "See the right schedule, share availability, handle requests and checklists, carry handover context, read messages and briefings, and contribute feedback or recognition." },
  { title: "Reports viewers", body: "Review schedules, workforce records, reports, scorecards, and change history through a read-only operating view." },
];

export const securityPrinciples = [
  { title: "Server-authoritative permissions", body: "The interface can hide unavailable actions for clarity, but only the API decides whether an action is allowed.", icon: ShieldCheck },
  { title: "Role and workplace scope", body: "Six access levels combine with all-locations or selected-location access so people see the part of the operation they need.", icon: KeyRound },
  { title: "Explicit invitations", body: "Invitation flows connect accounts, workspace membership, and staff records without asking people to pass around internal identifiers.", icon: UsersRound },
  { title: "Purpose-specific verification", body: "Email verification, password reset, and invitation acceptance use separate six-digit code flows inside the mobile product.", icon: BellRing },
  { title: "Controlled sessions", body: "Secure token rotation and device-session controls help people understand and manage where they are signed in.", icon: FileClock },
  { title: "Accountable changes", body: "Important workspace changes, roster revisions, and cancellations keep reasons and history where the product supports them.", icon: ClipboardCheck },
];

export const operatingScopeItems = [
  "All-locations or selected-location access",
  "Local-time scheduling for every workplace",
  "Separate account, membership, and staff records",
  "Secure sessions and controlled invitations",
  "Change history for accountable decisions",
];

export const principles = [
  { number: "01", title: "Everyday actions first", body: "Surface the next useful task before configuration and complexity." },
  { number: "02", title: "Plain language over system language", body: "Explain outcomes in words hospitality teams already use, not backend states." },
  { number: "03", title: "Clarity with accountability", body: "Show permissions, consequences, reasons, and history where decisions matter." },
];

export const productRhythm = [
  { phase: "Before service", items: ["Set staffing requirements", "Collect availability", "Build and share the roster", "Resolve requests"] },
  { phase: "During service", items: ["Run checklists", "Share briefings", "Record handovers", "Assign follow-up"] },
  { phase: "After service", items: ["Finish the workflow", "Capture feedback", "Review scorecards", "Trace decisions"] },
];

export const contactCoverage = [
  "Your current scheduling flow",
  "Roles and workplace structure",
  "Service tasks and communications",
  "Reporting and change-history needs",
];

export const multiLocationIcon = Building2;
