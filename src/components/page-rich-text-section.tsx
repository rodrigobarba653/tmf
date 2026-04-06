type PageRichTextSectionProps = {
  title: string;
  paragraphs: readonly string[];
};

export function PageRichTextSection({
  title,
  paragraphs,
}: PageRichTextSectionProps) {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {title}
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
