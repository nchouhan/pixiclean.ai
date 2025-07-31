import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "PixieClean - Clean, Organize & Optimize Your Photos",
  description: "AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries — all while keeping your data 100% private on-device.",
  keywords: "photo cleanup, duplicate photos, photo optimization, mobile app, iOS, Android",
  authors: [{ name: "PixieClean" }],
  openGraph: {
    title: "PixieClean - Clean, Organize & Optimize Your Photos",
    description: "AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries — all while keeping your data 100% private on-device.",
    type: "website",
    url: "https://pixiclean.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "PixieClean - Clean, Organize & Optimize Your Photos",
    description: "AI-powered mobile app that helps you effortlessly declutter, organize, and optimize your photo galleries — all while keeping your data 100% private on-device.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
