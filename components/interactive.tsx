"use client";

import { useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";

import { faqs, roles } from "@/content/site";
import { ChevronDownIcon } from "@/components/inline-icons";

const tabId = (roleId: string) => `role-tab-${roleId}`;
const panelId = (roleId: string) => `role-panel-${roleId}`;
const subscribeToHydration = () => () => undefined;

export function RoleTabs() {
  const [activeRoleId, setActiveRoleId] = useState(roles[0].id);
  const isReady = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function selectTab(index: number) {
    const nextIndex = (index + roles.length) % roles.length;
    setActiveRoleId(roles[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        selectTab(index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        selectTab(index - 1);
        break;
      case "Home":
        event.preventDefault();
        selectTab(0);
        break;
      case "End":
        event.preventDefault();
        selectTab(roles.length - 1);
        break;
    }
  }

  return (
    <div className="role-tabs flex flex-col gap-2">
      <div
        aria-label="Choose an access role"
        aria-orientation="horizontal"
        className="role-tab-list"
        role="tablist"
      >
        {roles.map((role, index) => {
          const isActive = activeRoleId === role.id;

          return (
            <button
              aria-controls={panelId(role.id)}
              aria-selected={isActive}
              className="role-tab-trigger relative inline-flex flex-1 items-center justify-center whitespace-nowrap border border-transparent outline-none transition-all"
              data-state={isActive ? "active" : "inactive"}
              disabled={!isReady}
              id={tabId(role.id)}
              key={role.id}
              onClick={() => setActiveRoleId(role.id)}
              onKeyDown={(event) => handleTabKeyDown(event, index)}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              {role.shortName}
            </button>
          );
        })}
      </div>

      {roles.map((role) => {
        const isActive = activeRoleId === role.id;

        return (
          <div
            aria-labelledby={tabId(role.id)}
            className="role-tab-panel"
            hidden={!isActive}
            id={panelId(role.id)}
            key={role.id}
            role="tabpanel"
            tabIndex={0}
          >
            <div>
              <p className="eyebrow text-lime">{role.name.toUpperCase()}</p>
              <h3>{role.summary}</h3>
            </div>
            <ul>
              {role.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        );
      })}
      <noscript>
        <div className="role-noscript-list">
          {roles.map((role) => (
            <section key={role.id}>
              <h3>{role.name}</h3>
              <p>{role.summary}</p>
            </section>
          ))}
        </div>
      </noscript>
    </div>
  );
}

const faqTriggerId = (index: number) => `faq-trigger-${index}`;
const faqPanelId = (index: number) => `faq-panel-${index}`;

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isReady = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;

    switch (event.key) {
      case "ArrowDown":
        nextIndex = (index + 1) % faqs.length;
        break;
      case "ArrowUp":
        nextIndex = (index - 1 + faqs.length) % faqs.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = faqs.length - 1;
        break;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      triggerRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <section className="faq-item border-b last:border-b-0" key={faq.question}>
            <h3 className="faq-heading">
              <button
                aria-controls={faqPanelId(index)}
                aria-expanded={isOpen}
                className="faq-trigger flex w-full items-center justify-between gap-4 text-left outline-none transition-all"
                data-state={isOpen ? "open" : "closed"}
                disabled={!isReady}
                id={faqTriggerId(index)}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                onKeyDown={(event) => handleTriggerKeyDown(event, index)}
                ref={(element) => {
                  triggerRefs.current[index] = element;
                }}
                type="button"
              >
                <span>{faq.question}</span>
                <ChevronDownIcon aria-hidden="true" className="pointer-events-none shrink-0 transition-transform duration-200" />
              </button>
            </h3>
            <div
              aria-labelledby={faqTriggerId(index)}
              className="faq-content"
              hidden={!isOpen}
              id={faqPanelId(index)}
              role="region"
            >
              {faq.answer}
            </div>
          </section>
        );
      })}
      <noscript>
        <div className="faq-noscript-list">
          {faqs.map((faq) => (
            <section key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </section>
          ))}
        </div>
      </noscript>
    </div>
  );
}
