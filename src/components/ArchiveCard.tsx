"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

interface ArchiveCardProps {
  product: Product;
  index?: number;
}

export default function ArchiveCard({ product, index = 0 }: ArchiveCardProps) {
  const isEven = index % 2 === 0;

  return (
    <article className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-black/10 py-16 md:py-24`}>
      {/* Image */}
      <div className={`relative aspect-square bg-[#F5F3EF] overflow-hidden ${isEven ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
        <Image
          src={product.image}
          alt={product.artwork}
          fill
          className="object-contain p-10"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col justify-center pt-10 md:pt-0 ${isEven ? "md:pl-16" : "md:pr-16"}`}>
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-8">
          Arquivo Nº {String(index + 1).padStart(3, "0")} — {product.category.toUpperCase()}
        </p>

        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/50 mb-2">
          {product.artist}
        </p>

        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black leading-tight mb-8">
          {product.artwork}
        </h2>

        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8 py-6 border-y border-black/10">
          {[
            { label: "Ano", value: product.year },
            { label: "Técnica", value: product.medium },
            { label: "Localização", value: product.location },
            { label: "Dimensões", value: product.dimensions },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-black/30 mb-1">{label}</p>
              <p className="font-sans text-xs text-black/70">{value}</p>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-black/50 leading-relaxed mb-8 max-w-sm">
          {product.description}
        </p>

        <Link
          href={`/product/${product.slug}`}
          className="self-start font-sans text-[10px] tracking-[0.25em] uppercase border border-black px-8 py-3.5 hover:bg-black hover:text-white transition-all duration-300"
        >
          Ver Peça — R$ {product.price}
        </Link>
      </div>
    </article>
  );
}
