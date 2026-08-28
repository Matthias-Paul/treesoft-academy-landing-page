import type { Metadata } from "next";
import { ContactContent, ContactHero } from "@/components/contact";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.name}. Reach our team in Lagos by email, phone, or message — we're here to help with courses, enrollment, and IT student applications.`,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description: `Questions about courses or our IT student pathway? Contact ${siteConfig.name} in Lagos.`,
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1">
      <ContactHero />
      <ContactContent />
    </main>
  );
}
