import React from 'react';
import { Star, Eye, Plus, ShoppingCart, Loader2 } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onAddToCart: (product: Product, event: React.MouseEvent) => void;
  onCardClick: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onCardClick
}: ProductCardProps) {
  const formatPrice = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  // Status Badge Builder
  const getStockBadge = () => {
    switch (product.stockStatus) {
      case 'In Stock':
        return (
          <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
            EM ESTOQUE ({product.stockCount})
          </span>
        );
      case 'Low Stock':
        return (
          <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider rounded-md bg-amber-500/15 text-amber-400 border border-amber-500/30 animate-pulse">
            ÚLTIMAS {product.stockCount} UNIDADES!
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider rounded-md bg-neutral-850/40 text-neutral-400 border border-neutral-750">
            ESGOTADO
          </span>
        );
    }
  };

  return (
    <article
      id={`product-card-${product.id}`}
      className="group relative flex flex-col rounded-2xl bg-brand-card hover:bg-brand-card/90 border border-brand-primary/10 hover:border-brand-primary/40 overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* Product Image Stage */}
      <div className="relative w-full aspect-square bg-[#0b0817] flex items-center justify-center overflow-hidden">
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
        
        {/* Target actual collectible image */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700 select-none"
        />

        {/* Categories Overlays (Topleft) */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-md bg-brand-primary text-white shadow-[0_4px_10px_rgba(139,92,246,0.4)]">
            {product.category}
          </span>
          <span className="px-2.5 py-0.5 text-[10px] font-mono font-medium rounded bg-brand-dark/80 text-brand-lavender border border-brand-primary/20">
            Escala {product.scale}
          </span>
        </div>

        {/* Floating Quick Action Overlay (Center Screen on Hover) */}
        <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={() => onCardClick(product)}
            className="p-3.5 rounded-full bg-white hover:bg-brand-accent text-brand-dark shadow-xl hover:scale-110 active:scale-95 transition-transform duration-205 cursor-pointer"
            title="Visualizar detalhes"
          >
            <Eye className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col space-y-3 justify-between">
        <div className="space-y-2">
          
          {/* Stock Badges and Ratings Block */}
          <div className="flex items-center justify-between">
            {getStockBadge()}
            
            {/* Stars Review Indicator */}
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-brand-accent text-brand-accent" />
              <span className="text-xs font-semibold text-brand-lavender">{product.rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Title and Scales */}
          <h3
            onClick={() => onCardClick(product)}
            className="font-display text-base sm:text-lg font-bold text-white hover:text-brand-accent cursor-pointer line-clamp-2 transition-colors duration-200"
          >
            {product.name}
          </h3>

          <p className="text-xs text-gray-400 font-mono line-clamp-2">
            {product.description}
          </p>

        </div>

        {/* Pricing tag & Action Drawer */}
        <div className="pt-2 border-t border-brand-primary/10 flex items-center justify-between gap-2">
          {/* Golden Pricing Details */}
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-brand-lavender/60 tracking-wider">PREÇO PIX</span>
            <span className="text-lg sm:text-xl font-mono text-brand-accent font-bold tracking-tight">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Quick Buy Plus Button */}
          {product.stockStatus !== 'Out of Stock' ? (
            <button
              id={`quick-add-${product.id}`}
              onClick={(e) => onAddToCart(product, e)}
              className="px-4 py-2.5 rounded-xl bg-brand-primary/20 hover:bg-brand-primary border border-brand-primary/40 hover:border-brand-primary text-white text-xs font-bold font-display hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              Adicionar
            </button>
          ) : (
            <button
              disabled
              className="px-4 py-2.5 rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-500 text-xs font-bold font-display cursor-not-allowed"
            >
              Indisponível
            </button>
          )}

        </div>
      </div>
    </article>
  );
}
