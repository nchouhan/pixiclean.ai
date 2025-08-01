import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7MT1F0ZMGP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7MT1F0ZMGP', {
              page_title: document.title,
              page_location: window.location.href,
              send_page_view: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
