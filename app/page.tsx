import {
  CourseCategories,
  FaqJsonLd,
  FinalCta,
  GetInTouch,
  Hero,
  SuccessStories,
} from "@/components/home";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <FaqJsonLd />
      <main id="main-content" className="flex-1">
        <Hero />
        <CourseCategories />
        <GetInTouch />
        <SuccessStories />
        <FinalCta />
      </main>
    </>
  );
}
