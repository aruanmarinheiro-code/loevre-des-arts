"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "New In", href: "/shop?filter=new" },
  { label: "Shop", href: "/shop" },
  { label: "Archive", href: "/archive" },
  { label: "Editorial", href: "/editorial" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled ? "bg-white border-b border-brand-stone" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif text-lg tracking-widest uppercase text-brand-black hover:opacity-60 transition-opacity"
          >
            Loevre des Arts
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-widest uppercase text-brand-charcoal hover-underline hover:text-brand-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <button
              onClick={openCart}
              className="font-sans text-xs tracking-widest uppercase text-brand-charcoal hover:text-brand-black transition-colors relative"
              aria-label="Open cart"
            >
              Cart
              {itemCount > 0 && (
                <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 bg-brand-black text-white text-[10px] rounded-full">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 w-6"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px bg-brand-black transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-px bg-brand-black transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px bg-brand-black transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-brand-off-white flex flex-col justify-center px-10 transition-all duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-all"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl text-brand-black hover:opacity-50 transition-opacity"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-16 font-sans text-xs tracking-widest uppercase text-brand-gray">
          Renaissance Series — SS2025
        </div>
      </div>
    </>
  );
}
