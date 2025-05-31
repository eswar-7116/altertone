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
  title: 'AlterTone - Rewrite Your Tone with AI',
  description: 'Transform your writing instantly with AI-powered tone adjustment. Free, open-source tool using Google Gemini 2.0 Flash API.',
  keywords: 'AI writing, tone rewriter, Gemini API, free tool, writing assistant',
  openGraph: {
    title: 'AlterTone - AI-Powered Tone Transformation',
    description: 'Rewrite sentences in different tones using Google Gemini 2.0 Flash API',
    type: 'website',
    images: [
      {
        url: 'https://altertone-two.vercel.app/ss.png',
        width: 1899,
        height: 1079,
        alt: 'AlterTone - Rewrite Your Tone with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlterTone - AI-Powered Tone Transformation',
    description: 'Rewrite sentences in different tones using Google Gemini 2.0 Flash API',
    creator: '@EswarDudi',
    images: ['https://altertone-two.vercel.app/ss.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Tags */}
        <meta property="og:title" content="AlterTone - AI-Powered Tone Transformation" />
        <meta property="og:description" content="Rewrite sentences in different tones using Google Gemini 2.0 Flash API" />
        <meta property="og:image" content="https://altertone-two.vercel.app/ss.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AlterTone - AI-Powered Tone Transformation" />
        <meta name="twitter:description" content="Rewrite sentences in different tones using Google Gemini 2.0 Flash API" />
        <meta name="twitter:image" content="https://altertone-two.vercel.app/ss.png" />
        <meta name="twitter:creator" content="@EswarDudi" />
        <title>AlterTone - Rewrite Your Tone with AI</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
