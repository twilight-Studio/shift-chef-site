"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLockup } from "@/components/brand-lockup";
import { MenuIcon, XIcon } from "@/components/inline-icons";
import { ButtonLink, Container } from "@/components/primitives";
import { SiteLink as Link } from "@/components/site-link";
import { mainNavigation } from "@/content/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuDialogRef = useRef<HTMLDialogElement>(null);
  const menuCloseButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  useEffect(() => {
    const dialog = menuDialogRef.current;
    if (!dialog) return;

    const syncMenuState = () => setMenuOpen(dialog.open);
    const frame = window.requestAnimationFrame(syncMenuState);
    dialog.addEventListener("toggle", syncMenuState);

    return () => {
      window.cancelAnimationFrame(frame);
      dialog.removeEventListener("toggle", syncMenuState);
    };
  }, []);

  const openMenu = () => {
    const dialog = menuDialogRef.current;
    if (!dialog || dialog.open) return;

    setMenuOpen(true);
    dialog.showModal();
    window.requestAnimationFrame(() => menuCloseButtonRef.current?.focus());
  };

  const closeMenu = (restoreFocus: boolean) => {
    const dialog = menuDialogRef.current;
    if (dialog?.open) dialog.close();
    setMenuOpen(false);

    if (restoreFocus) {
      window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    }
  };

  return (
    <header className={cn("site-header", scrolled && "site-header-scrolled")}>
      <Container className="flex h-[76px] items-center justify-between gap-5">
        <Link href="/" aria-label="ShiftChef home" className="rounded-xl">
          <BrandLockup />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => (
            <Link key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href="/contact" variant="ghost">Contact</ButtonLink>
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </div>

        <button
          ref={menuButtonRef}
          className="menu-button lg:hidden"
          type="button"
          aria-controls="site-mobile-menu"
          aria-expanded={menuOpen}
          aria-haspopup="dialog"
          aria-label="Open navigation menu"
          onClick={openMenu}
        >
          <MenuIcon aria-hidden="true" />
        </button>

        <dialog
          ref={menuDialogRef}
          id="site-mobile-menu"
          aria-labelledby="site-mobile-menu-title"
          aria-describedby="site-mobile-menu-description"
          className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-dvh w-[min(90vw,390px)] max-w-none overflow-y-auto border-0 border-l border-border bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/50"
          onCancel={(event) => {
            event.preventDefault();
            closeMenu(true);
          }}
          onClose={() => setMenuOpen(false)}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu(true);
          }}
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;

            const focusable = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
              ),
            ).filter((element) => !element.hasAttribute("hidden"));
            const first = focusable[0];
            const last = focusable.at(-1);

            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }}
        >
          <div className="relative min-h-full">
            <div className="border-b border-border px-6 py-5 pr-18 text-left">
              <h2 id="site-mobile-menu-title" className="m-0">
                <BrandLockup />
              </h2>
              <p id="site-mobile-menu-description" className="mt-1 mb-0 text-sm text-muted-foreground">
                Hospitality scheduling and service operations.
              </p>
              <button
                ref={menuCloseButtonRef}
                type="button"
                aria-label="Close navigation menu"
                className="absolute top-4 right-4 inline-grid min-h-12 min-w-12 place-items-center rounded-xl border border-border bg-surface text-primary-dark"
                onClick={() => closeMenu(true)}
              >
                <XIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
            <nav aria-label="Mobile navigation" className="flex flex-col px-4 py-5">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  className="mobile-nav-link"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Link className="mobile-nav-link" href="/contact">
                Contact
              </Link>
              <Link
                className="button-link mt-5 justify-center border-primary bg-primary text-white"
                href="/contact"
              >
                Book a demo
              </Link>
            </nav>
          </div>
        </dialog>
      </Container>
    </header>
  );
}
