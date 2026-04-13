import type { Metadata } from "next";
import { ProductComingSoonPage } from "@/components/product-coming-soon-page";
import { productCategoryContent, siteMetadata } from "@/content/site";

const { pageTitle, hero } = productCategoryContent.interlocked;

export const metadata: Metadata = {
  title: `${pageTitle} — Coming soon | ${siteMetadata.title}`,
  description: `${pageTitle} product page — specifications and resources coming soon.`,
};

export default function InterlockedHosePage() {
  return (
    <ProductComingSoonPage
      title={pageTitle}
      breadcrumb={[
        { label: "Products", href: "/products" },
        { label: pageTitle, href: "/products/interlocked-hose" },
      ]}
      image={{ src: hero.imageSrc, alt: hero.imageAlt }}
    />
  );
}
