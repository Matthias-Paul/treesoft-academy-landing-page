import Link from "next/link";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M10,0C6.1,0,3,3.1,3,7c0,4.5,6,11.8,6.2,12.1L10,20l0.8-0.9C11,18.8,17,11.5,17,7C17,3.1,13.9,0,10,0z M10,2c2.8,0,5,2.2,5,5c0,2.7-3.1,7.4-5,9.8C8.1,14.4,5,9.7,5,7C5,4.2,7.2,2,10,2zM10,4.5C8.6,4.5,7.5,5.6,7.5,7S8.6,9.5,10,9.5s2.5-1.1,2.5-2.5S11.4,4.5,10,4.5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M4.4,0C4,0,3.6,0.2,3.2,0.4L0.8,2.9C0,3.6-0.2,4.7,0.1,5.6c0.7,1.9,2.3,5.5,5.6,8.7c3.3,3.3,6.9,4.9,8.7,5.6c0.9,0.3,1.9,0.1,2.7-0.5l2.4-2.4c0.6-0.6,0.6-1.7,0-2.4l-3.1-3.1c-0.6-0.6-1.8-0.6-2.4,0l-1.5,1.5c-0.6-0.3-1.9-1-3.1-2.2C8,9.5,7.4,8.2,7.2,7.6l1.5-1.5c0.6-0.6,0.7-1.7,0-2.4L5.6,0.5C5.2,0.2,4.8,0,4.4,0z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <path d="M2.9 0C1.3 0 0 1.3 0 2.9v14.3C0 18.7 1.3 20 2.9 20h14.3c1.6 0 2.9-1.3 2.9-2.9V2.9C20 1.3 18.7 0 17.1 0H2.9zm13.2 3.8L11.5 9l5.5 7.2h-4.3l-3.3-4.4-3.8 4.4H3.4l5-5.7-5.3-6.7h4.4l3 4 3.5-4h2.1zM14.4 15 6.8 5H5.6l7.7 10h1.1z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" fill="currentColor">
      <circle cx="10" cy="10" r="3.3" />
      <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z" />
    </svg>
  );
}

const socialIcons = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
} as const;

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const className =
    "text-[0.9375rem] text-text-soft transition-colors duration-250 ease-[var(--ease)] hover:text-brand";

  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-base font-bold text-foreground">{children}</h2>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-auto border-t border-border bg-white"
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <div className="mx-auto w-full max-w-container px-5 py-14 sm:px-8 lg:px-[2.1875rem] lg:py-[4.375rem]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Contact */}
          <div>
            <FooterHeading>Contact Info</FooterHeading>
            <p className="my-5 max-w-sm text-[0.9375rem] leading-relaxed text-text-muted">
              Have questions? We&apos;re here to help. Reach out to us through any
              of our channels below.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-brand-dark">
                  <MapPinIcon />
                </span>
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">
                    Address:
                  </span>
                  <span className="text-[0.9375rem] leading-relaxed text-text-soft">
                    {siteConfig.address}
                  </span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-brand-dark">
                  <PhoneIcon />
                </span>
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-foreground">
                    Phone:
                  </span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-[0.9375rem] text-text-soft transition-colors hover:text-brand"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <FooterHeading>About us</FooterHeading>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerAbout.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerLegal.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div
          className={cn(
            "mx-auto flex w-full max-w-container flex-col items-start justify-between gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center lg:px-[2.1875rem]",
          )}
        >
          <p className="text-sm leading-relaxed text-text-soft">
            Copyright © {year} - {siteConfig.name}. All rights reserved. Powered
            by {siteConfig.company}.
          </p>

          <ul className="flex items-center gap-4" aria-label="Social media">
            {siteConfig.social.map((item) => {
              const Icon = socialIcons[item.network];
              return (
                <li key={item.network}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="inline-flex size-9 items-center justify-center rounded-md text-text-soft transition-colors duration-250 ease-[var(--ease)] hover:bg-brand-soft hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
