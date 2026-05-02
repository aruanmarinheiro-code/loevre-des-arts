"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#F5F3EF]">
      {/* Full-bleed image */}
      <Image
        src="/images/editorial/hero.jpg"
        alt="Loevre des Arts — Série Renascentista"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Subtle dark gradient at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Top label */}
      <div className="absolute top-16 left-0 right-0 flex justify-between px-5 md:px-8 z-10">
        <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/60">
          Série Renascentista — 2025
        </p>
        <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-white/60">
          Edição Limitada
        </p>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 md:px-8 pb-10 md:pb-14 z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Headline */}
          <div>
            <h1 className="font-serif text-[clamp(2.8rem,8vw,6.5rem)] text-white leading-[0.9] tracking-tight">
              Arte que saiu
              <br />
              <em>do museu.</em>
            </h1>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 md:flex-col md:items-end md:gap-2">
            <Link
              href="/shop"
              className="font-sans text-[10px] tracking-[0.25em] uppercase bg-white text-black px-8 py-3.5 hover:bg-white/80 transition-colors text-center whitespace-nowrap"
            >
              Ver Coleção
            </Link>
            <Link
              href="/archive"
              className="font-sans text-[10px] tracking-[0.25em] uppercase border border-white/60 text-white px-8 py-3.5 hover:bg-white hover:text-black transition-all text-center whitespace-nowrap"
            >
              Entrar no Arquivo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
