'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type CookieCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export interface CookieConsentContextType {
  consent: CookieConsent | null;
  showBanner: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  resetConsent: () => void;
  hasConsented: boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true, // Always required
  analytics: false,
  marketing: false,
  preferences: false,
};

const CONSENT_STORAGE_KEY = 'pixieclean_cookie_consent';
const CONSENT_VERSION = '1.0';

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const parsedConsent = JSON.parse(stored);
        
        // Check if consent version matches (for future updates)
        if (parsedConsent.version === CONSENT_VERSION) {
          setConsent(parsedConsent.consent);
          setHasConsented(true);
          setShowBanner(false);
        } else {
          // Version mismatch, show banner again
          setShowBanner(true);
        }
      } else {
        // No stored consent, show banner
        setShowBanner(true);
      }
    } catch (error) {
      console.error('Error loading cookie consent:', error);
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    const consentData = {
      consent: newConsent,
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
    };
    
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
      setConsent(newConsent);
      setHasConsented(true);
      setShowBanner(false);
      
      // Trigger consent change event for analytics
      window.dispatchEvent(new CustomEvent('cookieConsentChanged', { 
        detail: newConsent 
      }));
    } catch (error) {
      console.error('Error saving cookie consent:', error);
    }
  };

  const acceptAll = () => {
    const allAccepted: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allAccepted);
  };

  const rejectAll = () => {
    const onlyNecessary: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(onlyNecessary);
  };

  const updateConsent = (partialConsent: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      ...DEFAULT_CONSENT,
      ...consent,
      ...partialConsent,
      necessary: true, // Always required
    };
    saveConsent(newConsent);
  };

  const resetConsent = () => {
    try {
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      setConsent(null);
      setHasConsented(false);
      setShowBanner(true);
    } catch (error) {
      console.error('Error resetting cookie consent:', error);
    }
  };

  const value: CookieConsentContextType = {
    consent,
    showBanner,
    acceptAll,
    rejectAll,
    updateConsent,
    resetConsent,
    hasConsented,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}