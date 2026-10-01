import { expect, test } from "@playwright/test";

const routes = ["/", "/product", "/roles", "/how-it-works", "/security", "/about", "/contact", "/support", "/privacy-policy", "/terms"];
const widths = [360, 390, 768, 1024, 1440];

test("every page remains inside the viewport at target widths", async ({ page }) => {
  test.setTimeout(300_000);
  const browserErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") browserErrors.push(message.text());
  });
  page.on("pageerror", (error) => browserErrors.push(error.message));

  for (const width of widths) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(metrics.scrollWidth, `${route} overflowed at ${width}px`).toBeLessThanOrEqual(metrics.clientWidth);
    }
  }

  expect(browserErrors.filter((message) => /hydration|uncaught|error/i.test(message))).toEqual([]);
});

test("product screenshots preserve their intrinsic aspect ratio", async ({ page }) => {
  await page.goto("/");
  const screenshots = page.locator("img[data-product-screenshot]");
  await screenshots.first().waitFor();
  for (const screenshot of await screenshots.all()) {
    await screenshot.scrollIntoViewIfNeeded();
    await expect.poll(() => screenshot.evaluate((image) => {
      const img = image as HTMLImageElement;
      return img.complete && img.naturalWidth > 0 && img.clientHeight > 0;
    })).toBe(true);
  }
  const ratios = await screenshots.evaluateAll((images) =>
    images.map((image) => {
      const img = image as HTMLImageElement;
      return {
        intrinsic: img.naturalWidth / img.naturalHeight,
        rendered: img.clientWidth / img.clientHeight,
      };
    }),
  );
  ratios.forEach(({ intrinsic, rendered }) => expect(Math.abs(intrinsic - rendered)).toBeLessThan(0.015));
});

test("core content remains available at 200% text size", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const representativePages = [
    { route: "/", heading: "Run service, not spreadsheets." },
    { route: "/product", heading: "Everything around service, connected." },
    { route: "/contact", heading: "See ShiftChef around your operation." },
    { route: "/support", heading: "Get the right help without losing service context." },
  ];

  for (const { route, heading } of representativePages) {
    await page.goto(route);
    await page.evaluate(() => document.documentElement.style.fontSize = "200%");
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(metrics.scrollWidth, `${route} overflowed with text resized to 200%`).toBeLessThanOrEqual(metrics.clientWidth);
  }
});

test("mobile body copy remains at least 16px", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const undersizedCopy = await page.locator("main p, main li, footer p, footer li, .scope-foot span").evaluateAll((elements) =>
      elements.flatMap((element) => {
        if (element.closest("[aria-hidden='true']") || element.classList.contains("eyebrow")) return [];
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        if (style.display === "none" || style.visibility === "hidden" || rect.width === 0 || rect.height === 0) return [];
        const fontSize = Number.parseFloat(style.fontSize);
        return fontSize < 16
          ? [{ text: element.textContent?.trim().slice(0, 80), fontSize, className: element.className }]
          : [];
      }),
    );

    expect(undersizedCopy, `${route} contains body copy below 16px`).toEqual([]);
  }
});
