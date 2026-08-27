import Image from "next/image";
import { ButtonLink, Heading, Section, Text } from "@/components/ui";
import { aboutValues } from "@/lib/about";
import { siteConfig } from "@/lib/site";

export function OurValues() {
  return (
    <Section id="values" spacious aria-labelledby="values-heading">
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:items-start lg:gap-16 xl:gap-20">
        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[10px] sm:max-w-md lg:sticky lg:top-24 lg:max-w-none lg:w-[40%]">
          <Image
            src="/images/jacqueline-day-1SapfOEZN2g-unsplash.png"
            alt="Treesoft Academy learner focused on building with modern tools"
            fill
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-cover object-center"
          />
        </div>

        <div className="w-full lg:w-[60%] lg:pt-2">
          <Heading as={2} size="h2" id="values-heading">
            Our Values
          </Heading>
          <Text size="lead" tone="muted" className="mt-4 max-w-md">
            How we teach, mentor, and grow every learner at {siteConfig.name}.
          </Text>

          <ul className="mt-10 grid list-none grid-cols-1 gap-x-12 gap-y-8 p-0 sm:grid-cols-2">
            {aboutValues.map((value) => (
              <li key={value.title} className="m-0 max-w-xs">
                <h3 className="text-base font-bold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>

  
        </div>
      </div>
    </Section>
  );
}
