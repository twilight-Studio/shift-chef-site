import { CheckCircle2, Eye, MinusCircle, XCircle } from "lucide-react";
import { capabilities, roles, type CapabilityValue } from "@/content/site";

const statusPresentation: Record<CapabilityValue, { icon: typeof CheckCircle2; className: string }> = {
  Manage: { icon: CheckCircle2, className: "capability-manage" },
  View: { icon: Eye, className: "capability-view" },
  Limited: { icon: MinusCircle, className: "capability-limited" },
  "Not available": { icon: XCircle, className: "capability-none" },
};

function CapabilityStatus({ value }: { value: CapabilityValue }) {
  const presentation = statusPresentation[value];
  const Icon = presentation.icon;
  return (
    <span className={`capability-status ${presentation.className}`}>
      <Icon aria-hidden="true" />
      <span>{value}</span>
    </span>
  );
}

export function CapabilityMatrix() {
  return (
    <div>
      <div className="capability-table-wrap">
        <table className="capability-table">
          <caption className="sr-only">ShiftChef capabilities by access role</caption>
          <thead>
            <tr>
              <th scope="col">Capability</th>
              {roles.map((role) => <th scope="col" key={role.id}>{role.shortName}</th>)}
            </tr>
          </thead>
          <tbody>
            {capabilities.map((row) => (
              <tr key={row.capability}>
                <th scope="row">{row.capability}</th>
                {roles.map((role) => (
                  <td key={role.id}><CapabilityStatus value={row.values[role.id]} /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="capability-cards">
        {capabilities.map((row) => (
          <section className="capability-card" key={row.capability}>
            <h3>{row.capability}</h3>
            <dl>
              {roles.map((role) => (
                <div key={role.id}>
                  <dt>{role.name}</dt>
                  <dd><CapabilityStatus value={row.values[role.id]} /></dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
