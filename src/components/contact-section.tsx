"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full bg-primary/10 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center lg:mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
            Contact form
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Need a Reliable Flexible Metal Solution?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Contact TMFlex today to discuss your application requirements or
            request a customized quote.
          </p>
        </header>

        <form
          className="mx-auto max-w-xl rounded-2xl border border-border bg-background/80 p-6 shadow-sm backdrop-blur-sm sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-6">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-company">Company (optional)</Label>
              <Input
                id="contact-company"
                name="company"
                type="text"
                placeholder="Company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your application or quote request..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full sm:w-fit">
              Request a Quote
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
