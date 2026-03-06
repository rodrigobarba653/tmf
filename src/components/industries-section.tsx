import Image from "next/image";

const industries = [
  "Oil & Gas",
  "Chemical & Petrochemical",
  "Power Generation",
  "HVAC & Mechanical Systems",
  "Industrial Manufacturing",
  "Infrastructure & Utilities",
];

export function IndustriesSection() {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-16 lg:py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16 lg:items-start">
        <div className="relative order-2 lg:order-1 lg:sticky lg:top-24 lg:w-1/2 lg:shrink-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted sm:aspect-[6/6]">
            <Image
              src="/images/homepage-3.jpg"
              alt="Industries we serve"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:min-w-0 lg:flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Industries we serve
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Industries We Support
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Our products are trusted by industries that require performance,
            compliance, and reliability in challenging operating conditions.
          </p>
          <ul className="mt-8 space-y-3">
            {industries.map((industry) => (
              <li
                key={industry}
                className="flex items-center gap-3 text-base font-medium text-foreground sm:text-lg"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
