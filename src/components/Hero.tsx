"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Background texture line */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-px h-full bg-brand-stone opacity-30" />
      </div>

      {/* Top label */}
      <div className="absolute top-24 left-0 right-0 flex justify-center">
        <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-brand-gray">
          Renaissance Series — 2025
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Brand mark */}
        <div className="mb-10 md:mb-14">
          <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-4">
            Loevre des Arts
          </p>
          <div className="w-16 h-px bg-brand-stone mx-auto" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-black leading-[0.95] tracking-tight mb-6 md:mb-8 animate-fade-in">
          Renaissance
          <br />
          <em>artifacts</em>
          <br />
          for modern
          <br />
          uniforms.
        </h1>

        {/* Subline */}
        <p className="font-sans text-sm text-brand-gray max-w-xs leading-relaxed mb-10 md:mb-14">
          Museum-grade prints. Heavyweight cotton.
          <br />
          Oversized silhouettes. Limited editions.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/shop"
            className="font-sans text-xs tracking-widest uppercase bg-brand-black text-white px-10 py-4 hover:bg-brand-charcoal transition-colors duration-300 min-w-[200px] text-center"
          >
            Shop Collection
          </Link>
          <Link
            href="/archive"
            className="font-sans text-xs tracking-widest uppercase border border-brand-black text-brand-black px-10 py-4 hover:bg-brand-black hover:text-white transition-all duration-300 min-w-[200px] text-center"
          >
            Enter the Archive
          </Link>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-brand-stone animate-pulse" />
          <p className="font-sans text-[9px] tracking-ultra-wide uppercase text-brand-gray">
            Scroll
          </p>
        </div>
      </div>
    </section>
  );
}
