import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { PageRichTextSection } from "@/components/page-rich-text-section";
import { companyPagesContent } from "@/content/site";

export default function CompanyAboutPage() {
  return (
    <main>
      <Hero {...companyPagesContent.about.hero} />
      <PageRichTextSection
        title={companyPagesContent.about.title}
        paragraphs={companyPagesContent.about.paragraphs}
      />
      <ContactSection />
    </main>
  );
}
