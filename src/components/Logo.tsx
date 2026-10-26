import React from 'react';
import { useSiteConfig } from '../context/SiteConfigContext';

interface LogoProps {
  className?: string;
  isLightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', isLightMode = false }) => {
  const { config } = useSiteConfig();

  if (config.logoType === 'image' && config.logoImageUrl) {
    return (
      <div className={`flex items-center select-none group cursor-pointer ${className}`}>
        <img
          src={config.logoImageUrl}
          alt={`${config.logoTextPrefix || 'Agência'} ${config.logoTextHighlight || '053'} ${config.logoTextSuffix || 'Digital'}`}
          className="h-9 sm:h-10 max-w-[180px] object-contain transition-transform group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 select-none group cursor-pointer ${className}`}>
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black italic text-xl sm:text-2xl tracking-tight transition-colors ${
              isLightMode ? 'text-gray-900' : 'text-white'
            }`}
          >
            {config.logoTextPrefix || 'AGÊNCIA'}
          </span>
          <span className="bg-[#E50914] text-white font-black italic text-xl sm:text-2xl px-2 py-0.5 rounded -skew-x-12 shadow-sm shadow-red-900/40 transform transition-transform group-hover:scale-105">
            {config.logoTextHighlight || '053'}
          </span>
        </div>
        <span
          className={`text-[9px] font-bold uppercase tracking-[0.28em] pl-0.5 mt-0.5 transition-colors ${
            isLightMode ? 'text-gray-600' : 'text-gray-400'
          }`}
        >
          {config.logoTextSuffix || 'DIGITAL'}
        </span>
      </div>
    </div>
  );
};
