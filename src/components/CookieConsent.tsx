import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Settings2, X, ChevronRight, Check, ExternalLink, Lock } from 'lucide-react';
import { BRAND_EMAIL } from '../data/content';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'agencia053_cookie_consent_v1';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(false);

  // Preference states
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    // Check if consent has already been saved
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Subtle entrance after 1.2 seconds so it doesn't disturb initial hero render
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  // Listen for custom event triggered from footer or elsewhere to reopen preferences
  useEffect(() => {
    const handleReopen = () => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          setPreferences({
            essential: true,
            analytics: parsed.analytics ?? true,
            marketing: parsed.marketing ?? true,
          });
        }
      } catch {
        // fallback
      }
      setIsVisible(true);
      setShowPreferences(true);
    };

    window.addEventListener('openCookieSettings', handleReopen);
    return () => window.removeEventListener('openCookieSettings', handleReopen);
  }, []);

  const saveConsent = (prefs: { essential: boolean; analytics: boolean; marketing: boolean }) => {
    const consentData: CookiePreferences = {
      ...prefs,
      essential: true,
      timestamp: new Date().toISOString(),
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consentData));
    } catch (e) {
      console.warn('LocalStorage unavailable for cookie consent', e);
    }

    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleAcceptEssentialOnly = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!isVisible && !showPolicyModal) {
    return null;
  }

  return (
    <>
      {/* Floating Non-Intrusive Banner (Left-aligned to not clash with WhatsApp CTA on bottom-right) */}
      {isVisible && !showPolicyModal && (
        <aside
          id="cookie-consent-banner"
          role="region"
          aria-label="Consentimento de Cookies e Privacidade LGPD"
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-40 sm:max-w-md md:max-w-lg bg-[#0f1117]/95 backdrop-blur-xl border border-gray-800/80 rounded-2xl shadow-2xl shadow-black/80 text-gray-200 animate-fadeIn overflow-hidden"
        >
          {/* Top subtle highlight border */}
          <div className="h-1 bg-gradient-to-r from-[#E50914] via-red-500 to-amber-500" />

          <div className="p-4 sm:p-5">
            {/* Header & LGPD Badge */}
            <div className="flex items-start justify-between gap-3 mb-2.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E50914]/15 border border-[#E50914]/30 flex items-center justify-center shrink-0 text-[#E50914]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Privacidade & LGPD</span>
                    <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white/10 text-emerald-400 border border-emerald-500/20">
                      100% Conforme
                    </span>
                  </h3>
                  <p className="text-[11px] text-gray-400">
                    Transparência e segurança para você e seu negócio.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAcceptEssentialOnly}
                aria-label="Dispensar com essenciais"
                className="text-gray-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
                title="Fechar mantendo apenas os essenciais"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Standard Notice View */}
            {!showPreferences ? (
              <>
                <p className="text-xs text-gray-300 leading-relaxed mb-3.5">
                  Utilizamos cookies e tecnologias seguras em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei 13.709/18)</strong> para aprimorar sua experiência, otimizar campanhas de tráfego e garantir a máxima segurança dos dados corporativos.
                </p>

                {/* Actions Grid */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
                  <button
                    type="button"
                    id="cookie-accept-all-btn"
                    onClick={handleAcceptAll}
                    className="flex-1 py-2 px-3.5 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold rounded-xl shadow-lg shadow-red-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] text-center cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Aceitar Todos</span>
                  </button>

                  <button
                    type="button"
                    id="cookie-accept-essential-btn"
                    onClick={handleAcceptEssentialOnly}
                    className="py-2 px-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs font-semibold rounded-xl border border-white/10 transition-all duration-200 text-center cursor-pointer"
                  >
                    Apenas Essenciais
                  </button>

                  <button
                    type="button"
                    id="cookie-customize-btn"
                    onClick={() => setShowPreferences(true)}
                    className="py-2 px-2.5 text-gray-400 hover:text-gray-200 text-xs font-medium rounded-xl hover:bg-white/5 transition-all duration-200 flex items-center justify-center gap-1 text-center cursor-pointer"
                  >
                    <Settings2 className="w-3.5 h-3.5" />
                    <span>Gerenciar</span>
                  </button>
                </div>

                {/* Sub-links */}
                <div className="mt-2.5 pt-2.5 border-t border-gray-800/60 flex items-center justify-between text-[10px] text-gray-400">
                  <button
                    type="button"
                    onClick={() => setShowPolicyModal(true)}
                    className="hover:text-red-400 underline underline-offset-2 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Entenda nossa Política de Privacidade</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </button>
                  <span className="text-gray-500">Agência 053 Digital</span>
                </div>
              </>
            ) : (
              /* Granular Preferences View */
              <div className="space-y-3 animate-fadeIn">
                <p className="text-xs text-gray-400 mb-2">
                  Personalize quais categorias de cookies você autoriza em sua navegação:
                </p>

                {/* Category 1: Essential (Required) */}
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">Cookies Estritamente Necessários</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-300 font-bold rounded">
                        Obrigatório
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                      Garantem o funcionamento básico, segurança e conformidade da plataforma.
                    </p>
                  </div>
                  <div className="w-9 h-5 bg-emerald-600/80 rounded-full relative flex items-center px-1 cursor-not-allowed opacity-80">
                    <div className="w-3.5 h-3.5 bg-white rounded-full ml-auto" />
                  </div>
                </div>

                {/* Category 2: Analytics */}
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <span className="text-xs font-bold text-white">Métricas & Desempenho</span>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                      Coleta anônima de estatísticas para otimização contínua de velocidade e layout.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreferences((p) => ({ ...p, analytics: !p.analytics }))}
                    className={`w-9 h-5 rounded-full relative transition-colors duration-200 p-0.5 flex items-center cursor-pointer ${
                      preferences.analytics ? 'bg-[#E50914]' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 bg-white rounded-full transition-transform duration-200 ${
                        preferences.analytics ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Category 3: Marketing / Ads Conversion */}
                <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <span className="text-xs font-bold text-white">Marketing & Conversão</span>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                      Mensuração precisa de anúncios (Meta e Google) para atração de clientes locais.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                    className={`w-9 h-5 rounded-full relative transition-colors duration-200 p-0.5 flex items-center cursor-pointer ${
                      preferences.marketing ? 'bg-[#E50914]' : 'bg-gray-700'
                    }`}
                  >
                    <div
                      className={`w-3.5 h-3.5 bg-white rounded-full transition-transform duration-200 ${
                        preferences.marketing ? 'translate-x-4' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Preferences Actions */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="flex-1 py-2 px-3 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer text-center"
                  >
                    Salvar Minhas Preferências
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowPreferences(false)}
                    className="py-2 px-3 bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium rounded-xl border border-white/10 transition-colors cursor-pointer"
                  >
                    Voltar
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>
      )}

      {/* Full LGPD & Privacy Policy Modal */}
      {showPolicyModal && (
        <div
          id="privacy-policy-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
        >
          <div className="w-full max-w-2xl max-h-[85vh] bg-[#0f1117] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-gray-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-gray-800 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#E50914]/20 border border-[#E50914]/40 flex items-center justify-center text-[#E50914]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Política de Privacidade & LGPD</h3>
                  <p className="text-xs text-gray-400">Agência 053 Digital • Lei Geral de Proteção de Dados (13.709/2018)</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content with Scroll */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
              <div className="p-3 rounded-xl bg-[#E50914]/10 border border-[#E50914]/20 text-xs text-gray-200">
                <strong className="text-white block mb-0.5">Compromisso Ético e Profissional da Agência 053:</strong>
                A proteção e o sigilo das informações dos nossos clientes e dos leads captados por nossas estratégias são tratados com o mais alto rigor técnico e jurídico. Nunca comercializamos ou compartilhamos dados com terceiros não autorizados.
              </div>

              <section className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">1. Controlador dos Dados</h4>
                <p>
                  O controlador responsável pelo tratamento de dados nos termos da LGPD é a <strong>Agência 053 Digital LTDA</strong> (CNPJ: 53.053.053/0001-53), com sede de atendimento virtual em todo o território nacional.
                </p>
              </section>

              <section className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">2. Dados Coletados e Finalidade</h4>
                <p>
                  Coletamos apenas as informações estritamente necessárias para prestação dos nossos serviços de marketing e tráfego pago:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-gray-300">
                  <li><strong>Dados de Contato:</strong> Nome, telefone/WhatsApp, e-mail e segmento da empresa, fornecidos voluntariamente via formulário para elaboração de diagnóstico estratégico gratuito.</li>
                  <li><strong>Dados de Navegação (Cookies):</strong> Identificadores anônimos de sessão, páginas visitadas e conversão em anúncios para fins de melhoria de desempenho e auditoria técnica de campanhas.</li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">3. Seus Direitos como Titular (Art. 18 da LGPD)</h4>
                <p>
                  A qualquer momento, você tem o direito garantido por lei de solicitar:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-gray-300">
                  <li>Confirmação da existência de tratamento e acesso aos dados armazenados;</li>
                  <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                  <li>Eliminação dos dados pessoais tratados com o seu consentimento;</li>
                  <li>Revogação fácil e imediata do consentimento concedido.</li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h4 className="text-sm font-bold text-white">4. Canal Direto do Encarregado de Dados (DPO)</h4>
                <p>
                  Para exercer seus direitos ou esclarecer qualquer dúvida referente ao tratamento de informações, entre em contato direto com o nosso time de conformidade pelo e-mail:
                </p>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-red-400">
                  {BRAND_EMAIL} (Assunto: Privacidade & LGPD)
                </div>
              </section>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-800 bg-white/[0.02] flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Última atualização: Setembro de 2026
              </span>

              <button
                type="button"
                onClick={() => setShowPolicyModal(false)}
                className="py-2 px-5 bg-[#E50914] hover:bg-[#c90812] text-white text-xs font-bold rounded-xl shadow-md transition-colors cursor-pointer"
              >
                Entendi e Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
