import React from 'react';
import { Check, Flame, MessageCircle, ShieldCheck } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export const Plans: React.FC = () => {
  const { config, getWhatsAppLink } = useSiteConfig();

  const handleSelectPlan = (planName: string) => {
    const msg = `Olá, Agência 053! Tenho interesse no *${planName}* para o meu negócio local. Poderiam me explicar os próximos passos?`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planos" className="py-24 bg-gray-50 text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-[#E50914] uppercase tracking-widest block mb-2">
            {config.plansBadge || 'PLANOS & INVESTIMENTO'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950">
            {config.plansTitle || 'Planos transparentes para o momento do seu negócio'}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            {config.plansSubtitle || 'Sem pegadinhas ou contratos engessados. Escolha a intensidade de crescimento ideal para a sua empresa hoje:'}
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {config.plans.map((plan, pIdx) => {
            return (
              <div
                key={plan.id || pIdx}
                id={`plan-card-${plan.id || pIdx}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-[#0f1118] text-white border-2 border-[#E50914] shadow-2xl shadow-red-600/20 lg:-translate-y-2'
                    : 'bg-white text-gray-900 border border-gray-200 shadow-xl shadow-gray-200/50 hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#E50914] text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-red-600/40">
                      <Flame className="w-3.5 h-3.5 fill-white" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Subtitle / Tagline & Name */}
                  <div className="mb-4">
                    <span className={`text-xs font-black uppercase tracking-wider block mb-1.5 ${
                      plan.isPopular ? 'text-red-400' : 'text-[#E50914]'
                    }`}>
                      {plan.tagline}
                    </span>
                    <h3 className={`text-2xl sm:text-3xl font-black tracking-tight ${plan.isPopular ? 'text-white' : 'text-gray-950'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  {/* Pricing Box */}
                  <div className="my-5 pb-5 border-b border-gray-200/20">
                    <div className="flex items-baseline gap-1.5">
                      {plan.monthlyInvestment.includes('/') ? (
                        <>
                          <span className={`text-3xl sm:text-4xl font-black tracking-tight ${plan.isPopular ? 'text-white' : 'text-gray-950'}`}>
                            {plan.monthlyInvestment.split('/')[0].trim()}
                          </span>
                          <span className={`text-xs sm:text-sm font-bold ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                            / {plan.monthlyInvestment.split('/')[1].trim()}
                          </span>
                        </>
                      ) : (
                        <span className={`text-3xl sm:text-4xl font-black tracking-tight ${plan.isPopular ? 'text-white' : 'text-gray-950'}`}>
                          {plan.monthlyInvestment}
                        </span>
                      )}
                    </div>

                    {/* Ideal for / Description */}
                    {plan.description && (
                      <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${plan.isPopular ? 'text-gray-300' : 'text-gray-600'}`}>
                        {plan.description}
                      </p>
                    )}

                    {plan.suggestedAdBudget && (
                      <div className={`mt-3 text-xs font-medium px-3 py-1.5 rounded-lg inline-block ${
                        plan.isPopular ? 'bg-white/10 text-red-300' : 'bg-red-50 text-[#E50914]'
                      }`}>
                        Verba recomendada: <strong>{plan.suggestedAdBudget}</strong>
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      plan.isPopular ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      O que está incluso:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm">
                        <div className={`p-0.5 rounded-full shrink-0 mt-0.5 ${
                          plan.isPopular ? 'bg-red-950 text-[#E50914]' : 'bg-red-100 text-red-600'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span className={plan.isPopular ? 'text-gray-200' : 'text-gray-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div>
                  <button
                    onClick={() => handleSelectPlan(plan.name)}
                    className={`w-full py-4 px-6 rounded-2xl font-extrabold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-[#E50914] hover:bg-[#c90812] text-white shadow-lg shadow-red-600/40 hover:scale-[1.02]'
                        : 'bg-gray-950 hover:bg-[#E50914] text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{plan.ctaText || 'Escolher este plano'}</span>
                  </button>
                  <p className={`text-[11px] text-center mt-2.5 ${plan.isPopular ? 'text-gray-400' : 'text-gray-500'}`}>
                    Sem taxa de adesão oculta • Renovação mensal
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Guarantee Note */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-4 rounded-2xl bg-red-50 text-[#E50914] shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-950">
                {config.plansGuaranteeTitle || 'Garantia de Dedicação e Onboarding Acelerado'}
              </h4>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl">
                {config.plansGuaranteeText || 'Seu negócio no ar em até 5 dias úteis com suporte em tempo real, acompanhamento e transparência total de cada centavo investido.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const msg = 'Olá! Gostaria de tirar dúvidas sobre qual plano melhor se adapta ao orçamento da minha empresa.';
              window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
            }}
            className="shrink-0 px-6 py-3 rounded-xl border-2 border-gray-900 hover:border-[#E50914] text-gray-900 hover:text-[#E50914] font-bold text-sm transition-colors cursor-pointer"
          >
            Tirar dúvidas sobre planos
          </button>
        </div>

      </div>
    </section>
  );
};
