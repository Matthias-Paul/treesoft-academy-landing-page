import Image from "next/image";
import { ButtonLink } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export function ContactHero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="contact-hero-heading"
    >
      <Image
        src="/images/max-andrey-TlRQin0iwjE-unsplash.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-bg-zoom object-cover object-center"
      />
      <div className="absolute inset-0 bg-brand-dark/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-container px-5 py-24 sm:px-8 md:py-32 lg:px-[2.1875rem] lg:py-[11rem]">
        <div className="hero-reveal hero-reveal-1 max-w-2xl text-center lg:max-w-xl lg:text-left">
          <h1
            id="contact-hero-heading"
            className="text-display text-start text-white"
          >
            Contact {siteConfig.name}
          </h1>
          <p className="hero-reveal hero-reveal-2 mx-auto mt-5 text-start max-w-xl text-base leading-relaxed text-white/95 sm:text-lg lg:mx-0">
            Questions about courses, enrollment, or our IT student pathway?
            Our team is ready to help you take the next step.
          </p>
          <div className="hero-reveal hero-reveal-3 mt-8 flex flex-row flex-wrap items-start justify-start gap-3">
            <ButtonLink
              href="#contact-form"
              variant="white"
              size="sm"
              className="sm:min-h-12 sm:px-[1.4375rem] sm:text-base"
            >
              Send a message
            </ButtonLink>
            <ButtonLink
              href={`tel:${siteConfig.phone}`}
              variant="outline"
              size="sm"
              className="border-white text-white hover:border-white hover:bg-white/10 sm:min-h-12 sm:px-[1.4375rem] sm:text-base"
            >
              Call us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
