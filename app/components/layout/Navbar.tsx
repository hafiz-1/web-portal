"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight"
          >
            WATEEN
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <div key={item.title} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium"
                >
                  {item.title}

                  {item.children && (
                    <span className="text-xs">⌄</span>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-xl">
                      {item.children.map((child) => (
                        <div key={child.title} className="mb-5 last:mb-0">
                          <Link
                            href={child.href}
                            className="font-semibold"
                          >
                            {child.title}
                          </Link>

                          {"items" in child && child.items && (
                            <div className="mt-3 space-y-2">
                              {child.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="block text-sm text-gray-600 hover:text-black"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/careers"
              className="text-sm font-medium"
            >
              Careers
            </Link>

            <Link
              href="/investors"
              className="text-sm font-medium"
            >
              Investors
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="text-xl"
            >
              ⌕
            </button>

            <Link
              href="/contact"
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white"
            >
              Contact Us
            </Link>
          </nav>

          <button
            className="text-2xl lg:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}