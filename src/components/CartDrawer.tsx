"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } = useCart();

  const handleCheckout = () => {
    alert("Checkout — Em breve.\n\nIntegração com pagamento será configurada em etapa futura.");
  };

  return (
    <>
      <div
        className={`overlay fixed inset-0 bg-black/30 z-50 ${isOpen ? "visible" : ""}`}
        onClick={closeCart}
      />

      <div className={`cart-drawer fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 flex flex-col ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-black/10">
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-black">
            Carrinho {items.length > 0 && `(${items.reduce((s, i) => s + i.quantity, 0)})`}
          </p>
          <button
            onClick={closeCart}
            className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors"
          >
            Fechar
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-5xl text-black/10 mb-4">—</p>
              <p className="font-sans text-[10px] tracking-widest uppercase text-black/40">
                Nenhuma peça selecionada.
              </p>
              <button
                onClick={closeCart}
                className="mt-8 font-sans text-[10px] tracking-[0.2em] uppercase border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300"
              >
                Ver Coleção
              </button>
            </div>
          ) : (
            <ul className="flex flex-col divide-y divide-black/10">
              {items.map((item) => (
                <li key={`${item.product.id}-${item.size}`} className="flex gap-4 py-5">
                  <div className="w-16 h-20 bg-brand-cream flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-sans text-[11px] tracking-wider uppercase text-black leading-snug">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-[10px] text-black/40 mt-0.5">
                      {item.product.artist}
                    </p>
                    <p className="font-sans text-[10px] tracking-wider uppercase border border-black/20 inline-block px-2 py-0.5 mt-2 text-black/60">
                      {item.size}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3">
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} className="font-sans text-sm text-black/40 hover:text-black transition-colors w-5 text-center">−</button>
                        <span className="font-sans text-xs text-black">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} className="font-sans text-sm text-black/40 hover:text-black transition-colors w-5 text-center">+</button>
                      </div>
                      <p className="font-sans text-xs text-black">
                        R$ {(item.product.price * item.quantity).toLocaleString("pt-BR")}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="mt-2 font-sans text-[9px] tracking-widest uppercase text-black/30 hover:text-black transition-colors"
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-black/10">
            <div className="flex justify-between items-baseline mb-1">
              <p className="font-sans text-[10px] tracking-widest uppercase text-black/40">Subtotal</p>
              <p className="font-sans text-sm text-black">R$ {total.toLocaleString("pt-BR")}</p>
            </div>
            <p className="font-sans text-[10px] text-black/30 mb-4">Frete calculado no checkout.</p>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white font-sans text-[10px] tracking-[0.25em] uppercase py-4 hover:bg-black/80 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}
