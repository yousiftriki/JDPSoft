"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo-black.png"
            alt="JDP.Soft"
            width={725}
            height={239}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
                  aria-expanded={solutionsOpen}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 text-muted" />
                </button>
                {solutionsOpen ? (
                  <div className="absolute left-0 top-full w-64 pt-2">
                    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg shadow-black/5">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center justify-between px-4 py-3 text-sm text-ink/80 transition-colors hover:bg-off-white hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/book-a-call" size="sm">
            Book a Call
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        className={cn(
          "grid overflow-hidden border-t border-border bg-white transition-[grid-template-rows] duration-300 lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr] border-t-0",
        )}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="py-1">
                  <p className="px-2 pb-1 text-xs font-semibold uppercase tracking-wide text-muted">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-2 py-2 text-sm font-medium text-ink/80 hover:bg-off-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-2 text-sm font-medium text-ink/80 hover:bg-off-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button href="/book-a-call" className="mt-3 w-full">
              Book a Call
            </Button>
          </Container>
        </div>
      </div>
    </header>
  );
}
