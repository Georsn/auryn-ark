import React from 'react';
import { Sparkles, Calendar, Receipt, Heart, ShieldCheck, ShoppingBag } from 'lucide-react';
import Logo from './Logo';

interface CheckoutSuccessModalProps {
  isOpen: boolean;
  orderNumber: string;
  totalPaid: number;
  onClose: () => void;
}

export default function CheckoutSuccessModal({
  isOpen,
  orderNumber,
  totalPaid,
  onClose
}: CheckoutSuccessModalProps) {
  if (!isOpen) return null;

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div
      id="checkout-success-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-md animate-fade-in"
    >
      {/* Modal Card */}
      <div
        id="checkout-success-modal-card"
        className="relative w-full max-w-lg bg-brand-card border-2 border-brand-accent/40 rounded-3xl p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(251,191,36,0.25)] space-y-6 animate-scale-up"
      >
        
        {/* Confetti Sparks visual layer */}
        <div className="absolute top-10 left-10 text-brand-primary animate-pulse text-2xl">✨</div>
        <div className="absolute bottom-10 right-10 text-brand-accent animate-pulse text-2xl">⚡</div>
        <div className="absolute top-20 right-16 text-emerald-400 animate-pulse text-xl">✦</div>

        {/* Mascot magic logo presentation */}
        <div className="relative mx-auto w-36 h-36 rounded-full bg-brand-dark border-2 border-brand-accent shadow-[0_0_30px_rgba(251,191,36,0.3)] flex items-center justify-center p-2 group overflow-hidden">
          <Logo className="w-28 h-28 transform group-hover:rotate-12 duration-500 filter drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
          <div className="absolute bottom-1 right-2 bg-brand-accent text-brand-dark rounded-full p-1 text-xs">🐱</div>
        </div>

        {/* Header statements */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/35 text-brand-accent font-mono text-xs font-black uppercase tracking-wider">
            🔮 Compra Conjurada com Sucesso!
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
            Magia de Envio Ativada
          </h2>
        </div>

        {/* Details card content */}
        <div className="bg-brand-dark/60 border border-brand-primary/10 rounded-2xl p-5 text-left space-y-3 font-mono text-xs text-gray-300">
          
          <div className="flex items-center justify-between border-b border-brand-primary/10 pb-2.5">
            <span className="text-gray-400 flex items-center gap-1">
              <Receipt className="h-4 w-4 text-brand-accent" /> Número do Pedido:
            </span>
            <span className="text-white font-bold text-sm tracking-widest">{orderNumber}</span>
          </div>

          <div className="flex items-center justify-between border-b border-brand-primary/10 pb-2.5">
            <span className="text-gray-400 flex items-center gap-1">
              <Calendar className="h-4 w-4 text-brand-accent" /> Data Portal:
            </span>
            <span className="text-white font-bold">{new Date().toLocaleDateString('pt-BR')}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-brand-accent" /> Total Conjurado (PIX):
            </span>
            <span className="text-brand-accent font-bold text-sm">{formatPrice(totalPaid)}</span>
          </div>

        </div>

        {/* Explanatory notes */}
        <p className="text-sm font-light text-gray-300 leading-relaxed max-w-md mx-auto">
          O gatinho branco do <strong className="text-brand-accent">Auryn Ark Studio</strong> já selou seu pedido com magia protetora! Estamos preparando os acolchoamentos antichoque mística. Seus detalhes de rastreamento do portal serão conjurados em instantes!
        </p>

        {/* Secure badge details and navigation back */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <button
            id="close-success-btn"
            onClick={onClose}
            className="w-full py-4 rounded-xl bg-brand-primary hover:bg-brand-accent hover:text-brand-dark hover:shadow-[0_0_20px_#FBBF24] text-white font-display text-sm font-bold tracking-wide transition-all duration-300 shadow-md cursor-pointer"
          >
            Continuar Colecionando ✨
          </button>
          
          <div className="flex items-center justify-center gap-1 text-[10.5px] text-gray-500 font-mono">
            <ShieldCheck className="h-4 w-4 text-emerald-500" /> Selado e Garantido via Auryn Shield
          </div>
        </div>

      </div>
    </div>
  );
}
