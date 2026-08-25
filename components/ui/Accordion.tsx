"use client";

import {
  createContext,
  useCallback,
  useContext,
  useId,
  useState,
} from "react";
import { cn } from "@/lib/cn";

type AccordionContextValue = {
  openId: string | null;
  setOpenId: (id: string | null) => void;
  baseId: string;
};

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) {
    throw new Error("Accordion components must be used within <Accordion>");
  }
  return ctx;
}

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
  /** Controlled open item id */
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
};

export function Accordion({
  children,
  className,
  value,
  defaultValue = null,
  onValueChange,
}: AccordionProps) {
  const baseId = useId();
  const [uncontrolled, setUncontrolled] = useState<string | null>(defaultValue);
  const isControlled = value !== undefined;
  const openId = isControlled ? value : uncontrolled;

  const setOpenId = useCallback(
    (next: string | null) => {
      if (!isControlled) setUncontrolled(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  return (
    <AccordionContext.Provider value={{ openId, setOpenId, baseId }}>
      <div className={cn("flex flex-col gap-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export type AccordionItemProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function AccordionItem({
  id,
  title,
  children,
  className,
}: AccordionItemProps) {
  const { openId, setOpenId, baseId } = useAccordion();
  const open = openId === id;
  const triggerId = `${baseId}-trigger-${id}`;
  const panelId = `${baseId}-panel-${id}`;

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn(
        "rounded-md border border-border bg-white transition-shadow duration-250 ease-[var(--ease)]",
        open && "shadow-sm",
        className,
      )}
    >
      <h3 className="m-0">
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-foreground transition-colors hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
          onClick={() => setOpenId(open ? null : id)}
        >
          <span>{title}</span>
          <span
            aria-hidden="true"
            className={cn(
              "inline-flex size-6 shrink-0 items-center justify-center text-brand-dark transition-transform duration-250 ease-[var(--ease)]",
              open && "rotate-45",
            )}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1v12M1 7h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!open}
        className={cn("px-5 pb-5", !open && "hidden")}
      >
        <div className="text-body text-text-muted">{children}</div>
      </div>
    </div>
  );
}
