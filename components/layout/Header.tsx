"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden="true">
      <span
        className={cn(
          "absolute left-0 top-[3px] block h-0.5 w-5 bg-current transition-transform duration-250 ease-[var(--ease)]",
          open && "top-1/2 -translate-y-1/2 rotate-45",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current transition-opacity duration-250",
          open && "opacity-0",
        )}
      />
      <span
        className={cn(
          "absolute bottom-[3px] left-0 block h-0.5 w-5 bg-current transition-transform duration-250 ease-[var(--ease)]",
          open && "bottom-auto top-1/2 -translate-y-1/2 -rotate-45",
        )}
      />
    </span>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-brand-dark focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white transition-[box-shadow,height] duration-250 ease-[var(--ease)]",
          scrolled ? "shadow-header" : "shadow-none",
        )}
      >
        <div
          className={cn(
            "mx-auto flex w-full max-w-container items-center justify-between gap-4 px-5 transition-[min-height] duration-250 ease-[var(--ease)] sm:px-8 lg:px-[2.1875rem]",
            scrolled ? "min-h-16" : "min-h-[4.5rem] md:min-h-[6.75rem]",
          )}
        >
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/images/treesoft-logo.png"
              alt=""
              width={70}
              height={120}
              priority
              className={cn(
                "h-auto w-auto object-contain transition-[height] duration-250 ease-[var(--ease)]",
                scrolled ? "h-9" : "h-10 md:h-12",
              )}
            />
            <span
              className={cn(
                "hidden font-bold leading-none text-brand sm:inline",
                scrolled ? "text-base" : "text-lg md:text-xl",
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-10 lg:flex xl:gap-14"
            aria-label="Main"
          >
            {siteConfig.nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-nav relative py-1 transition-colors duration-250 ease-[var(--ease)] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-250 after:ease-[var(--ease)] hover:text-brand hover:after:scale-x-100",
                    active
                      ? "text-brand after:scale-x-100"
                      : "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex  items-center gap-3">
            <div className="text-white" >
            <a
              href={siteConfig.cta.href}
              className="hidden min-h-10 items-center justify-center rounded-md bg-brand-dark px-5 text-[0.9375rem] font-medium text-white transition-colors duration-250 ease-[var(--ease)] hover:bg-brand-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-dark focus-visible:ring-offset-2 sm:inline-flex"
            >
              {siteConfig.cta.label}
            </a>

            </div>
            

            <button
              type="button"
              className="inline-flex cursor-pointer size-11 items-center justify-center rounded-md text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand lg:hidden"
              aria-expanded={menuOpen}
              aria-controls={menuId}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile off-canvas */}
      <div
        className={cn(
          "fixed inset-0 text-white z-[60] lg:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          aria-label="Close menu"
          className={cn(
            "absolute inset-0 cursor-pointer bg-black/40 transition-opacity duration-250 ease-[var(--ease)]",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />

        <div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-[min(100%,28rem)] flex-col bg-[rgb(18_21_25_/0.98)] shadow-dropdown transition-transform duration-300 ease-[var(--ease)]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="text-sm font-bold uppercase tracking-wide text-white">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex cursor-pointer size-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="14" height="14" viewBox="0 0 15 15" aria-hidden>
                <path
                  d="M1 15a1 1 0 01-.71-.29 1 1 0 010-1.41l5.8-5.8-5.8-5.8A1 1 0 011.7.29l5.8 5.8 5.8-5.8a1 1 0 011.41 1.41l-5.8 5.8 5.8 5.8a1 1 0 01-1.41 1.41l-5.8-5.8-5.8 5.8A1 1 0 011 15z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-3 py-6" aria-label="Mobile">
            {siteConfig.nav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-md px-4 py-3.5 text-xl font-semibold transition-colors duration-250 ease-[var(--ease)]",
                    active
                      ? "bg-white/10 text-brand"
                      : "text-white hover:bg-white/5 hover:text-brand",
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-white/10 p-5">
            <a
              href={siteConfig.cta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-brand-dark px-5 text-base font-medium text-white transition-colors hover:bg-brand-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              onClick={() => setMenuOpen(false)}
            >
              {siteConfig.cta.label}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
