export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  badge?: string;
  subtitle: string;
  description: string;
  benefits: string[];
}

export interface NicheItem {
  id: string;
  name: string;
  icon: string;
  headline: string;
  pain: string;
  solution: string;
  metrics: {
    label: string;
    value: string;
  }[];
  testimonialQuote: string;
  clientName: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  monthlyInvestment: string;
  suggestedAdBudget: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  business: string;
  location: string;
  avatar: string;
  rating: number;
  results: string;
  growth: string;
  roas: string;
  feedback: string;
  whatsappMessage: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  businessName: string;
  segment: string;
  city: string;
  monthlyAdSpend: string;
  notes: string;
}
