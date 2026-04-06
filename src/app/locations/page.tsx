import { Hero } from "@/components/hero";
import { ContactSection } from "@/components/contact-section";
import { LocationsSection } from "@/components/locations-section";
import { companyPagesContent } from "@/content/site";

export default function CompanyLocationsPage() {
  return (
    <main>
      <Hero {...companyPagesContent.locations.hero} />
      <LocationsSection />
      <ContactSection />
    </main>
  );
}
