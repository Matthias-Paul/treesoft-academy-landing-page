import Image from "next/image";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import { aboutMission } from "@/lib/about";
import { siteConfig } from "@/lib/site";

export function AboutMission() {
  return (
    <Section
      id="mission"
      contained
      className="!py-10 md:!py-14"
      aria-labelledby="mission-heading"
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
          <Heading as={2} size="h2" invert id="mission-heading">
            Our Mission
          </Heading>
          <Text size="lead" tone="invert" className="mt-4">
            {aboutMission}
          </Text>
          <div className="mt-8 flex justify-center">
            <ButtonLink href={siteConfig.cta.href} variant="white" size="lg">
              Reach out now
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
