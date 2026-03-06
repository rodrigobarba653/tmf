import { Award, Globe, Layers, Wrench, Truck, ShieldCheck } from "lucide-react";

const reasons = [
  {
    text: "Nearly 70 Years of Manufacturing Experience",
    icon: Award,
  },
  {
    text: "International Production Capabilities",
    icon: Globe,
  },
  {
    text: "High-Grade Stainless-Steel Materials",
    icon: Layers,
  },
  {
    text: "Custom Fabrication & Assemblies",
    icon: Wrench,
  },
  {
    text: "U.S.-Based Distribution & Sales Support",
    icon: Truck,
  },
  {
    text: "Commitment to Quality & Industrial Standards",
    icon: ShieldCheck,
  },
];

export function WhyTmflexSection() {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 lg:pt-8 pt-8 lg:pb-24 pb-16">
      <header className="mb-10 lg:mb-14">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
          Why TMFlex
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
          Why Partner with TMFlex?
        </h2>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ text, icon: Icon }) => (
          <div key={text} className="flex items-start gap-4">
            <span className="flex shrink-0 items-center justify-center rounded-lg text-primary">
              <Icon className="size-6 sm:size-7" aria-hidden />
            </span>
            <p className="text-base font-medium text-foreground sm:text-lg leading-snug pt-0.5">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
