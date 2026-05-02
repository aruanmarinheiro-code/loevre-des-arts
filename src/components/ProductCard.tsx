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
      {/* Card container — wooden cabinet background */}
      <div
        className="relative overflow-hidden aspect-[3/4] mb-3"
        style={{
          background: "radial-gradient(ellipse at 60% 30%, #b5813a 0%, #8B5E1A 40%, #6b4410 100%)",
        }}
      >
        {/* Wood grain lines — subtle */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              92deg,
              transparent,
              transparent 18px,
              rgba(0,0,0,0.4) 18px,
              rgba(0,0,0,0.4) 19px
            )`,
          }}
        />

        {/* Cabinet hardware — top center */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-6 z-20">
          <div className="w-3 h-3 rounded-full bg-[#d4a853] border border-[#a07830] shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#d4a853] border border-[#a07830] shadow-sm" />
        </div>

        {/* Hanger SVG */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
          <svg width="60" height="36" viewBox="0 0 60 36" fill="none">
            {/* Hook */}
            <path
              d="M30 4 C30 4 30 0 34 0 C38 0 38 4 38 4 C38 4 36 4 36 6 C36 8 34 8 34 8"
              stroke="#c8a96e"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Hanger bar */}
            <path
              d="M30 8 C20 8 4 24 4 26 L56 26 C56 24 40 8 30 8Z"
              stroke="#c8a96e"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* T-shirt shape */}
        <div
          className="absolute inset-x-4 z-10 transition-transform duration-500 group-hover:scale-[1.03]"
          style={{ top: "36px", bottom: "12px" }}
        >
          <div
            className="w-full h-full relative"
            style={{
              clipPath:
                "polygon(18% 0%, 34% 0%, 38% 8%, 62% 8%, 66% 0%, 82% 0%, 100% 18%, 84% 28%, 84% 100%, 16% 100%, 16% 28%, 0% 18%)",
              backgroundColor: "#F5F0E8",
            }}
          >
            {/* Artwork print — centered on shirt body */}
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: "22%", width: "72%", aspectRatio: "1" }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 35vw, 15vw"
              />
            </div>
          </div>
        </div>

        {/* Status badge */}
        {product.status === "limited" && (
          <div className="absolute bottom-3 left-3 z-20 bg-black text-white font-sans text-[8px] tracking-[0.2em] uppercase px-2 py-1">
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
