"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { AlertCircleIcon, CheckCircleIcon, LoaderIcon } from "@/components/inline-icons";
import {
  demoRequestSchema,
  submitDemoRequest,
  type DemoRequest,
  type DemoSubmissionResult,
} from "@/lib/demo";

const fieldLabels: Record<keyof DemoRequest, string> = {
  fullName: "Full name",
  workEmail: "Work email",
  organization: "Organization name",
  role: "Your role",
  workplaces: "Number of workplaces",
  teamSize: "Approximate team size",
  goals: "What you would like to improve",
  consent: "Consent",
};

const roleOptions = ["Owner / operator", "Administrator", "Manager", "Supervisor", "Team member", "Operations / reports", "Other"];
const workplaceOptions = ["1", "2–5", "6–20", "21+"];
const teamSizeOptions = ["1–20", "21–50", "51–200", "201+"];

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="field-error" role="alert">{message}</p> : null;
}

export function DemoForm() {
  const [result, setResult] = useState<DemoSubmissionResult | null>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const configured = Boolean(process.env.NEXT_PUBLIC_DEMO_ENDPOINT);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoRequest>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      fullName: "",
      workEmail: "",
      organization: "",
      role: "",
      workplaces: "",
      teamSize: "",
      goals: "",
      consent: false,
    },
    shouldFocusError: true,
  });

  useEffect(() => {
    if (result) summaryRef.current?.focus();
  }, [result]);

  const onInvalid = (formErrors: FieldErrors<DemoRequest>) => {
    setResult(null);
    const first = Object.keys(formErrors)[0];
    window.setTimeout(() => {
      const field = document.querySelector<HTMLElement>(`[name="${first}"], [data-field="${first}"]`);
      field?.focus();
    }, 0);
  };

  const onSubmit = async (values: DemoRequest) => {
    setResult(null);
    const submission = await submitDemoRequest(values);
    setResult(submission);
    if (submission.status === "sent") reset();
  };

  const errorEntries = Object.entries(errors) as Array<[keyof DemoRequest, { message?: string }]>;

  return (
    <form aria-label="Demo request" className="demo-form" noValidate onSubmit={handleSubmit(onSubmit, onInvalid)}>
      {!configured ? (
        <div className="form-preview-note" role="note">
          <AlertCircleIcon aria-hidden="true" />
          <p><strong>Demo form preview.</strong> The submission endpoint has not been connected, so this form will validate your details but will not send them.</p>
        </div>
      ) : null}

      {errorEntries.length > 0 ? (
        <div className="error-summary" role="alert" aria-live="assertive">
          <strong>Please check {errorEntries.length === 1 ? "this field" : "these fields"}:</strong>
          <ul>
            {errorEntries.map(([field, error]) => (
              <li key={field}><a href={`#${field}`}>{fieldLabels[field]}: {error.message}</a></li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" autoComplete="name" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...register("fullName")} />
          <FieldError id="fullName-error" message={errors.fullName?.message} />
        </div>
        <div className="form-field">
          <label htmlFor="workEmail">Work email</label>
          <input id="workEmail" type="email" autoComplete="email" aria-invalid={Boolean(errors.workEmail)} aria-describedby={errors.workEmail ? "workEmail-error" : undefined} {...register("workEmail")} />
          <FieldError id="workEmail-error" message={errors.workEmail?.message} />
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="organization">Organization name</label>
          <input id="organization" autoComplete="organization" aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "organization-error" : undefined} {...register("organization")} />
          <FieldError id="organization-error" message={errors.organization?.message} />
        </div>
        <div className="form-field">
          <label htmlFor="role">Your role</label>
          <select id="role" data-field="role" aria-invalid={Boolean(errors.role)} aria-describedby={errors.role ? "role-error" : undefined} className="form-select-trigger" {...register("role")}>
            <option value="">Choose a role</option>
            {roleOptions.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
          <FieldError id="role-error" message={errors.role?.message} />
        </div>
        <div className="form-field">
          <label htmlFor="workplaces">Number of workplaces</label>
          <select id="workplaces" data-field="workplaces" aria-invalid={Boolean(errors.workplaces)} aria-describedby={errors.workplaces ? "workplaces-error" : undefined} className="form-select-trigger" {...register("workplaces")}>
            <option value="">Choose a range</option>
            {workplaceOptions.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
          <FieldError id="workplaces-error" message={errors.workplaces?.message} />
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="teamSize">Approximate team size</label>
          <select id="teamSize" data-field="teamSize" aria-invalid={Boolean(errors.teamSize)} aria-describedby={errors.teamSize ? "teamSize-error" : undefined} className="form-select-trigger" {...register("teamSize")}>
            <option value="">Choose a range</option>
            {teamSizeOptions.map((option) => <option value={option} key={option}>{option}</option>)}
          </select>
          <FieldError id="teamSize-error" message={errors.teamSize?.message} />
        </div>
        <div className="form-field form-field-wide">
          <label htmlFor="goals">What would you like to improve?</label>
          <p id="goals-hint" className="field-hint">For example: roster planning, requests, handovers, communications, or reporting.</p>
          <textarea id="goals" rows={5} aria-invalid={Boolean(errors.goals)} aria-describedby={`goals-hint${errors.goals ? " goals-error" : ""}`} {...register("goals")} />
          <FieldError id="goals-error" message={errors.goals?.message} />
        </div>
      </div>

      <div className="consent-field">
        <input id="consent" type="checkbox" data-field="consent" aria-invalid={Boolean(errors.consent)} aria-describedby={`consent-copy${errors.consent ? " consent-error" : ""}`} {...register("consent")} />
        <div>
          <label htmlFor="consent" id="consent-copy" className="consent-label">
            I agree that ShiftChef may use these details to respond to my demo enquiry. Replace this consent copy with approved legal wording before launch.
          </label>
          <FieldError id="consent-error" message={errors.consent?.message} />
        </div>
      </div>

      <button className="submit-button" type="submit" disabled={isSubmitting} aria-describedby="submit-status">
        {isSubmitting ? <><LoaderIcon className="animate-spin" aria-hidden="true" /> Sending request…</> : "Request a demo"}
      </button>

      <div id="submit-status" ref={summaryRef} tabIndex={-1} className="submission-status" aria-live="polite" aria-atomic="true">
        {result?.status === "sent" ? <p className="submission-success"><CheckCircleIcon aria-hidden="true" /> Thank you. Your request was confirmed and sent.</p> : null}
        {result?.status === "unconfigured" ? <p className="submission-warning"><AlertCircleIcon aria-hidden="true" /> Your details were validated, but no submission endpoint is configured. Nothing was sent.</p> : null}
        {result?.status === "error" ? <p className="submission-error"><AlertCircleIcon aria-hidden="true" /> {result.message}</p> : null}
      </div>
    </form>
  );
}
