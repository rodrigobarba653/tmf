import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProductsSection } from "@/components/products-section";
import { IndustriesSection } from "@/components/industries-section";
import { WhyTmflexSection } from "@/components/why-tmflex-section";
import { ContactSection } from "@/components/contact-section";
import { homeContent } from "@/content/site";

export default function Home() {
  return (
    <main className="">
      <Hero {...homeContent.hero} />
      <AboutSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyTmflexSection />
      <ContactSection />
    </main>
  );
}
