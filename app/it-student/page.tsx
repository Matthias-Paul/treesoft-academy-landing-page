import type { Metadata } from "next";
import {
  ItStudentDiscount,
  ItStudentFaq,
  ItStudentFinalCta,
  ItStudentHero,
  ItStudentHowItWorks,
  ItStudentPrograms,
  ItStudentSocialProof,
  ItStudentWhyNow,
} from "@/components/it-student";
import { itStudentConfig } from "@/lib/it-student";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply as an IT Student",
  description: `Turn your IT / SIWES into a real tech skill. IT students get ${itStudentConfig.discountPercent}% off all six Treesoft Academy programs.`,
  alternates: {
    canonical: itStudentConfig.path,
  },
  openGraph: {
    title: `Apply as an IT Student | ${siteConfig.name}`,
    description: `IT / SIWES students: learn any of our six tracks alongside your placement — with ${itStudentConfig.discountPercent}% off tuition.`,
    url: itStudentConfig.path,
  },
};

export default function ItStudentPage() {
  return (
    <main id="main-content" className="flex-1">
      <ItStudentHero />
      <ItStudentWhyNow />
      <ItStudentPrograms />
      <ItStudentDiscount />
      <ItStudentHowItWorks />
      <ItStudentSocialProof />
      <ItStudentFaq />
      <ItStudentFinalCta />
    </main>
  );
}
