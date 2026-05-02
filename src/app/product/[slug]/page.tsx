"use client";

import { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Size } from "@/types";
import ProductCard from "@/components/ProductCard";

const sizes: Size[] = ["P", "M", "G", "GG", "XG"];

export default function ProductPage() {
  const params = useParams();
  const product = getProductBySlug(params?.slug as string);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [sizeError, setSizeError] = useState(false);
  const { addItem } = useCart();

  if (!product) return notFound();

  const related = getRelatedProducts(product, 3);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    setSizeError(false);
    addItem(product, selectedSize);
  };

  return (
    <div className="pt-12">
      {/* Breadcrumb */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-4 border-b border-black/10">
        <nav className="flex items-center gap-2 font-sans text-[9px] tracking-widest uppercase text-black/30">
          <Link href="/" className="hover:text-black transition-colors">Início</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black transition-colors">Loja</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-[4/5] bg-[#F5F3EF] overflow-hidden">
              <Image
                src={product.images[activeImage] || product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-16 aspect-square bg-[#F5F3EF] border transition-all ${activeImage === i ? "border-black" : "border-transparent"}`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-5">
              {product.status === "limited" ? "— Edição Limitada" : product.status === "coming-soon" ? "— Em Breve" : "— Disponível"}
            </p>

            <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/50 mb-2">
              {product.artist}
            </p>

            <h1 className="font-serif text-4xl md:text-5xl text-black leading-tight mb-1">
              {product.name}
            </h1>

            <p className="font-sans text-xs text-black/40 italic mb-6">
              Baseado em &ldquo;{product.artwork}&rdquo;
            </p>

            <p className="font-sans text-sm text-black mb-8">
              R$ {product.price.toLocaleString("pt-BR")}
            </p>

            <p className="font-sans text-xs text-black/50 leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-black/40">
                  Selecionar Tamanho
                </p>
                <Link href="/tamanhos" className="font-sans text-[9px] tracking-widest uppercase text-black/30 hover:text-black transition-colors">
                  Guia de Tamanhos
                </Link>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setSizeError(false); }}
                    className={`w-11 h-11 font-sans text-xs border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "border-black/20 text-black/60 hover:border-black hover:text-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="mt-2 font-sans text-[10px] text-red-500 tracking-wider">
                  Selecione um tamanho antes de adicionar ao carrinho.
                </p>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white font-sans text-[10px] tracking-[0.25em] uppercase py-4 hover:bg-black/70 transition-colors mb-3"
            >
              Adicionar ao Carrinho — R$ {product.price}
            </button>

            <p className="font-sans text-[9px] text-black/30 text-center mb-10 tracking-wider">
              Frete grátis acima de R$ 500 · Devolução em 14 dias
            </p>

            {/* Accordion */}
            {[
              {
                title: "Detalhes da Obra",
                content: (
                  <div className="pb-5 grid grid-cols-2 gap-y-4 gap-x-6">
                    {[
                      { label: "Obra", value: product.artwork },
                      { label: "Artista", value: product.artist },
                      { label: "Ano", value: product.year },
                      { label: "Técnica", value: product.medium },
                      { label: "Localização", value: product.location },
                      { label: "Dimensões", value: product.dimensions },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <p className="font-sans text-[9px] tracking-widest uppercase text-black/30 mb-1">{label}</p>
                        <p className="font-sans text-xs text-black/70">{value}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                title: "Caimento",
                content: (
                  <div className="pb-5">
                    <p className="font-sans text-xs text-black/60 leading-relaxed">{product.fitNotes}</p>
                    <div className="mt-3 p-3 bg-[#F5F3EF]">
                      <p className="font-sans text-[10px] text-black/50">
                        100% algodão pesado, 280gsm. Creme natural / off-white. Pré-lavado.
                      </p>
                    </div>
                  </div>
                ),
              },
              {
                title: "Cuidados",
                content: (
                  <div className="pb-5">
                    <ul className="space-y-2">
                      {product.care.map((c) => (
                        <li key={c} className="font-sans text-xs text-black/60 flex gap-2">
                          <span className="text-black/20">—</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              },
            ].map(({ title, content }) => (
              <details key={title} className="border-t border-black/10 group">
                <summary className="flex items-center justify-between py-4 cursor-pointer font-sans text-[9px] tracking-[0.2em] uppercase text-black/60 hover:text-black transition-colors list-none">
                  {title}
                  <span className="text-base group-open:rotate-45 transition-transform duration-200 text-black/30">+</span>
                </summary>
                {content}
              </details>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="flex items-baseline justify-between mb-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/40">
                Você também pode gostar
              </p>
              <Link href="/shop" className="font-sans text-[9px] tracking-widest uppercase text-black/30 hover:text-black transition-colors">
                Ver Tudo
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
