import React from 'react';
import { Mail, Shield, ShieldCheck, Github, Instagram, ArrowUpRight, HelpCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="about-section"
      className="bg-brand-dark border-t border-brand-primary/10 relative overflow-hidden"
    >
      {/* Decorative Radial Background */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand/Mascot Info Column 1-4 */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <Logo className="h-9 w-9 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-white tracking-tight">
                  Auryn Ark Studio
                </span>
                <span className="text-[10px] font-mono tracking-widest text-brand-lavender/60">
                  COLECIONÁVEIS MÍSTICOS
                </span>
              </div>
            </div>
            
            <p className="text-xs text-gray-400 font-light leading-relaxed max-w-sm">
              Inspirado pela mística e pureza de Frieren. Criamos bonecos 3D com resina de polímero premium, esculpidos digitalmente sob as mais ricas formas de iluminação e pintados à mão por artistas apaixonados.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-brand-card hover:bg-brand-primary/20 text-brand-lavender hover:text-brand-accent transition-colors border border-brand-primary/10"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:suporte@aurynark.com"
                className="p-2 rounded-lg bg-brand-card hover:bg-brand-primary/20 text-brand-lavender hover:text-brand-accent transition-colors border border-brand-primary/10"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Category Anchors Column 5-8 */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="text-sm font-display font-bold text-white tracking-wide">Filtros Rápidos</h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#catalog-section" className="text-gray-400 hover:text-brand-accent transition-all flex items-center gap-1">
                🪄 Anime figures <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href="#catalog-section" className="text-gray-400 hover:text-brand-accent transition-all flex items-center gap-1">
                🎮 Games 3D <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href="#catalog-section" className="text-gray-400 hover:text-brand-accent transition-all flex items-center gap-1">
                🎸 Pop Culture <ArrowUpRight className="h-3 w-3" />
              </a>
              <a href="#catalog-section" className="text-gray-400 hover:text-brand-accent transition-all flex items-center gap-1">
                🌟 Todos Colecionáveis <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Guarantees/Security Column 9-12 */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-display font-medium text-white tracking-wide">Nosso Selo de Garantia</h4>
            
            <div className="space-y-3 font-mono text-[11px] text-gray-400">
              <div className="flex gap-2 items-start">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-accent mt-0.5" />
                <span>
                  <strong className="text-white block">Embalagem Antichoque Mística</strong>
                  Utilizamos plástico especial envolto em espuma de absorção de vibração para que seu boneco chegue sem um único arranhão.
                </span>
              </div>
              <div className="flex gap-2 items-start">
                <Shield className="h-4.5 w-4.5 text-brand-accent mt-0.5" />
                <span>
                  <strong className="text-white block">Garantia Auryn Shield</strong>
                  Reembolso integral assegurado em caso de danos de fabricação ou perdas de transporte em até 30 dias.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright alignment bar */}
        <div className="mt-12 pt-6 border-t border-brand-primary/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-500 gap-4">
          <p>© {currentYear} Auryn Ark Studio. Todos os direitos reservados. Feito com magia ✦</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-brand-accent hover:cursor-pointer">Termos do Portal</span>
            <span className="hover:text-brand-accent hover:cursor-pointer">Política de Selagem</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
