"use client";

import { useState } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";

import { useLanguage } from "@/context";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Intro", href: "#intro" },
  { label: "Works", href: "#works" },
  { label: "Achievements", href: "#achievements" },
  { label: "Organizations", href: "#organizations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const lenis = useLenis();
  const navItems = t.navbar.items || NAV_ITEMS;

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "/") {
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) {
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, { offset: -64, duration: 1.2 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
        window.history.pushState(null, "", href);
      }
    }
  };

  const renderLanguageSwitcher = (isMobile = false) => (
    <div
      className={`${
        isMobile ? "flex lg:hidden" : "hidden lg:flex"
      } items-center text-[14px] tracking-[0.1em] uppercase`}
    >
      <button
        type="button"
        onClick={() => setLang("ID")}
        className={`transition-colors cursor-pointer ${
          lang === "ID"
            ? "text-neutral-950 font-bold"
            : "text-neutral-400 hover:text-neutral-700"
        }`}
      >
        ID
      </button>
      <span className="text-neutral-300 mx-2 font-light">/</span>
      <button
        type="button"
        onClick={() => setLang("ENG")}
        className={`transition-colors cursor-pointer ${
          lang === "ENG"
            ? "text-neutral-950 font-bold"
            : "text-neutral-400 hover:text-neutral-700"
        }`}
      >
        ENG
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-[60] w-full bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 h-16 flex items-center justify-between">
        {/* Left: Brand / Logo on Desktop, Language Switcher on Mobile/Tab */}
        <div className="flex items-center">
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="hidden lg:block text-[14px] tracking-[0.3em] uppercase text-neutral-950 hover:opacity-70 transition-opacity"
          >
            <span className="font-bold">Portfolio</span>
            <span className="text-neutral-400 font-light ml-1.5"></span>
          </Link>
          {renderLanguageSwitcher(true)}
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center space-x-8 lg:space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xs tracking-[0.18em] uppercase text-neutral-400 hover:text-neutral-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Language Toggle on Desktop + Mobile/Tab Menu Trigger */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {renderLanguageSwitcher(false)}

          {/* Mobile/Tab Menu Trigger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-xs tracking-[0.18em] uppercase text-neutral-500 hover:text-neutral-950 transition-colors cursor-pointer py-1"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? t.navbar.close : t.navbar.menu}
          </button>
        </div>
      </div>

      {/* Mobile/Tab Drawer with Butter-Smooth Expand/Collapse Transition */}
      <div
        className={`lg:hidden grid transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] border-t bg-white/95 backdrop-blur-md overflow-hidden ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 border-neutral-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none border-transparent"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-8 md:px-14 py-7 space-y-6">
            <nav className="flex flex-col space-y-5">
              {navItems.map((item, idx) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleNavClick(e, item.href);
                  }}
                  className={`text-sm tracking-[0.16em] uppercase text-neutral-600 hover:text-neutral-950 transition-all duration-300 transform ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${idx * 40}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
