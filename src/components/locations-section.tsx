import Image from "next/image";
import { companyPagesContent } from "@/content/site";

export function LocationsSection() {
  const locations = companyPagesContent.locations;
  const vb = locations.mapViewBox;

  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="order-2 lg:order-1 lg:w-1/2 lg:shrink-0">
          <div className="sticky top-24 overflow-hidden rounded-3xl bg-linear-to-br from-primary/15 via-primary/8 to-white p-6 shadow-sm sm:p-8">
            <div className="overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-3 sm:p-4">
              <div
                className="relative w-full min-h-[240px]"
                style={{ aspectRatio: `${vb.width} / ${vb.height}` }}
              >
                <Image
                  src={locations.mapSvgSrc}
                  alt={locations.mapAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={false}
                />
                {locations.mapMarkers.map((marker) => (
                  <div
                    key={`${marker.label}-${marker.svgX}-${marker.svgY}`}
                    className="absolute z-10"
                    style={{
                      left: `${(marker.svgX / vb.width) * 100}%`,
                      top: `${(marker.svgY / vb.height) * 100}%`,
                    }}
                  >
                  <span className="absolute left-0 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary ring-4 ring-primary/15" />
                  <span className="ml-3 inline-flex rounded-full bg-white px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
                    {marker.label}
                  </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:min-w-0 lg:flex-1">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            {locations.title}
          </h2>
          <div className="mt-8 space-y-8">
            {locations.groups.map((group) => (
              <section key={group.type}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500">
                  {group.type}
                </h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {group.locations.map((location) => (
                    <div
                      key={`${group.type}-${location.title}`}
                      className="rounded-2xl border border-border bg-background p-5 shadow-xs"
                    >
                      <p className="text-lg font-semibold text-foreground">
                        {location.title}
                      </p>
                      {location.lines.length ? (
                        <div className="mt-3 space-y-1 text-sm leading-relaxed text-muted-foreground">
                          {location.lines.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
