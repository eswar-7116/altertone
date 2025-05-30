import {MessageSquare, Users, Mic, Copy, Keyboard, Share2, Zap, Sparkles} from 'lucide-react'

const features = [
  {
    icon: MessageSquare,
    title: 'Tone Switching',
    description: 'Instantly transform your text between professional, casual, happy, serious, and more tones.'
  },
  {
    icon: Users,
    title: 'Role-Based Phrasing',
    description: 'Adjust your message for specific roles like teacher, manager, friend, or influencer.'
  },
  {
    icon: Sparkles,
    title: 'Creativity Control',
    description: 'Adjust the creativity level to get precise or imaginative tone transformations.'
  },
  {
    icon: Mic,
    title: 'Voice Input',
    description: 'Speak your text naturally and let AI convert it to your desired tone.'
  },
  {
    icon: Keyboard,
    title: 'Typing Animation',
    description: 'Watch your rewritten text appear with smooth, engaging animations.'
  },
  {
    icon: Share2,
    title: 'Quick Share',
    description: 'Share your perfectly toned messages instantly across platforms.'
  },
  {
    icon: Copy,
    title: 'One-Click Copy',
    description: 'Copy your rewritten text to clipboard with a single click.'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Powered by Google Gemini for instant, high-quality transformations.'
  }
]

export default function Features() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Powerful Features for Perfect Communication
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need to communicate with the right tone, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/60 backdrop-blur-lg shadow-xl border border-slate-200/70 hover:border-blue-400/70 transition-all duration-300 flex flex-col items-start"
            >
              <div
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white"/>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}