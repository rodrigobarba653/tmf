"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { navContent } from "@/content/site";

const productsItems = navContent.productsSubmenu;
const companyItems = navContent.companySubmenu;

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
          className,
        )}
      >
        {children}
      </Link>
    </NavigationMenuLink>
  );
}

function MobileNavLink({
  href,
  children,
  onOpenChange,
}: {
  href: string;
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => onOpenChange(false)}
      className="block rounded-md px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
    >
      {children}
    </Link>
  );
}

const navLinkClass =
  "flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label={navContent.homeAriaLabel}
        >
          <Image
            src="/images/logo.svg"
            alt={navContent.logoAlt}
            width={180}
            height={54}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav: static links until mounted to avoid Radix hydration mismatch */}
        {!mounted ? (
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            <Link href="/" className={navLinkClass}>
              {navContent.labels.home}
            </Link>
            <Link
              href={navContent.staticProductsEntryHref}
              className={navLinkClass}
            >
              {navContent.labels.products}
            </Link>
            <Link href="/hose-assemblies" className={navLinkClass}>
              {navContent.labels.hoseAssemblies}
            </Link>
            <Link href="/about" className={navLinkClass}>
              {navContent.labels.company}
            </Link>
          </nav>
        ) : (
          <nav className="hidden items-center gap-1 md:flex">
            <NavigationMenu viewport={true} className="max-w-none">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavLink href="/">{navContent.labels.home}</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {navContent.labels.products}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-2">
                      {productsItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="flex flex-col gap-1 rounded-sm p-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {item.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/hose-assemblies">
                    {navContent.labels.hoseAssemblies}
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    {navContent.labels.company}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[420px] grid-cols-[1fr_1.3fr] gap-3 p-3">
                      <div className="rounded-xl bg-primary/8 p-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
                          Company
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          Learn more about TMFlex, our team, locations, and
                          quality standards.
                        </p>
                      </div>
                      <ul className="grid gap-1 sm:grid-cols-2">
                        {companyItems.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex min-h-16 flex-col justify-center gap-1 rounded-lg p-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <span className="font-medium">{item.label}</span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        )}

        <div className="hidden shrink-0 md:block">
          <Button asChild variant="default" size="default">
            <Link href={navContent.cta.href}>{navContent.cta.label}</Link>
          </Button>
        </div>

        {/* Mobile: static CTA + placeholder until mounted, then Sheet */}
        <div className="flex items-center gap-2 md:hidden">
          <Button asChild variant="default" size="sm">
            <Link href={navContent.cta.href}>{navContent.cta.label}</Link>
          </Button>
          {!mounted ? (
            <span
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-md text-foreground"
              aria-hidden
            >
              <Menu className="size-6" />
            </span>
          ) : (
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={navContent.openMenuAriaLabel}
                >
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:max-w-[300px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    {navContent.sheetMenuTitle}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 pt-6">
                  <MobileNavLink href="/" onOpenChange={setMobileOpen}>
                    {navContent.labels.home}
                  </MobileNavLink>
                  <span className="px-4 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {navContent.labels.products}
                  </span>
                  {productsItems.map((item) => (
                    <MobileNavLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setMobileOpen}
                    >
                      {item.label}
                    </MobileNavLink>
                  ))}
                  <MobileNavLink
                    href="/hose-assemblies"
                    onOpenChange={setMobileOpen}
                  >
                    {navContent.labels.hoseAssemblies}
                  </MobileNavLink>
                  <span className="px-4 pt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {navContent.labels.company}
                  </span>
                  {companyItems.map((item) => (
                    <MobileNavLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setMobileOpen}
                    >
                      {item.label}
                    </MobileNavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
