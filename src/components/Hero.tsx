import {ArrowDown, Sparkles} from 'lucide-react'
import ThemeToggle from "@/components/ThemeToggle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      {/* Enhanced subtle background for hero, could be a very light solid or keep a subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-2xl"></div>
      <div className="absolute top-6 right-6 z-10">
        <ThemeToggle />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-blue-300/50 mb-8 shadow-sm">
          <Sparkles className="w-5 h-5 text-blue-600"/>
          <span className="text-sm font-semibold text-blue-700">Powered by Google Gemini</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
          Rewrite Your Tone with AI
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform any sentence instantly with AI-powered tone adjustment.
          Professional, casual, happy, or serious - your message, perfected.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#demo"
            className="flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-lg shadow-lg cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 group min-w-[220px]"
          >
            Try AlterTone Now
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce"/>
          </a>

          <a
            className="flex items-center justify-center px-8 py-4 border-2 cursor-pointer border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-500/10 hover:scale-105 hover:shadow-lg transition-all duration-300 min-w-[220px]"
            href={"#"}
          >
            Download Extension
          </a>
        </div>
      </div>
    </section>
  )
}