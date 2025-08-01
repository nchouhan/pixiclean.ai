import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support - PixieClean",
  description: "Get help with PixieClean photo cleanup app. Find FAQs, tutorials, and contact support for photo organization, duplicate detection, and optimization questions.",
  keywords: "support, help, FAQ, photo cleanup help, duplicate detection support, contact support",
  openGraph: {
    title: "Help & Support - PixieClean",
    description: "Get help with PixieClean photo cleanup app. Find FAQs, tutorials, and contact support for photo organization questions.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Help & Support - PixieClean",
    description: "Get help with PixieClean photo cleanup app. Find FAQs and contact support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}