"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Study in France", href: "/study-in-france" },
  { label: "Partners", href: "/institutions" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/pathora-logo.png"
            alt="PATHORA EDUCATION logo"
            width={80}
            height={80}
          />

          <div>
            <p className="text-base font-extrabold tracking-wide text-[#052f63] sm:text-lg">
              PATHORA EDUCATION
            </p>
            <p className="text-[11px] font-medium text-[#e69c1d] sm:text-xs">
              Connecting Dreams to Destinations
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 px-1 py-2 text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? "border-[#e69c1d] text-[#052f63]"
                  : "border-transparent text-slate-700 hover:border-[#e69c1d] hover:text-[#052f63]"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full bg-[#052f63] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#031f42]"
          >
            Contact Us
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg border border-slate-200 p-2 text-[#052f63] lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`my-1.5 block h-0.5 w-6 bg-current transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 font-semibold ${
                  isActive(link.href)
                    ? "bg-[#052f63]/5 text-[#052f63]"
                    : "text-slate-700 hover:bg-slate-50 hover:text-[#e69c1d]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-full bg-[#052f63] px-5 py-3 text-center font-bold text-white hover:bg-[#031f42]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
