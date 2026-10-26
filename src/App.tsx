import React from 'react';
import { SiteConfigProvider } from './context/SiteConfigContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainDesire } from './components/PainDesire';
import { Services } from './components/Services';
import { Plans } from './components/Plans';
import { Faq } from './components/Faq';
import { ContactForm } from './components/ContactForm';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieConsent } from './components/CookieConsent';

export default function App() {
  return (
    <SiteConfigProvider>
      <div className="min-h-screen bg-[#0b0c10] text-gray-100 flex flex-col selection:bg-[#E50914] selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Header principal */}
        <Header />

        {/* Seções de Conteúdo */}
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. Dores vs Desejos Section */}
          <PainDesire />

          {/* 3. Soluções & Serviços */}
          <Services />

          {/* 4. Planos & Preços */}
          <Plans />

          {/* 5. Perguntas Frequentes (FAQ) */}
          <Faq />

          {/* 6. Formulário de Contato & Diagnóstico Gratuito */}
          <ContactForm />

          {/* 7. Banner de Chamada para Ação */}
          <CtaBanner />
        </main>

        {/* Rodapé institucional */}
        <Footer />

        {/* Botão flutuante WhatsApp */}
        <WhatsAppButton />

        {/* Consentimento de Cookies LGPD */}
        <CookieConsent />
      </div>
    </SiteConfigProvider>
  );
}
