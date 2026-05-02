import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { products } from "@/data/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-3">
              Current Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-black">
              The Archive
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden md:block font-sans text-xs tracking-widest uppercase text-brand-charcoal hover-underline hover:text-brand-black transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/shop"
            className="font-sans text-xs tracking-widest uppercase border border-brand-black px-8 py-3.5 hover:bg-brand-black hover:text-white transition-all duration-300"
          >
            View All Pieces
          </Link>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="bg-brand-black text-white py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-ultra-wide uppercase text-white/40 mb-8">
            Manifesto
          </p>
          <blockquote className="font-serif text-3xl md:text-5xl leading-tight mb-10">
            "A brand built around classical images, heavy cotton and oversized
            silhouettes."
          </blockquote>
          <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
            Each piece transforms historical artwork into a contemporary uniform
            — somewhere between a museum poster, a gallery object and a
            streetwear essential.
          </p>
          <Link
            href="/about"
            className="font-sans text-xs tracking-widest uppercase border border-white/40 px-8 py-3.5 text-white/70 hover:border-white hover:text-white transition-all duration-300"
          >
            Read More
          </Link>
        </div>
      </section>

      {/* Archive CTA */}
      <section className="max-w-screen-xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-6">
              The Archive
            </p>
            <h2 className="font-serif text-4xl md:text-6xl text-brand-black leading-tight mb-6">
              Five centuries.
              <br />
              Five artifacts.
            </h2>
            <p className="font-sans text-sm text-brand-charcoal leading-relaxed mb-8 max-w-sm">
              From Botticelli&apos;s Venus to Michelangelo&apos;s Last Judgment.
              Each print sourced from museum archives and reproduced in
              museum-grade quality on natural cream cotton.
            </p>
            <Link
              href="/archive"
              className="inline-block font-sans text-xs tracking-widest uppercase border border-brand-black px-8 py-3.5 hover:bg-brand-black hover:text-white transition-all duration-300"
            >
              Enter the Archive
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-px bg-brand-stone">
            {[
              { number: "5", label: "Archive Pieces" },
              { number: "280g", label: "GSM Cotton Weight" },
              { number: "500+", label: "Years of History" },
              { number: "Ltd.", label: "Edition Format" },
            ].map(({ number, label }) => (
              <div key={label} className="bg-white p-8 md:p-10">
                <p className="font-serif text-4xl md:text-5xl text-brand-black mb-2">
                  {number}
                </p>
                <p className="font-sans text-xs tracking-widest uppercase text-brand-gray">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial strip */}
      <section className="border-t border-brand-stone bg-brand-off-white py-12">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-2xl md:text-3xl text-brand-black italic">
            Shot as artifacts. Worn as uniforms.
          </p>
          <Link
            href="/editorial"
            className="font-sans text-xs tracking-widest uppercase text-brand-charcoal border-b border-brand-charcoal pb-0.5 hover:text-brand-black hover:border-brand-black transition-colors whitespace-nowrap"
          >
            View Editorial →
          </Link>
        </div>
      </section>
    </>
  );
}
