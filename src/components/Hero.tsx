"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-white pt-12">
      {/* Main content */}
      <div className="flex flex-col items-center text-center px-6 max-w-5xl mx-auto">

        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-black/30 mb-16">
          Série Renascentista — 2025
        </p>

        <h1 className="font-serif text-[clamp(3.5rem,12vw,9rem)] text-black leading-[0.88] tracking-tight mb-10 animate-fade-in">
          Arte que saiu
          <br />
          <em>do museu</em>
          <br />
          e virou
          <br />
          uniforme.
        </h1>

        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 max-w-xs leading-loose mb-14">
          Obras do Renascimento. Algodão 280gsm.
          <br />
          Oversized. Edição limitada.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/shop"
            className="font-sans text-[10px] tracking-[0.25em] uppercase bg-black text-white px-10 py-4 hover:bg-black/70 transition-colors min-w-[200px] text-center"
          >
            Ver Coleção
          </Link>
          <Link
            href="/archive"
            className="font-sans text-[10px] tracking-[0.25em] uppercase border border-black text-black px-10 py-4 hover:bg-black hover:text-white transition-all min-w-[200px] text-center"
          >
            Entrar no Arquivo
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-8 w-full flex justify-between px-6 md:px-10">
        <p className="font-sans text-[9px] tracking-widest uppercase text-black/20">
          Loevre des Arts
        </p>
        <p className="font-sans text-[9px] tracking-widest uppercase text-black/20">
          5 peças disponíveis
        </p>
      </div>
    </section>
  );
}
