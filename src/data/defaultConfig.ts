import { SiteConfig } from '../types/config';

export const DEFAULT_SITE_CONFIG: SiteConfig = {
  // 1. WhatsApp & Contatos
  whatsappNumber: '5553981065074',
  whatsappDisplay: '(53) 98106-5074',
  email: 'contato@agencia053digital.com.br',
  defaultWhatsAppMessage: 'Olá, Agência 053! Vim pelo site e gostaria de saber como o tráfego pago pode acelerar o faturamento da minha empresa.',

  // 2. Logo & Identidade
  logoType: 'text',
  logoImageUrl: '',
  logoTextPrefix: 'AGÊNCIA',
  logoTextHighlight: '053',
  logoTextSuffix: 'DIGITAL',

  // 3. Hero Section
  heroHeadlinePart1: 'Sua empresa não precisa depender de indicações.',
  heroHeadlineHighlight: 'Ela precisa ser vista.',
  heroSubheadline: 'Somos especialistas em Tráfego Pago, Google Meu Negócio e Agentes IA para colocar um fluxo contínuo de clientes prontos para comprar direto no seu WhatsApp.',
  heroPrimaryCtaText: 'Falar com um especialista',
  heroSecondaryCtaText: 'Conhecer nossos serviços',
  heroSecondaryCtaLink: '#servicos',
  pillar1Title: 'Estratégias Personalizadas',
  pillar1Desc: 'Planos sob medida para o seu nicho e raio de atendimento',
  pillar2Title: 'Foco em Resultados',
  pillar2Desc: 'Mais clientes chamando, mais vendas fechadas todo mês',
  pillar3Title: 'Gestão Transparente',
  pillar3Desc: 'Relatórios claros sem "marquetês" e suporte direto',

  // 4. Seção Serviços (4 serviços em grid 2x2)
  servicesBadge: 'NOSSOS SERVIÇOS',
  servicesTitle: 'Soluções completas para o seu crescimento digital',
  servicesSubtitle: 'Estratégias modernas e personalizadas para atrair, converter e fidelizar clientes para negócios locais.',
  servicesHelpText: 'Dúvida sobre qual serviço é ideal para o seu momento?',
  servicesCtaText: 'Falar com nosso consultor no WhatsApp →',
  services: [
    {
      id: 'meta-ads',
      icon: 'TrendingUp',
      customImage: '',
      title: 'Tráfego Pago (Meta Ads)',
      subtitle: 'Meta Ads e Instagram Ads',
      badge: 'Mais Procurado',
      description: 'Campanhas estratégicas no Instagram e Facebook desenhadas para colocar o anúncio do seu negócio na frente de quem está pronto para comprar no seu bairro ou cidade.',
      benefits: [
        'Segmentação hiperlocal por raio de km ou CEP',
        'Criativos persuasivos com foco em ação imediata',
        'Campanhas direcionadas direto para o seu WhatsApp',
        'Testes contínuos de público e redução do custo por lead'
      ]
    },
    {
      id: 'google-ads',
      icon: 'Search',
      customImage: '',
      title: 'Google Ads (Rede de Pesquisa)',
      subtitle: 'Apareça para quem já está procurando',
      badge: 'Alta Intenção',
      description: 'Colocamos seu negócio na primeira posição do Google quando alguém pesquisa por "clínica perto de mim", "barbearia aberta hoje" ou o serviço que você oferece.',
      benefits: [
        'Captura de clientes com alta intenção de compra imediata',
        'Palavras-chave negativas para não desperdiçar verba',
        'Anúncios de chamada direta para seu telefone ou WhatsApp',
        'Extensões de local, promoções e avaliações no topo do buscador'
      ]
    },
    {
      id: 'google-business',
      icon: 'MapPin',
      customImage: '',
      title: 'Google Meu Negócio',
      subtitle: 'Mais visibilidade no Google Maps',
      badge: 'Visibilidade Local',
      description: 'Otimização completa da sua ficha no Google Maps para conquistar as 3 primeiras posições gratuitas da sua região e gerar ligações e rotas todos os dias.',
      benefits: [
        'Perfil verificado e 100% preenchido com fotos profissionais',
        'Estratégia comprovada para multiplicação de avaliações 5 estrelas',
        'Cadastro de produtos, catálogo de serviços e posts semanais',
        'Aumento expressivo nas solicitações de rotas e chamadas'
      ]
    },
    {
      id: 'ai-agents',
      icon: 'Bot',
      customImage: '',
      title: 'Agentes IA para WhatsApp',
      subtitle: 'Atendimento automático 24/7',
      badge: 'Inovação',
      description: 'Robôs inteligentes e humanizados que atendem instantaneamente os clientes vindos dos anúncios, tiram dúvidas, agendam horários e nunca deixam um lead esfriar.',
      benefits: [
        'Resposta em menos de 10 segundos para todo novo contato',
        'Qualificação prévia para enviar apenas clientes quentes para sua equipe',
        'Integração com calendários e sistemas de agendamento',
        'Operação ininterrupta inclusive aos finais de semana e feriados'
      ]
    }
  ],

  // 5. Seção Planos & Valores
  plansBadge: 'PLANOS & INVESTIMENTO',
  plansTitle: 'Planos transparentes para o momento do seu negócio',
  plansSubtitle: 'Sem pegadinhas ou contratos engessados. Escolha a intensidade de crescimento ideal para a sua empresa hoje:',
  plansGuaranteeTitle: 'Garantia de Dedicação e Onboarding Acelerado',
  plansGuaranteeText: 'Seu negócio no ar em até 5 dias úteis com suporte em tempo real, acompanhamento e transparência total de cada centavo investido.',
  plans: [
    {
      id: 'plano-presenca',
      name: 'Plano Presença',
      badge: '',
      isPopular: false,
      tagline: 'Marketing digital local',
      description: 'Ideal para empresas que desejam fortalecer sua presença digital e atrair clientes na própria região.',
      monthlyInvestment: 'R$ 997,00 / mês',
      features: [
        'Gestão de campanhas no Meta Ads (Instagram e Facebook)',
        'Otimização do Perfil da Empresa no Google',
        'Segmentação geográfica de público',
        'Campanhas direcionadas para atendimento via WhatsApp',
        'Relatórios quinzenais de desempenho',
        'Suporte via grupo exclusivo no WhatsApp'
      ],
      ctaText: 'Escolher Plano Presença'
    },
    {
      id: 'plano-expansao',
      name: 'Plano Expansão',
      badge: 'Mais Escolhido',
      isPopular: true,
      tagline: 'Aquisição e expansão de mercado',
      description: 'Ideal para empresas que desejam ampliar a aquisição de clientes e expandir sua atuação comercial.',
      monthlyInvestment: 'R$ 1.697,00 / mês',
      features: [
        'Gestão de campanhas no Meta Ads (Instagram e Facebook)',
        'Gestão de campanhas no Google Ads (Rede de Pesquisa)',
        'Gestão e otimização do Perfil da Empresa no Google',
        'Desenvolvimento de uma landing page para captação de clientes',
        'Estratégia de remarketing para recuperação de potenciais clientes',
        'Dashboard online com indicadores de desempenho',
        'Relatórios semanais de resultados',
        'Reunião mensal de alinhamento estratégico'
      ],
      ctaText: 'Escolher Plano Expansão'
    },
    {
      id: 'plano-performance',
      name: 'Plano Performance',
      badge: '',
      isPopular: false,
      tagline: 'Marketing, automação e vendas',
      description: 'Ideal para empresas que buscam ampliar resultados por meio da integração entre marketing digital, automação e processos comerciais.',
      monthlyInvestment: 'R$ 2.797,00 / mês',
      features: [
        'Todos os serviços do Plano Expansão',
        'Configuração de agente de inteligência artificial para atendimento via WhatsApp 24 horas por dia',
        'Gestão de campanhas no YouTube Ads e na Rede de Display',
        'Desenvolvimento de landing pages para diferentes serviços e ofertas',
        'Rastreamento de conversões e integração de dados de campanhas',
        'Testes e otimização de campanhas para melhoria de resultados',
        'Consultoria comercial e acompanhamento dos processos de vendas',
        'Gerente de conta dedicado',
        'Atendimento prioritário'
      ],
      ctaText: 'Escolher Plano Performance'
    }
  ],

  // 6. Banner de Urgência
  ctaBannerBadge: 'Oferta Especial de Boas-Vindas',
  ctaBannerTitle: 'Auditoria de Tráfego Gratuita',
  ctaBannerDescription: 'Analisaremos o seu perfil, anúncios atuais e posicionamento local para revelar onde você está perdendo vendas para a concorrência.',
  ctaBannerButtonText: 'Garantir Auditoria Grátis',
  ctaBannerTimerMinutes: 15,

  // 7. Informações do Rodapé
  footerDescription: 'Transformamos estratégias digitais em resultados reais para o seu negócio. Especialistas em gerar vendas, clientes e previsibilidade para empresas locais.',
  footerCnpj: 'CNPJ: 53.053.053/0001-53 • Agência 053 Digital LTDA',
  footerLocation: 'Atendemos todo o Brasil',
  footerCopyright: '© 2026 Agência 053 Digital. Todos os direitos reservados.',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://facebook.com',
  linkedinUrl: 'https://linkedin.com'
};
