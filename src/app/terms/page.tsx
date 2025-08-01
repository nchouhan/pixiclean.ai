"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePageTracking, useEngagementTracking, useVisibilityTracking } from "../../hooks/useAnalytics";
import { trackFeatureInteraction } from "../../utils/analytics";



export default function TermsPage() {
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
          onClick={() => trackFeatureInteraction('Back to Home', 'navigation_click', 'terms_page')}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            These Terms of Service (&quot;Terms&quot;) govern your use of the PixieClean mobile application (&quot;App&quot;). By downloading, installing, or using the App, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-300 mb-6">
            By accessing or using PixieClean, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Service</h2>
          <p className="text-gray-300 mb-6">
            PixieClean is a photo management application that helps users organize, optimize, and clean their photo libraries. The App uses on-device AI processing to identify duplicates, select best photos, and optimize images for different devices.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
          <p className="text-gray-300 mb-6">
            You are responsible for:
          </p>
          <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
            <li>Ensuring you have the right to process photos in your device</li>
            <li>Backing up your photos before using the App</li>
            <li>Using the App in compliance with applicable laws</li>
            <li>Not attempting to reverse engineer or modify the App</li>
            <li>Not using the App for any illegal or unauthorized purpose</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Processing</h2>
          <p className="text-gray-300 mb-6">
            PixieClean processes your photos entirely on your device. We do not upload, store, or transmit your photos to external servers. You retain full control and ownership of your data.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p className="text-gray-300 mb-6">
            The App and its original content, features, and functionality are owned by PixieClean and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Content</h2>
          <p className="text-gray-300 mb-6">
            You retain ownership of your photos and any content you process through the App. PixieClean does not claim any ownership rights to your content.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Disclaimers</h2>
          <p className="text-gray-300 mb-6">
            THE APP IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="text-gray-300 mb-6">
            IN NO EVENT SHALL PIXIECLEAN BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. App Store Terms</h2>
          <p className="text-gray-300 mb-6">
            These Terms are between you and PixieClean, not with the App Store or Google Play Store. The stores are not responsible for the App and its content. You must comply with the applicable store&apos;s terms of service.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Updates and Modifications</h2>
          <p className="text-gray-300 mb-6">
            We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the App after any changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Termination</h2>
          <p className="text-gray-300 mb-6">
            You may stop using the App at any time. We may terminate or suspend your access to the App immediately, without prior notice, for any reason, including if you breach these Terms.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law</h2>
          <p className="text-gray-300 mb-6">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PixieClean operates, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Information</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms, please contact us through the app store listings or visit our support page.
          </p>

          <p className="text-sm text-gray-500 mt-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
} 