import { z } from "zod";

export const demoRequestSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  workEmail: z.string().trim().email("Enter a valid work email address."),
  organization: z.string().trim().min(2, "Enter your organization name."),
  role: z.string().min(1, "Choose your role."),
  workplaces: z.string().min(1, "Choose the number of workplaces."),
  teamSize: z.string().min(1, "Choose an approximate team size."),
  goals: z
    .string()
    .trim()
    .min(20, "Tell us a little more so we can focus the conversation."),
  consent: z
    .boolean()
    .refine((value) => value, "Please confirm that we may respond to this enquiry."),
});

export type DemoRequest = z.infer<typeof demoRequestSchema>;

export type DemoSubmissionResult =
  | { status: "sent" }
  | { status: "unconfigured" }
  | { status: "error"; message: string };

export async function submitDemoRequest(
  values: DemoRequest,
  endpoint = process.env.NEXT_PUBLIC_DEMO_ENDPOINT,
): Promise<DemoSubmissionResult> {
  if (!endpoint) return { status: "unconfigured" };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      return {
        status: "error",
        message: "We couldn’t send your request. Please review your details and try again.",
      };
    }

    return { status: "sent" };
  } catch {
    return {
      status: "error",
      message: "We couldn’t reach the demo service. Please try again in a moment.",
    };
  }
}
