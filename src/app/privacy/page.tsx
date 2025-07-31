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
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Don't Collect</h2>
          <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
            <li>Your photos or image data</li>
            <li>Personal information</li>
            <li>Usage analytics</li>
            <li>Device identifiers</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">App Store Analytics</h2>
          <p className="text-gray-300 mb-6">
            We may receive basic analytics from the App Store and Google Play Store, such as download numbers and crash reports. This data is provided by the stores themselves and does not contain any personal information.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-gray-300 mb-6">
            If you have any questions about this Privacy Policy, please contact us through the app store listings.
          </p>
          
          <p className="text-sm text-gray-500 mt-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
} 