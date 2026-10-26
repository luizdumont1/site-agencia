import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS_DATA } from '../data/content';
import { useSiteConfig } from '../context/SiteConfigContext';

export const Faq: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const [openItem, setOpenItem] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white text-gray-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs sm:text-sm font-extrabold text-[#E50914] uppercase tracking-widest block mb-2">
            TIRE SUAS DÚVIDAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4">
            Tudo o que você precisa saber antes de iniciar sua estratégia com a Agência 053 Digital:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openItem === faq.id;

            return (
              <div
                key={faq.id}
                id={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#E50914] bg-red-50/20 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E50914] bg-red-100/70 px-2.5 py-0.5 rounded-md">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#E50914]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-red-100/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-14 bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-gray-900">
              Ainda ficou com alguma dúvida pontual?
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-0.5">
              Nossa equipe está disponível agora para analisar seu caso no WhatsApp sem custo.
            </p>
          </div>
          <button
            onClick={() => {
              const msg = 'Olá! Tenho uma dúvida sobre a Agência 053 que não encontrei no FAQ.';
              window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
            }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E50914] hover:bg-[#c90812] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com especialista</span>
          </button>
        </div>

      </div>
    </section>
  );
};
