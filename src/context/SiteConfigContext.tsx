import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteConfig } from '../types/config';
import { DEFAULT_SITE_CONFIG } from '../data/defaultConfig';

const STORAGE_KEY = 'agencia_053_site_config_v6';

interface SiteConfigContextType {
  config: SiteConfig;
  updateConfig: (newConfig: Partial<SiteConfig>) => void;
  saveConfig: (fullConfig: SiteConfig) => void;
  resetToDefaults: () => void;
  exportConfig: () => void;
  importConfig: (jsonString: string) => boolean;
  getWhatsAppLink: (customMessage?: string) => string;
  lastSavedAt: Date | null;
}

const SiteConfigContext = createContext<SiteConfigContextType | undefined>(undefined);

export const SiteConfigProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<SiteConfig>(() => {
    try {
      let saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) {
        // Check older versions v5, v4, v3, v2
        const prevSaved =
          localStorage.getItem('agencia_053_site_config_v5') ||
          localStorage.getItem('agencia_053_site_config_v4') ||
          localStorage.getItem('agencia_053_site_config_v3') ||
          localStorage.getItem('agencia_053_site_config_v2');
        if (prevSaved) {
          try {
            const prevParsed = JSON.parse(prevSaved);
            const migrated: SiteConfig = {
              ...DEFAULT_SITE_CONFIG,
              ...prevParsed,
              email: DEFAULT_SITE_CONFIG.email,
              whatsappNumber: DEFAULT_SITE_CONFIG.whatsappNumber,
              whatsappDisplay: DEFAULT_SITE_CONFIG.whatsappDisplay,
              plans: DEFAULT_SITE_CONFIG.plans,
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
            return migrated;
          } catch {
            // ignore JSON parse errors
          }
        }
      }

      if (saved) {
        const parsed = JSON.parse(saved);
        const hasOldPlans = parsed.plans?.some((p: any) => p.id === 'start-local' || p.name === 'Plano Start Local');
        const activePlans = hasOldPlans || !parsed.plans?.length ? DEFAULT_SITE_CONFIG.plans : parsed.plans;

        return {
          ...DEFAULT_SITE_CONFIG,
          ...parsed,
          email: DEFAULT_SITE_CONFIG.email,
          whatsappNumber: DEFAULT_SITE_CONFIG.whatsappNumber,
          whatsappDisplay: DEFAULT_SITE_CONFIG.whatsappDisplay,
          services: parsed.services?.length ? parsed.services : DEFAULT_SITE_CONFIG.services,
          plans: activePlans,
        };
      }
    } catch (e) {
      console.warn('Erro ao carregar configurações do localStorage:', e);
    }
    return DEFAULT_SITE_CONFIG;
  });

  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);

  // Auto-sync across storage if changed in another tab or window
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setConfig(JSON.parse(e.newValue));
        } catch (err) {
          console.error(err);
        }
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const saveConfig = (fullConfig: SiteConfig) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fullConfig));
      setConfig(fullConfig);
      setLastSavedAt(new Date());
    } catch (e) {
      console.error('Falha ao salvar no localStorage:', e);
    }
  };

  const updateConfig = (newPartial: Partial<SiteConfig>) => {
    const updated = { ...config, ...newPartial };
    saveConfig(updated);
  };

  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConfig(DEFAULT_SITE_CONFIG);
    setLastSavedAt(new Date());
  };

  const exportConfig = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(config, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `agencia053_config_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importConfig = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (typeof parsed !== 'object' || !parsed.whatsappNumber) {
        return false;
      }
      const merged: SiteConfig = {
        ...DEFAULT_SITE_CONFIG,
        ...parsed,
        services: parsed.services?.length ? parsed.services : DEFAULT_SITE_CONFIG.services,
        plans: parsed.plans?.length ? parsed.plans : DEFAULT_SITE_CONFIG.plans,
      };
      saveConfig(merged);
      return true;
    } catch (e) {
      console.error('Erro ao importar JSON:', e);
      return false;
    }
  };

  const getWhatsAppLink = (customMessage?: string): string => {
    let cleanNumber = (config.whatsappNumber || '5553981065074').replace(/\D/g, '');
    if ((cleanNumber.length === 11 || cleanNumber.length === 10) && !cleanNumber.startsWith('55')) {
      cleanNumber = `55${cleanNumber}`;
    }
    const message = customMessage || config.defaultWhatsAppMessage || 'Olá, Agência 053!';
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <SiteConfigContext.Provider
      value={{
        config,
        updateConfig,
        saveConfig,
        resetToDefaults,
        exportConfig,
        importConfig,
        getWhatsAppLink,
        lastSavedAt,
      }}
    >
      {children}
    </SiteConfigContext.Provider>
  );
};

export const useSiteConfig = (): SiteConfigContextType => {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error('useSiteConfig deve ser usado dentro de um SiteConfigProvider');
  }
  return context;
};
