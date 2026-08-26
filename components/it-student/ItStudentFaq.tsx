"use client";

import {
  Accordion,
  AccordionItem,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { itStudentFaqs } from "@/lib/it-student";

export function ItStudentFaq() {
  return (
    <Section id="faq" spacious aria-labelledby="it-faq-heading">
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <Heading as={2} size="h2" id="it-faq-heading">
          Questions IT students ask
        </Heading>
        <Text size="lead" tone="muted" className="mt-3">
          Straight answers before you apply — time, eligibility, and what
          happens after SIWES.
        </Text>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion defaultValue={itStudentFaqs[0]?.id ?? null} className="flex flex-col gap-4">
          {itStudentFaqs.map((faq) => (
            <AccordionItem key={faq.id} id={faq.id} title={faq.question}>
              {faq.answer}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
