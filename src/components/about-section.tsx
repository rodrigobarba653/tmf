import Link from "next/link";
import { Button } from "@/components/ui/button";
import { aboutContent } from "@/content/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 w-full max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-16 lg:pt-32 "
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-16 md:items-start">
        <div className="max-w-lg">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {aboutContent.subheading}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            {aboutContent.title}
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="space-y-4 text-base leading-relaxed text-black sm:text-base">
            {aboutContent.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Button asChild size="lg" variant="default" className="w-fit">
            <Link href={aboutContent.cta.href}>{aboutContent.cta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
