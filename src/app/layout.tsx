import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CookieConsentProvider } from "../contexts/CookieConsentContext";
import CookieConsentBanner from "../components/CookieConsentBanner";
import ConsentAnalytics from "../components/ConsentAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mypixie.app"),
  title: {
    default: "PixieClean - Clean, Organize & Optimize Your Photos",
    template: "%s | PixieClean"
  },
  description: "AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries — all while keeping your data 100% private on-device.",
  keywords: [
    "photo cleanup",
    "duplicate photos",
    "photo optimization",
    "mobile app",
    "iOS",
    "Android",
    "AI photo management",
    "on-device processing",
    "photo organizer",
    "storage space",
    "photo deduplication",
    "best shot selector",
    "device optimization",
    "privacy-focused"
  ],
  authors: [{ name: "PixieClean", url: "https://mypixie.app" }],
  creator: "PixieClean",
  publisher: "PixieClean",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/icons/logo-min.png",
    shortcut: "/images/icons/logo-min.png",
    apple: "/images/icons/logo-min.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mypixie.app",
    siteName: "PixieClean",
    title: "PixieClean - Clean, Organize & Optimize Your Photos",
    description: "AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries — all while keeping your data 100% private on-device.",
    images: [
      {
        url: "/images/icons/logo-min.png",
        width: 1200,
        height: 630,
        alt: "PixieClean - AI-powered photo cleanup app",
      },
    ],
    countryName: "United States",
    emails: ["support@mypixie.app"],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixieClean - Clean, Organize & Optimize Your Photos",
    description: "AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries — all while keeping your data 100% private on-device.",
    images: ["/images/icons/logo-min.png"],
    creator: "@pixieclean",
    site: "@pixieclean",
  },
  alternates: {
    canonical: "https://mypixie.app",
    languages: {
      'en-US': 'https://mypixie.app',
    },
  },
  category: "Mobile Apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://mypixie.app/#organization",
        "name": "PixieClean",
        "url": "https://mypixie.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://mypixie.app/images/icons/logo-min.png",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@mypixie.app",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://apps.apple.com/in/app/pixieclean/id6745176117",
          "https://play.google.com/store/apps/details?id=com.nclab.pixieclean"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://mypixie.app/#website",
        "url": "https://mypixie.app",
        "name": "PixieClean",
        "description": "AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries — all while keeping your data 100% private on-device.",
        "publisher": {
          "@id": "https://mypixie.app/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "MobileApplication",
        "name": "PixieClean",
        "description": "AI-powered photo cleanup and organization app with duplicate detection, best shot selection, and device optimization.",
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": ["iOS", "Android"],
        "offers": [
          {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "150",
          "bestRating": "5",
          "worstRating": "1"
        },
        "downloadUrl": [
          "https://apps.apple.com/in/app/pixieclean/id6745176117",
          "https://play.google.com/store/apps/details?id=com.nclab.pixieclean"
        ],
        "screenshot": [
          "https://mypixie.app/images/screenshots/duplicate-detection1.png",
          "https://mypixie.app/images/screenshots/device-optimisation1.png",
          "https://mypixie.app/images/screenshots/best-shot-selector1.PNG"
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://mypixie.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy Policy",
            "item": "https://mypixie.app/privacy"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Support",
            "item": "https://mypixie.app/support"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Terms of Service",
            "item": "https://mypixie.app/terms"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is PixieClean?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PixieClean is an AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries while keeping your data 100% private on-device."
            }
          },
          {
            "@type": "Question",
            "name": "How does PixieClean protect my privacy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PixieClean processes all your photos on-device, meaning your data never leaves your phone. No cloud storage, no data sharing, complete privacy."
            }
          },
          {
            "@type": "Question",
            "name": "What features does PixieClean offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "PixieClean offers smart duplicate detection, best shot selection, device-based optimization, and AI-powered photo organization to save up to 90% storage space."
            }
          },
          {
            "@type": "Question",
            "name": "Is PixieClean free to download?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, PixieClean is currently available for free download on both iOS App Store and Google Play Store as part of a limited time offer."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Performance Monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Core Web Vitals monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const navigation = performance.getEntriesByType('navigation')[0];
                    const paint = performance.getEntriesByType('paint');
                    
                    // Send to analytics if available
                    if (window.gtag) {
                      window.gtag('event', 'web_vitals', {
                        event_category: 'Web Vitals',
                        event_label: 'CLS',
                        value: Math.round(performance.getEntriesByName('CLS')[0]?.value * 1000) || 0
                      });
                    }
                  }, 0);
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CookieConsentProvider>
          {/* Consent-based Analytics */}
          <ConsentAnalytics />
          {children}
          {/* Cookie Consent Banner */}
          <CookieConsentBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
