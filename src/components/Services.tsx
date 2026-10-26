import React, { useState } from 'react';
import {
  TrendingUp,
  Search,
  MapPin,
  Bot,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Target,
  Rocket
} from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export const Services: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    const iconClasses = "w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-[#E50914]";
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className={iconClasses} />;
      case 'Search':
        return <Search className={iconClasses} />;
      case 'MapPin':
        return <MapPin className={iconClasses} />;
      case 'Bot':
        return <Bot className={iconClasses} />;
      case 'Sparkles':
        return <Sparkles className={iconClasses} />;
      case 'Target':
        return <Target className={iconClasses} />;
      case 'Zap':
        return <Zap className={iconClasses} />;
      case 'Rocket':
        return <Rocket className={iconClasses} />;
      default:
        return <TrendingUp className={iconClasses} />;
    }
  };

  const handleHireService = (serviceTitle: string) => {
    const msg = `Olá! Quero saber mais sobre o serviço de *${serviceTitle}* para o meu negócio local.`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-white text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-[#E50914] uppercase tracking-widest block mb-2">
            {config.servicesBadge || 'NOSSOS SERVIÇOS'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950">
            {config.servicesTitle || 'Soluções completas para o seu crescimento digital'}
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg mt-3 sm:mt-4 leading-relaxed">
            {config.servicesSubtitle || 'Estratégias modernas e personalizadas para atrair, converter e fidelizar clientes para negócios locais.'}
          </p>
        </div>

        {/* Services Cards Grid: 2 linhas x 2 colunas tanto no mobile quanto no desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {config.services.map((service, sIdx) => {
            const isExpanded = selectedService === service.id;

            return (
              <div
                key={service.id || sIdx}
                id={`service-card-${service.id || sIdx}`}
                className="group relative bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 lg:p-8 border border-gray-100 shadow-lg sm:shadow-xl shadow-gray-100/60 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3 sm:mb-6">
                    <div className="p-2 sm:p-3.5 rounded-xl sm:rounded-2xl bg-red-50 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 border border-red-100 overflow-hidden">
                      {service.customImage ? (
                        <img
                          src={service.customImage}
                          alt={service.title}
                          className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="group-hover:[&>svg]:text-white transition-colors duration-300">
                          {getIcon(service.icon)}
                        </div>
                      )}
                    </div>
                    {service.badge && (
                      <span className="text-[9px] sm:text-[11px] font-bold text-[#E50914] bg-red-50 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-red-100 whitespace-nowrap">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-sm sm:text-xl lg:text-2xl font-black text-gray-900 group-hover:text-[#E50914] transition-colors leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 mb-2 sm:mb-3 line-clamp-1 sm:line-clamp-none">
                    {service.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-1.5 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-gray-100 mb-4 sm:mb-6">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 sm:gap-2.5 text-[11px] sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E50914] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <button
                    onClick={() => handleHireService(service.title)}
                    className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 py-2 sm:py-3 px-2 sm:px-4 rounded-xl bg-gray-50 hover:bg-[#E50914] text-gray-800 hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 border border-gray-200 hover:border-[#E50914] cursor-pointer group/btn"
                  >
                    <span className="hidden sm:inline">Quero para meu negócio</span>
                    <span className="sm:hidden">Quero este</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all shrink-0" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Pill */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-sm text-gray-700">
            <span className="font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E50914]" />
              {config.servicesHelpText || 'Dúvida sobre qual serviço é ideal para o seu momento?'}
            </span>
            <button
              onClick={() => {
                const msg = 'Olá! Gostaria de receber uma recomendação sobre qual serviço é mais indicado para o meu negócio atual.';
                window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
              }}
              className="text-[#E50914] font-extrabold hover:underline flex items-center gap-1 cursor-pointer"
            >
              {config.servicesCtaText || 'Falar com nosso consultor no WhatsApp →'}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
