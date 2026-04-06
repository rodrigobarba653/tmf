import Image from "next/image";
import Link from "next/link";
import { companyPagesContent } from "@/content/site";

const quality = companyPagesContent.qualitySystem;

export function QualitySystemSection() {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {quality.title}
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {quality.body}
        </p>
        <h3 className="mt-12 text-lg font-semibold text-foreground sm:text-xl">
          {quality.certificatesHeading}
        </h3>
        <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {quality.certificates.map((cert) => (
            <li key={cert.pdfHref}>
              <Link
                href={cert.pdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-border bg-white p-4 shadow-xs transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Image
                  src={cert.imageSrc}
                  alt={cert.label}
                  width={240}
                  height={140}
                  className="h-auto max-h-28 w-full object-contain"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
