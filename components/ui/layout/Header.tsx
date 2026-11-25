"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-2 xl:gap-6">
          {/* Brand and Logo */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
            onClick={closeMenu}
          >
            <div className="flex h-10 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-700 sm:h-12 sm:w-14">
              <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
                {siteConfig.shortName}
              </span>
            </div>

            <span className="max-w-[160px] text-sm font-bold leading-tight text-slate-900 sm:text-base">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-blue-700 ${
                  pathname === item.href ? "text-blue-700" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            {/* Login Button */}
            <Button
              render={<Link href={siteConfig.actions.login.href} />}
              nativeButton={false}
              variant="outline"
              className="rounded-full border-blue-700 px-5 text-blue-700 hover:bg-blue-50"
            >
              <UserRound className="h-4 w-4" />
              {siteConfig.actions.login.label}
            </Button>
          </div>

          {/* Mobile Actions */}
          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            {/* Mobile Login */}
            <Button
              render={<Link href={siteConfig.actions.login.href} />}
              nativeButton={false}
              variant="outline"
              size="icon"
              className="rounded-full text-blue-700"
              aria-label="Patient login"
              onClick={closeMenu}
            >
              <UserRound className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((previous) => !previous)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Conditional Mobile Appointment Button */}

        {/* Mobile Navigation */}
        {/* Mobile Navigation */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          hidden={!isMenuOpen}
          className="absolute inset-x-0 top-full z-30 border-t border-slate-200 bg-white px-4 py-4 shadow-lg xl:hidden"
        >
          <div className="flex flex-col gap-2">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                  pathname === item.href
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
