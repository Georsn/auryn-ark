import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShieldCheck, CreditCard } from 'lucide-react';
import { CartItem, Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export default function CartDrawer({
  isOpen,
  cartItems,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: CartDrawerProps) {
  if (!isOpen) return null;

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 flex justify-end bg-brand-dark/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Drawer Container sliding from right */}
      <div
        id="cart-drawer-container"
        className="w-full max-w-md h-full bg-brand-card border-l border-brand-primary/20 shadow-2xl flex flex-col justify-between cursor-default animate-slide-in relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Drawer Section */}
        <div className="p-5 border-b border-brand-primary/15 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="h-5 w-5 text-brand-accent" />
            <h2 className="font-display text-lg font-black tracking-tight text-white">
              Baú de Compras
            </h2>
            <span className="text-xs font-mono font-bold bg-brand-primary/20 text-brand-lavender px-2 py-0.5 rounded-full border border-brand-primary/20">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'itens'}
            </span>
          </div>

          <button
            id="close-cart-btn"
            onClick={onClose}
            className="p-1 px-3 rounded-xl border border-brand-primary/10 hover:border-brand-accent/40 text-gray-400 hover:text-brand-accent transition-colors font-display text-sm cursor-pointer flex items-center gap-1"
          >
            Fechar
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable Cart Items Display Pane */}
        <div className="flex-1 p-5 overflow-y-auto space-y-4">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-6 rounded-full bg-brand-dark border-2 border-dashed border-brand-primary/20 relative animate-pulse">
                <ShoppingBag className="h-12 w-12 text-brand-lavender/40" />
                <span className="absolute bottom-2 right-2 text-xl">🔮</span>
              </div>
              <div className="space-y-1 max-w-xs">
                <h3 className="font-display text-sm font-bold text-white">Seu baú está vazio!</h3>
                <p className="text-xs text-gray-400">
                  Parece que o mago do Auryn Ark ainda não conjurou nenhuma raridade na sua sacola de tesouros.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 text-xs font-mono font-bold text-brand-accent hover:text-white transition-colors"
              >
                ← CONTINUAR NAVEGANDO
              </button>
            </div>
          ) : (
            <div className="space-y-4" id="cart-items-list-wrapper">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  id={`cart-item-${item.product.id}`}
                  className="flex gap-3 bg-brand-dark/50 border border-brand-primary/10 rounded-xl p-3 items-center justify-between"
                >
                  {/* Item Image Thumbnail representation */}
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded-lg border border-brand-primary/20 shadow-md"
                  />

                  {/* Item mid details body */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="text-xs font-bold text-white line-clamp-1 hover:text-brand-accent transition-colors">
                      {item.product.name}
                    </h4>
                    <span className="text-[10px] font-mono text-brand-lavender/60 block">
                      Escala {item.product.scale} • {item.product.category}
                    </span>
                    
                    <span className="text-xs font-mono font-bold text-brand-accent">
                      {formatPrice(item.product.price)}
                    </span>
                  </div>

                  {/* Quantity and removal tools section */}
                  <div className="flex flex-col items-end justify-between gap-1.5 h-full">
                    {/* Trash can delete item */}
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1 rounded-md text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors cursor-pointer"
                      title="Excluir item"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>

                    {/* Numeric Incremet Counter buttons */}
                    <div className="flex items-center gap-1.5 bg-brand-dark border border-brand-primary/15 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 rounded bg-brand-card text-brand-lavender hover:text-brand-accent hover:bg-brand-primary/20 transition-colors cursor-pointer"
                        title="Diminuir"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      
                      <span className="text-xs font-mono font-bold text-white px-1">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 rounded bg-brand-card text-brand-lavender hover:text-brand-accent hover:bg-brand-primary/20 transition-colors cursor-pointer"
                        title="Aumentar"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer drawer section with billing breakdown & payment trigger */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-brand-primary/20 bg-brand-dark/30 space-y-4">
            
            {/* Price breakdown listings */}
            <div className="space-y-1.5 font-mono text-xs">
              <div className="flex items-center justify-between text-gray-400">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-emerald-400">
                <span>Desconto PIX (5%)</span>
                <span>-{formatPrice(subtotal * 0.05)}</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Frete Mágico</span>
                <span className="text-brand-accent font-bold">GRÁTIS</span>
              </div>
              
              <div className="h-[1px] bg-brand-primary/20 my-2" />
              
              <div className="flex items-end justify-between text-white font-display">
                <span className="text-sm font-bold">Total Geral (PIX)</span>
                <span className="text-xl font-mono text-brand-accent font-black tracking-tight">
                  {formatPrice(subtotal * 0.95)}
                </span>
              </div>
              <p className="text-[10px] text-gray-400 text-right font-light">
                ou em até 10x de {formatPrice(subtotal / 10)} sem juros no cartão
              </p>
            </div>

            {/* Complete checkout Call to Action */}
            <div className="space-y-2">
              <button
                id="checkout-flow-btn"
                onClick={onCheckout}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-accent to-amber-500 hover:from-brand-primary hover:to-purple-600 hover:text-white text-brand-dark font-display text-sm font-black tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-brand-accent/15 hover:shadow-brand-primary/20 hover:shadow-xl"
              >
                <CreditCard className="h-4.5 w-4.5" />
                Finalizar Compra Mágica
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-brand-lavender/50 font-mono">
                <ShieldCheck className="h-3.5 w-3.5" />
                Transação segura via Auryn Shield Protocol
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
