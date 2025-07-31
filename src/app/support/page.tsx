import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, HelpCircle, Shield, Zap, Sparkles } from "lucide-react";

export default function SupportPage() {
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

        <h1 className="text-4xl font-bold mb-8">Help & Support</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-8 text-lg">
            Need help with PixieClean? We're here to help you get the most out of your photo cleanup experience.
          </p>

          {/* Quick Help Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <HelpCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">FAQs</h3>
              <p className="text-gray-400">Find answers to common questions about using PixieClean.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <MessageCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-400">Get in touch with our support team for personalized help.</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy</h3>
              <p className="text-gray-400">Learn about how we protect your data and privacy.</p>
            </div>
          </div>

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-12">
            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3">How does PixieClean work?</h3>
              <p className="text-gray-300">
                PixieClean uses advanced AI algorithms that run entirely on your device to analyze your photos. It identifies duplicates, selects the best quality photos from similar shots, and optimizes images for different device sizes. All processing happens locally - your photos never leave your device.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3">Is my data safe?</h3>
              <p className="text-gray-300">
                Absolutely! PixieClean processes all your photos locally on your device. We never upload, store, or transmit your photos to external servers. Your data stays completely private and under your control.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3">Can I recover deleted photos?</h3>
              <p className="text-gray-300">
                PixieClean permanently deletes photos from your device. We recommend backing up your photos before using the app. You can use your device's backup features or cloud storage services to ensure your photos are safely stored.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3">How accurate is the duplicate detection?</h3>
              <p className="text-gray-300">
                Our AI is trained to identify both exact duplicates and similar photos with high accuracy. However, we recommend reviewing the results before deletion, especially for important photos. The app shows you exactly what will be deleted before confirming.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3">What devices are supported?</h3>
              <p className="text-gray-300">
                PixieClean is available for iOS and Android devices. The app requires sufficient storage space for processing photos and works best on devices with at least 2GB of RAM for optimal performance.
              </p>
            </div>

            <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-700/30">
              <h3 className="text-xl font-semibold mb-3">How much storage can I save?</h3>
              <p className="text-gray-300">
                The amount of storage you can save depends on your photo library. Users typically save 20-60% of their photo storage space. The app shows you exactly how much space you'll save before processing.
              </p>
            </div>
          </div>

          {/* Getting Started Section */}
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>

          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl p-8 mb-12 border border-purple-500/20">
            <h3 className="text-2xl font-semibold mb-4">Quick Start Guide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Step 1: Grant Permissions</h4>
                <p className="text-gray-300 mb-4">
                  Allow PixieClean to access your photo library when prompted. This is necessary for the app to analyze your photos.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Step 2: Backup Your Photos</h4>
                <p className="text-gray-300 mb-4">
                  Before using PixieClean, ensure your photos are backed up to iCloud, Google Photos, or another cloud service.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Step 3: Start Scanning</h4>
                <p className="text-gray-300 mb-4">
                  Tap "Start Scan" to begin analyzing your photo library. The app will identify duplicates and similar photos.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-400">Step 4: Review & Clean</h4>
                <p className="text-gray-300 mb-4">
                  Review the results and select which photos to keep or delete. The app will show you exactly what will be removed.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <Mail className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-gray-300 mb-4">
                For technical issues, feature requests, or general questions, reach out to our support team.
              </p>
              <a
                href="mailto:support@pixiclean.ai"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                support@pixiclean.ai
              </a>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <MessageCircle className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3">App Store Reviews</h3>
              <p className="text-gray-300 mb-4">
                Leave a review on the App Store or Google Play Store to help other users discover PixieClean.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://apps.apple.com/in/app/pixieclean/id6745176117"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.nclab.pixieclean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Google Play
                </a>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/privacy"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/70"
            >
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
              <p className="text-gray-400">Learn how we protect your data and privacy.</p>
            </Link>

            <Link
              href="/terms"
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-800/70"
            >
              <Zap className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Terms of Service</h3>
              <p className="text-gray-400">Read our terms and conditions of use.</p>
            </Link>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <Sparkles className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Feature Updates</h3>
              <p className="text-gray-400">Stay updated with the latest features and improvements.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 