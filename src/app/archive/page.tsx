import ArchiveCard from "@/components/ArchiveCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Archive — Loevre des Arts",
  description:
    "The complete archive. Five centuries of Italian Renaissance art, translated into wearable artifacts.",
};

export default function ArchivePage() {
  return (
    <div className="pt-16">
      {/* Page header */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24 border-b border-brand-stone">
        <div className="max-w-2xl">
          <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-6">
            Loevre des Arts — Archive
          </p>
          <h1 className="font-serif text-6xl md:text-8xl text-brand-black leading-[0.9] mb-8">
            The
            <br />
            <em>Archive.</em>
          </h1>
          <p className="font-sans text-sm text-brand-charcoal leading-relaxed max-w-md">
            Five works. Five centuries. Each piece sourced from museum archives
            and translated into a cotton object for contemporary use. Browse
            the collection as you would a gallery — slowly, with attention.
          </p>
        </div>
      </div>

      {/* Archive entries */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {products.map((product, i) => (
          <ArchiveCard key={product.id} product={product} index={i} />
        ))}
      </div>

      {/* Footer note */}
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 text-center">
        <p className="font-sans text-xs text-brand-gray tracking-widest uppercase">
          Archive updated seasonally — {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
