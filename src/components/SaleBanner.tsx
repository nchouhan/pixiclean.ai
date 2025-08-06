'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';
import { trackFeatureInteraction } from '../utils/analytics';
import { useLocationPricing } from '../hooks/useLocationPricing';

interface SaleBannerProps {
  onClose?: () => void;
}

export default function SaleBanner({ onClose }: SaleBannerProps) {
  const { pricingInfo, isLoading } = useLocationPricing();
  
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const [isAndroidSaleLive, setIsAndroidSaleLive] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Android sale start time: August 7th, 2025 00:00 GMT
  const androidSaleStart = new Date('2025-08-07T00:00:00Z').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeUntilAndroidSale = androidSaleStart - currentTime;
      
      if (timeUntilAndroidSale <= 0) {
        setIsAndroidSaleLive(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeUntilAndroidSale / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeUntilAndroidSale % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeUntilAndroidSale % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeUntilAndroidSale % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [androidSaleStart]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const handleDownloadClick = (platform: 'ios' | 'android') => {
    trackFeatureInteraction(`Sale Download ${platform.toUpperCase()}`, 'sale_banner_click', 'sale_banner');
    
    if (platform === 'ios') {
      window.open('https://apps.apple.com/in/app/pixieclean/id6745176117', '_blank');
    } else if (platform === 'android' && isAndroidSaleLive) {
      window.open('https://play.google.com/store/apps/details?id=com.nclab.pixieclean', '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Sale Content */}
            <div className="flex items-center gap-4 flex-1">
              <div className="flex-shrink-0">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-bold bg-white/20 px-2 py-1 rounded-full">
                    🎉 LIMITED TIME OFFER
                  </span>
                  <span className="line-through text-gray-300">{pricingInfo.originalPriceFormatted}</span>
                  <span className="text-sm font-semibold">
                    FREE DOWNLOAD
                  </span>
                </div>
                
                                  <div className="flex items-center gap-6 text-sm">
                    {/* iOS Status - Always FREE */}
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <div>
                        {/* <div className="flex items-center gap-2">
                          <span className="line-through text-gray-300">{pricingInfo.originalPriceFormatted}</span>
                          <span className="text-green-300 font-bold">FREE</span>
                        </div> */}
                        <span className="text-xs text-gray-300">iOS - Limited Time</span>
                      </div>
                    </div>
                    
                    {/* Android Status - Countdown or FREE */}
                    <div className="flex items-center gap-3">
                      {isAndroidSaleLive ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-green-300" />
                          <div>
                            {/* <div className="flex items-center gap-2">
                              <span className="line-through text-gray-300">{pricingInfo.originalPriceFormatted}</span>
                              <span className="text-green-300 font-bold">FREE</span>
                            </div> */}
                            <span className="text-xs text-gray-300">Android - Limited Time</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <Clock className="w-4 h-4 text-yellow-300 animate-pulse" />
                          <div>
                            {/* <div className="flex items-center gap-2">
                              <span className="text-yellow-300 font-bold">{pricingInfo.originalPriceFormatted} → FREE</span>
                            </div> */}
                            <span className="text-xs text-gray-300">Android Sale Starts In:</span>
                            <div className="flex gap-1 font-mono text-xs mt-1">
                              <span className="bg-black/20 px-1 rounded">
                                {timeLeft.days.toString().padStart(2, '0')}d
                              </span>
                              <span className="bg-black/20 px-1 rounded">
                                {timeLeft.hours.toString().padStart(2, '0')}h
                              </span>
                              <span className="bg-black/20 px-1 rounded">
                                {timeLeft.minutes.toString().padStart(2, '0')}m
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleDownloadClick('ios')}
                className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs line-through text-gray-500">{pricingInfo.originalPriceFormatted}</div>
                  <div className="font-bold">FREE NOW</div>
                </div>
                <ArrowRight className="w-3 h-3" />
              </button>
              
              {isAndroidSaleLive ? (
                <button
                  onClick={() => handleDownloadClick('android')}
                  className="flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs line-through text-gray-500">{pricingInfo.originalPriceFormatted}</div>
                    <div className="font-bold">FREE NOW</div>
                  </div>
                  <ArrowRight className="w-3 h-3" />
                </button>
              ) : (
                <button
                  disabled
                  className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-semibold text-sm cursor-not-allowed opacity-80"
                >
                  <Clock className="w-4 h-4 animate-pulse" />
                  <div className="text-left">
                    <div className="text-xs">{pricingInfo.originalPriceFormatted} → FREE</div>
                    <div className="font-bold">{timeLeft.days > 0 ? `${timeLeft.days}d ${timeLeft.hours}h` : `${timeLeft.hours}h ${timeLeft.minutes}m`}</div>
                  </div>
                </button>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white transition-colors ml-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 