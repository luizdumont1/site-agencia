import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { useSiteConfig } from '../context/SiteConfigContext';

export const Footer: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const msg = 'Olá! Vim pelo rodapé do site da Agência 053 Digital e gostaria de mais informações.';
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#08090c] text-gray-400 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="inline-block">
              <Logo isLightMode={false} />
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {config.footerDescription}
            </p>
            <div className="pt-2 text-xs text-gray-500">
              {config.footerCnpj}
            </div>
          </div>

          {/* Column 2: Quick Links (NO "depoimentos" as requested) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#dores" className="hover:text-white transition-colors">Dores & Soluções</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">Planos & Preços</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contato
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E50914] shrink-0" />
                <a
                  href={getWhatsAppLink('Olá! Vim pelo telefone do rodapé da Agência 053 Digital e gostaria de mais informações.')}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors font-medium"
                >
                  {config.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E50914] shrink-0" />
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-white transition-colors"
                >
                  {config.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <span>{config.footerLocation}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Siga-nos
            </h4>
            <div className="flex items-center gap-3 pt-1">
              {config.instagramUrl && (
                <a
                  href={config.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#E50914] text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {config.facebookUrl && (
                <a
                  href={config.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#E50914] text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#25D366] text-white flex items-center justify-center transition-all duration-200 border border-white/10 cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              {config.linkedinUrl && (
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{config.footerCopyright}</p>
          
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('openCookieSettings'))}
              className="hover:text-white transition-colors hover:underline underline-offset-2 cursor-pointer text-gray-400"
            >
              Privacidade & Cookies (LGPD)
            </button>

            <span className="text-gray-700 hidden sm:inline">•</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
