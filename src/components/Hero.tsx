import React from 'react';
import { ArrowRight, Sparkles, Wand2, ShieldCheck, HeartHandshake } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onScrollToCatalog: () => void;
}

export default function Hero({ onScrollToCatalog }: HeroProps) {
  return (
    <header
      id="hero-banner"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 overflow-hidden bg-brand-dark"
    >
      {/* Background Magical Particle Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(139,92,246,0.18),transparent_60%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-48 h-48 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-64 h-64 bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Star/Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151221_1px,transparent_1px),linear-gradient(to_bottom,#151221_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy Texts (Col 1-7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Soft Magical Tagbadge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/15 border border-brand-primary/30 text-brand-lavender text-xs font-semibold font-mono tracking-wider shadow-[0_0_15px_rgba(139,92,246,0.2)] animate-pulse">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              CONJURANDO ARTE 3D COLECIONÁVEL
            </div>

            {/* Giant Display Title */}
            <div className="space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Modelos <span className="bg-gradient-to-r from-brand-primary via-brand-lavender to-white bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(139,92,246,0.4)]">Tridimensionais</span> Esculpidos à Perfeição
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl">
                O gatinho arquimago do <strong className="text-white">Auryn Ark Studio</strong> abre os portais celestiais para trazer os bonecos 3D mais épicos e detalhados do multiverso à sua estante!
              </p>
            </div>

            {/* Call to Actions Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-cta-button"
                onClick={onScrollToCatalog}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-purple-600 hover:from-brand-accent hover:to-amber-500 hover:text-brand-dark hover:shadow-[0_0_25px_rgba(251,191,36,0.4)] text-white font-display text-base font-bold tracking-wide shadow-lg shadow-brand-primary/25 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-2 cursor-pointer group"
              >
                Ver Coleção Completa
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <a
                href="#about-section"
                className="px-6 py-4 rounded-xl border border-brand-primary/30 hover:border-brand-accent/50 hover:bg-brand-primary/10 text-brand-lavender hover:text-white transition-all duration-300 font-display text-sm font-semibold flex items-center gap-2"
              >
                Conhecer Estúdio
                <Wand2 className="h-4 w-4 text-brand-accent animate-spin-pulse" />
              </a>
            </div>

            {/* Visual Value Props Info */}
            <div className="grid grid-cols-3 gap-4 border-t border-brand-primary/10 pt-8 max-w-md">
              <div className="space-y-1">
                <span className="text-brand-accent font-mono text-xl sm:text-2xl font-bold block">100%</span>
                <span className="text-gray-400 text-xs tracking-tight">Pintura Manual e Exclusiva</span>
              </div>
              <div className="space-y-1">
                <span className="text-brand-accent font-mono text-xl sm:text-2xl font-bold block">Premium</span>
                <span className="text-gray-400 text-xs tracking-tight">Resina de Cura UV Polystone</span>
              </div>
              <div className="space-y-1">
                <span className="text-brand-accent font-mono text-xl sm:text-2xl font-bold block">Seguro</span>
                <span className="text-gray-400 text-xs tracking-tight">Embalagem Antichoque</span>
              </div>
            </div>

          </div>

          {/* Interactive Visual Element (Col 8-12 / Logo / Magic Portal Layout ) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Spinning Golden Magics Rings behind logo */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-dashed border-brand-primary/40 animate-[spin_50s_linear_infinite]" />
            <div className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full border border-dotted border-brand-accent/30 animate-[spin_30s_linear_infinite]" />
            <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-brand-primary/10 animate-[pulse_6s_ease-in-out_infinite]" />
            
            {/* Main Center Mascot Shield Container */}
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-brand-card/70 border-2 border-brand-primary/30 flex items-center justify-center p-4 shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_50px_rgba(251,191,36,0.35)] transition-all duration-500 hover:border-brand-accent/40 group">
              <Logo className="w-56 h-56 sm:w-72 sm:h-72 filter drop-shadow-[0_0_12px_rgba(139,92,246,0.5)] transform group-hover:scale-105 duration-500" />
              
              {/* Spinning runic label ribbon on background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[9px] text-brand-accent/50 tracking-[1.4em] pointer-events-none uppercase mr-[-1.4em] select-none text-center font-bold">
                AURYN ARK STUDIO COLECIONÁVEIS
              </div>
            </div>

            {/* Hanging golden talisman ornaments */}
            <div className="absolute top-6 right-10 bg-brand-card/80 border border-brand-primary/30 rounded-2xl py-2 px-3 shadow-lg flex items-center gap-2 transform rotate-6 animate-bounce">
              <span className="text-brand-accent text-sm">✨</span>
              <span className="text-[11px] font-mono tracking-wider font-semibold text-white">MAGIA PURA!</span>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}
