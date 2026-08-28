import {
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { contactHours } from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M10,0C6.1,0,3,3.1,3,7c0,4.5,6,11.8,6.2,12.1L10,20l0.8-0.9C11,18.8,17,11.5,17,7C17,3.1,13.9,0,10,0z M10,2c2.8,0,5,2.2,5,5c0,2.7-3.1,7.4-5,9.8C8.1,14.4,5,9.7,5,7C5,4.2,7.2,2,10,2zM10,4.5C8.6,4.5,7.5,5.6,7.5,7S8.6,9.5,10,9.5s2.5-1.1,2.5-2.5S11.4,4.5,10,4.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M4.4,0C4,0,3.6,0.2,3.2,0.4L0.8,2.9C0,3.6-0.2,4.7,0.1,5.6c0.7,1.9,2.3,5.5,5.6,8.7c3.3,3.3,6.9,4.9,8.7,5.6c0.9,0.3,1.9,0.1,2.7-0.5l2.4-2.4c0.6-0.6,0.6-1.7,0-2.4l-3.1-3.1c-0.6-0.6-1.8-0.6-2.4,0l-1.5,1.5c-0.6-0.3-1.9-1-3.1-2.2C8,9.5,7.4,8.2,7.2,7.6l1.5-1.5c0.6-0.6,0.7-1.7,0-2.4L5.6,0.5C5.2,0.2,4.8,0,4.4,0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M18 2H2C0.9 2 0 2.9 0 4v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 4-8 5L2 6V4l8 5 8-5v2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm.5-13H9v6l5.2 3.1.8-1.3-4.5-2.7V5z" />
    </svg>
  );
}

const channels = [
  {
    label: "Email",
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
    icon: PhoneIcon,
  },
  {
    label: "Visit us",
    value: siteConfig.address,
    href: null,
    icon: MapPinIcon,
  },
] as const;

export function ContactContent() {
  return (
    <Section
      tone="surface"
      spacious
      aria-labelledby="contact-content-heading"
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-8">
        <aside className="rounded-md border border-border bg-white p-6 sm:p-8 lg:p-10">
          <Heading as={2} size="h2" id="contact-content-heading">
            Reach our team
          </Heading>
          <Text size="lead" tone="muted" className="mt-3 max-w-md">
            Prefer a direct line? Use the details below, or send a message and
            we&apos;ll respond within one business day.
          </Text>

          <ul className="mt-8 flex flex-col divide-y divide-border border-t border-border">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <li key={channel.label} className="flex gap-4 py-5 first:pt-6 last:pb-0">
                  <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-brand-dark">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {channel.label}
                    </p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="mt-1 block text-[0.9375rem] leading-relaxed text-text-soft transition-colors duration-250 hover:text-brand"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-text-soft">
                        {channel.value}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 border-t border-border pt-6">
            <div className="flex gap-4">
              <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-brand-dark">
                <ClockIcon />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Office hours
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {contactHours.map((row) => (
                    <li
                      key={row.day}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[0.9375rem] text-text-soft sm:max-w-xs"
                    >
                      <span>{row.day}</span>
                      <span className="font-medium text-foreground">
                        {row.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </aside>

        <div className="rounded-md border border-border bg-white p-6 sm:p-8 lg:p-10">
          <Heading as={2} size="h3" className="mb-2">
            Send a message
          </Heading>
          <Text tone="muted" className="mb-8 max-w-lg">
            Tell us a little about what you need — enrollment, IT student
            questions, or something else entirely.
          </Text>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
