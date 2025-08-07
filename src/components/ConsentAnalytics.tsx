'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { useCookieConsent } from '../contexts/CookieConsentContext';

export default function ConsentAnalytics() {
  const { consent, hasConsented } = useCookieConsent();

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

        // If analytics was just enabled, send page view
        if (newConsent.analytics) {
          window.gtag('config', 'G-7MT1F0ZMGP', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            allow_google_signals: newConsent.marketing,
            allow_ad_personalization_signals: newConsent.marketing,
          });
          console.log('✅ Analytics consent granted - tracking enabled');
        } else {
          console.log('⏸️ Analytics consent denied - tracking disabled');
        }
      }
    };

    window.addEventListener('cookieConsentChanged', handleConsentChange as EventListener);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange as EventListener);
    };
  }, [consent, hasConsented]);

  return (
    <>
      {/* Google Analytics - Always Loaded (Standard Implementation) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7MT1F0ZMGP"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined') {
            // Standard Google Analytics initialization
            window.dataLayer = window.dataLayer || [];
            
            // Wait for gtag to be available
            const initializeAnalytics = () => {
              if (typeof window.gtag === 'function') {
                // Initialize with denied consent by default (privacy-first)
                window.gtag('consent', 'default', {
                  analytics_storage: 'denied',
                  ad_storage: 'denied',
                  ad_user_data: 'denied',
                  ad_personalization: 'denied',
                  functionality_storage: 'denied',
                  personalization_storage: 'denied',
                  security_storage: 'granted',
                });

                window.gtag('js', new Date());
                window.gtag('config', 'G-7MT1F0ZMGP', {
                  send_page_view: false, // Don't send page view until consent
                });
                
                console.log('✅ Google Analytics script loaded (consent required)');
              } else {
                // Retry after a short delay
                setTimeout(initializeAnalytics, 100);
              }
            };
            
            // Start initialization
            initializeAnalytics();
          }
        }}
      />
    </>
  );
}