export interface ServiceCardConfig {
  id: string;
  icon: string;
  customImage?: string; // Optional image URL or base64 data URL
  title: string;
  badge?: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export interface PlanCardConfig {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  description?: string;
  monthlyInvestment: string;
  suggestedAdBudget?: string;
  features: string[];
  ctaText: string;
}

export interface SiteConfig {
  // 1. WhatsApp & Geral
  whatsappNumber: string; // ex: 5553981065074
  whatsappDisplay: string; // ex: (53) 98106-5074
  email: string; // ex: contato@agencia053digital.com.br
  defaultWhatsAppMessage: string;

  // 2. Logo & Identidade
  logoType: 'text' | 'image';
  logoImageUrl: string;
  logoTextPrefix: string; // ex: "AGÊNCIA"
  logoTextHighlight: string; // ex: "053"
  logoTextSuffix: string; // ex: "DIGITAL"

  // 3. Hero Section (Headlines & Textos)
  heroHeadlinePart1: string; // ex: "TRÁFEGO QUE GERA"
  heroHeadlineHighlight: string; // ex: "RESULTADOS REAIS"
  heroSubheadline: string;
  heroPrimaryCtaText: string;
  heroSecondaryCtaText: string;
  heroSecondaryCtaLink: string; // ex: "#servicos" or "#planos"
  pillar1Title: string;
  pillar1Desc: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar3Title: string;
  pillar3Desc: string;

  // 4. Seção Serviços
  servicesBadge: string;
  servicesTitle: string;
  servicesSubtitle: string;
  servicesHelpText: string;
  servicesCtaText: string;
  services: ServiceCardConfig[];

  // 5. Seção Planos & Valores
  plansBadge: string;
  plansTitle: string;
  plansSubtitle: string;
  plansGuaranteeTitle: string;
  plansGuaranteeText: string;
  plans: PlanCardConfig[];

  // 6. Banner de Urgência
  ctaBannerBadge: string;
  ctaBannerTitle: string;
  ctaBannerDescription: string;
  ctaBannerButtonText: string;
  ctaBannerTimerMinutes: number;

  // 7. Informações do Rodapé
  footerDescription: string;
  footerCnpj: string;
  footerLocation: string;
  footerCopyright: string;
  instagramUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
}
