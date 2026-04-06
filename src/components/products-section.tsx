import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { productsContent } from "@/content/site";

export function ProductsCardsGrid() {
  return (
    <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
      {productsContent.items.map((product) => (
        <Link
          key={product.href}
          href={product.href}
          className="group relative flex xl:aspect-[4/3] sm:aspect-[6/7] aspect-[5/3] overflow-hidden rounded-2xl transition-shadow duration-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute flex flex-col justify-end gap-2 p-5 sm:p-6 bg-white bottom-0 rounded-tr-2xl">
            <Image
              src="/images/corner.svg"
              alt=""
              width={160}
              height={160}
              className="absolute sm:-right-8 -right-4 bottom-0 size-4 sm:size-8"
              aria-hidden
            />
            <Image
              src="/images/corner.svg"
              alt=""
              width={160}
              height={160}
              className="absolute left-0 sm:-top-8 -top-4 size-4 sm:size-8"
              aria-hidden
            />
            <h3 className="text-lg font-semibold text-black sm:text-xl">
              {product.title}
            </h3>
            <span className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-black">
              {productsContent.exploreLabel}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

type ProductsSectionProps = {
  showHeader?: boolean;
};

export function ProductsSection({ showHeader = true }: ProductsSectionProps) {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-8 sm:px-6 lg:px-16 lg:py-24">
      {showHeader ? (
        <header className="mb-10 lg:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {productsContent.subheading}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            {productsContent.title}
          </h2>
        </header>
      ) : null}

      <ProductsCardsGrid />
    </section>
  );
}
