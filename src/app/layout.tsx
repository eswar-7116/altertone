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
  title: "AlterTone",
  description: "AI-powered tone changer for sentences. Rephrase text with different emotions or roles using Gemini 2.0. Free and open source.",
};

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
