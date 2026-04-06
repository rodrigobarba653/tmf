import Link from "next/link";
import { Button } from "@/components/ui/button";
import { companyPagesContent } from "@/content/site";

export function CareersSection() {
  const careers = companyPagesContent.careers;

  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {careers.title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {careers.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 space-y-3">
            {careers.list.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base font-medium text-foreground sm:text-lg"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {careers.outro}
          </p>
        </div>
        <div className="rounded-2xl bg-primary/10 p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Careers
          </p>
          <p className="mt-4 text-lg font-semibold text-foreground sm:text-xl">
            {careers.emailLabel}
          </p>
          <Button asChild size="lg" className="mt-6 w-fit">
            <Link href={`mailto:${careers.email}`}>{careers.email}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
