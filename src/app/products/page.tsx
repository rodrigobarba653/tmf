import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { PageRichTextSection } from "@/components/page-rich-text-section";
import { ProductsCardsGrid } from "@/components/products-section";
import { productsLandingContent } from "@/content/site";

export default function ProductsPage() {
  return (
    <main>
      <Hero {...productsLandingContent.hero} />
      <PageRichTextSection
        title="Our Products"
        paragraphs={productsLandingContent.introParagraphs}
      />
      <section className="w-full max-w-8xl mx-auto px-4 pb-16 sm:px-6 lg:px-16 lg:pb-24">
        <ProductsCardsGrid />
      </section>
      <ContactSection />
    </main>
  );
}
