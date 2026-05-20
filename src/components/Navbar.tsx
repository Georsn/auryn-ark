import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight, Sparkles, Menu, X, Instagram, Info } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  cartItemsCount: number;
  onCartOpen: () => void;
  onSelectCategory: (category: 'Anime' | 'Games' | 'Pop Culture' | null) => void;
  selectedCategory: 'Anime' | 'Games' | 'Pop Culture' | null;
}

export default function Navbar({
  cartItemsCount,
  onCartOpen,
  onSelectCategory,
  selectedCategory
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryClick = (category: 'Anime' | 'Games' | 'Pop Culture' | null) => {
    onSelectCategory(category);
    setMobileMenuOpen(false);
    
    // Smooth scroll to catalog
    const catalogEl = document.getElementById('catalog-section');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-dark/90 backdrop-blur-md border-b border-brand-primary/20 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Anchor */}
          <a
            href="#"
            id="brand-logo-anchor"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden transition-transform duration-500 group-hover:scale-110">
              <Logo className="h-11 w-11 sm:h-12 sm:w-12 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-brand-lavender to-brand-accent bg-clip-text text-transparent group-hover:from-brand-accent group-hover:to-brand-primary transition-all duration-300">
                Auryn Ark
              </span>
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-brand-lavender/60 font-semibold uppercase">
                Studio 3D
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              id="nav-catalogo-all"
              onClick={() => handleCategoryClick(null)}
              className={`font-display text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-brand-accent ${
                selectedCategory === null ? 'text-brand-accent font-semibold' : 'text-gray-300'
              }`}
            >
              Todos Bonecos
              {selectedCategory === null && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full animate-pulse" />
              )}
            </button>
            <button
              id="nav-catalogo-anime"
              onClick={() => handleCategoryClick('Anime')}
              className={`font-display text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-brand-accent ${
                selectedCategory === 'Anime' ? 'text-brand-accent font-semibold' : 'text-gray-300'
              }`}
            >
              Anime
              {selectedCategory === 'Anime' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full" />
              )}
            </button>
            <button
              id="nav-catalogo-games"
              onClick={() => handleCategoryClick('Games')}
              className={`font-display text-sm font-bold tracking-wide transition-colors relative py-1 hover:text-brand-accent ${
                selectedCategory === 'Games' ? 'text-brand-accent font-bold' : 'text-gray-300'
              }`}
            >
              Games
              {selectedCategory === 'Games' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full" />
              )}
            </button>
            <button
              id="nav-catalogo-pop"
              onClick={() => handleCategoryClick('Pop Culture')}
              className={`font-display text-sm font-medium tracking-wide transition-colors relative py-1 hover:text-brand-accent ${
                selectedCategory === 'Pop Culture' ? 'text-brand-accent font-semibold' : 'text-gray-300'
              }`}
            >
              Pop Culture
              {selectedCategory === 'Pop Culture' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-accent rounded-full" />
              )}
            </button>
            <a
              href="#about-section"
              className="font-display text-sm font-medium tracking-wide text-gray-300 hover:text-brand-accent transition-colors py-1"
            >
              O Estúdio
            </a>
          </div>

          {/* Actions Block (Cart & Mobile menu trigger) */}
          <div className="flex items-center gap-4">
            {/* Interactive Cart Button */}
            <button
              id="cart-trigger-btn"
              onClick={onCartOpen}
              className="relative p-2.5 rounded-xl bg-brand-card hover:bg-brand-primary/20 border border-brand-primary/30 text-white transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none cursor-pointer"
              aria-label="Meu Carrinho"
            >
              <ShoppingBag className="h-5 w-5 text-brand-lavender group-hover:text-brand-accent transition-colors duration-300" />
              {cartItemsCount > 0 && (
                <span
                  id="cart-badge-count"
                  className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-accent text-brand-dark text-[10.5px] font-bold font-mono border border-brand-dark shadow-[0_0_8px_#FBBF24] animate-bounce"
                >
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Icon Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-xl bg-brand-card text-gray-300 hover:text-brand-accent border border-brand-primary/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="md:hidden absolute top-full left-0 right-0 bg-brand-card/95 border-b border-brand-primary/30 shadow-2xl backdrop-blur-lg animate-fadeIn"
        >
          <div className="px-5 py-6 space-y-4 flex flex-col items-stretch text-center font-display">
            <h4 className="text-[11px] uppercase tracking-widest text-brand-primary font-bold">Categorias Aura</h4>
            <button
              id="nav-mobile-all"
              onClick={() => handleCategoryClick(null)}
              className={`py-3 px-4 rounded-xl text-base font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-brand-primary/30 text-brand-accent border border-brand-primary/40'
                  : 'text-gray-300 hover:bg-brand-dark/40'
              }`}
            >
              🌌 Todos os Colecionáveis
            </button>
            <button
              id="nav-mobile-anime"
              onClick={() => handleCategoryClick('Anime')}
              className={`py-3 px-4 rounded-xl text-base font-medium transition-all ${
                selectedCategory === 'Anime'
                  ? 'bg-brand-primary/30 text-brand-accent border border-brand-primary/40'
                  : 'text-gray-300 hover:bg-brand-dark/40'
              }`}
            >
              🪄 Anime Figures
            </button>
            <button
              id="nav-mobile-games"
              onClick={() => handleCategoryClick('Games')}
              className={`py-3 px-4 rounded-xl text-base font-medium transition-all ${
                selectedCategory === 'Games'
                  ? 'bg-brand-primary/30 text-brand-accent border border-brand-primary/40'
                  : 'text-gray-300 hover:bg-brand-dark/40'
              }`}
            >
              🎮 Games 3D Figures
            </button>
            <button
              id="nav-mobile-pop"
              onClick={() => handleCategoryClick('Pop Culture')}
              className={`py-3 px-4 rounded-xl text-base font-medium transition-all ${
                selectedCategory === 'Pop Culture'
                  ? 'bg-brand-primary/30 text-brand-accent border border-brand-primary/40'
                  : 'text-gray-300 hover:bg-brand-dark/40'
              }`}
            >
              🎸 Pop Culture Figures
            </button>
            <div className="h-[1px] bg-brand-primary/20 my-2" />
            <a
              href="#about-section"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-sm text-brand-lavender hover:text-brand-accent transition-all flex items-center justify-center gap-2"
            >
              <Info className="h-4 w-4" /> Sobre o Projeto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
