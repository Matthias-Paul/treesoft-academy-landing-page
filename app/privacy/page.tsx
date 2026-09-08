import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Learn how ${siteConfig.name} collects, uses, stores, and protects your personal information.`,
  alternates: { canonical: "/privacy" },
};

const sections: LegalSection[] = [
  {
    title: "Information we collect",
    paragraphs: [
      "We collect information you provide when you contact us, apply for an IT student opportunity, register interest in a course, or otherwise communicate with Treesoft Academy.",
    ],
    items: [
      "Your name, email address, phone number, school, department, and program level.",
      "Course interests, IT or SIWES details, messages, and other information you submit.",
      "Uploaded school identification and IT placement documents where required.",
      "Basic technical information such as browser type, device type, and website usage data.",
    ],
  },
  {
    title: "How we use your information",
    items: [
      "To respond to enquiries and provide information about our courses.",
      "To review and manage IT student and scholarship applications.",
      "To communicate application updates, enrollment information, and service notices.",
      "To maintain, secure, and improve our website and learning services.",
      "To comply with applicable legal and regulatory requirements.",
    ],
  },
  {
    title: "How we share information",
    paragraphs: [
      "We do not sell your personal information. We may share limited information with trusted service providers that help us operate our website, store applications, deliver email, and host uploaded documents. These providers may only process information for the services they provide to us.",
      "We may also disclose information where required by law, to protect our rights or users, or as part of a business reorganisation.",
    ],
  },
  {
    title: "Storage and security",
    paragraphs: [
      "Application and contact data may be stored using third-party infrastructure, including database, email, and cloud media providers. We use reasonable technical and organisational safeguards to protect this information, but no internet-based service can guarantee absolute security.",
      "We retain information only for as long as reasonably necessary to handle your enquiry, administer your application or enrollment, meet legal obligations, and resolve disputes.",
    ],
  },
  {
    title: "Your choices and rights",
    paragraphs: [
      "You may ask us to provide, correct, or delete personal information we hold about you, subject to legal and operational requirements. You may also ask us to stop using your information for non-essential communications.",
      `To make a request, email ${siteConfig.contactEmail}. We may need to verify your identity before completing it.`,
    ],
  },
  {
    title: "Children’s privacy",
    paragraphs: [
      "Our services are not directed to children who cannot lawfully consent to the processing of their personal information. Where a learner is under the applicable age of consent, a parent or guardian should contact us before information is submitted.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Privacy Policy as our services or legal obligations change. The latest version will always appear on this page with its effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This policy explains what information we collect, why we collect it, and how we handle it."
      updated="8 September 2026"
      sections={sections}
    />
  );
}
