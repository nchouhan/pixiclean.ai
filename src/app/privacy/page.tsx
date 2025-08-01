"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePageTracking, useEngagementTracking, useVisibilityTracking } from "../../hooks/useAnalytics";
import { trackFeatureInteraction } from "../../utils/analytics";



export default function PrivacyPage() {
  // Analytics hooks
  usePageTracking();
  useEngagementTracking();
  useVisibilityTracking();
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          onClick={() => trackFeatureInteraction('Back to Home', 'navigation_click', 'privacy_page')}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            At PixieClean, we believe your privacy is fundamental. This Privacy Policy explains how we handle your data when you use our app.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Processing</h2>
          <p className="text-gray-300 mb-6">
            PixieClean processes all your photos locally on your device. We do not upload, store, or transmit any of your photos to external servers. All processing happens securely on your device using advanced AI algorithms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookie Usage</h2>
          <p className="text-gray-300 mb-6">
            We use cookies to enhance your experience on our website. We categorize cookies into different types:
          </p>
          <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
            <li><strong>Necessary Cookies:</strong> Essential for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website (only with your consent)</li>
            <li><strong>Marketing Cookies:</strong> Used for advertising and social media features (only with your consent)</li>
            <li><strong>Preference Cookies:</strong> Remember your choices and settings (only with your consent)</li>
          </ul>
          <p className="text-gray-300 mb-6">
            You can manage your cookie preferences at any time using our cookie settings tool available in the website footer.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Don&apos;t Collect from the App</h2>
          <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
            <li>Your photos or image data</li>
            <li>Personal information</li>
            <li>Device identifiers</li>
            <li>Location data</li>
            <li>Contact information</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How PixieClean Works</h2>
          <p className="text-gray-300 mb-6">
            When you use PixieClean, our AI algorithms analyze your photos directly on your device to:
          </p>
          <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
            <li>Identify duplicate and similar photos</li>
            <li>Select the best quality photos from groups</li>
            <li>Optimize photos for different device sizes</li>
            <li>Organize your photo library</li>
          </ul>
          <p className="text-gray-300 mb-6">
            All of this processing happens entirely on your device. No data leaves your phone or tablet.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Website Analytics</h2>
          <p className="text-gray-300 mb-6">
            With your consent, we use Google Analytics to understand how visitors use our website. This helps us improve our site and content. This data is anonymized and does not personally identify you. You can opt-out of analytics tracking through our cookie consent banner.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">App Store Analytics</h2>
          <p className="text-gray-300 mb-6">
            We may receive basic analytics from the App Store and Google Play Store, such as download numbers and crash reports. This data is provided by the stores themselves and does not contain any personal information or photo data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-300 mb-6">
            PixieClean does not use any third-party analytics, advertising, or tracking services. Your photo data never leaves your device.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="text-gray-300 mb-6">
            Since all app processing happens on your device, your photos are never transmitted over the internet. This provides the highest level of security for your personal data. For our website, we use industry-standard security measures to protect any data we collect through cookies (with your consent).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Children&apos;s Privacy</h2>
          <p className="text-gray-300 mb-6">
            PixieClean does not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-300 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy, please contact us through the app store listings or visit our support page.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
} 