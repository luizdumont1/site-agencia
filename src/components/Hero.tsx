import React, { useState } from 'react';
import {
  MessageCircle,
  TrendingUp,
  Target,
  Rocket,
  BarChart3,
  ArrowRight
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export const Hero: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();

  const handleWhatsAppClick = (intent: string) => {
    const msg = `Olá, Agência 053! Vim pelo Hero do site (${intent}) e quero saber como o tráfego pago pode acelerar as vendas da minha empresa.`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inicio"
      className="relative pt-28 sm:pt-32 pb-16 lg:pt-36 lg:pb-24 bg-[#0a0b0e] text-white overflow-hidden"
    >
      {/* Background Tech Dot Matrix & Red Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-Right Red Glow */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px]" />
        {/* Left Bottom Red Glow */}
        <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-red-700/10 rounded-full blur-[100px]" />
        
        {/* Tech Dot Matrix Grid pattern on Left */}
        <div className="absolute top-20 left-4 w-48 h-64 bg-[radial-gradient(#e50914_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-20 hidden md:block" />
        {/* Tech Dot Matrix Grid pattern on Right */}
        <div className="absolute top-28 right-6 w-60 h-72 bg-[radial-gradient(#e50914_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-25 hidden md:block" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: High-Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-black tracking-tight leading-[1.08] mb-6">
              {config.heroHeadlinePart1}
              {config.heroHeadlineHighlight ? (
                <>
                  {' '}
                  <span className="text-[#E50914] block mt-2 drop-shadow-[0_4px_25px_rgba(229,9,20,0.4)]">
                    {config.heroHeadlineHighlight}
                  </span>
                </>
              ) : null}
            </h1>

            {/* Subheadline targeted at local niches */}
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
              {config.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-cta-whatsapp"
                onClick={() => handleWhatsAppClick('Botão Hero Principal')}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#E50914] hover:bg-[#c90812] text-white font-extrabold text-base shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white transition-transform group-hover:scale-110" />
                <span>{config.heroPrimaryCtaText || 'Falar com um especialista'}</span>
              </button>

              <a
                id="hero-cta-services"
                href={config.heroSecondaryCtaLink || '#servicos'}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-bold text-base border border-white/15 hover:border-white/30 transition-all duration-200 backdrop-blur-sm cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 text-red-500" />
                <span>{config.heroSecondaryCtaText || 'Conhecer nossos serviços'}</span>
              </a>
            </div>

            {/* 3 Pillars / Value Props */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-gray-800/80 w-full">
              {/* Pillar 1 */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/30 text-[#E50914] shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{config.pillar1Title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                    {config.pillar1Desc}
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/30 text-[#E50914] shrink-0 mt-0.5">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{config.pillar2Title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                    {config.pillar2Desc}
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-800/30 text-[#E50914] shrink-0 mt-0.5">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{config.pillar3Title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                    {config.pillar3Desc}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dashboard & Device Mockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Outer Glow Halo */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-red-600/20 via-red-900/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

            {/* Laptop Shell Mockup */}
            <div
              id="hero-dashboard-preview"
              className="relative w-full max-w-[540px] bg-[#12141a] rounded-2xl border border-gray-700/60 shadow-2xl overflow-hidden p-1.5 transition-transform hover:scale-[1.01]"
            >
              {/* Laptop Screen Top Bar */}
              <div className="bg-[#181a22] px-4 py-2.5 flex items-center justify-between border-b border-gray-800 rounded-t-xl text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-gray-400 text-[11px] font-mono ml-2 hidden sm:inline">
                    app.agencia053.com.br/dashboard
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-green-400 font-semibold bg-green-950/40 px-2 py-0.5 rounded border border-green-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
                  Campanhas Ativas
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#13151c] to-[#0c0d12]">
                
                {/* 3 Metric Mini Cards */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                  <div className="bg-[#1a1c26] p-2.5 sm:p-3 rounded-xl border border-gray-800 text-center">
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">ROAS</span>
                    <span className="text-base sm:text-xl font-extrabold text-white block mt-0.5">56.39</span>
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center justify-center gap-0.5">
                      ↑ 32.5%
                    </span>
                  </div>

                  <div className="bg-[#1a1c26] p-2.5 sm:p-3 rounded-xl border border-gray-800 text-center">
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">Investimento</span>
                    <span className="text-base sm:text-xl font-extrabold text-white block mt-0.5">R$ 472,53</span>
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center justify-center gap-0.5">
                      ↑ 18.7%
                    </span>
                  </div>

                  <div className="bg-[#1a1c26] p-2.5 sm:p-3 rounded-xl border border-gray-800 text-center">
                    <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">Conversões</span>
                    <span className="text-base sm:text-xl font-extrabold text-white block mt-0.5">253</span>
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center justify-center gap-0.5">
                      ↑ 24.1%
                    </span>
                  </div>
                </div>

                {/* Performance Chart Display with Red Line */}
                <div className="bg-[#171922] p-3.5 rounded-xl border border-gray-800 relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-gray-300 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#E50914]" />
                      Curva de Conversão em Tempo Real
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">Últimos 30 dias</span>
                  </div>

                  {/* SVG Line Graph with glowing gradient */}
                  <div className="h-32 sm:h-36 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 320 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="redGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E50914" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#E50914" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <line x1="0" y1="20" x2="320" y2="20" stroke="#232634" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="320" y2="50" stroke="#232634" strokeDasharray="3 3" />
                      <line x1="0" y1="80" x2="320" y2="80" stroke="#232634" strokeDasharray="3 3" />

                      <path
                        d="M 0,85 Q 40,75 70,55 T 140,40 T 210,60 T 260,25 T 320,10 L 320,100 L 0,100 Z"
                        fill="url(#redGradient)"
                      />
                      <path
                        d="M 0,85 Q 40,75 70,55 T 140,40 T 210,60 T 260,25 T 320,10"
                        fill="none"
                        stroke="#E50914"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        filter="drop-shadow(0 2px 8px rgba(229,9,20,0.6))"
                      />
                      <circle cx="260" cy="25" r="4" fill="#FFFFFF" stroke="#E50914" strokeWidth="2.5" />
                      <circle cx="320" cy="10" r="4" fill="#FFFFFF" stroke="#E50914" strokeWidth="2.5" />
                    </svg>

                    <div className="absolute top-2 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg">
                      Pico: R$ 18.420
                    </div>
                  </div>
                </div>

                {/* Real-time Lead Dispatch Notification */}
                <div className="mt-3 bg-red-950/50 border border-red-800/40 rounded-lg p-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs text-gray-200">
                      <strong className="text-white">Novo Lead WhatsApp:</strong> Procedimento Clínico agendado há 3 min
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-red-400 bg-red-900/40 px-2 py-0.5 rounded">
                    +R$ 1.800
                  </span>
                </div>

              </div>
            </div>

            {/* Overlapping Smartphone Mockup */}
            <div
              id="hero-phone-mockup"
              className="absolute -bottom-6 -left-4 sm:-left-6 w-44 sm:w-52 bg-white text-gray-900 rounded-3xl p-2.5 shadow-2xl border-4 border-gray-900 hidden sm:block transform -rotate-3 hover:rotate-0 transition-transform duration-300"
            >
              <div className="w-16 h-1.5 bg-gray-900 rounded-full mx-auto mb-2" />
              <div className="bg-gray-50 rounded-2xl p-2.5 border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold text-gray-800">Desempenho</span>
                  <span className="text-[9px] font-bold text-[#E50914] bg-red-50 px-1.5 py-0.5 rounded">
                    Meta Ads
                  </span>
                </div>

                <div className="space-y-1.5 mb-2">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-500">Conversões</span>
                    <span className="font-bold text-gray-900">253</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-500">Investimento</span>
                    <span className="font-bold text-gray-900">R$ 472,53</span>
                  </div>
                  <div className="flex justify-between text-[10px]">
                    <span className="text-gray-500">ROAS</span>
                    <span className="font-extrabold text-[#E50914]">56.39</span>
                  </div>
                </div>

                <div className="h-10 w-full bg-red-50/70 rounded-lg p-1 relative overflow-hidden flex items-end">
                  <svg className="w-full h-8" viewBox="0 0 100 40" fill="none">
                    <path
                      d="M0,35 Q 25,25 45,20 T 75,10 T 100,2"
                      stroke="#E50914"
                      strokeWidth="2.5"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="mt-2 bg-emerald-50 border border-emerald-200 rounded p-1 text-[9px] text-emerald-800 font-medium flex items-center gap-1">
                  <MessageCircle className="w-3 h-3 text-emerald-600 fill-emerald-600 shrink-0" />
                  <span>"Quero agendar meu horário hoje!"</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
