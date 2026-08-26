import type { Metadata } from "next";
import {
  AboutHero,
  AboutMission,
  OurTeam,
  OurValues,
} from "@/components/about";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Established in 2024, ${siteConfig.name} is a specialized agency in custom software and mobile app development education. Learn about our mission, values, and team.`,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description: `Established in 2024, ${siteConfig.name} transforms passionate learners into industry-ready professionals.`,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1">
      <AboutHero />
      <OurValues />
      <OurTeam />
      <AboutMission />
    </main>
  );
}
