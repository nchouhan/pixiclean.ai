import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - PixieClean",
  description: "Read PixieClean's terms of service. Understand user responsibilities, data processing policies, and legal terms for using our photo cleanup app.",
  keywords: "terms of service, legal terms, user agreement, photo app terms, mobile app terms",
  openGraph: {
    title: "Terms of Service - PixieClean",
    description: "Read PixieClean's terms of service and understand our legal terms for using the photo cleanup app.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - PixieClean",
    description: "Read PixieClean's terms of service for the photo cleanup app.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}