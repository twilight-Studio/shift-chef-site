import { Check } from "lucide-react";
import { howItWorksSteps, serviceJourney } from "@/content/site";

export function WorkflowTimeline({ detailed = false }: { detailed?: boolean }) {
  if (detailed) {
    return (
      <div className="detailed-workflow">
        <aside className="workflow-rail" aria-label="Workflow progress">
          <span>ONE SERVICE</span>
          <ol>
            {howItWorksSteps.map((step, index) => (
              <li key={step.title}><a href={`#step-${index + 1}`}>{String(index + 1).padStart(2, "0")}</a></li>
            ))}
          </ol>
        </aside>
        <ol className="workflow-story">
          {howItWorksSteps.map((step, index) => (
            <li id={`step-${index + 1}`} className="workflow-story-card" key={step.title}>
              <div className="workflow-story-number">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <p className="eyebrow text-primary">{step.actor}</p>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
                <div className="record-remains"><Check aria-hidden="true" /> <span><strong>What remains:</strong> {step.record}</span></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <ol className="service-timeline">
      {serviceJourney.map((step, index) => (
        <li key={step.title}>
          <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
