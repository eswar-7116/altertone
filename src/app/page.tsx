import Hero from '@/components/Hero'
import Features from '@/components/Features'
import InteractiveDemo from '@/components/InteractiveDemo'
import Footer from '@/components/Footer'

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