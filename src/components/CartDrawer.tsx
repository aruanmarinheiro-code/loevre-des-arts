"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, total } =
    useCart();

  const handleCheckout = () => {
    alert(
      "Checkout — Em breve.\n\nIntegração com pagamento será configurada em etapa futura."
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay fixed inset-0 bg-black/40 z-50 ${
          isOpen ? "visible" : ""
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`cart-drawer fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl ${
          isOpen ? "open" : ""
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-brand-stone">
          <div>
            <p className="font-sans text-xs tracking-widest uppercase text-brand-gray">
              Your Cart
            </p>
            <p className="font-serif text-xl text-brand-black mt-0.5">
              {items.length === 0
                ? "Empty archive"
                : `${items.length} ${items.length === 1 ? "piece" : "pieces"}`}
            </p>
          </div>
          <button
            onClick={closeCart}
            className="font-sans text-xs tracking-widest uppercase text-brand-gray hover:text-brand-black transition-colors"
            aria-label="Close cart"
          >
            Close
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-serif text-4xl text-brand-light-gray mb-4">∅</p>
              <p className="font-sans text-sm text-brand-gray">
                No artifacts selected.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 font-sans text-xs tracking-widest uppercase border border-brand-black px-6 py-3 hover:bg-brand-black hover:text-white transition-all duration-300"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-5 pb-6 border-b border-brand-stone last:border-0"
                >
                  {/* Image */}
                  <div className="w-20 h-24 bg-brand-cream flex-shrink-0 relative overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-brand-cream opacity-30" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-base text-brand-black leading-tight">
                      {item.product.name}
                    </p>
                    <p className="font-sans text-xs text-brand-gray mt-1">
                      {item.product.artist}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="font-sans text-xs tracking-wider uppercase border border-brand-stone px-2 py-1 text-brand-charcoal">
                        {item.size}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity - 1
                            )
                          }
                          className="w-6 h-6 border border-brand-stone flex items-center justify-center font-sans text-sm text-brand-charcoal hover:border-brand-black transition-colors"
                        >
                          −
                        </button>
                        <span className="font-sans text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="w-6 h-6 border border-brand-stone flex items-center justify-center font-sans text-sm text-brand-charcoal hover:border-brand-black transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-sans text-sm text-brand-black">
                        R$ {(item.product.price * item.quantity).toLocaleString("pt-BR")}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="mt-2 font-sans text-xs text-brand-gray hover:text-brand-black transition-colors hover-underline"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-8 py-6 border-t border-brand-stone">
            <div className="flex justify-between items-center mb-2">
              <p className="font-sans text-xs tracking-widest uppercase text-brand-gray">
                Subtotal
              </p>
              <p className="font-serif text-xl text-brand-black">
                R$ {total.toLocaleString("pt-BR")}
              </p>
            </div>
            <p className="font-sans text-xs text-brand-gray mb-5">
              Shipping calculated at checkout.
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-brand-black text-white font-sans text-xs tracking-widest uppercase py-4 hover:bg-brand-charcoal transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
