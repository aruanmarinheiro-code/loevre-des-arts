import ArchiveCard from "@/components/ArchiveCard";
import { products } from "@/data/products";

export const metadata = {
  title: "Arquivo — Loevre des Arts",
  description: "O arquivo completo. Cinco séculos de arte renascentista italiana, traduzidos em artefatos vestíveis.",
};

export default function ArchivePage() {
  return (
    <div className="pt-12">
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-12 md:py-20 border-b border-black/10">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-6">
          Loevre des Arts — Arquivo
        </p>
        <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] text-black leading-[0.88]">
          O<br /><em>Arquivo.</em>
        </h1>
        <p className="font-sans text-xs text-black/40 leading-relaxed max-w-md mt-8">
          Cinco obras. Cinco séculos. Cada peça saiu de um arquivo de museu e virou algodão. Olha com calma — tem história em cada estampa.
        </p>
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-8">
        {products.map((product, i) => (
          <ArchiveCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-12 text-center">
        <p className="font-sans text-[9px] text-black/20 tracking-widest uppercase">
          Arquivo atualizado sazonalmente — {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
