import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export const WhatsAppButton: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);

  // Subtle auto-open popover after 7 seconds to increase conversion
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = (text: string) => {
    window.open(getWhatsAppLink(text), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setHasPrompted(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Box (when clicked or prompted) */}
      {(isOpen || hasPrompted) && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-fadeIn text-gray-900 transition-all">
          
          {/* Header of Popup */}
          <div className="bg-[#0b0c10] text-white p-4 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#E50914] flex items-center justify-center font-black text-xs text-white">
                  {config.logoTextHighlight || '053'}
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {config.logoTextPrefix || 'Agência'} {config.logoTextHighlight || '053'} {config.logoTextSuffix || 'Digital'}
                </h4>
                <p className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Especialista Online Agora
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                setHasPrompted(false);
              }}
              className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-gray-50 text-xs sm:text-sm space-y-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-200 shadow-sm text-gray-700 leading-relaxed">
              Olá! 👋 Seja bem-vindo à <strong>{config.logoTextPrefix || 'Agência'} {config.logoTextHighlight || '053'} Digital</strong>. Como podemos ajudar seu negócio local a atrair mais clientes hoje?
            </div>

            <div className="pt-1 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                Escolha uma opção rápida:
              </span>
              
              <button
                onClick={() => handleSendMessage('Olá! Gostaria de um Diagnóstico Gratuito para a minha empresa.')}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-red-50 border border-gray-200 hover:border-[#E50914] text-xs font-semibold text-gray-800 hover:text-[#E50914] transition-all flex items-center justify-between cursor-pointer"
              >
                <span>Solicitar diagnóstico gratuito</span>
                <Send className="w-3.5 h-3.5 text-gray-400" />
              </button>

              <button
                onClick={() => handleSendMessage('Olá! Quero saber mais sobre os planos de tráfego pago para o meu negócio.')}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-red-50 border border-gray-200 hover:border-[#E50914] text-xs font-semibold text-gray-800 hover:text-[#E50914] transition-all flex items-center justify-between cursor-pointer"
              >
                <span>Conhecer planos e valores</span>
                <Send className="w-3.5 h-3.5 text-gray-400" />
              </button>

              <button
                onClick={() => handleSendMessage('Olá! Gostaria de tirar dúvidas com um gestor de tráfego.')}
                className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-red-50 border border-gray-200 hover:border-[#E50914] text-xs font-semibold text-gray-800 hover:text-[#E50914] transition-all flex items-center justify-between cursor-pointer"
              >
                <span>Falar diretamente com especialista</span>
                <Send className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Footer of Popup */}
          <div className="p-3 bg-white border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
            <span>Atendimento humano imediato</span>
            <span className="text-[#E50914] font-bold">{config.whatsappDisplay}</span>
          </div>

        </div>
      )}

      {/* Main Floating Button */}
      <button
        id="floating-whatsapp-trigger"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-white relative z-10" />

        {/* Unread badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E50914] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-md">
            1
          </span>
        )}
      </button>

    </div>
  );
};
