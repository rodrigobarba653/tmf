import type { Metadata } from "next";
import { IndustrialProductPageView } from "@/components/industrial-product-page";
import { corrugatedNTypeContent } from "@/content/corrugated-products";
import { siteMetadata } from "@/content/site";

export const metadata: Metadata = {
  title: `${corrugatedNTypeContent.pageTitle} | ${siteMetadata.title}`,
  description: corrugatedNTypeContent.metaDescription,
};

export default function CorrugatedNTypePage() {
  return <IndustrialProductPageView content={corrugatedNTypeContent} />;
}
