import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { CareersSection } from "@/components/careers-section";
import { companyPagesContent } from "@/content/site";

export default function CompanyCareersPage() {
  return (
    <main>
      <Hero {...companyPagesContent.careers.hero} />
      <CareersSection />
      <ContactSection />
    </main>
  );
}
