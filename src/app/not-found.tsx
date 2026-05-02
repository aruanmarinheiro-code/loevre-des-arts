import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-sans text-[10px] tracking-widest uppercase text-brand-gray mb-6">
        404
      </p>
      <h1 className="font-serif text-6xl md:text-8xl text-brand-black mb-4">
        Not Found
      </h1>
      <p className="font-sans text-sm text-brand-gray mb-10 max-w-xs">
        This piece has been archived or does not exist. Browse the collection
        to find something.
      </p>
      <Link
        href="/shop"
        className="font-sans text-xs tracking-widest uppercase border border-brand-black px-8 py-3.5 hover:bg-brand-black hover:text-white transition-all duration-300"
      >
        Browse Collection
      </Link>
    </div>
  );
}
