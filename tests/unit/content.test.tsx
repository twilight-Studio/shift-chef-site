import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { CapabilityMatrix } from "@/components/capability-matrix";
import { capabilities, faqs, footerNavigation, mainNavigation, roles } from "@/content/site";

describe("site content contract", () => {
  it("keeps every navigation destination local and unique", () => {
    const links = [...mainNavigation, ...Object.values(footerNavigation).flat()];
    expect(links.every((link) => link.href.startsWith("/"))).toBe(true);
    expect(new Set(mainNavigation.map((link) => link.href)).size).toBe(mainNavigation.length);
    expect(links).toEqual(
      expect.arrayContaining([
        { label: "Support", href: "/support" },
        { label: "Privacy policy draft", href: "/privacy-policy" },
      ]),
    );
  });

  it("renders every role and a text status in both matrix representations", () => {
    const html = renderToStaticMarkup(<CapabilityMatrix />);
    const readableHtml = html.replaceAll("&amp;", "&");
    roles.forEach((role) => expect(readableHtml).toContain(role.name));
    capabilities.forEach((row) => expect(readableHtml).toContain(row.capability));
    expect(readableHtml).toContain("Not available");
  });

  it("keeps FAQ structured-data content aligned with the visible questions", () => {
    expect(faqs).toHaveLength(7);
    expect(faqs.some((faq) => /timeclock or payroll/i.test(faq.question))).toBe(true);
  });
});
