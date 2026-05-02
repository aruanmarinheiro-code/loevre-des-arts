import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export const metadata = {
  title: "Editorial — Loevre des Arts",
  description: "Fotografado como artefato. Vestido como uniforme.",
};

const looks = [
  { quote: "Fotografado como artefato.", sub: "Vestido como uniforme.", product: products[0], overlay: "bg-black/65", text: "text-white" },
  { quote: "Imagens clássicas,", sub: "silhuetas contemporâneas.", product: products[4], overlay: "bg-white/55", text: "text-black" },
  { quote: "O museu", sub: "sai das paredes.", product: products[2], overlay: "bg-[#F5F3EF]/70", text: "text-black" },
  { quote: "Cinco séculos.", sub: "Um objeto de algodão.", product: products[3], overlay: "bg-black/60", text: "text-white" },
];

export default function EditorialPage() {
  return (
    <div className="pt-12">
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-12 md:py-16 border-b border-black/10">
        <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30 mb-6">
          Loevre des Arts — Campanha
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-serif text-5xl md:text-7xl text-black leading-tight">
            Editorial<br /><em>SS2025</em>
          </h1>
          <p className="font-sans text-xs text-black/40 max-w-xs leading-relaxed">
            Arte do século XV no corpo. Algodão pesado na rua. Sem contradição.
          </p>
        </div>
      </div>

      {/* 2-col grid */}
      <div className="max-w-screen-2xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {looks.map((look, i) => (
            <div key={i} className={`${look.text} aspect-[4/5] relative flex flex-col justify-between p-8 md:p-10 overflow-hidden group`}>
              <Image
                src={look.product.image}
                alt={look.product.artwork}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={`absolute inset-0 ${look.overlay}`} />

              <div className="relative z-10">
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase opacity-50">
                  Look {String(i + 1).padStart(2, "0")} — {look.product.category.toUpperCase()}
                </p>
              </div>

              <div className="relative z-10">
                <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-5">
                  {look.quote}<br /><em>{look.sub}</em>
                </h2>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="font-sans text-[9px] tracking-wider uppercase opacity-50 mb-0.5">{look.product.artist}</p>
                    <p className="font-sans text-[10px] tracking-wider uppercase opacity-80">{look.product.name}</p>
                  </div>
                  <Link
                    href={`/product/${look.product.slug}`}
                    className={`font-sans text-[9px] tracking-[0.2em] uppercase border px-4 py-2.5 transition-all duration-300 ${
                      look.text === "text-white"
                        ? "border-white/50 hover:bg-white hover:text-black"
                        : "border-black/40 hover:bg-black hover:text-white"
                    }`}
                  >
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullwidth highlight */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={products[1].image}
          alt={products[1].artwork}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase opacity-40 mb-6">Peça do Arquivo Nº 002</p>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight mb-4">{products[1].artwork}</h2>
          <p className="font-sans text-[10px] tracking-widest uppercase opacity-40 mb-8">
            {products[1].artist} — {products[1].year}
          </p>
          <Link
            href={`/product/${products[1].slug}`}
            className="font-sans text-[10px] tracking-[0.25em] uppercase border border-white/40 px-8 py-3.5 hover:bg-white hover:text-black transition-all duration-300"
          >
            Ver Peça — R$ {products[1].price}
          </Link>
        </div>
      </div>

      {/* Quote */}
      <div className="border-y border-black/10 py-16 md:py-24 px-5 md:px-8">
        <div className="max-w-screen-2xl mx-auto max-w-3xl">
          <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/25 mb-8">Direção</p>
          <p className="font-serif text-3xl md:text-5xl text-black leading-tight italic">
            &ldquo;Cada peça saiu de um museu. Cada estampa carrega quinhentos anos no algodão.&rdquo;
          </p>
          <p className="font-sans text-[10px] text-black/30 tracking-wider mt-6">
            Loevre des Arts — Campanha SS2025
          </p>
        </div>
      </div>

      {/* Product strip */}
      <div className="py-10 px-5 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/30">Peças deste editorial</p>
            <Link href="/shop" className="font-sans text-[9px] tracking-widest uppercase text-black/30 hover:text-black transition-colors">Ver Tudo</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="flex-shrink-0 group w-36">
                <div className="w-36 h-44 bg-[#F5F3EF] mb-2 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                    sizes="144px"
                  />
                </div>
                <p className="font-sans text-[10px] tracking-wider uppercase text-black group-hover:opacity-40 transition-opacity leading-snug">{product.name}</p>
                <p className="font-sans text-[10px] text-black/40 mt-0.5">R$ {product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
