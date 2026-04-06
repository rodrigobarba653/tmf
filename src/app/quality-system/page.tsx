import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { QualitySystemSection } from "@/components/quality-system-section";
import { companyPagesContent } from "@/content/site";

export default function QualitySystemPage() {
  return (
    <main>
      <Hero {...companyPagesContent.qualitySystem.hero} />
      <QualitySystemSection />
      <ContactSection />
    </main>
  );
}
