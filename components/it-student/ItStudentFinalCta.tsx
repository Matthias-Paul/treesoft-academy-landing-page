import Image from "next/image";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import { itStudentConfig, itStudentFinalCta } from "@/lib/it-student";

export function ItStudentFinalCta() {
  return (
    <Section
      id="apply"
      contained
      className="!py-10 md:!py-14"
      aria-labelledby="it-final-cta-heading"
    >
      <div className="relative overflow-hidden rounded-[10px] px-6 py-16 text-center shadow-[0_20px_50px_0_rgba(0,0,0,0.25)] sm:px-10 md:px-16 md:py-[5.5rem]">
        <Image
          src="/images/campaign-creators-qCi_MzVODoU-unsplash.jpg"
          alt=""
          fill
          sizes="(max-width: 1140px) 100vw, 1140px"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-brand-dark/5"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-brand">
            {itStudentConfig.discountPercent}% off for IT / SIWES students
          </p>
          <Heading as={2} size="h2" invert id="it-final-cta-heading">
            {itStudentFinalCta.heading}
          </Heading>
          <Text size="lead" tone="invert" className="mt-4">
            {itStudentFinalCta.body}
          </Text>
          <div className="mt-8 flex justify-center">
            <ButtonLink
              href={itStudentConfig.applyUrl}
              variant="white"
              size="lg"
              {...(itStudentConfig.applyOpensInNewTab
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {itStudentFinalCta.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
