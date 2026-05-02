"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Novidades", href: "/shop?filter=new" },
  { label: "Loja", href: "/shop" },
  { label: "Arquivo", href: "/archive" },
  { label: "Editorial", href: "/editorial" },
  { label: "Sobre", href: "/about" },
];

export default function Header() {
  const { itemCount, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white border-b border-black/10" : "bg-white"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-5 md:px-8 h-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-sans text-[11px] tracking-[0.25em] uppercase text-black hover:opacity-40 transition-opacity"
          >
            Loevre des Arts
          </Link>

          {/* Desktop Nav — center */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/60 hover:text-black transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-5">
            <button
              onClick={openCart}
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/60 hover:text-black transition-colors"
              aria-label="Abrir carrinho"
            >
              Carrinho{itemCount > 0 && ` (${itemCount})`}
            </button>
            <button
              className="md:hidden flex flex-col gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-px bg-black transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-5 h-px bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-black transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col justify-center px-8 transition-all duration-400 md:hidden ${menuOpen ? "opacity-100 pointer-events-all" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-sans text-[11px] tracking-[0.3em] uppercase text-black hover:opacity-40 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openCart(); }}
            className="text-left font-sans text-[11px] tracking-[0.3em] uppercase text-black hover:opacity-40 transition-opacity"
          >
            Carrinho{itemCount > 0 && ` (${itemCount})`}
          </button>
        </nav>
        <p className="absolute bottom-8 left-8 font-sans text-[9px] tracking-widest uppercase text-black/30">
          Renaissance Series — 2025
        </p>
      </div>
    </>
  );
}
