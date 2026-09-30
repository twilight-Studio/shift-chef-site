export type LegalSection = { title: string; body: string };

export const privacySections: LegalSection[] = [
  {
    title: "Draft scope",
    body: "This placeholder marks where approved privacy information will explain what the public website collects, why it is used, how long it is retained, and how people can exercise applicable rights.",
  },
  {
    title: "Demo enquiries",
    body: "The final notice should describe the details submitted through the demo form, the lawful or business purpose for responding, and any approved service providers involved in delivery.",
  },
  {
    title: "Product data",
    body: "The final notice should separately cover the ShiftChef mobile product, workspace administration, support, security, and data-location decisions. No legal or compliance promise is made by this draft.",
  },
  {
    title: "Contact details",
    body: "Add the verified legal entity, privacy contact route, effective date, and jurisdiction-specific information before publication approval.",
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Draft scope",
    body: "This placeholder marks where approved terms will define who may use ShiftChef, how accounts and workspaces are administered, and which agreement governs the service.",
  },
  {
    title: "Acceptable use",
    body: "The final terms should set practical rules for authorised access, safe exports, respectful communication, and use of workplace information.",
  },
  {
    title: "Service and support",
    body: "Add verified subscription, availability, support, suspension, and termination terms only after the responsible business and legal teams approve them.",
  },
  {
    title: "Legal details",
    body: "Add the verified contracting entity, governing law, notices route, effective date, and any product-specific schedules before production approval.",
  },
];
