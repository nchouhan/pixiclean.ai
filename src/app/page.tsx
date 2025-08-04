"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Zap, 
  Sparkles, 
  Star, 
  Smartphone, 
  Users, 
  Award,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import LottieBackground from "../components/LottieBackground";
import PlaceholderScreenshot from "../components/PlaceholderScreenshot";
import AppScreenshot from "../components/AppScreenshot";
import ShufflingScreenshot from "../components/ShufflingScreenshot";
import MultiShufflingScreenshot from "../components/MultiShufflingScreenshot";
import Logo from "../components/Logo";
import CookieSettingsButton from "../components/CookieSettingsButton";
import { usePageTracking, useSectionTracking, useEngagementTracking, useVisibilityTracking, useDeviceTracking } from "../hooks/useAnalytics";
import { trackAppDownload, trackCTAClick, trackAppStoreRedirect, trackFeatureInteraction } from "../utils/analytics";

export default function Home() {
  // Analytics hooks
  usePageTracking();
  useEngagementTracking();
  useVisibilityTracking();
  useDeviceTracking();

  // Section tracking refs
  const heroSectionRef = useSectionTracking('hero_section');
  const featuresSectionRef = useSectionTracking('features_overview');
  const detailedFeaturesSectionRef = useSectionTracking('detailed_features');
  const differentiatorsSectionRef = useSectionTracking('why_pixieclean');
  const ctaSectionRef = useSectionTracking('final_cta');

  // Download tracking functions
  const handleAppDownload = (platform: 'ios' | 'android', location: string, url: string) => {
    // Track the click
    trackAppDownload(platform, location);
    trackCTAClick(`Download ${platform.toUpperCase()}`, location, platform);
    trackAppStoreRedirect(platform, location);
    
    // Open the app store
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const features = [
    {
      title: "Find Your Perfect Shot",
      description: "No more comparing burst photos. We'll instantly find the one where everyone looks great",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      highlight: "AI-powered perfection"
    },
    {
      title: "Smart Space Saver",
      description: "Resize photos for any screen (phone, TV, laptop) without losing quality.",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      highlight: "Save up to 90% space"
    },
    {
      title: "Duplicate Cleaner",
      description: "Instantly find and remove similar & identical photos.",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      highlight: "One-tap cleaning"
    }
    // {
    //   title: "Achievements Dashboard",
    //   description: "Track deleted photos and MB saved. Celebrate progress.",
    //   icon: Award,
    //   color: "from-green-500 to-emerald-500",
    //   highlight: "Track your progress"
    // }
  ];

  const detailedFeatures = [
    {
      title: "Smart Duplicate Detection",
      subtitle: "AI-powered precision that finds and removes clutter, so you don't have to.",
      description: "PixieClean uses on-device AI to detect both exact and near-duplicate photos in seconds. Keep the best, delete the rest — and free up space instantly.",
      icon: Star,
      stats: ["✅ 90% faster", "🧠 AI-Level Accuracy", "🔒 100% On-Device"],
      screenshot: {
        title: "Duplicate Detection",
        description: "AI-powered duplicate finder",
        images: [
          "/images/screenshots/duplicate-detection1.png",
          "/images/screenshots/duplicate-detection2.png",
          "/images/screenshots/duplicate-detection3.png"
        ],
        alt: "Duplicate Detection Screenshot",
        isMultiShuffling: true
      }
    },
    {
      title: "Device-Based Optimization",
      subtitle: "Choose your screen. PixieClean does the rest.",
      description: "Pick where you’ll view your photos — phone, laptop, or TV — and PixieClean resizes them automatically to balance clarity and storage savings.",
      icon: Smartphone,
      stats: ["💾 Save up to 90% space", "🔍 Maintain quality", "📱💻📺 Built for all screens"],
      screenshot: {
        title: "Device Optimization",
        description: "Smart resizing for any device",
        images: [
          "/images/screenshots/device-optimisation1.png",
          "/images/screenshots/device-optimisation2.png",
          "/images/screenshots/device-optimisation3.png"
        ],
        alt: "Device Optimization Screenshot",
        isMultiShuffling: true
      }
    },
    {
      title: "Best Shot Selection",
      subtitle: "Always keep your sharpest, most beautiful photos",
      description: "PixieClean’s AI finds the sharpest, most vibrant photo from every group — so you can skip the scroll, and keep the moments that matter.",
      icon: Award,
      stats: ["🔍 Smarter than burst mode", "⭐ “Best Shot” badge built-in", "✅ One-tap keep or delete"],
      screenshot: {
        title: "Best Shot Selector",
        description: "AI-powered best shot detection",
        src1: "/images/screenshots/best-shot-selector1.PNG",
        src2: "/images/screenshots/best-shot-selector2.PNG",
        alt: "Best Shot Selector Screenshot",
        isShuffling: true
      }
    }
  ];

  const differentiators = [
    {
      icon: Shield,
      title: "Private by Design",
      description: "Your photos stay on your phone — 100% private, 0% cloud risk."
    },
    {
      icon: Zap,
      title: "Clean in Seconds",
      description: "Clean up 1,000 photos in minutes — no cloud, no lag."
    },
    {
      icon: Sparkles,
      title: "Designed for Delight",
      description: "From swipes to sparkles, every interaction is joyful. Pixie is built for the love of photos."
    }
  ];

  return (
            <div className="min-h-screen bg-black text-white" itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900"></div>
        
        {/* Lottie Animation Background */}
        <LottieBackground className="z-0" />
        
        {/* Content Overlay */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo */}
          <Logo className="mx-auto mb-8" size={120} />
          
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            itemProp="headline"
          >
            Moments Matter.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Love your photo library again. Effortlessly Clean, Organise, Optimise — all on-device.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => handleAppDownload('ios', 'hero_primary', 'https://apps.apple.com/in/app/pixieclean/id6745176117')}
              className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 glow-hover"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </button>
            
            <button 
              onClick={() => handleAppDownload('android', 'hero_primary', 'https://play.google.com/store/apps/details?id=com.nclab.pixieclean')}
              className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 glow-hover"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Get it on Google Play
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section ref={featuresSectionRef} className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Smarter Photo Cleanup Starts Here
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => trackFeatureInteraction(feature.title, 'card_click', 'features_overview')}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-3">{feature.description}</p>
                <span className="text-sm text-purple-400 font-medium">{feature.highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features Section */}
      <section ref={detailedFeaturesSectionRef} className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pixie in Action
          </motion.h2>
          
          <div className="space-y-20">
            {detailedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                      <p className="text-purple-400 font-medium">{feature.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {feature.stats.map((stat, statIndex) => (
                      <span
                        key={statIndex}
                        className="px-4 py-2 bg-gray-800/50 rounded-full text-sm font-medium border border-gray-700/50"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Screenshot */}
                <div className="flex-1 flex justify-center">
                  {feature.screenshot.isMultiShuffling ? (
                    <MultiShufflingScreenshot
                      images={feature.screenshot.images}
                      alt={feature.screenshot.alt}
                      delay={0.2}
                      shuffleInterval={4000}
                    />
                  ) : feature.screenshot.isShuffling ? (
                    <ShufflingScreenshot
                      src1={feature.screenshot.src1}
                      src2={feature.screenshot.src2}
                      alt={feature.screenshot.alt}
                      delay={0.2}
                      shuffleInterval={4000}
                    />
                  ) : feature.screenshot.src1 ? (
                    <AppScreenshot
                      src={feature.screenshot.src1}
                      alt={feature.screenshot.alt}
                      delay={0.2}
                    />
                  ) : (
                    <PlaceholderScreenshot
                      title={feature.screenshot.title}
                      description={feature.screenshot.description}
                      delay={0.2}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PixieClean Section */}
      <section ref={differentiatorsSectionRef} className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Built to Delight. Designed to Protect.
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaSectionRef} className="py-20 px-4 bg-gradient-to-b from-black to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get PixieClean
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every photo cleaned is a memory made brighter ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => handleAppDownload('ios', 'final_cta', 'https://apps.apple.com/in/app/pixieclean/id6745176117')}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 glow-hover"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                onClick={() => handleAppDownload('android', 'final_cta', 'https://play.google.com/store/apps/details?id=com.nclab.pixieclean')}
                className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 glow-hover"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              {/* Product Hunt Badge */}
              <div className="flex justify-center">
                <a 
                  href="https://www.producthunt.com/products/pixieclean?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-pixieclean" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackFeatureInteraction('Product Hunt Badge', 'external_link_click', 'final_cta')}
                  className="transition-transform hover:scale-105"
                >
                  <img 
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1001148&theme=light&t=1754311708901" 
                    alt="PixieClean - Clean, organize & optimize your photos | Product Hunt" 
                    style={{ width: '250px', height: '54px' }} 
                    width="250" 
                    height="54" 
                  />
                </a>
              </div>
              
              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
                <Link 
                  href="/privacy" 
                  className="hover:text-white transition-colors"
                  onClick={() => trackFeatureInteraction('Privacy Policy', 'footer_link_click', 'final_cta')}
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="hover:text-white transition-colors"
                  onClick={() => trackFeatureInteraction('Terms of Service', 'footer_link_click', 'final_cta')}
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/support" 
                  className="hover:text-white transition-colors"
                  onClick={() => trackFeatureInteraction('Help & Support', 'footer_link_click', 'final_cta')}
                >
                  Help & Support
                </Link>
                <CookieSettingsButton 
                  className="hover:text-white transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
