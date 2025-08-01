// Google Analytics tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize gtag if not available
export const gtag = (...args: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args);
  }
};

// Page view tracking
export const trackPageView = (url: string, title?: string) => {
  gtag('config', 'G-7MT1F0ZMGP', {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

// App download tracking
export const trackAppDownload = (platform: 'ios' | 'android', location: string) => {
  gtag('event', 'app_download_click', {
    event_category: 'App Downloads',
    event_label: platform.toUpperCase(),
    app_platform: platform,
    click_location: location,
    value: 1,
  });

  // Also track as conversion
  gtag('event', 'conversion', {
    send_to: 'G-7MT1F0ZMGP',
    event_category: 'Conversions',
    event_label: `${platform}_download_click`,
    value: 1,
  });
};

// Feature interaction tracking
export const trackFeatureInteraction = (feature: string, action: string, location?: string) => {
  gtag('event', 'feature_interaction', {
    event_category: 'User Engagement',
    event_label: feature,
    interaction_type: action,
    page_location: location || window.location.pathname,
  });
};

// Section scroll tracking
export const trackSectionView = (section: string) => {
  gtag('event', 'section_view', {
    event_category: 'User Engagement',
    event_label: section,
    page_path: window.location.pathname,
  });
};

// Time on page tracking
export const trackTimeOnPage = (timeSpent: number, page: string) => {
  gtag('event', 'page_engagement', {
    event_category: 'User Engagement',
    event_label: 'time_on_page',
    value: Math.round(timeSpent / 1000), // Convert to seconds
    page_path: page,
  });
};

// CTA button clicks
export const trackCTAClick = (buttonText: string, location: string, platform?: string) => {
  gtag('event', 'cta_click', {
    event_category: 'CTA Interactions',
    event_label: buttonText,
    button_location: location,
    app_platform: platform || 'unknown',
  });
};

// Email/contact interactions
export const trackContactInteraction = (type: 'email' | 'support', location: string) => {
  gtag('event', 'contact_interaction', {
    event_category: 'Contact',
    event_label: type,
    interaction_location: location,
  });
};

// Social sharing (if implemented)
export const trackSocialShare = (platform: string, content: string) => {
  gtag('event', 'share', {
    method: platform,
    content_type: 'website',
    item_id: content,
  });
};

// Search functionality (if implemented)
export const trackSearch = (searchTerm: string, results?: number) => {
  gtag('event', 'search', {
    search_term: searchTerm,
    event_category: 'Site Search',
    value: results || 0,
  });
};

// Error tracking
export const trackError = (error: string, location: string) => {
  gtag('event', 'exception', {
    description: error,
    fatal: false,
    page_location: location,
  });
};

// User flow tracking
export const trackUserFlow = (step: string, funnel: string) => {
  gtag('event', 'user_flow', {
    event_category: 'User Journey',
    event_label: funnel,
    flow_step: step,
    page_path: window.location.pathname,
  });
};

// Performance tracking
export const trackPerformance = (metric: string, value: number, unit: string) => {
  gtag('event', 'performance_metric', {
    event_category: 'Performance',
    event_label: metric,
    value: value,
    custom_parameter_unit: unit,
  });
};

// Enhanced ecommerce for app downloads (treating as products)
export const trackAppStoreView = (platform: 'ios' | 'android') => {
  gtag('event', 'view_item', {
    currency: 'USD',
    value: 0,
    items: [
      {
        item_id: `pixieclean_${platform}`,
        item_name: `PixieClean ${platform.toUpperCase()} App`,
        item_category: 'Mobile Apps',
        item_variant: platform,
        price: 0,
        quantity: 1,
      },
    ],
  });
};

// App store redirect tracking
export const trackAppStoreRedirect = (platform: 'ios' | 'android', source: string) => {
  gtag('event', 'app_store_redirect', {
    event_category: 'App Store Traffic',
    event_label: platform.toUpperCase(),
    traffic_source: source,
    outbound: true,
  });

  // Track as enhanced ecommerce purchase intent
  gtag('event', 'add_to_cart', {
    currency: 'USD',
    value: 0,
    items: [
      {
        item_id: `pixieclean_${platform}`,
        item_name: `PixieClean ${platform.toUpperCase()} App`,
        item_category: 'Mobile Apps',
        item_variant: platform,
        price: 0,
        quantity: 1,
      },
    ],
  });
};