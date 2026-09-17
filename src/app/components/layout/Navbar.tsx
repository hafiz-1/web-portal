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
      <header className="absolute inset-x-0 top-0 z-[100] bg-gradient-to-b from-black/75 via-black/55 to-black/10">
        <div className="mx-auto flex h-[4.75rem] max-w-[76rem] items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Wateen home"
          >
            <Image
              src="/wateen-logo.png"
              alt="Wateen"
              width={190}
              height={54}
              className="h-[45px] w-auto object-contain brightness-125"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <div
                key={item.title}
                className="group relative"
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[17px] font-medium leading-[19px] text-white transition hover:text-[#7BC96F]"
                >
                  {item.title}

                  {item.children && (
                    <span className="text-xs">
                      ⌄
                    </span>
                  )}
                </Link>

                {item.children && (
                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-[110] w-[44rem] max-w-[calc(100vw-2rem)] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-[1.4rem] border border-[#dfe9e1] bg-white shadow-[0_20px_55px_rgba(17,31,22,0.15)] ring-1 ring-black/5 transition-transform duration-300 ease-out group-hover:scale-[1.01]">
                      <div className="grid grid-cols-[14rem_minmax(0,1fr)]">
                        {item.image && (
                          <div className="relative min-h-[15rem] overflow-hidden bg-[#edf4ee]">
                            <Image
                              src={item.image}
                              alt=""
                              fill
                              sizes="224px"
                              className="object-contain p-3"
                            />
                          </div>
                        )}

                        <div className="p-5 lg:p-6">
                          <div className="grid gap-4 md:grid-cols-2">
                            {item.children.map((child) => (
                              <div
                                key={child.title}
                                className="rounded-2xl border border-[#edf2ee] bg-[#f7faf7] p-3.5 transition-colors hover:border-[#b9d5bb] hover:bg-[#f0f8f0]"
                              >
                                <Link
                                  href={child.href}
                                  className="inline-block text-[0.98rem] font-semibold tracking-[-0.02em] text-[#18321d] transition hover:text-[#5DAD54]"
                                >
                                  {child.title}
                                </Link>

                                {"items" in child && child.items && (
                                  <div className="mt-2.5 space-y-1.5">
                                    {child.items.map((subItem) => (
                                      <Link
                                        key={subItem.title}
                                        href={subItem.href}
                                        className="block text-[0.82rem] leading-5 text-[#5c6a60] transition hover:translate-x-0.5 hover:text-[#367d3d]"
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
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/careers"
              className="text-[17px] font-medium leading-[19px] text-white transition hover:text-[#7BC96F]"
            >
              Careers
            </Link>

            <Link
              href="/investors"
              className="text-[17px] font-medium leading-[19px] text-white transition hover:text-[#7BC96F]"
            >
              Investors
            </Link>

            <form
              action="/search"
              method="get"
            >
              <label>
                <span className="sr-only">
                  Search
                </span>

                <input
                  name="q"
                  type="search"
                  placeholder="Search"
                  className="h-10 w-36 rounded-full border border-white/30 bg-black/25 px-4 text-[17px] font-medium leading-[19px] text-white placeholder:text-white/75 outline-none backdrop-blur-md transition focus:border-[#7BC96F]"
                />
              </label>
            </form>

            <Link
              href="/contact"
              className="button-motion rounded-full bg-[#7BC96F] px-5 py-2.5 text-[17px] font-medium leading-[19px] text-white hover:bg-[#91D985]"
            >
              Contact Us
            </Link>
          </nav>

          <button
            type="button"
            className="button-motion text-2xl text-white lg:hidden"
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
    </>
  );
}