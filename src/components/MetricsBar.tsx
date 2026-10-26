import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Users, CheckCircle2 } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const metrics = [
    {
      id: 'roas',
      icon: TrendingUp,
      value: '56.39',
      label: 'ROAS Médio',
      detail: 'Retorno sobre investimento em anúncios'
    },
    {
      id: 'investimento',
      icon: DollarSign,
      value: 'R$ 472.530+',
      label: 'Investimento Gerenciado',
      detail: 'Verba aplicada com rentabilidade comprovada'
    },
    {
      id: 'compras',
      icon: ShoppingCart,
      value: '25.300+',
      label: 'Compras & Agendamentos',
      detail: 'Leads qualificados gerados no WhatsApp'
    },
    {
      id: 'clientes',
      icon: Users,
      value: '+100',
      label: 'Clientes Atendidos',
      detail: 'Negócios locais escalados no Brasil'
    }
  ];

  return (
    <section id="resultados" className="relative bg-[#E50914] text-white py-8 sm:py-10 shadow-xl overflow-hidden">
      {/* Subtle diagonal background sheen */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-[#E50914] to-red-700 opacity-90" />
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-white/20">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`flex items-center gap-3 sm:gap-4 ${
                  index > 0 ? 'lg:pl-8' : ''
                } transition-transform hover:scale-105 duration-200`}
              >
                <div className="p-3 sm:p-3.5 rounded-2xl bg-white/15 border border-white/20 shrink-0 shadow-inner">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-none">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white/95 mt-1 tracking-wide">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-white/80 hidden sm:block leading-tight mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
