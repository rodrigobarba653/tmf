import { footerContent } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">
          {footerContent.copyright}
        </p>
      </div>
    </footer>
  );
}
