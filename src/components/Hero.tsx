import {ArrowDown, Sparkles} from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200 mb-8">
          <Sparkles className="w-4 h-4 text-blue-600"/>
          <span className="text-sm font-medium text-blue-900">Powered by Google Gemini</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6">
          Rewrite Your Tone with AI
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Transform any sentence instantly with AI-powered tone adjustment.
          Professional, casual, happy, or serious - your message, perfected.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#demo"
            className="flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full shadow-lg cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl transition-all duration-300 group"
          >
            Try AlterTone
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce"/>
          </a>

          <a
            className="hover:scale-105 px-8 py-4 border-2 cursor-pointer border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
            href={"#"}
          >
            Download Extension
          </a>
        </div>
      </div>
    </section>
  )
}
