import Image from "next/image";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <Section
      id="enroll"
      contained
      className="!py-10 md:!py-14"
      aria-labelledby="final-cta-heading"
    >
      <div className="relative overflow-hidden rounded-[10px] px-6 py-16 text-center shadow-[0_20px_50px_0_rgba(0,0,0,0.25)] sm:px-10 md:px-16 md:py-[6.25rem]">
        <Image
          src="/images/campaign-creators-qCi_MzVODoU-unsplash.jpg"
          alt=""
          fill
          sizes="(max-width: 1140px) 100vw, 1140px"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-brand-dark/70"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-[39rem]">
          <Heading as={2} size="h2" invert id="final-cta-heading">
            Ready to Start Your Journey?
          </Heading>
          <Text size="lead" tone="invert" className="mt-4">
            Join our community of learners and take the first step towards your
            new career in tech.
          </Text>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/courses" variant="white" size="lg">
              Enroll Now
            </ButtonLink>
            <ButtonLink
              href={siteConfig.cta.href}
              variant="outline"
              size="lg"
              className="border-white text-white hover:border-white hover:bg-white hover:text-brand-dark"
            >
              Talk to an Advisor
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
