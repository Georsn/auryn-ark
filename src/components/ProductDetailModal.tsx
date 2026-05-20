import React from 'react';
import { X, Star, Sparkles, Scale, Box, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductDetailModal({
  product,
  onClose,
  onAddToCart
}: ProductDetailModalProps) {
  if (!product) return null;

  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <div
      id="product-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/80 backdrop-blur-md animate-fade-in cursor-pointer"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        id="product-detail-modal-container"
        className="relative w-full max-w-4xl bg-brand-card border border-brand-primary/30 rounded-3xl overflow-hidden shadow-2xl shadow-black/80 max-h-[90vh] overflow-y-auto cursor-default animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          id="close-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-brand-dark/60 hover:bg-brand-primary border border-brand-primary/20 text-white/80 hover:text-white transition-all cursor-pointer shadow-lg"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Structure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">
          
          {/* Left Column: Big Graphic Base */}
          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] md:min-h-[500px] bg-brand-dark flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-brand-primary/10">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Ambient Shadow Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80 md:hidden" />
          </div>

          {/* Right Column: Rich Specifications Panel */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category tag & Stock */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-primary text-white text-xs font-mono font-bold tracking-wider">
                  {product.category}
                </span>
                
                {product.stockStatus === 'In Stock' && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold tracking-wider">
                    ESTOQUE DISPONÍVEL ({product.stockCount} un)
                  </span>
                )}
                {product.stockStatus === 'Low Stock' && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold tracking-wider animate-pulse">
                    CORRA! ÚLTIMOS {product.stockCount} NO ESTOQUE
                  </span>
                )}
                {product.stockStatus === 'Out of Stock' && (
                  <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-mono font-bold tracking-wider">
                    ESGOTADO NO MOMENTO
                  </span>
                )}
              </div>

              {/* Title Name selection */}
              <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                {product.name}
              </h2>

              {/* Dynamic review count indicator */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5 text-brand-accent">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4.5 w-4.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-brand-accent text-brand-accent'
                          : 'text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-brand-lavender font-semibold underline">
                  {product.rating.toFixed(1)} • {product.reviewsCount} avaliações de colecionadores
                </span>
              </div>

              {/* Material and Dimension Specs grid */}
              <div className="grid grid-cols-2 gap-3 bg-brand-dark/50 border border-brand-primary/10 rounded-2xl p-4 font-mono text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-brand-accent" />
                  <div>
                    <span className="text-gray-400 block text-[9px] uppercase tracking-wider">Escala</span>
                    <span className="text-white font-bold">{product.scale}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Box className="h-4 w-4 text-brand-accent" />
                  <div>
                    <span className="text-gray-400 block text-[9px] uppercase tracking-wider">Material</span>
                    <span className="text-white font-bold">{product.material}</span>
                  </div>
                </div>
              </div>

              {/* Product description paragraph */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono tracking-widest text-brand-primary uppercase font-bold">Resumo Místico</h4>
                <p className="text-sm font-light leading-relaxed text-gray-300">
                  {product.description}
                </p>
              </div>

              {/* Dynamic key list bullets */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-bold">Destaques Mágicos</h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brand-accent font-semibold text-xs mt-0.5">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Price Tag & Add to cart button */}
            <div className="pt-4 border-t border-brand-primary/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              <div className="flex flex-col">
                <span className="text-xs font-mono text-brand-lavender/50 uppercase tracking-wider">Preço à vista (PIX)</span>
                <span className="text-2xl sm:text-3xl font-mono text-brand-accent font-bold tracking-tight">
                  {formatPrice(product.price)}
                </span>
                <span className="text-[10px] text-emerald-400 font-medium">Ou em 10x de {formatPrice(product.price / 10)} sem juros</span>
              </div>

              <div className="sm:w-1/2">
                {product.stockStatus !== 'Out of Stock' ? (
                  <button
                    id="modal-add-to-cart-btn"
                    onClick={() => {
                      onAddToCart(product);
                      onClose();
                    }}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-accent hover:to-amber-500 hover:text-brand-dark hover:shadow-[0_0_20px_#FBBF24] text-white font-display text-sm font-bold tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Adicionar ao Baú
                    <ArrowRight className="h-4.5 w-4.5" />
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full py-3.5 rounded-2xl bg-neutral-800 border border-neutral-700 text-neutral-500 text-sm font-display font-medium cursor-not-allowed text-center"
                  >
                    Indisponível no Momento
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
