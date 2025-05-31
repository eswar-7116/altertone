import {Metadata} from 'next'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import InteractiveDemo from '@/components/InteractiveDemo'
import Footer from '@/components/Footer'

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


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero/>
      <Features/>
      <InteractiveDemo/>
      <Footer/>
    </main>
  )
}