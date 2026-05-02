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
    <article
      className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-brand-stone py-16 md:py-20 ${
        isEven ? "" : "md:direction-rtl"
      }`}
    >
      {/* Image */}
      <div
        className={`relative aspect-square bg-brand-cream overflow-hidden ${
          isEven ? "md:pr-12" : "md:order-2 md:pl-12"
        }`}
      >
        <Image
          src={product.image}
          alt={product.artwork}
          fill
          className="object-contain p-8"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center pt-8 md:pt-0 ${
          isEven ? "md:pl-12" : "md:pr-12"
        }`}
      >
        {/* Catalogue number */}
        <p className="font-sans text-xs tracking-widest uppercase text-brand-gray mb-6">
          Archive No. {String(index + 1).padStart(3, "0")} —{" "}
          {product.category.toUpperCase()}
        </p>

        {/* Artist name */}
        <p className="font-sans text-xs tracking-widest uppercase text-brand-charcoal mb-2">
          {product.artist}
        </p>

        {/* Artwork title */}
        <h2 className="font-serif text-4xl md:text-5xl text-brand-black leading-tight mb-6">
          {product.artwork}
        </h2>

        {/* Technical info */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-8 py-6 border-y border-brand-stone">
          {[
            { label: "Year", value: product.year },
            { label: "Medium", value: product.medium },
            { label: "Location", value: product.location },
            { label: "Dimensions", value: product.dimensions },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-1">
                {label}
              </p>
              <p className="font-sans text-sm text-brand-charcoal">{value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-brand-charcoal leading-relaxed mb-8">
          {product.description}
        </p>

        {/* CTA */}
        <Link
          href={`/product/${product.slug}`}
          className="self-start font-sans text-xs tracking-widest uppercase border border-brand-black px-8 py-3.5 hover:bg-brand-black hover:text-white transition-all duration-300"
        >
          View Piece — R$ {product.price}
        </Link>
      </div>
    </article>
  );
}
