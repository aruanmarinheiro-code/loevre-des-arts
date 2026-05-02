"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { FilterCategory } from "@/types";

const filters: { label: string; value: FilterCategory }[] = [
  { label: "Todos", value: "all" },
  { label: "Renascimento", value: "renaissance" },
  { label: "Sagrado", value: "sacred" },
  { label: "Filosofia", value: "philosophy" },
  { label: "Mitologia", value: "mythology" },
  { label: "Arquivo", value: "archive" },
];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filtered = activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-12">
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-12 md:py-16 border-b border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-3">
              Loevre des Arts
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-black">
              A Coleção
            </h1>
          </div>
          <p className="font-sans text-[10px] text-black/40 tracking-wider">
            {filtered.length} {filtered.length === 1 ? "peça" : "peças"}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-4 border-b border-black/10 flex items-center gap-1 overflow-x-auto">
        <span className="font-sans text-[9px] tracking-widest uppercase text-black/30 mr-4 whitespace-nowrap flex-shrink-0">
          Filtrar:
        </span>
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`font-sans text-[9px] tracking-[0.2em] uppercase px-4 py-2 whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
              activeFilter === filter.value
                ? "bg-black text-white"
                : "text-black/50 hover:text-black"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-10 md:py-14">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-sans text-[10px] tracking-widest uppercase text-black/20">
              Nenhuma peça nesta categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-black/10 py-6 px-5 md:px-8">
        <div className="max-w-screen-2xl mx-auto text-center">
          <p className="font-sans text-[9px] text-black/25 tracking-wider">
            Todas as peças enviam em 5–7 dias úteis. Edições limitadas. Esgotado = arquivado permanentemente.
          </p>
        </div>
      </div>
    </div>
  );
}
