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
  secondaryCta?: HeroCta;
  heightClassName?: string;
  className?: string;
};

export function Hero({
  imageSrc,
  imageAlt,
  title,
  body,
  primaryCta,
  secondaryCta,
  heightClassName = "sm:h-[640px] h-[560px]",
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full max-w-[calc(100%-2rem)] mx-auto sm:max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-4rem)] mt-4",
        className,
      )}
    >
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-4xl",
          heightClassName,
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1400px"
        />
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-4xl bg-linear-to-l from-transparent via-black/35 to-black/80"
          aria-hidden
        />
        <h1 className="absolute top-8 sm:left-8 left-4 z-20 text-4xl font-semibold text-white max-w-2xl sm:text-7xl">
          {title}
        </h1>
        <div className="absolute bottom-0 z-20 flex flex-col justify-center gap-2 rounded-tr-4xl bg-white px-4 py-8 sm:px-8 sm:py-8 md:max-w-2xl">
          <Image
            src="/images/corner.svg"
            alt=""
            width={160}
            height={160}
            className="absolute -right-8 bottom-0 size-24 sm:size-8 sm:block hidden"
            aria-hidden
          />
          <Image
            src="/images/corner.svg"
            alt=""
            width={160}
            height={160}
            className="absolute left-0 -top-8 size-24 sm:size-8 sm:block hidden"
            aria-hidden
          />
          <p className="text-lg leading-relaxed text-black">{body}</p>
          <div className="flex gap-3 pt-2">
            <Button asChild size="lg" variant="default">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta ? (
              <Button
                asChild
                size="lg"
                variant={secondaryCta.variant ?? "secondary"}
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
