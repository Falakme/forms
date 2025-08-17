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
  title: {
    default: "Forms by Falak",
    template: "%s | Forms by Falak",
  },
  description: "Interactive forms and surveys.",
  keywords: [
    "forms",
    "surveys",
    "feedback",
    "data collection",
    "interactive forms",
    "tally forms",
  ],
  authors: [{ name: "Falak", url: "https://falak.me" }],
  creator: "Falak",
  publisher: "Falak",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Forms by Falak",
    title: "Forms by Falak",
    description: "Interactive forms and surveys.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Forms by Falak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@falakme",
    title: "Forms by Falak",
    description: "Interactive forms and surveys.",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#000000",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://forms.falak.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
