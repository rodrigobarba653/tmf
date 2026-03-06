import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HeroCta = {
  label: string;
  href: string;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "link"
    | "destructive";
};

export type HeroProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  body: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
  className?: string;
};

export function Hero({
  imageSrc,
  imageAlt,
  title,
  body,
  primaryCta,
  secondaryCta,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full max-w-[calc(100%-2rem)] mx-auto sm:max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)] mt-4",
        className,
      )}
    >
      <div className="relative h-[640px] w-full overflow-hidden rounded-4xl">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1400px"
        />
        <h1 className="absolute top-8 left-8 text-3xl font-semibold sm:text-7xl text-white max-w-xl">
          {title}
        </h1>
        <div className="absolute bottom-0 flex flex-col justify-center gap-2 px-6 py-8 bg-white sm:px-8 sm:py-8 rounded-tr-4xl md:max-w-2xl">
          <Image
            src="/images/corner.svg"
            alt=""
            width={160}
            height={160}
            className="absolute -right-8 bottom-0 size-24 sm:size-8"
            aria-hidden
          />
          <Image
            src="/images/corner.svg"
            alt=""
            width={160}
            height={160}
            className="absolute left-0 -top-8 size-24 sm:size-8"
            aria-hidden
          />
          <p className="text-lg leading-relaxed text-black">{body}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" variant="default">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant={secondaryCta.variant ?? "secondary"}
            >
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
