type PendingSpecsNoteProps = {
  title?: string;
  body: string;
};

export function PendingSpecsNote({
  title = "Product specifications",
  body,
}: PendingSpecsNoteProps) {
  return (
    <section className="w-full max-w-8xl mx-auto px-4 pb-16 sm:px-6 lg:px-16 lg:pb-24">
      <div className="max-w-4xl rounded-2xl border border-dashed border-border bg-muted/30 p-6 sm:p-8">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {body}
        </p>
      </div>
    </section>
  );
}
