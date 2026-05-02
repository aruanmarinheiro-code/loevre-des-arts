"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

const statusLabel: Record<Product["status"], string> = {
  available: "Disponível",
  "coming-soon": "Em Breve",
  limited: "Edição Limitada",
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const delayClass = `animate-fade-in-delay-${Math.min((index % 5) + 1, 5)}`;

  return (
    <Link href={`/product/${product.slug}`} className={`group block ${delayClass}`}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/4] mb-3 bg-[#F5F3EF]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 50vw, 20vw"
        />
        {product.status === "limited" && (
          <div className="absolute top-3 left-3 bg-black text-white font-sans text-[8px] tracking-[0.2em] uppercase px-2 py-1">
            Limitado
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <div className="flex items-baseline justify-between gap-2">
          <p className="font-sans text-[11px] tracking-wider uppercase text-black group-hover:opacity-40 transition-opacity leading-snug">
            {product.name}
          </p>
          <p className="font-sans text-[11px] text-black whitespace-nowrap">
            R$ {product.price}
          </p>
        </div>
        <p className="font-sans text-[10px] text-black/40 mt-0.5">{product.artist}</p>
        <p className="font-sans text-[9px] tracking-wider uppercase text-black/30 mt-0.5">
          {statusLabel[product.status]}
        </p>
      </div>
    </Link>
  );
}
