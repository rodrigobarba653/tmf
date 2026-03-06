import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ProductsSection } from "@/components/products-section";
import { IndustriesSection } from "@/components/industries-section";
import { WhyTmflexSection } from "@/components/why-tmflex-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <main className="">
      <Hero
        imageSrc="/images/hero.jpg"
        imageAlt="Industrial hose and flexible tubing solutions"
        title="Engineered Metal Hose & Conduit Solutions "
        body="High-quality corrugated hose, interlocked hose, and explosion-proof flexible conduit for industrial and commercial applications."
        primaryCta={{ label: "Request a quote", href: "/request-quote" }}
        secondaryCta={{
          label: "Explore products",
          href: "/products",
          variant: "outline",
        }}
      />
      <AboutSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyTmflexSection />
      <ContactSection />
    </main>
  );
}
