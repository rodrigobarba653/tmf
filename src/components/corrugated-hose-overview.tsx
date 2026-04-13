import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { PageRichTextSection } from "@/components/page-rich-text-section";
import { CorrugatedSubproductCardsGrid } from "@/components/corrugated-subproduct-cards";
import { productCategoryContent } from "@/content/site";

export function CorrugatedHoseOverview() {
  const content = productCategoryContent.corrugated;

  return (
    <>
      <Hero {...content.hero} />
      <PageRichTextSection
        title={content.pageTitle}
        paragraphs={content.paragraphs}
      />
      <section className="w-full max-w-8xl mx-auto px-4 pb-16 sm:px-6 lg:px-16 lg:pb-24">
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Product lines
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Stainless steel corrugated hoses
          </h2>
        </header>
        <CorrugatedSubproductCardsGrid />
      </section>
      <ContactSection />
    </>
  );
}
