import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - PixieClean",
  description: "Learn how PixieClean protects your privacy with 100% on-device photo processing. No data collection, no cloud uploads - your photos stay private.",
  keywords: "privacy policy, data protection, on-device processing, photo privacy, AI photo cleanup",
  openGraph: {
    title: "Privacy Policy - PixieClean",
    description: "Learn how PixieClean protects your privacy with 100% on-device photo processing. No data collection, no cloud uploads - your photos stay private.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - PixieClean",
    description: "Learn how PixieClean protects your privacy with 100% on-device photo processing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}