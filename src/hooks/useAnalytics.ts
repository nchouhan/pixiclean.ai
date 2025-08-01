'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackTimeOnPage, trackSectionView } from '@/utils/analytics';

// Hook for page view tracking
export const usePageTracking = () => {
  const pathname = usePathname();
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    // Track page view
    trackPageView(pathname);
    
    // Reset start time for new page
    startTimeRef.current = Date.now();

    // Track time on page when leaving
    return () => {
      const timeSpent = Date.now() - startTimeRef.current;
      if (timeSpent > 1000) { // Only track if user spent more than 1 second
        trackTimeOnPage(timeSpent, pathname);
      }
    };
  }, [pathname]);
};

// Hook for scroll-based section tracking
export const useSectionTracking = (sectionName: string, threshold = 0.5) => {
  const elementRef = useRef<HTMLElement>(null);
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasTrackedRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            if (!hasTrackedRef.current) {
              trackSectionView(sectionName);
              hasTrackedRef.current = true;
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, threshold]);

  return elementRef;
};

// Hook for tracking user engagement
export const useEngagementTracking = () => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollY = 0;
    let maxScroll = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((currentScrollY / documentHeight) * 100);

      // Track maximum scroll depth
      if (scrollPercentage > maxScroll) {
        maxScroll = scrollPercentage;
        
        // Track scroll milestones
        if (maxScroll >= 25 && maxScroll < 50) {
          trackSectionView('scroll_25_percent');
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackSectionView('scroll_50_percent');
        } else if (maxScroll >= 75 && maxScroll < 90) {
          trackSectionView('scroll_75_percent');
        } else if (maxScroll >= 90) {
          trackSectionView('scroll_90_percent');
        }
      }

      lastScrollY = currentScrollY;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Set new timeout for scroll end
      scrollTimeout = setTimeout(() => {
        // Track scroll engagement after user stops scrolling
        if (maxScroll > 10) { // Only if user scrolled significantly
          trackSectionView(`scroll_depth_${maxScroll}_percent`);
        }
      }, 1000);
    };

    // Add scroll listener
    let ticking = false;
    const handleScrollThrottled = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      clearTimeout(scrollTimeout);
    };
  }, []);
};

// Hook for tracking time on page with visibility API
export const useVisibilityTracking = () => {
  const visibilityStartRef = useRef<number>(Date.now());
  const totalVisibleTimeRef = useRef<number>(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page became hidden, add to total visible time
        totalVisibleTimeRef.current += Date.now() - visibilityStartRef.current;
      } else {
        // Page became visible, reset start time
        visibilityStartRef.current = Date.now();
      }
    };

    // Track initial state
    if (!document.hidden) {
      visibilityStartRef.current = Date.now();
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track total visible time on unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (!document.hidden) {
        totalVisibleTimeRef.current += Date.now() - visibilityStartRef.current;
      }

      // Only track if user spent significant time
      if (totalVisibleTimeRef.current > 3000) {
        trackTimeOnPage(totalVisibleTimeRef.current, window.location.pathname);
      }
    };
  }, []);
};

// Hook for device and browser tracking
export const useDeviceTracking = () => {
  useEffect(() => {
    // Track device info once per session
    const hasTrackedDevice = sessionStorage.getItem('device_tracked');
    if (hasTrackedDevice) return;

    const trackDeviceInfo = () => {
      const userAgent = navigator.userAgent;
      const isMobile = /Mobile|Android|iPhone|iPad/.test(userAgent);
      const isTablet = /iPad|Android.*(?!Mobile)/.test(userAgent);
      const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
      
      const screenSize = `${screen.width}x${screen.height}`;
      const viewportSize = `${window.innerWidth}x${window.innerHeight}`;

      // Track device characteristics
      trackSectionView(`device_${deviceType}`);
      trackSectionView(`screen_${screenSize}`);
      trackSectionView(`viewport_${viewportSize}`);

      // Track connection type if available
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection?.effectiveType) {
          trackSectionView(`connection_${connection.effectiveType}`);
        }
      }

      sessionStorage.setItem('device_tracked', 'true');
    };

    // Track after a short delay to ensure page is loaded
    setTimeout(trackDeviceInfo, 1000);
  }, []);
};