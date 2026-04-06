import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { PageRichTextSection } from "@/components/page-rich-text-section";
import { PendingSpecsNote } from "@/components/pending-specs-note";
import { hoseAssembliesContent } from "@/content/site";

export default function HoseAssembliesPage() {
  return (
    <main>
      <Hero {...hoseAssembliesContent.hero} />
      <PageRichTextSection
        title={hoseAssembliesContent.title}
        paragraphs={hoseAssembliesContent.paragraphs}
      />
      <PendingSpecsNote body="Assembly options, part numbering, and application guides will be added when the client provides finalized technical marketing copy." />
      <ContactSection />
    </main>
  );
}
