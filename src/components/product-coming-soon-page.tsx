import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ProductComingSoonBreadcrumb = { label: string; href: string };

export type ProductComingSoonPageProps = {
  title: string;
  breadcrumb: readonly ProductComingSoonBreadcrumb[];
  subtitle?: string;
  image?: { src: string; alt: string };
};

export function ProductComingSoonPage({
  title,
  breadcrumb,
  subtitle = "Technical specifications, datasheets, and product details will be published here soon.",
  image,
}: ProductComingSoonPageProps) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="w-full max-w-8xl mx-auto px-4 pt-6 sm:px-6 lg:px-16"
      >
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {breadcrumb.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 ? (
                <ChevronRight className="size-4 shrink-0 opacity-60" aria-hidden />
              ) : null}
              {i < breadcrumb.length - 1 ? (
                <Link
                  href={item.href}
                  className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section className="w-full max-w-3xl mx-auto px-4 py-14 sm:px-6 lg:px-16 lg:py-20">
        {image ? (
          <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted/30">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        ) : null}

        <p className="text-xs font-bold uppercase tracking-widest text-primary">
          Coming soon
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          In the meantime, contact us for availability, applications support, or
          to discuss your requirements.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/#contact">Contact Us</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products">All products</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
