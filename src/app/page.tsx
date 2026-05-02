import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Marquee strip */}
      <div className="border-y border-black/10 py-3 overflow-hidden bg-white">
        <div className="flex gap-12 whitespace-nowrap animate-none">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 repeat-infinite">
            {Array(8).fill("Série Renascentista — Edição Limitada — Algodão Pesado — Oversized — Loevre des Arts — ").join("")}
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <section className="max-w-screen-2xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="flex items-baseline justify-between mb-8">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/40">
            Coleção Atual
          </p>
          <Link href="/shop" className="font-sans text-[9px] tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors">
            Ver Tudo
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Full-width statement */}
      <section className="border-y border-black/10 py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-serif text-[clamp(2.5rem,8vw,7rem)] text-black leading-[0.9] max-w-4xl">
            Arte clássica.
            <br />
            <em>Silhueta contemporânea.</em>
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between mt-10 gap-6">
            <p className="font-sans text-xs text-black/40 leading-relaxed max-w-xs">
              Cada peça transforma uma obra histórica em um uniforme contemporâneo — entre o pôster de museu, o objeto de galeria e o essencial do streetwear.
            </p>
            <Link
              href="/about"
              className="self-start font-sans text-[10px] tracking-[0.25em] uppercase border border-black px-8 py-3.5 hover:bg-black hover:text-white transition-all duration-300"
            >
              Sobre a Marca
            </Link>
          </div>
        </div>
      </section>

      {/* Second product row — remaining */}
      {products.length > 4 && (
        <section className="max-w-screen-2xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="flex items-baseline justify-between mb-8">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/40">
              Também no Arquivo
            </p>
            <Link href="/shop" className="font-sans text-[9px] tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors">
              Loja Completa
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {products.slice(4).map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* Archive CTA — editorial strip */}
      <section className="bg-black text-white py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/30 mb-6">
              O Arquivo
            </p>
            <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-tight">
              Cinco séculos.
              <br />
              <em>Cinco artefatos.</em>
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <p className="font-sans text-xs text-white/40 leading-relaxed max-w-xs md:text-right">
              De Botticelli a Michelangelo. Cada estampa reproduzida em qualidade de museu no algodão natural.
            </p>
            <Link
              href="/archive"
              className="self-start md:self-auto font-sans text-[10px] tracking-[0.25em] uppercase border border-white/30 px-8 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
            >
              Entrar no Arquivo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
