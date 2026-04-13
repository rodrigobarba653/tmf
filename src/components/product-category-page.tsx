import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { PageRichTextSection } from "@/components/page-rich-text-section";
import { PendingSpecsNote } from "@/components/pending-specs-note";
import { productCategoryContent } from "@/content/site";

type ProductCategoryKey = keyof typeof productCategoryContent;

export function ProductCategoryPageView({ category }: { category: ProductCategoryKey }) {
  const content = productCategoryContent[category];

  return (
    <main>
      <Hero {...content.hero} />
      <PageRichTextSection
        title={content.pageTitle}
        paragraphs={content.paragraphs}
      />
      {content.pendingSpecsBody.trim() ? (
        <PendingSpecsNote body={content.pendingSpecsBody} />
      ) : null}
      <ContactSection />
    </main>
  );
}
