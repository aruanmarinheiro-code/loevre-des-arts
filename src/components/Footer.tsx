"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  return (
    <footer className="border-t border-black/10 bg-white mt-24">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p className="font-sans text-[11px] tracking-[0.25em] uppercase text-black mb-1">
              Loevre des Arts
            </p>
            <p className="font-sans text-[9px] tracking-widest uppercase text-black/30 mb-5">
              Série Renascentista
            </p>
            <p className="font-sans text-xs text-black/50 leading-relaxed max-w-[200px]">
              Estampas de nível museal em algodão pesado. Arte clássica para uniformes contemporâneos.
            </p>
          </div>

          {/* Coleção */}
          <div>
            <p className="font-sans text-[9px] tracking-widest uppercase text-black/30 mb-4">
              Coleção
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Novidades", href: "/shop" },
                { label: "Loja", href: "/shop" },
                { label: "Arquivo", href: "/archive" },
                { label: "Editorial", href: "/editorial" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-xs text-black/60 hover:text-black transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <p className="font-sans text-[9px] tracking-widest uppercase text-black/30 mb-4">
              Suporte
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Contato", href: "mailto:contato@loevredesarts.com" },
                { label: "Entrega", href: "/entrega" },
                { label: "Trocas e Devoluções", href: "/devolucoes" },
                { label: "Guia de Tamanhos", href: "/tamanhos" },
                { label: "Instagram", href: "https://instagram.com" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="font-sans text-xs text-black/60 hover:text-black transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-sans text-[9px] tracking-widest uppercase text-black/30 mb-4">
              Entrar no Arquivo
            </p>
            <p className="font-sans text-xs text-black/50 mb-4 leading-relaxed">
              Novos lançamentos, drops do arquivo e editoriais.
            </p>
            {submitted ? (
              <p className="font-sans text-xs text-black italic">Você está no arquivo.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  className="w-full border-b border-black/20 bg-transparent py-2 font-sans text-xs text-black placeholder-black/30 outline-none focus:border-black transition-colors"
                />
                <button
                  type="submit"
                  className="self-start font-sans text-[9px] tracking-[0.25em] uppercase text-black border border-black px-5 py-2.5 hover:bg-black hover:text-white transition-all duration-300"
                >
                  Inscrever
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="font-sans text-[9px] text-black/25 tracking-wider">
            © {new Date().getFullYear()} Loevre des Arts. Todos os direitos reservados.
          </p>
          <p className="font-sans text-[9px] text-black/25 tracking-widest uppercase">
            Série Renascentista — Feito no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
