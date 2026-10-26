import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowRight, PhoneCall } from 'lucide-react';
import { Logo } from './Logo';
import { useSiteConfig } from '../context/SiteConfigContext';

interface HeaderProps {
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContactModal }) => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = ['inicio', 'servicos', 'planos', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Início', href: '#inicio' },
    { id: 'servicos', label: 'Serviços', href: '#servicos' },
    { id: 'planos', label: 'Planos', href: '#planos' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ];

  const handleWhatsAppClick = (source: string) => {
    const msg = `Olá, Agência 053! Vim pelo site (botão ${source}) e quero saber mais sobre como atrair mais clientes para o meu negócio local com tráfego pago.`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100'
          : 'bg-white py-4 border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#inicio" id="header-logo-link" className="flex items-center">
          <Logo isLightMode={true} />
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-navbar" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={`${link.id}-${isScrolled ? 'scrolled' : 'top'}`}
                id={`nav-link-${link.id}`}
                href={link.href}
                style={{ animationDelay: `${index * 70}ms` }}
                className={`group relative px-3 py-1.5 text-sm font-semibold transition-colors duration-300 ease-in-out rounded-md animate-fadeIn ${
                  isActive
                    ? 'text-[#E50914] font-bold'
                    : 'text-gray-700 hover:text-[#E50914]'
                }`}
              >
                <span>{link.label}</span>
                {/* Animated underline on hover / active state */}
                <span
                  className={`absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#E50914] rounded-full transition-all duration-300 ease-out origin-center ${
                    isActive
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        {/* Action Button: WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-cta-whatsapp"
            onClick={() => handleWhatsAppClick('Menu Superior')}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#E50914] hover:bg-[#c90812] text-white text-sm font-bold shadow-lg shadow-red-600/25 transition-all duration-200 hover:shadow-red-600/40 hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white fill-white transition-transform group-hover:scale-110" />
            <span>Falar no WhatsApp</span>
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-quick-wa-btn"
            onClick={() => handleWhatsAppClick('Mobile Header')}
            className="p-2 text-white bg-[#E50914] rounded-full shadow-md sm:hidden cursor-pointer"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </button>

          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:text-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none cursor-pointer"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-gray-200 shadow-xl px-4 pt-3 pb-6 transition-all duration-200 animate-fadeIn"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold animate-fadeIn transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-[#E50914] bg-red-50'
                    : 'text-gray-800 hover:text-[#E50914] hover:bg-gray-50'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick('Menu Mobile');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#E50914] text-white font-bold shadow-md shadow-red-600/30 text-center cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Conversar no WhatsApp</span>
              </button>

              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-gray-300 text-gray-700 font-semibold text-center hover:bg-gray-50 text-sm"
              >
                <PhoneCall className="w-4 h-4 text-gray-500" />
                <span>Solicitar Diagnóstico Gratuito</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
