"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-light dark:glass shadow-card border-b border-border py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Godrex Capital Home">
          <div className="w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-shadow">
            <span className="font-display font-bold text-navy-900 text-lg select-none">G</span>
          </div>
          <span className="font-display font-semibold text-lg text-navy dark:text-cream">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${pathname?.startsWith(link.href) ? "text-gold" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border hover:bg-navy-100 dark:hover:bg-navy-700 transition-colors"
            >
              {theme === "dark"
                ? <Sun size={16} className="text-gold" />
                : <Moon size={16} className="text-navy-500" />
              }
            </button>
          )}
          <Link href="/portal/login" className="btn-ghost btn-sm">
            Sign In
          </Link>
          <Link href="/portal/signup" className="btn-gold btn-sm">
            Open Account
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-border"
            >
              {theme === "dark"
                ? <Sun size={15} className="text-gold" />
                : <Moon size={15} className="text-navy-500" />
              }
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            className="w-9 h-9 flex items-center justify-center rounded-lg border border-border"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass-light dark:glass border-t border-border animate-fade-up">
          <div className="section-container py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname?.startsWith(link.href)
                    ? "bg-gold/10 text-gold"
                    : "text-navy dark:text-cream hover:bg-navy-100 dark:hover:bg-navy-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-border my-1" />
            <Link href="/portal/login" className="btn-ghost btn-sm justify-start">Sign In</Link>
            <Link href="/portal/signup" className="btn-gold btn-sm justify-center">Open Account</Link>
          </div>
        </div>
      )}
    </header>
  );
}
