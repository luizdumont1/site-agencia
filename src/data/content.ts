import { ServiceItem, NicheItem, PlanItem, TestimonialItem, FaqItem } from '../types';

// Dados canônicos e oficiais da Agência 053 Digital (persistidos no deploy)
export const BRAND_PHONE = '5553981065074'; // DDD 053 Pelotas / RS
export const BRAND_PHONE_DISPLAY = '(53) 98106-5074';
export const BRAND_EMAIL = 'agencia053.digital@gmail.com'; // E-mail oficial exibido no rodapé e canais de contato

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'meta-ads',
    icon: 'TrendingUp',
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
];

export const NICHES_DATA: NicheItem[] = [
  {
    id: 'clinicas',
    name: 'Clínicas & Consultórios',
    icon: 'Stethoscope',
    headline: 'Agenda cheia de consultas particulares e procedimentos estéticos',
    pain: 'Depender apenas de convênios que pagam pouco, cancelamentos de última hora e recepcionistas ociosas sem novos pacientes qualificados.',
    solution: 'Anúncios ultra-segmentados para bairros nobres e raio de influência, atraindo pacientes que buscam tratamentos particulares, implantes, estética e consultas especializadas.',
    metrics: [
      { label: 'Aumento em Agendamentos', value: '+73%' },
      { label: 'Custo médio por Paciente', value: 'R$ 14,80' },
      { label: 'ROAS Médio', value: '8.5x' }
    ],
    testimonialQuote: '“Antes vivíamos de convênios. Com a 053 Digital, em 45 dias conseguimos lotar os horários para implantes e botox somente no particular.”',
    clientName: 'Dra. Vanessa Meirelles — Clínica Odonto & Harmonização'
  },
  {
    id: 'barbearias',
    name: 'Barbearias & Salões',
    icon: 'Scissors',
    headline: 'Cadeiras ocupadas de terça a sábado e planos de assinatura esgotados',
    pain: 'Movimento concentrado apenas na sexta e sábado à tarde, com profissionais parados no início da semana gerando custos fixos altos.',
    solution: 'Campanhas de atração local no Instagram Stories e Reels com ofertas de boas-vindas e pacotes de assinatura mensal para clientes recorrentes.',
    metrics: [
      { label: 'Ocupação Terça/Quarta', value: '+88%' },
      { label: 'Novos Clientes/mês', value: '+140' },
      { label: 'Retorno sobre Investimento', value: '7.2x' }
    ],
    testimonialQuote: '“Nossa barbearia passou a ter fila de espera mesmo nas terças-feiras. A estratégia da 053 mudou nossa realidade financeira.”',
    clientName: 'Marcos Vinícius — Barber Club 053'
  },
  {
    id: 'prestadores',
    name: 'Prestadores de Serviço',
    icon: 'Wrench',
    headline: 'Telefone tocando o dia todo com pessoas precisando do seu serviço urgente',
    pain: 'Ficar refém do boca a boca ou pagar comissões absurdas em plataformas de orçamentos onde você disputa preço com amadores.',
    solution: 'Google Ads no momento exato em que o cliente pesquisa "instalação de ar condicionado", "reforma", "eletricista urgente" ou "advogado na minha cidade".',
    metrics: [
      { label: 'Ligações e WhatsApps/dia', value: '15 a 25' },
      { label: 'Taxa de Fechamento', value: '38%' },
      { label: 'ROI Comprovado', value: '11.4x' }
    ],
    testimonialQuote: '“Com o Google Ads gerenciado pela 053, nós paramos de caçar serviço. Todo dia temos 4 a 6 orçamentos de alto valor fechados.”',
    clientName: 'Carlos Eduardo — ClimaTech Engenharia e Climatização'
  },
  {
    id: 'restaurantes',
    name: 'Restaurantes & Gastronomia',
    icon: 'UtensilsCrossed',
    headline: 'Salão movimentado com reservas antecipadas e casa cheia na semana',
    pain: 'Salão vazio em dias de semana, alta dependência de datas comemorativas e margem de lucro sendo comida por promoções desordenadas.',
    solution: 'Vídeos irresistíveis das comidas veiculados no feed e stories em horários estratégicos (11h às 13h e 18h às 21h) para pessoas em um raio de 5 a 10 km.',
    metrics: [
      { label: 'Reservas no WhatsApp', value: '+120%' },
      { label: 'Ticket Médio', value: '+24%' },
      { label: 'Visualizações Locais', value: '180k/mês' }
    ],
    testimonialQuote: '“Os vídeos e campanhas da 053 colocaram nosso bistrô no mapa da cidade. Passamos a ter reservas com 3 dias de antecedência.”',
    clientName: 'Chef André Pires — Donna Oliva Gastrobar'
  },
  {
    id: 'deliveries',
    name: 'Deliveries & Dark Kitchens',
    icon: 'Bike',
    headline: 'Centenas de pedidos diários direto no seu canal próprio sem taxas abusivas',
    pain: 'Pagar 27% a cada pedido para aplicativos de entrega famosos, sem ter acesso à base de dados ou ao contato dos seus próprios clientes.',
    solution: 'Estratégia de tráfego hiperlocal que direciona o cliente para pedir direto pelo seu cardápio digital ou WhatsApp, aumentando sua margem líquida.',
    metrics: [
      { label: 'Migração do App p/ Direto', value: '62%' },
      { label: 'Economia em Taxas', value: 'R$ 4.800/mês' },
      { label: 'Pedidos por Final de Semana', value: '450+' }
    ],
    testimonialQuote: '“Reduzimos a dependência dos apps de delivery em mais de 60%. Os pedidos chegam direto no nosso WhatsApp com margem cheia!”',
    clientName: 'Juliana Barros — Smash Burguer House'
  }
];

export const PLANS_DATA: PlanItem[] = [
  {
    id: 'start-local',
    name: 'Plano Start Local',
    tagline: 'Ideal para negócios que querem dar os primeiros passos com anúncios e ter retorno rápido.',
    monthlyInvestment: 'R$ 997',
    suggestedAdBudget: 'R$ 1.000,00 a R$ 1.500 / mês',
    features: [
      'Gestão profissional de Meta Ads (Instagram e Facebook)',
      'Otimização básica do Google Meu Negócio',
      'Segmentação hiperlocal na sua cidade/bairro',
      'Criação de até 8 criativos/anúncios por mês',
      'Campanhas direcionadas direto para seu WhatsApp',
      'Relatório quinzenal com métricas fáceis de entender',
      'Suporte via grupo exclusivo no WhatsApp'
    ],
    ctaText: 'Escolher Plano Start Local'
  },
  {
    id: 'tracao-regional',
    name: 'Plano Tração Regional',
    badge: 'O Mais Escolhido',
    isPopular: true,
    tagline: 'O plano definitivo para quem deseja dominar sua cidade e bater metas de vendas todo mês.',
    monthlyInvestment: 'R$ 1.697',
    suggestedAdBudget: 'R$ 1.500 a R$ 4.000 / mês',
    features: [
      'Gestão completa Meta Ads (Instagram + Facebook)',
      'Gestão de Google Ads (Rede de Pesquisa & Google Maps)',
      'Otimização avançada do Google Meu Negócio para Top 3',
      '1 Landing Page de Alta Conversão inclusa sem custo extra',
      'Criação de até 16 criativos e vídeos persuasivos mensais',
      'Estratégia de remarketing para recuperar quem não comprou',
      'Relatórios semanais em tempo real com dashboard online',
      'Reunião mensal de alinhamento e estratégia de crescimento'
    ],
    ctaText: 'Escolher Plano Tração Regional'
  },
  {
    id: 'escala-total',
    name: 'Plano Escala Total',
    badge: 'Máximo Crescimento',
    tagline: 'Para líderes de mercado e empresas com alta capacidade de atendimento que querem escala máxima.',
    monthlyInvestment: 'R$ 2.797',
    suggestedAdBudget: 'R$ 4.000 a R$ 10.000+ / mês',
    features: [
      'Tudo do Plano Tração Regional',
      'Configuração de Agente IA para WhatsApp com atendimento 24/7',
      'Campanhas no YouTube Ads e Display Local',
      'Landing Pages ilimitadas para múltiplos serviços/ofertas',
      'Rastreamento avançado de conversões com API Server-Side',
      'Testes A/B contínuos de criativos, públicos e páginas',
      'Acompanhamento e consultoria de vendas para sua equipe',
      'Gerente de conta dedicado com atendimento prioritário'
    ],
    ctaText: 'Escolher Plano Escala Total'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Dra. Camila Valente',
    role: 'Proprietária & Médica Esteta',
    business: 'Clínica Belle Santé',
    location: 'Pelotas / RS',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    results: '+184 novos agendamentos em 60 dias',
    growth: '+210% de faturamento',
    roas: '9.8x ROAS',
    feedback: 'A Agência 053 mudou a realidade da minha clínica. Nós tínhamos dias vazios e dependíamos de indicação. Hoje nossa recepção recebe mensagens todos os dias de pessoas já querendo agendar botox e bioestimulador.',
    whatsappMessage: 'Camila aqui! Passando para agradecer pelo trabalho. Batemos 42 agendamentos só nessa semana. Tivemos que abrir horários extras aos sábados!'
  },
  {
    id: '2',
    name: 'Rodrigo Mendonça',
    role: 'Sócio-Fundador',
    business: 'La Brasa Smash Burguer',
    location: 'Porto Alegre / RS',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    results: 'R$ 87.000 em pedidos diretos no WhatsApp',
    growth: 'Economia de R$ 9.400 em taxas',
    roas: '14.2x ROAS',
    feedback: 'O tráfego pago da 053 nos tirou das garras dos aplicativos que cobravam 27% de comissão. Nossos anúncios no raio de 6 km fazem o WhatsApp bombar de pedidos das 18h às 23h.',
    whatsappMessage: 'Irmão, o delivery hoje bateu recorde histórico! Foram 168 pedidos só no WhatsApp. A equipe da 053 é fora de série.'
  },
  {
    id: '3',
    name: 'Marcos Donizete',
    role: 'Mestre Barbeiro & Proprietário',
    business: 'Barbearia Navalha de Ouro',
    location: 'Rio Grande / RS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    results: '+120 assinaturas mensais ativas',
    growth: 'Agenda 100% cheia',
    roas: '7.6x ROAS',
    feedback: 'Eu achava que tráfego pago era só para quem vendia curso na internet. A 053 provou o contrário: hoje tenho 5 cadeiras lotadas de terça a sábado na minha barbearia.',
    whatsappMessage: 'Fala pessoal da 053! Acabamos de contratar mais dois barbeiros para dar conta da demanda que veio dos anúncios. Valeu demais!'
  },
  {
    id: '4',
    name: 'Eng. Fernando Diniz',
    role: 'Diretor de Operações',
    business: 'Diniz Engenharia & Climatização',
    location: 'Caxias do Sul / RS',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    results: 'R$ 340.000 em contratos fechados no ano',
    growth: '+340% em propostas',
    roas: '12.5x ROAS',
    feedback: 'O Google Ads estruturado pela Agência 053 nos posicionou para quem busca projetos corporativos e grandes instalações. O retorno sobre o investimento foi imediato.',
    whatsappMessage: 'Fechamos hoje o contrato da fábrica que veio pelo Google Ads! Contrato de 65k. A gestão de vocês se pagou por um ano inteiro em uma única venda.'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Investimento',
    question: 'Quanto preciso investir em anúncios por dia para começar a ver resultados?',
    answer: 'Para negócios locais, recomendamos começar com uma verba entre R$ 20 a R$ 40 por dia (cerca de R$ 600 a R$ 1.200 no mês) para anúncios no Meta ou Google. Esse valor é suficiente para alcançar milhares de pessoas no seu bairro ou cidade e gerar um fluxo saudável de mensagens no WhatsApp todos os dias. Conforme os clientes forem fechando, reinvestimos parte do lucro para acelerar.'
  },
  {
    id: 'faq-2',
    category: 'Prazos',
    question: 'Em quanto tempo meu negócio começa a receber clientes?',
    answer: 'Ao contrário de estratégias puramente orgânicas que levam meses, o tráfego pago traz resultados rápidos. Assim que estruturamos as campanhas, aprovamos os criativos e ativamos os anúncios (normalmente de 3 a 5 dias úteis após o onboarding), os primeiros contatos no WhatsApp costumam cair nas primeiras 24 a 48 horas de veiculação.'
  },
  {
    id: 'faq-3',
    category: 'Cidade e Tamanho',
    question: 'Minha cidade é pequena ou média. Tráfego pago funciona para mim?',
    answer: 'Com certeza! Na verdade, em cidades de 20 mil a 500 mil habitantes o tráfego pago costuma ser ainda MAIS barato e eficiente, porque a maioria dos seus concorrentes ainda é amadora e não anuncia profissionalmente. Com pouco investimento, você se torna a empresa mais conhecida e procurada de toda a sua região.'
  },
  {
    id: 'faq-4',
    category: 'Material',
    question: 'Eu preciso saber criar fotos e vídeos para os anúncios?',
    answer: 'Não se preocupe! Nós orientamos exatamente o que gravar de forma simples usando apenas a câmera do seu celular (roteiros simples de 15 segundos que vendem muito). A nossa equipe cuida de toda a edição, artes gráficas, títulos persuasivos (copywriting) e configuração técnica.'
  },
  {
    id: 'faq-5',
    category: 'Processo',
    question: 'Como os clientes chegam até mim através dos anúncios?',
    answer: 'Configuramos as campanhas para direcionar o cliente diretamente para uma conversa no seu WhatsApp comercial, para uma ligação telefônica imediata ou para uma Landing Page de alta conversão. Assim, você e sua equipe recebem clientes quentes prontos para tirar dúvidas, agendar um horário ou pedir um orçamento.'
  },
  {
    id: 'faq-6',
    category: 'Contrato',
    question: 'Existe contrato com prazo de fidelidade obrigatório ou multas?',
    answer: 'Trabalhamos com foco em resultados reais. Nossos contratos possuem renovação mensal sem multas rescisórias abusivas. Acreditamos que você deve continuar com a Agência 053 Digital pelo lucro e pelos clientes que colocamos no seu negócio, e não por estar preso a uma cláusula de contrato.'
  },
  {
    id: 'faq-7',
    category: 'Google Meu Negócio',
    question: 'O que está incluído na otimização do Google Meu Negócio?',
    answer: 'Fazemos uma auditoria completa da sua ficha: atualização de categorias com maior volume de busca, palavras-chave no título e descrição, inclusão de fotos de alta qualidade, cadastro de produtos/serviços, configuração de mensagens diretas e implementação do nosso método exclusivo para multiplicar avaliações 5 estrelas dos seus clientes.'
  }
];
