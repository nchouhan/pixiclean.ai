'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, BarChart3, Target, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { useCookieConsent } from '../contexts/CookieConsentContext';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, updateConsent } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [customConsent, setCustomConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  if (!showBanner) return null;

  const cookieCategories = [
    {
      id: 'necessary' as const,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. These cannot be disabled.',
      icon: Shield,
      required: true,
      examples: 'Session management, security features, basic functionality',
    },
    {
      id: 'analytics' as const,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website to improve user experience.',
      icon: BarChart3,
      required: false,
      examples: 'Google Analytics, page views, user behavior tracking',
    },
    {
      id: 'marketing' as const,
      title: 'Marketing Cookies',
      description: 'Used to track visitors for personalized advertising and marketing campaigns.',
      icon: Target,
      required: false,
      examples: 'Social media tracking, advertising networks, retargeting',
    },
    {
      id: 'preferences' as const,
      title: 'Preference Cookies',
      description: 'Remember your choices and preferences to provide a personalized experience.',
      icon: Settings,
      required: false,
      examples: 'Language settings, theme preferences, user interface customization',
    },
  ];

  const handleCustomConsent = () => {
    updateConsent(customConsent);
  };

  const toggleCategory = (categoryId: keyof typeof customConsent) => {
    if (categoryId === 'necessary') return; // Cannot toggle necessary cookies
    
    setCustomConsent(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50 text-white"
      >
        <div className="max-w-7xl mx-auto p-4">
          {/* Main Banner */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Icon and Content */}
            <div className="flex items-start gap-4 flex-1">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Cookie className="w-5 h-5 text-purple-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">We Value Your Privacy</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  We use cookies to enhance your browsing experience, analyze our traffic, and provide personalized content. 
                  You can choose which types of cookies to accept. 
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline ml-1">
                    Learn more in our Privacy Policy
                  </Link>
                </p>
                
                {!showDetails && (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Customize Settings
                    <ChevronDown className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={rejectAll}
                className="px-6 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 hover:border-gray-500 rounded-lg transition-all duration-200"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-200"
              >
                Accept All
              </button>
            </div>
          </div>

          {/* Detailed Settings */}
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 overflow-hidden"
              >
                <div className="border-t border-gray-700/50 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-md font-semibold">Cookie Preferences</h4>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ChevronUp className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {cookieCategories.map((category) => {
                      const IconComponent = category.icon;
                      const isEnabled = category.required || customConsent[category.id];
                      
                      return (
                        <div
                          key={category.id}
                          className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <IconComponent className="w-4 h-4 text-purple-400" />
                              </div>
                              <div>
                                <h5 className="font-medium text-sm">{category.title}</h5>
                                {category.required && (
                                  <span className="text-xs text-orange-400">Required</span>
                                )}
                              </div>
                            </div>
                            
                            <button
                              onClick={() => toggleCategory(category.id)}
                              disabled={category.required}
                              className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                                isEnabled
                                  ? 'bg-purple-500'
                                  : 'bg-gray-600'
                              } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                              <span
                                className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                                  isEnabled ? 'translate-x-5' : 'translate-x-1'
                                }`}
                              />
                            </button>
                          </div>
                          
                          <p className="text-xs text-gray-400 mb-2">{category.description}</p>
                          <p className="text-xs text-gray-500">
                            <span className="font-medium">Examples:</span> {category.examples}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-end">
                    <button
                      onClick={() => setShowDetails(false)}
                      className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCustomConsent}
                      className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-200"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}