import React, { useState } from 'react';
import {
  Stethoscope,
  Scissors,
  Wrench,
  UtensilsCrossed,
  Bike,
  CheckCircle2,
  TrendingUp,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Quote
} from 'lucide-react';
import { NICHES_DATA } from '../data/content';
import { useSiteConfig } from '../context/SiteConfigContext';

export const Niches: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const [activeNicheId, setActiveNicheId] = useState<string>('clinicas');

  const activeNiche = NICHES_DATA.find((n) => n.id === activeNicheId) || NICHES_DATA[0];

  const getNicheIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'Bike':
        return <Bike className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleNicheWhatsApp = (nicheName: string) => {
    const msg = `Olá! Tenho um negócio no segmento de *${nicheName}* e quero aplicar a estratégia de tráfego pago da 053.`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="segmentos" className="py-24 bg-[#0d0f15] text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-extrabold text-[#E50914] uppercase tracking-widest block mb-2">
            ESPECIALIDADE LOCAL
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Estratégias validadas para o seu nicho
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-4 leading-relaxed">
            Não existe fórmula genérica. Nós entendemos a fundo o comportamento de compra do cliente em cada tipo de negócio local:
          </p>
        </div>

        {/* Niches Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {NICHES_DATA.map((niche) => {
            const isActive = niche.id === activeNicheId;
            return (
              <button
                key={niche.id}
                id={`niche-tab-${niche.id}`}
                onClick={() => setActiveNicheId(niche.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#E50914] text-white shadow-lg shadow-red-600/30 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <div className={isActive ? 'text-white' : 'text-red-400'}>
                  {getNicheIcon(niche.icon)}
                </div>
                <span>{niche.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Niche Showcase Card */}
        <div className="bg-gradient-to-br from-[#141722] via-[#11131c] to-[#0c0d14] rounded-3xl border border-gray-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: Context, Pain & Solution */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-800/50 text-red-400 text-xs font-bold uppercase tracking-wider">
                {getNicheIcon(activeNiche.icon)}
                <span>Plano Estratégico: {activeNiche.name}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                {activeNiche.headline}
              </h3>

              {/* The Pain */}
              <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/30">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                  O Maior Gargalo Desse Nicho:
                </span>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {activeNiche.pain}
                </p>
              </div>

              {/* The Solution */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Como a 053 Digital Resolve:
                </span>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {activeNiche.solution}
                </p>
              </div>

              {/* Client Quote */}
              <div className="border-l-4 border-[#E50914] pl-4 py-1 text-sm text-gray-300 italic flex items-start gap-2">
                <Quote className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p>{activeNiche.testimonialQuote}</p>
                  <span className="text-xs font-bold text-white not-italic mt-1 block">
                    {activeNiche.clientName}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleNicheWhatsApp(activeNiche.name)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#E50914] hover:bg-[#c90812] text-white font-extrabold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-105 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Quero escalar meu(minha) {activeNiche.name.split('&')[0].trim()}</span>
                </button>
              </div>
            </div>

            {/* Right side: Key Performance Indicators */}
            <div className="lg:col-span-5 bg-[#171a25] rounded-2xl border border-gray-700/60 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Médias Comprovadas no Nicho
                  </span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                    <TrendingUp className="w-3.5 h-3.5" /> Resultados Reais
                  </span>
                </div>

                <div className="space-y-4">
                  {activeNiche.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#12141c] p-4 rounded-xl border border-gray-800 flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-gray-300 font-medium">
                        {metric.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-[#E50914]">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 text-center">
                <p className="text-xs text-gray-400">
                  Valores calculados com base nas campanhas ativas de clientes da Agência 053 Digital.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
