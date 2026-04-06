"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactContent } from "@/content/site";

export function ContactSection() {
  const f = contactContent.form;

  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full bg-primary/10 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center lg:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            {contactContent.subheading}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            {contactContent.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {contactContent.body}
          </p>
        </header>

        <form
          className="mx-auto max-w-xl rounded-2xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">{f.nameLabel}</Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={f.namePlaceholder}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">{f.emailLabel}</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder={f.emailPlaceholder}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-company">{f.companyLabel}</Label>
              <Input
                id="contact-company"
                name="company"
                type="text"
                placeholder={f.companyPlaceholder}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">{f.messageLabel}</Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder={f.messagePlaceholder}
                rows={5}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-fit">
              {f.submitLabel}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
