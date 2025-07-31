import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle, HelpCircle } from "lucide-react";

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
            Need help with PixieClean? We're here to assist you with any questions or issues you might have.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold">FAQ</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Find answers to common questions about using PixieClean.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• How does duplicate detection work?</p>
                <p>• What devices are supported?</p>
                <p>• How to backup before cleaning?</p>
                <p>• Understanding optimization settings</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-semibold">App Store Support</h2>
              </div>
              <p className="text-gray-300 mb-4">
                Get help directly through the app stores.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>• iOS: Use App Store reviews</p>
                <p>• Android: Use Play Store reviews</p>
                <p>• Include device info for faster help</p>
                <p>• Screenshots help us understand issues</p>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Getting Started</h2>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 mb-8">
            <ol className="text-gray-300 space-y-4 list-decimal list-inside">
              <li><strong>Grant Permissions:</strong> Allow PixieClean to access your photo library when prompted.</li>
              <li><strong>Select Photos:</strong> Choose the photos you want to clean or let the app scan your entire library.</li>
              <li><strong>Review Groups:</strong> PixieClean will group similar photos for your review.</li>
              <li><strong>Choose Best Shots:</strong> Select the best photo from each group and delete the rest.</li>
              <li><strong>Optimize (Optional):</strong> Use device-based optimization to save storage space.</li>
            </ol>
          </div>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Tips for Best Results</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Always backup your photos before using any cleanup app</li>
            <li>Review groups carefully before deleting photos</li>
            <li>Use optimization settings that match your viewing devices</li>
            <li>Check the achievements dashboard to track your progress</li>
          </ul>
          
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
            <h3 className="text-xl font-semibold mb-3">Still Need Help?</h3>
            <p className="text-gray-300 mb-4">
              If you can't find the answer you're looking for, please leave a review on the app store with your question. We monitor reviews and will respond to help you resolve any issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 