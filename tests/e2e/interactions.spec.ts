import { expect, test, type Page } from "@playwright/test";

async function fillDemoForm(page: Page) {
  await expect(page.getByRole("button", { name: "Request a demo" })).toBeEnabled();
  await page.getByLabel("Full name").fill("Jordan Lee");
  await page.getByLabel("Work email").fill("jordan@example.com");
  await page.getByLabel("Organization name").fill("Example Hospitality Group");

  await page.getByRole("combobox", { name: "Your role" }).selectOption("Manager");
  await page.getByRole("combobox", { name: "Number of workplaces" }).selectOption("2–5");
  await page.getByRole("combobox", { name: "Approximate team size" }).selectOption("21–50");

  await page.getByLabel("What would you like to improve?").fill(
    "Bring roster changes, service tasks, and follow-up into one clear workflow.",
  );
  await page.getByRole("checkbox", { name: /I agree that ShiftChef/i }).click();
}

test("FAQ controls disclose content with the keyboard", async ({ page }) => {
  await page.goto("/#faq");
  const question = page.getByRole("button", { name: "What kinds of hospitality teams is ShiftChef for?" });
  await expect(question).toBeEnabled();
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(/designed for hospitality owners/i)).toBeVisible();
  await page.keyboard.press("Enter");
  await expect(question).toHaveAttribute("aria-expanded", "false");
});

test("role selector follows tab keyboard conventions", async ({ page }) => {
  await page.goto("/");
  const owner = page.getByRole("tab", { name: "Owner" });
  await expect(owner).toBeEnabled();
  await owner.focus();
  await page.keyboard.press("ArrowRight");
  const admin = page.getByRole("tab", { name: "Admin" });
  await expect(admin).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toContainText("broad administration");
});

test("contact form focuses the first invalid field and exposes an error summary", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.getByText(/Please check these fields/i)).toBeVisible();
  await expect(page.getByLabel("Full name")).toBeFocused();
  await expect(page.getByLabel("Full name")).toHaveAttribute("aria-invalid", "true");
});

test("configured contact form shows pending and recoverable error states", async ({ page }) => {
  await page.route("**/api/demo", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    await route.fulfill({ status: 500, body: "Unavailable" });
  });
  await page.goto("/contact");
  await fillDemoForm(page);
  await page.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.getByRole("button", { name: "Sending request…" })).toBeDisabled();
  await expect(page.getByText(/couldn’t send your request/i)).toBeVisible();
});

test("configured contact form confirms only a successful submission", async ({ page }) => {
  await page.route("**/api/demo", (route) => route.fulfill({ status: 204 }));
  await page.goto("/contact");
  await fillDemoForm(page);
  await page.getByRole("button", { name: "Request a demo" }).click();
  await expect(page.getByText(/confirmed and sent/i)).toBeVisible();
});
