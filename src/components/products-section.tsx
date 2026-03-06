import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Corrugated Hose",
    href: "/products/corrugated-hose",
    imageSrc: "/images/homepage-4.jpg",
    imageAlt: "Corrugated hose",
  },
  {
    title: "Interlocked Hose",
    href: "/products/interlocked-hose",
    imageSrc: "/images/homepage-3.jpg",
    imageAlt: "Interlocked hose",
  },
  {
    title: "Explosion Proof",
    href: "/products/explosion-proof-fc",
    imageSrc: "/images/homepage-2.jpg",
    imageAlt: "Explosion proof conduit",
  },
];

export function ProductsSection() {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        {products.map((product) => (
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
                Explore
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
