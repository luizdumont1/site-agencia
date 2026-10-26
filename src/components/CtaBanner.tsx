import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, Sparkles, ArrowRight } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export const CtaBanner: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const initialSeconds = (config.ctaBannerTimerMinutes || 15) * 60;
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : initialSeconds));
    }, 1000);

    return () => clearInterval(timer);
  }, [initialSeconds]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const handleWhatsApp = () => {
    const msg = `Olá! Quero aproveitar a oferta exclusiva da Auditoria de Tráfego Gratuita no site da Agência 053 antes que o tempo expire (${formattedTime}). Como podemos agendar?`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="cta-urgencia-banner" className="bg-gradient-to-b from-[#08090c] to-black text-white py-10 sm:py-12 border-t border-b border-gray-900 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-red-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#12141c] via-[#101218] to-[#141014] border border-gray-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80">
          
          {/* Left: Headline & Offer Details */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left max-w-2xl">
            <div className="w-16 h-16 rounded-2xl bg-[#E50914] flex items-center justify-center shrink-0 shadow-xl shadow-red-600/35">
              <MessageCircle className="w-8 h-8 text-white fill-white" />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>{config.ctaBannerBadge || 'Oferta Especial de Boas-Vindas'}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {config.ctaBannerTitle || 'Auditoria de Tráfego Gratuita'}
              </h3>
              
              <p className="text-sm text-gray-300 leading-relaxed">
                {config.ctaBannerDescription || 'Analisaremos o seu perfil, anúncios atuais e posicionamento local para revelar onde você está perdendo vendas para a concorrência.'}
              </p>
            </div>
          </div>

          {/* Right: Urgent Timer Box & CTA Button */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-5 shrink-0 w-full lg:w-auto justify-center">
            
            {/* Urgency Countdown Box */}
            <div className="flex flex-col items-center justify-center bg-black/60 border border-red-900/40 rounded-2xl px-5 py-3 shadow-inner min-w-[190px]">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5 text-[#E50914] animate-pulse" />
                <span>Válido por apenas:</span>
              </div>

              {/* Digital Timer Display */}
              <div className="flex items-baseline gap-1 font-mono">
                <span className="text-3xl sm:text-4xl font-black text-white tracking-wider tabular-nums">
                  {String(minutes).padStart(2, '0')}
                </span>
                <span className="text-xl font-bold text-[#E50914] animate-pulse">:</span>
                <span className="text-3xl sm:text-4xl font-black text-[#E50914] tracking-wider tabular-nums">
                  {String(seconds).padStart(2, '0')}
                </span>
              </div>

              <span className="text-[10px] text-gray-400 mt-0.5">
                minutos restantes
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#E50914] hover:bg-[#c90812] text-white font-extrabold text-base shadow-xl shadow-red-600/35 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-white" />
              <span>{config.ctaBannerButtonText || 'Garantir Auditoria Grátis'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};
