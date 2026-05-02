"use client";

import { useState } from "react";
import Link from "next/link";

const footerLinks = {
  info: [
    { label: "About", href: "/about" },
    { label: "Editorial", href: "/editorial" },
    { label: "Archive", href: "/archive" },
  ],
  support: [
    { label: "Contact", href: "mailto:contact@loevredesarts.com" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
    { label: "Size Guide", href: "/size-guide" },
  ],
  follow: [
    { label: "Instagram", href: "https://instagram.com" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-brand-stone bg-white mt-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl tracking-wider text-brand-black mb-3">
              Loevre des Arts
            </p>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gray mb-6">
              Renaissance Series
            </p>
            <p className="font-sans text-sm text-brand-charcoal leading-relaxed max-w-xs">
              Museum-grade prints on heavyweight cotton. Classical images for modern uniforms.
            </p>
          </div>

          {/* Info */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gray mb-5">
              Collection
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-brand-charcoal hover:text-brand-black transition-colors hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gray mb-5">
              Support
            </p>
            <ul className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-brand-charcoal hover:text-brand-black transition-colors hover-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerLinks.follow.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-brand-charcoal hover:text-brand-black transition-colors hover-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gray mb-5">
              Join the Archive
            </p>
            <p className="font-sans text-sm text-brand-charcoal mb-4 leading-relaxed">
              New drops, archive releases and editorial dispatches.
            </p>
            {submitted ? (
              <p className="font-sans text-sm text-brand-black italic">
                You&apos;re in the archive.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full border-b border-brand-stone bg-transparent py-2 font-sans text-sm text-brand-black placeholder-brand-gray outline-none focus:border-brand-black transition-colors"
                />
                <button
                  type="submit"
                  className="self-start font-sans text-xs tracking-widest uppercase text-brand-black border border-brand-black px-5 py-2.5 hover:bg-brand-black hover:text-white transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-stone flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="font-sans text-xs text-brand-gray">
            © {new Date().getFullYear()} Loevre des Arts. All rights reserved.
          </p>
          <p className="font-sans text-xs text-brand-gray tracking-widest uppercase">
            Renaissance Series — Handcrafted in Brazil
          </p>
        </div>
      </div>
    </footer>
  );
}
