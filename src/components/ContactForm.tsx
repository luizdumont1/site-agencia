import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { LeadFormData } from '../types';
import { useSiteConfig } from '../context/SiteConfigContext';

export const ContactForm: React.FC = () => {
  const { getWhatsAppLink } = useSiteConfig();
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    businessName: '',
    segment: 'Clínica / Saúde / Estética',
    city: '',
    monthlyAdSpend: 'R$ 1.500 a R$ 3.000',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Phone input mask
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleOpenWhatsAppDirectly = () => {
    const rawMsg =
      `*Diagnóstico Gratuito - Agência 053*\n\n` +
      `*Nome:* ${formData.name || 'Empresário'}\n` +
      `*Negócio:* ${formData.businessName || 'Negócio Local'}\n` +
      `*WhatsApp:* ${formData.phone}\n` +
      `*Segmento:* ${formData.segment}\n` +
      `*Cidade/UF:* ${formData.city || 'Não informado'}\n` +
      `*Verba planejada:* ${formData.monthlyAdSpend}\n` +
      `*Desafio:* ${formData.notes || 'Quero atrair mais clientes locais!'}`;
    window.open(getWhatsAppLink(rawMsg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-red-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Info & Value Proposition */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs sm:text-sm font-extrabold text-[#E50914] uppercase tracking-widest block mb-2">
                FALE CONOSCO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Solicite um <span className="text-[#E50914]">Diagnóstico Gratuito</span> do seu negócio
              </h2>
              <p className="text-gray-300 text-base mt-4 leading-relaxed">
                Nossa equipe vai analisar suas redes sociais, perfil no Google Maps e as ações dos seus concorrentes na sua cidade para montar um plano de ação sob medida.
              </p>
            </div>

            {/* Benefit Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-xl bg-red-950 text-[#E50914] shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Análise de Potencial Local</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                    Descubra quantas pessoas pesquisam pelo seu serviço por mês no seu bairro ou cidade.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-xl bg-red-950 text-[#E50914] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Retorno Rápido</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                    Entramos em contato em até 1 hora comercial com sua análise preliminar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-xl bg-red-950 text-[#E50914] shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Sem Compromisso</h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                    O diagnóstico é 100% gratuito. Você decide se quer executar sozinho ou com nossa gestão.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Converting Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#12141c] rounded-3xl border border-gray-800 p-6 sm:p-10 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1a1d28] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        WhatsApp com DDD *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full bg-[#1a1d28] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        Nome da sua Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Clínica Sorrir / Barber Club"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#1a1d28] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        Sua Cidade / Estado *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Pelotas / RS ou São Paulo / SP"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-[#1a1d28] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Segment */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        Segmento do Negócio
                      </label>
                      <select
                        value={formData.segment}
                        onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                        className="w-full bg-[#1a1d28] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-all cursor-pointer"
                      >
                        <option value="Clínica / Saúde / Estética">Clínica / Saúde / Estética</option>
                        <option value="Barbearia / Salão de Beleza">Barbearia / Salão de Beleza</option>
                        <option value="Prestador de Serviço">Prestador de Serviço</option>
                        <option value="Restaurante / Gastronomia">Restaurante / Gastronomia</option>
                        <option value="Delivery / Dark Kitchen">Delivery / Dark Kitchen</option>
                        <option value="Comércio Local / Varejo">Comércio Local / Varejo</option>
                        <option value="Outro Negócio Local">Outro Negócio Local</option>
                      </select>
                    </div>

                    {/* Planned Investment */}
                    <div>
                      <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                        Verba mensal em Anúncios
                      </label>
                      <select
                        value={formData.monthlyAdSpend}
                        onChange={(e) => setFormData({ ...formData, monthlyAdSpend: e.target.value })}
                        className="w-full bg-[#1a1d28] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E50914] transition-all cursor-pointer"
                      >
                        <option value="R$ 600 a R$ 1.500">R$ 600 a R$ 1.500 / mês</option>
                        <option value="R$ 1.500 a R$ 3.000">R$ 1.500 a R$ 3.000 / mês</option>
                        <option value="R$ 3.000 a R$ 6.000">R$ 3.000 a R$ 6.000 / mês</option>
                        <option value="Acima de R$ 6.000">Acima de R$ 6.000 / mês</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Main Goal */}
                  <div>
                    <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5">
                      Qual é o seu principal objetivo ou dificuldade hoje?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Preciso lotar a agenda no meio da semana / quero parar de pagar taxas altas no iFood..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#1a1d28] border border-gray-700 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#E50914] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-2xl bg-[#E50914] hover:bg-[#c90812] text-white font-extrabold text-base shadow-xl shadow-red-600/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Receber Diagnóstico Gratuito</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Alternative Fast Track directly to WhatsApp */}
                  <div className="text-center pt-2">
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppDirectly}
                      className="text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 font-bold inline-flex items-center gap-1.5 hover:underline cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-emerald-400" />
                      <span>Prefere falar agora mesmo no WhatsApp? Clique aqui</span>
                    </button>
                  </div>
                </form>
              ) : (
                /* Success State */
                <div className="text-center py-12 px-4 space-y-6">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">Solicitação Recebida com Sucesso!</h3>
                    <p className="text-gray-300 text-sm mt-2 max-w-md mx-auto">
                      Obrigado, <strong className="text-white">{formData.name}</strong>! Nossa equipe já foi notificada e está iniciando a análise do seu negócio <strong>({formData.businessName})</strong>.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={handleOpenWhatsAppDirectly}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-sm shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Agilizar Atendimento no WhatsApp Agora</span>
                    </button>
                  </div>

                  <p className="text-xs text-gray-500">
                    Tempo médio de resposta no WhatsApp: <strong>menos de 10 minutos</strong>.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
