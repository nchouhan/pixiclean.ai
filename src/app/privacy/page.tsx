import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
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

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Don&apos;t Collect</h2>
          <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
            <li>Your photos or image data</li>
            <li>Personal information</li>
            <li>Usage analytics</li>
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
            Since all processing happens on your device, your photos are never transmitted over the internet. This provides the highest level of security for your personal data.
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