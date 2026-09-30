import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DemoForm } from "@/components/demo-form";
import { demoRequestSchema, submitDemoRequest, type DemoRequest } from "@/lib/demo";

const validRequest: DemoRequest = {
  fullName: "Jordan Lee",
  workEmail: "jordan@example.com",
  organization: "Example Hospitality Group",
  role: "Manager",
  workplaces: "2–5",
  teamSize: "21–50",
  goals: "Bring roster changes and service follow-up into one clear workflow.",
  consent: true,
};

afterEach(() => vi.unstubAllGlobals());

describe("demo request validation", () => {
  it("accepts a complete request", () => {
    expect(demoRequestSchema.safeParse(validRequest).success).toBe(true);
  });

  it("returns useful field errors", () => {
    const result = demoRequestSchema.safeParse({ ...validRequest, workEmail: "not-an-email", goals: "short" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const fields = result.error.flatten().fieldErrors;
      expect(fields.workEmail?.[0]).toMatch(/valid work email/i);
      expect(fields.goals?.[0]).toMatch(/little more/i);
    }
  });
});

describe("demo submission adapter", () => {
  it("is honest when no endpoint is configured", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    await expect(submitDemoRequest(validRequest, undefined)).resolves.toEqual({ status: "unconfigured" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("reports confirmed delivery only after a successful response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 204 })));
    await expect(submitDemoRequest(validRequest, "https://forms.example.test/demo")).resolves.toEqual({ status: "sent" });
  });

  it("returns a recoverable error for a failed response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response(null, { status: 500 })));
    const result = await submitDemoRequest(validRequest, "https://forms.example.test/demo");
    expect(result.status).toBe("error");
  });
});

describe("unconfigured demo form", () => {
  it("renders an honest preview state and does not imply delivery", () => {
    const html = renderToStaticMarkup(createElement(DemoForm));
    expect(html).toContain("Demo form preview");
    expect(html).toContain("will not send them");
    expect(html).toContain('aria-label="Demo request"');
    expect(html).toContain(">Request a demo</button>");
    expect(html).not.toContain("disabled");
    expect(html).not.toContain("confirmed and sent");
  });
});
