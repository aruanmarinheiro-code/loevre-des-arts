import Link from "next/link";
import { products } from "@/data/products";

export const metadata = {
  title: "Editorial — Loevre des Arts",
  description:
    "Shot as artifacts. Worn as uniforms. The Loevre des Arts editorial campaign.",
};

const editorialLooks = [
  {
    quote: "Shot as artifacts.",
    sub: "Worn as uniforms.",
    product: products[0],
    bg: "bg-brand-black",
    text: "text-white",
  },
  {
    quote: "Classical images,",
    sub: "contemporary silhouettes.",
    product: products[4],
    bg: "bg-brand-cream",
    text: "text-brand-black",
  },
  {
    quote: "The museum",
    sub: "leaves the wall.",
    product: products[2],
    bg: "bg-brand-off-white",
    text: "text-brand-black",
  },
  {
    quote: "Five centuries.",
    sub: "One cotton object.",
    product: products[3],
    bg: "bg-brand-stone",
    text: "text-brand-black",
  },
];

export default function EditorialPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-20 border-b border-brand-stone">
        <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-6">
          Loevre des Arts — Campaign
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-serif text-5xl md:text-7xl text-brand-black leading-tight">
            Editorial
            <br />
            <em>SS2025</em>
          </h1>
          <p className="font-sans text-sm text-brand-gray max-w-xs leading-relaxed">
            Classical images, contemporary silhouettes. Photographed as gallery
            objects. Worn as street-level uniforms.
          </p>
        </div>
      </div>

      {/* Editorial grid */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editorialLooks.map((look, i) => (
            <div
              key={i}
              className={`${look.bg} ${look.text} aspect-[4/5] relative flex flex-col justify-between p-10 overflow-hidden group`}
            >
              {/* Background placeholder (replace with editorial photo) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <p className="font-serif text-6xl text-center px-6 leading-tight">
                  {look.product.artwork}
                </p>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="font-sans text-[10px] tracking-widest uppercase opacity-60 mb-4">
                  Look {String(i + 1).padStart(2, "0")} —{" "}
                  {look.product.category.toUpperCase()}
                </p>
              </div>

              <div className="relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-2">
                  {look.quote}
                  <br />
                  <em>{look.sub}</em>
                </h2>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="font-sans text-xs opacity-60 mb-1">
                      {look.product.artist}
                    </p>
                    <p className="font-sans text-sm font-medium">
                      {look.product.name}
                    </p>
                  </div>
                  <Link
                    href={`/product/${look.product.slug}`}
                    className={`font-sans text-xs tracking-widest uppercase border px-5 py-2.5 transition-all duration-300 ${
                      look.text === "text-white"
                        ? "border-white/40 hover:bg-white hover:text-brand-black"
                        : "border-brand-charcoal/40 hover:bg-brand-black hover:text-white hover:border-brand-black"
                    }`}
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto strip */}
      <div className="border-t border-brand-stone py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-brand-gray mb-8">
              Direction
            </p>
            <p className="font-serif text-3xl md:text-5xl text-brand-black leading-tight mb-6 italic">
              &ldquo;Each garment is a study. Each print, a field report from
              the archive.&rdquo;
            </p>
            <p className="font-sans text-sm text-brand-gray">
              Loevre des Arts — SS2025 Campaign
            </p>
          </div>
        </div>
      </div>

      {/* Products row */}
      <div className="border-t border-brand-stone py-12 px-6 md:px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gray">
              Pieces in this editorial
            </p>
            <Link
              href="/shop"
              className="font-sans text-xs tracking-widest uppercase text-brand-charcoal hover-underline"
            >
              View All
            </Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="flex-shrink-0 group"
              >
                <div className="w-40 h-52 bg-brand-cream mb-3 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <p className="font-serif text-xs text-brand-gray text-center leading-tight opacity-60">
                      {product.artwork}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />
                </div>
                <p className="font-serif text-sm text-brand-black group-hover:opacity-60 transition-opacity">
                  {product.name}
                </p>
                <p className="font-sans text-xs text-brand-gray mt-0.5">
                  R$ {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
