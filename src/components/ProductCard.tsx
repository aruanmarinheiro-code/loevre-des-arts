"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

const statusLabel: Record<Product["status"], string> = {
  available: "Available",
  "coming-soon": "Coming Soon",
  limited: "Limited Drop",
};

const statusColor: Record<Product["status"], string> = {
  available: "text-brand-charcoal",
  "coming-soon": "text-brand-gray",
  limited: "text-brand-black font-medium",
};

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const delayClass = `animate-fade-in-delay-${Math.min((index % 5) + 1, 5)}`;

  return (
    <Link
      href={`/product/${product.slug}`}
      className={`group block ${delayClass}`}
    >
      {/* Image container */}
      <div className="relative bg-brand-cream overflow-hidden aspect-[3/4] mb-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {/* Status badge */}
        {product.status === "limited" && (
          <div className="absolute top-4 left-4 bg-brand-black text-white font-sans text-[10px] tracking-widest uppercase px-3 py-1.5">
            Limited
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-400" />
      </div>

      {/* Info */}
      <div className="space-y-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-serif text-lg text-brand-black leading-tight group-hover:opacity-60 transition-opacity">
            {product.name}
          </p>
          <p className="font-sans text-sm text-brand-black whitespace-nowrap">
            R$ {product.price}
          </p>
        </div>
        <p className="font-sans text-xs text-brand-gray">{product.artist}</p>
        <p className={`font-sans text-xs tracking-wider uppercase ${statusColor[product.status]}`}>
          {statusLabel[product.status]}
        </p>
      </div>
    </Link>
  );
}
