"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { FilterCategory } from "@/types";

const filters: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "all" },
  { label: "Renaissance", value: "renaissance" },
  { label: "Sacred", value: "sacred" },
  { label: "Philosophy", value: "philosophy" },
  { label: "Mythology", value: "mythology" },
  { label: "Archive", value: "archive" },
];

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-20 border-b border-brand-stone">
        <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-4">
          Loevre des Arts
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-serif text-5xl md:text-6xl text-brand-black">
            The Collection
          </h1>
          <p className="font-sans text-sm text-brand-gray max-w-xs leading-relaxed">
            {filtered.length}{" "}
            {filtered.length === 1 ? "artifact" : "artifacts"} available.
            Museum-grade prints on heavyweight cotton.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-6 border-b border-brand-stone">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-1">
          <span className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mr-4 whitespace-nowrap">
            Filter:
          </span>
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter.value
                  ? "bg-brand-black text-white"
                  : "text-brand-charcoal hover:text-brand-black border border-transparent hover:border-brand-stone"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 md:py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-serif text-5xl text-brand-stone mb-4">∅</p>
            <p className="font-sans text-sm text-brand-gray">
              No pieces in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-14">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom note */}
      <div className="border-t border-brand-stone py-8 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto text-center">
          <p className="font-sans text-xs text-brand-gray tracking-wider">
            All pieces ship within 5–7 business days. Limited edition runs.
            Once sold out, permanently archived.
          </p>
        </div>
      </div>
    </div>
  );
}
