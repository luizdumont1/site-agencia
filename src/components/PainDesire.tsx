import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, MessageCircle, AlertTriangle, Sparkles, TrendingUp } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export const PainDesire: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const pains = [
    {
      title: 'Dependência do "boca a boca"',
      description: 'Meses com faturamento bom alternados com meses de desespero e contas acumulando.'
    },
    {
      title: 'Dinheiro queimado no botão "Turbinar"',
      description: 'Curtidas e seguidores de outras cidades que nunca gastam 1 real no seu balcão.'
    },
    {
      title: 'Dias vazios no meio da semana',
      description: 'Equipe ociosa de terça a quinta, enquanto o aluguel e as despesas fixas continuam correndo.'
    },
    {
      title: 'Concorrente dominando sua região',
      description: 'Outras empresas aparecendo na frente no Google e no Instagram e roubando seus clientes.'
    },
    {
      title: 'Falta de tempo e processos',
      description: 'Você precisa gerenciar o negócio, atender clientes e ainda tentar adivinhar como anunciar.'
    }
  ];

  const desires = [
    {
      title: 'Previsibilidade e fluxo diário',
      description: 'Pessoas reais da sua cidade chamando no WhatsApp todos os dias querendo agendar ou comprar.'
    },
    {
      title: 'Anúncios que viram dinheiro no caixa',
      description: 'Cada real investido é rastreado para gerar retorno positivo (ROAS) comprovado em relatórios.'
    },
    {
      title: 'Agenda cheia de segunda a sábado',
      description: 'Campanhas promocionais estratégicas para lotar os horários tradicionalmente mais fracos.'
    },
    {
      title: 'Seu negócio no topo do Google',
      description: 'Liderança absoluta no Google Meu Negócio e buscas locais para quem precisa do seu serviço agora.'
    },
    {
      title: 'Estratégia completa sem dor de cabeça',
      description: 'A Agência 053 cuida dos criativos, anúncios e otimizações enquanto você foca em atender bem.'
    }
  ];

  const handleWhatsApp = () => {
    const msg = 'Olá! Li a seção de Dores e Desejos no site e quero transformar o fluxo de clientes da minha empresa.';
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="dores" className="py-20 bg-gray-50 text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-[#E50914] text-xs font-bold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            O Fim da Incerteza Comercial
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-950">
            Você ainda depende da sorte para{' '}
            <span className="text-[#E50914]">atrair clientes locais?</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
            Ter um excelente produto ou serviço não basta se as pessoas da sua cidade não sabem que você existe. Veja o contraste entre continuar no amadorismo ou jogar no nível profissional:
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* PAINS COLUMN (Card Dark / Warning) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-red-200/80 shadow-lg shadow-red-500/5 relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-t-3xl" />
            
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="p-3 rounded-2xl bg-red-50 text-red-600">
                  <XCircle className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                    Sem Estratégia de Tráfego
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    O que trava o seu negócio hoje:
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {pains.map((pain, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-red-50/40 border border-red-100/70">
                    <div className="p-1 rounded-full bg-red-100 text-red-600 shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{pain.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-0.5 leading-snug">{pain.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 text-center text-xs text-gray-500 italic">
              "Continuar fazendo a mesma coisa e esperar resultados diferentes é o caminho mais rápido para estagnar."
            </div>
          </div>

          {/* DESIRES COLUMN (Card Brand / Solution) */}
          <div className="bg-gradient-to-b from-[#0e1017] to-[#141722] text-white rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-2xl relative flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#E50914] via-red-500 to-red-600 rounded-t-3xl" />
            
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
                <div className="p-3 rounded-2xl bg-red-950/80 border border-red-800/60 text-[#E50914]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider block flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Método Agência 053 Digital
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Como sua rotina será transformada:
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {desires.map((desire, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/40 transition-colors">
                    <div className="p-1 rounded-full bg-red-900/60 text-emerald-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {desire.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-300 mt-0.5 leading-snug">{desire.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs text-gray-400 block">Pronto para virar o jogo?</span>
                <span className="text-sm font-bold text-white">Comece com nossa equipe agora</span>
              </div>
              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#E50914] hover:bg-[#c90812] text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quero mais clientes</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
