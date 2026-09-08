import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Learn how ${siteConfig.name} uses cookies and similar technologies on its website.`,
  alternates: { canonical: "/cookies" },
};

const sections: LegalSection[] = [
  {
    title: "What cookies are",
    paragraphs: [
      "Cookies are small text files that websites place on your device. They help websites remember information, operate reliably, and understand how visitors use their pages. Similar technologies, such as local storage, may serve the same purpose.",
    ],
  },
  {
    title: "How we use cookies",
    paragraphs: [
      "Treesoft Academy uses cookies only where they support the operation, security, and improvement of our website. The cookies available may change as we develop the site or add new services.",
    ],
    items: [
      "Essential cookies help core website features work and cannot normally be disabled.",
      "Preference cookies remember choices that make your experience more convenient.",
      "Analytics cookies may help us understand page usage and improve website performance.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "Some features depend on third-party providers, such as cloud hosting, uploaded media, email delivery, and analytics. Those providers may use cookies or similar technologies according to their own privacy policies.",
      "Following a link to another website may also allow that website to set its own cookies. Treesoft Academy does not control cookies placed by third-party websites.",
    ],
  },
  {
    title: "Managing cookies",
    paragraphs: [
      "Most browsers let you view, block, or delete cookies through their privacy settings. Blocking essential cookies may cause parts of the website to work incorrectly.",
      "You can usually find these controls under Privacy, Security, Cookies, or Site Data in your browser settings. Changes apply to the browser and device where you make them.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this Cookie Policy when our website, technology, or legal obligations change. The latest version will be published here with the effective date shown above.",
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="This policy explains how cookies and similar technologies may be used on the Treesoft Academy website."
      updated="8 September 2026"
      sections={sections}
    />
  );
}
