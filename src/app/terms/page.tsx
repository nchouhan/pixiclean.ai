import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
        
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            By downloading and using PixieClean, you agree to these Terms of Service.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">App Usage</h2>
          <p className="text-gray-300 mb-6">
            PixieClean is designed to help you organize and optimize your photo library. You are responsible for backing up your data before using the app, as photo deletion is permanent.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Responsibility</h2>
          <p className="text-gray-300 mb-6">
            While PixieClean processes all data locally on your device, you are responsible for ensuring you have the rights to modify the photos you process with our app.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-300 mb-6">
            PixieClean is provided "as is" without warranties. We are not liable for any data loss or damages resulting from the use of our app.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates</h2>
          <p className="text-gray-300 mb-6">
            We may update these terms from time to time. Continued use of the app after changes constitutes acceptance of the new terms.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
          <p className="text-gray-300 mb-6">
            For questions about these Terms of Service, please contact us through the app store listings.
          </p>
          
          <p className="text-sm text-gray-500 mt-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
} 