import { expect, test } from "@playwright/test";

test("desktop header and footer links resolve", async ({ page, request, baseURL }) => {
  await page.goto("/");
  const hrefs = await page.locator("header a[href], footer a[href]").evaluateAll((links) =>
    [...new Set(links.map((link) => (link as HTMLAnchorElement).getAttribute("href")).filter(Boolean))] as string[],
  );

  for (const href of hrefs) {
    const response = await request.get(new URL(href, baseURL).toString());
    expect(response.status(), `${href} should resolve`).toBeLessThan(400);
  }
});

test("mobile navigation traps focus, closes with Escape, and navigates", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 820 });
  await page.goto("/");
  const menuButton = page.getByRole("button", { name: "Open navigation menu" });
  await menuButton.click();
  const dialog = page.getByRole("dialog");
  const closeButton = dialog.getByRole("button", { name: "Close navigation menu" });
  await expect(dialog).toBeVisible();
  await expect(closeButton).toBeFocused();
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("hidden");
  await expect(dialog.getByRole("link", { name: "Product" })).toBeVisible();
  await page.keyboard.press("Shift+Tab");
  await expect(dialog.getByRole("link", { name: "Book a demo" })).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(closeButton).toBeFocused();
  await page.mouse.click(4, 400);
  await expect(dialog).toBeHidden();
  await expect(menuButton).toBeFocused();
  await expect.poll(() => page.evaluate(() => document.body.style.overflow)).toBe("");

  await menuButton.click();
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(menuButton).toBeFocused();

  await menuButton.click();
  await dialog.getByRole("link", { name: "Product" }).click();
  await expect(page).toHaveURL(/\/product$/);
});

test("the not-found page returns visitors to working routes", async ({ page }) => {
  await page.goto("/this-ticket-does-not-exist");
  await expect(page.getByRole("heading", { name: "This ticket left the rail." })).toBeVisible();
  await page.getByRole("link", { name: "Explore the product" }).click();
  await expect(page).toHaveURL(/\/product$/);
});
