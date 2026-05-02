import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-black/25 mb-6">404</p>
      <h1 className="font-serif text-6xl md:text-8xl text-black mb-4">
        Não Encontrado
      </h1>
      <p className="font-sans text-xs text-black/40 mb-10 max-w-xs leading-relaxed">
        Esta peça foi arquivada ou não existe. Navegue pela coleção para encontrar algo.
      </p>
      <Link
        href="/shop"
        className="font-sans text-[10px] tracking-[0.25em] uppercase border border-black px-8 py-3.5 hover:bg-black hover:text-white transition-all duration-300"
      >
        Ver Coleção
      </Link>
    </div>
  );
}
