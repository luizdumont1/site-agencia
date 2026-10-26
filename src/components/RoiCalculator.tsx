import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, MessageCircle, DollarSign, Users, TrendingUp, Sparkles } from 'lucide-react';
import { useSiteConfig } from '../context/SiteConfigContext';

export const RoiCalculator: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const [budget, setBudget] = useState<number>(1500);
  const [ticket, setTicket] = useState<number>(180);
  const [selectedSegment, setSelectedSegment] = useState<string>('Clinica / Saude');

  // Realistic local benchmark formulas based on real traffic stats
  // Cost per click ~ R$ 1.20 - R$ 2.50
  // Conversion to WhatsApp ~ 12% - 18%
  // Closing rate ~ 15% - 25%
  const costPerLead = 12; // R$ 12 per lead on WhatsApp
  const estimatedLeads = Math.round(budget / costPerLead);
  const closingRate = 0.20; // 20% closing rate
  const estimatedNewCustomers = Math.max(1, Math.round(estimatedLeads * closingRate));
  const estimatedRevenue = estimatedNewCustomers * ticket;
  const estimatedRoas = (estimatedRevenue / budget).toFixed(1);

  const budgetSliderId = useId();
  const ticketSliderId = useId();

  const handleSimulateWhatsApp = () => {
    const msg =
      `Olá! Fiz a simulação no site da 053 Digital:\n` +
      `- Segmento: ${selectedSegment}\n` +
      `- Investimento: R$ ${budget.toLocaleString('pt-BR')}/mês\n` +
      `- Ticket Médio: R$ ${ticket.toLocaleString('pt-BR')}\n` +
      `- Projeção: ~${estimatedNewCustomers} novos clientes e R$ ${estimatedRevenue.toLocaleString('pt-BR')} em vendas.\n` +
      `Gostaria de saber como iniciar essa estratégia!`;
    window.open(getWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-red-950/40 via-gray-900 to-black rounded-3xl border border-red-800/30 p-8 sm:p-12 shadow-2xl relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Sliders & Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/40 border border-red-700/50 text-red-400 text-xs font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                Simulador de Crescimento Local
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                Descubra o potencial de faturamento do seu negócio
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Ajuste os valores abaixo para projetar quantos clientes e quanto faturamento você pode gerar com tráfego pago profissional:
              </p>

              {/* Segment Selector */}
              <div>
                <label className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-2">
                  Seu Segmento:
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Clínica / Estética', 'Barbearia / Salão', 'Prestador de Serviço', 'Restaurante / Delivery'].map((seg) => (
                    <button
                      key={seg}
                      type="button"
                      onClick={() => setSelectedSegment(seg)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedSegment === seg
                          ? 'bg-[#E50914] text-white'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {seg}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Slider */}
              <div className="bg-gray-800/60 p-4 rounded-2xl border border-gray-700/60">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={budgetSliderId} className="text-sm font-semibold text-gray-300">
                    Investimento mensal em anúncios:
                  </label>
                  <span className="text-xl font-black text-[#E50914]">
                    R$ {budget.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  id={budgetSliderId}
                  type="range"
                  min="600"
                  max="10000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#E50914]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>R$ 600 (Iniciante)</span>
                  <span>R$ 5.000</span>
                  <span>R$ 10.000+ (Escala)</span>
                </div>
              </div>

              {/* Ticket Slider */}
              <div className="bg-gray-800/60 p-4 rounded-2xl border border-gray-700/60">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={ticketSliderId} className="text-sm font-semibold text-gray-300">
                    Ticket médio por cliente / pedido:
                  </label>
                  <span className="text-xl font-black text-white">
                    R$ {ticket.toLocaleString('pt-BR')}
                  </span>
                </div>
                <input
                  id={ticketSliderId}
                  type="range"
                  min="40"
                  max="1500"
                  step="10"
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#E50914]"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <span>R$ 40 (Delivery/Corte)</span>
                  <span>R$ 500</span>
                  <span>R$ 1.500+ (Procedimentos)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Simulated Projection Box */}
            <div className="lg:col-span-5 bg-[#12141c] rounded-3xl border-2 border-red-600/60 p-6 sm:p-8 shadow-2xl relative flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Projeção Estimada / Mês
                  </span>
                  <span className="text-xs font-bold text-[#E50914] bg-red-950/60 px-2 py-1 rounded border border-red-800/40">
                    Estimativa Conservadora
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1a1d28] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-xs text-gray-400 block">Contatos WhatsApp</span>
                    <span className="text-2xl font-black text-white block mt-1">
                      ~{estimatedLeads}
                    </span>
                    <span className="text-[10px] text-gray-400">leads qualificados</span>
                  </div>

                  <div className="bg-[#1a1d28] p-3.5 rounded-xl border border-gray-800">
                    <span className="text-xs text-gray-400 block">Novos Clientes</span>
                    <span className="text-2xl font-black text-emerald-400 block mt-1">
                      ~{estimatedNewCustomers}
                    </span>
                    <span className="text-[10px] text-gray-400">taxa fechamento 20%</span>
                  </div>
                </div>

                <div className="bg-red-950/40 border border-red-800/50 p-5 rounded-2xl text-center">
                  <span className="text-xs font-bold text-red-300 uppercase tracking-wider block">
                    Faturamento Bruto Estimado
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1 text-[#E50914]">
                    R$ {estimatedRevenue.toLocaleString('pt-BR')}
                  </div>
                  <span className="text-xs text-gray-300 mt-1 block">
                    Retorno estimado de <strong>{estimatedRoas}x</strong> sobre a verba investida
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-800">
                <button
                  onClick={handleSimulateWhatsApp}
                  className="w-full py-4 px-6 rounded-2xl bg-[#E50914] hover:bg-[#c90812] text-white font-extrabold text-base shadow-xl shadow-red-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Validar Essa Estratégia no WhatsApp</span>
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2.5">
                  Sem compromisso. Converse com um especialista para validar seu mercado.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
