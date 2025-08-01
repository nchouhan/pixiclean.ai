'use client';

import React from 'react';
import { Settings } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

interface CookieSettingsButtonProps {
  className?: string;
  variant?: 'button' | 'link';
}

export default function CookieSettingsButton({ 
  className = '', 
  variant = 'link' 
}: CookieSettingsButtonProps) {
  const { resetConsent } = useCookieConsent();

  const handleClick = () => {
    resetConsent();
  };

  if (variant === 'button') {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-200 ${className}`}
      >
        <Settings className="w-4 h-4" />
        Cookie Settings
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors ${className}`}
    >
      <Settings className="w-3 h-3" />
      Cookie Settings
    </button>
  );
}