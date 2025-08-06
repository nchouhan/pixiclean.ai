"use client";

import { useState, useEffect } from 'react';
import { detectUserLocation, getPricingInfo, PricingInfo } from '../utils/pricing';

export const useLocationPricing = () => {
  const [pricingInfo, setPricingInfo] = useState<PricingInfo>({
    originalPrice: '4.99',
    originalPriceFormatted: '$4.99',
    currency: 'USD',
    currencySymbol: '$',
    isIndianUser: false
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        setIsLoading(true);
        const isIndianUser = await detectUserLocation();
        const pricing = getPricingInfo(isIndianUser);
        setPricingInfo(pricing);
      } catch (error) {
        console.warn('Location detection failed, using default USD pricing:', error);
        // Keep default USD pricing
      } finally {
        setIsLoading(false);
      }
    };

    detectLocation();
  }, []);

  return { pricingInfo, isLoading };
}; 