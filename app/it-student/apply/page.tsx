import type { Metadata } from "next";
import { ItStudentApplyForm } from "@/components/it-student/ItStudentApplyForm";
import { itStudentConfig } from "@/lib/it-student";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Student Application",
  description: `Apply for the ${itStudentConfig.discountPercent}% IT / SIWES student offer at ${siteConfig.name}.`,
  alternates: {
    canonical: `${itStudentConfig.path}/apply`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ItStudentApplyPage() {
  return (
    <main id="main-content" className="flex-1">
      <ItStudentApplyForm />
    </main>
  );
}
