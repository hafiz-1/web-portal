"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#e1e9e1] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[76rem] items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="Wateen home">
            <Image src="/wateen-logo.png" alt="Wateen" width={170} height={48} className="h-10 w-auto object-contain" priority />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <div key={item.title} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 text-sm font-semibold text-[#36543c] transition hover:text-[#5DAD54]">
                  {item.title}{item.children && <span className="text-xs">⌄</span>}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-2xl border border-[#dce6dd] bg-white p-5 shadow-[0_18px_45px_rgb(21_50_25_/_0.14)]">
                      {item.children.map((child) => (
                        <div key={child.title} className="mb-5 last:mb-0">
                          <Link href={child.href} className="font-semibold text-[#18321d] transition hover:text-[#5DAD54]">{child.title}</Link>
                          {"items" in child && child.items && <div className="mt-3 space-y-2">{child.items.map((subItem) => <Link key={subItem.title} href={subItem.href} className="block text-sm text-[#5c6a60] transition hover:text-[#367d3d]">{subItem.title}</Link>)}</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link href="/careers" className="text-sm font-semibold text-[#36543c] transition hover:text-[#5DAD54]">Careers</Link>
            <Link href="/investors" className="text-sm font-semibold text-[#36543c] transition hover:text-[#5DAD54]">Investors</Link>
            <label className="relative">
              <span className="sr-only">Search</span>
              <input type="search" placeholder="Search" className="h-10 w-32 rounded-full border border-[#d5dfd7] bg-[#f8fbf7] px-4 text-sm text-[#18321d] outline-none transition placeholder:text-[#7a8b7c] focus:w-44 focus:border-[#5DAD54] lg:w-36" />
            </label>
            <Link href="/contact" className="button-motion rounded-full bg-[#7BC96F] px-5 py-2.5 text-sm font-semibold text-[#132019] hover:bg-[#91D985]">Contact Us</Link>
          </nav>
          <button className="button-motion text-2xl lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open menu">☰</button>
        </div>
      </header>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
