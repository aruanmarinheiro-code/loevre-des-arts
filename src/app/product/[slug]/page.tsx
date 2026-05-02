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
  const slug = params?.slug as string;
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [sizeError, setSizeError] = useState(false);
  const { addItem } = useCart();

  if (!product) return notFound();

  const related = getRelatedProducts(product, 3);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addItem(product, selectedSize);
  };

  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-6 border-b border-brand-stone">
        <nav className="flex items-center gap-2 font-sans text-xs text-brand-gray">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/shop"
            className="hover:text-brand-black transition-colors"
          >
            Shop
          </Link>
          <span>/</span>
          <span className="text-brand-black">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[4/5] bg-brand-cream overflow-hidden">
              <Image
                src={product.images[activeImage] || product.image}
                alt={product.name}
                fill
                className="object-contain p-6 transition-opacity duration-300"
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <p className="font-serif text-sm text-brand-gray text-center px-8">
                  {product.artwork}
                  <br />
                  <span className="text-xs">{product.artist}</span>
                </p>
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 aspect-square bg-brand-cream border-2 transition-all ${
                      activeImage === i
                        ? "border-brand-black"
                        : "border-transparent hover:border-brand-stone"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Status */}
            <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-4">
              {product.status === "limited" ? "— Limited Drop" : product.status === "coming-soon" ? "— Coming Soon" : "— Available"}
            </p>

            {/* Artist */}
            <p className="font-sans text-xs tracking-widest uppercase text-brand-charcoal mb-2">
              {product.artist}
            </p>

            {/* Name */}
            <h1 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight mb-2">
              {product.name}
            </h1>

            {/* Artwork */}
            <p className="font-sans text-sm text-brand-gray italic mb-6">
              Based on &ldquo;{product.artwork}&rdquo;
            </p>

            {/* Price */}
            <p className="font-serif text-3xl text-brand-black mb-8">
              R$ {product.price.toLocaleString("pt-BR")}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-brand-charcoal leading-relaxed mb-8 max-w-md">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-xs tracking-widest uppercase text-brand-charcoal">
                  Select Size
                </p>
                <Link
                  href="/size-guide"
                  className="font-sans text-xs text-brand-gray hover-underline hover:text-brand-black transition-colors"
                >
                  Size Guide
                </Link>
              </div>
              <div className="flex gap-2 flex-wrap">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`w-12 h-12 font-sans text-sm border transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-brand-black text-white border-brand-black"
                        : "border-brand-stone text-brand-charcoal hover:border-brand-black"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="mt-2 font-sans text-xs text-red-500">
                  Please select a size before adding to cart.
                </p>
              )}
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-brand-black text-white font-sans text-xs tracking-widest uppercase py-4 hover:bg-brand-charcoal transition-colors duration-300 mb-4"
            >
              Add to Cart — R$ {product.price}
            </button>

            <p className="font-sans text-xs text-brand-gray text-center mb-10">
              Free shipping on orders over R$ 500 · 14-day returns
            </p>

            {/* Artwork details */}
            <details className="border-t border-brand-stone group">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-sans text-xs tracking-widest uppercase text-brand-charcoal hover:text-brand-black transition-colors list-none">
                Artwork Details
                <span className="text-lg group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="pb-5 grid grid-cols-2 gap-y-4 gap-x-6">
                {[
                  { label: "Artwork", value: product.artwork },
                  { label: "Artist", value: product.artist },
                  { label: "Year", value: product.year },
                  { label: "Medium", value: product.medium },
                  { label: "Location", value: product.location },
                  { label: "Dimensions", value: product.dimensions },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-sm text-brand-charcoal">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </details>

            {/* Fit Notes */}
            <details className="border-t border-brand-stone group">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-sans text-xs tracking-widest uppercase text-brand-charcoal hover:text-brand-black transition-colors list-none">
                Fit Notes
                <span className="text-lg group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="pb-5">
                <p className="font-sans text-sm text-brand-charcoal leading-relaxed">
                  {product.fitNotes}
                </p>
                <div className="mt-4 p-4 bg-brand-off-white">
                  <p className="font-sans text-xs text-brand-gray">
                    <strong className="font-medium text-brand-charcoal">Fabric:</strong>{" "}
                    100% heavyweight cotton, 280gsm. Natural cream / off-white.
                    Pre-washed for minimal shrinkage.
                  </p>
                </div>
              </div>
            </details>

            {/* Care */}
            <details className="border-t border-b border-brand-stone group">
              <summary className="flex items-center justify-between py-5 cursor-pointer font-sans text-xs tracking-widest uppercase text-brand-charcoal hover:text-brand-black transition-colors list-none">
                Care Instructions
                <span className="text-lg group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <div className="pb-5">
                <ul className="space-y-2">
                  {product.care.map((instruction) => (
                    <li
                      key={instruction}
                      className="font-sans text-sm text-brand-charcoal flex items-start gap-2"
                    >
                      <span className="text-brand-gray mt-0.5">—</span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>
        </div>

        {/* You may also like */}
        {related.length > 0 && (
          <div className="mt-24 md:mt-32">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-2">
                  Continue Exploring
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-brand-black">
                  You May Also Like
                </h2>
              </div>
              <Link
                href="/shop"
                className="hidden md:block font-sans text-xs tracking-widest uppercase text-brand-charcoal hover-underline"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
