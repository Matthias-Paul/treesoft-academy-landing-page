import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  ButtonLink,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { faqs } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

export function GetInTouch() {
  return (
    <>
      <Section
        id="get-in-touch"
        tone="surface"
        spacious
        contained={false}
        aria-labelledby="get-in-touch-heading"
        className="!py-0"
      >
        <div className="mx-auto grid w-full max-w-container overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[18rem] sm:min-h-[22rem] lg:min-h-full">
            <Image
              src="/images/max-andrey-TlRQin0iwjE-unsplash.jpg"
              alt="Learners collaborating during a Treesoft Academy session"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 md:py-16 lg:px-12 lg:py-[4.375rem] xl:pr-16">
            <Heading as={2} size="h2" id="get-in-touch-heading">
              Get in Touch
            </Heading>
            <Text size="lead" tone="muted" className="mt-3 max-w-lg">
              Whether you&apos;re interested in our courses, have questions
              about our programs, or want to learn more about {siteConfig.name},
              we are here to help.
            </Text>

            <Accordion defaultValue="enroll" className="mt-8 gap-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  id={faq.id}
                  title={faq.question}
                  className="border-0 bg-surface-muted shadow-none transition-[background-color,box-shadow] duration-250 hover:bg-white hover:shadow-[0_20px_70px_0_rgba(66,81,103,0.1)] data-[state=open]:bg-white data-[state=open]:shadow-[0_20px_70px_0_rgba(66,81,103,0.1)]"
                >
                  {faq.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      <Section
        contained
        className="!py-8 md:my-8 md:!py-10"
        aria-labelledby="contact-banner-heading"
      >
        <div className="relative overflow-hidden rounded-[10px] bg-brand-dark px-6 py-10 sm:px-10 md:px-12 md:py-12">
          <Image
            src="/images/pattern.svg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.03]"
            aria-hidden="true"
          />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <Heading
              as={2}
              size="h3"
              invert
              id="contact-banner-heading"
              className="max-w-xl "
            >
              <div className="text-white" >
                 Do you have any question?
                <br className="hidden sm:block" /> Feel free to contact us anytime.
              </div>  
            </Heading>
            <ButtonLink
              href="/contact"
              variant="white"
              size="lg"
              className="shrink-0 border border-transparent hover:border-white/20"
            >
              Contact us now
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}

export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
