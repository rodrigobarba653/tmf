import type { Metadata } from "next";
import { IndustrialProductPageView } from "@/components/industrial-product-page";
import { corrugatedPTypeContent } from "@/content/corrugated-products";
import { siteMetadata } from "@/content/site";

export const metadata: Metadata = {
  title: `${corrugatedPTypeContent.pageTitle} | ${siteMetadata.title}`,
  description: corrugatedPTypeContent.metaDescription,
};

export default function CorrugatedPTypePage() {
  return <IndustrialProductPageView content={corrugatedPTypeContent} />;
}
