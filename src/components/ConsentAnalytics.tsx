'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

export default function ConsentAnalytics() {
  const { consent, hasConsented } = useCookieConsent();
  const [analyticsLoaded, setAnalyticsLoaded] = useState(false);

  useEffect(() => {
    // Listen for consent changes
    const handleConsentChange = (event: CustomEvent) => {
      const newConsent = event.detail;
      
      if (typeof window !== 'undefined' && window.gtag) {
        // Update Google Analytics consent
        window.gtag('consent', 'update', {
          analytics_storage: newConsent.analytics ? 'granted' : 'denied',
          ad_storage: newConsent.marketing ? 'granted' : 'denied',
          ad_user_data: newConsent.marketing ? 'granted' : 'denied',
          ad_personalization: newConsent.marketing ? 'granted' : 'denied',
          functionality_storage: newConsent.preferences ? 'granted' : 'denied',
          personalization_storage: newConsent.preferences ? 'granted' : 'denied',
          security_storage: 'granted', // Always granted for necessary cookies
        });

        // If analytics was just enabled, initialize tracking
        if (newConsent.analytics && !analyticsLoaded) {
          window.gtag('config', 'G-7MT1F0ZMGP', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            allow_google_signals: newConsent.marketing,
            allow_ad_personalization_signals: newConsent.marketing,
            cookie_flags: 'SameSite=None;Secure'
          });
          setAnalyticsLoaded(true);
        }
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, [analyticsLoaded]);

  // Only load Google Analytics if user has consented and analytics is enabled
  const shouldLoadAnalytics = hasConsented && consent?.analytics;

  if (!shouldLoadAnalytics) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7MT1F0ZMGP"
        strategy="afterInteractive"
        onLoad={() => {
          // Initialize consent state
          if (typeof window !== 'undefined') {
            window.dataLayer = window.dataLayer || [];
            
            // Set default consent state
            window.gtag('consent', 'default', {
              analytics_storage: consent?.analytics ? 'granted' : 'denied',
              ad_storage: consent?.marketing ? 'granted' : 'denied',
              ad_user_data: consent?.marketing ? 'granted' : 'denied',
              ad_personalization: consent?.marketing ? 'granted' : 'denied',
              functionality_storage: consent?.preferences ? 'granted' : 'denied',
              personalization_storage: consent?.preferences ? 'granted' : 'denied',
              security_storage: 'granted',
              wait_for_update: 500,
            });

            window.gtag('js', new Date());
            window.gtag('config', 'G-7MT1F0ZMGP', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              allow_google_signals: consent?.marketing || false,
              allow_ad_personalization_signals: consent?.marketing || false,
              cookie_flags: 'SameSite=None;Secure'
            });
            
            setAnalyticsLoaded(true);
          }
        }}
      />
    </>
  );
}