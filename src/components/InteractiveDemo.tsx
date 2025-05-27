'use client'

import {SetStateAction, useState} from 'react'
import {Copy, Share2, Sparkles, Settings, ChevronDown, Trash2, Check} from 'lucide-react'

const toneOptions = [
  {id: 'professional', label: 'Professional'},
  {id: 'casual', label: 'Casual'},
  {id: 'happy', label: 'Happy'},
  {id: 'serious', label: 'Serious'},
  {id: 'friendly', label: 'Friendly'},
  {id: 'confident', label: 'Confident'},
  {id: 'sad', label: 'Sad'},
  {id: 'angry', label: 'Angry'},
  {id: 'pity', label: 'Pity'},
  {id: 'courage', label: 'Courageous'},
  {id: 'disgust', label: 'Disgust'},
  {id: 'scary', label: 'Scary'},
  {id: 'romantic', label: 'Romantic'},
  {id: 'humour', label: 'Humorous'},
  {id: 'assertive', label: 'Assertive'},
  {id: 'request', label: 'Request'},
  {id: 'mad', label: 'Mad'},
  {id: 'sarcastic', label: 'Sarcastic'},
  {id: 'inspirational', label: 'Inspirational'},
  {id: 'optimistic', label: 'Optimistic'},
  {id: 'pessimistic', label: 'Pessimistic'},
]

export default function InteractiveDemo() {
  const [inputText, setInputText] = useState('')
  const [selectedTone, setSelectedTone] = useState('professional')
  const [selectedRole, setSelectedRole] = useState('')
  const [temperature, setTemperature] = useState(0.7)
  const [outputText, setOutputText] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const selectedToneLabel = toneOptions.find(t => t.id === selectedTone)?.label || 'Select Tone'

  const handleApplyTone = async () => {
    if (!inputText.trim()) return
    setIsProcessing(true)
    setTimeout(() => {
      setOutputText(`[${selectedTone.toUpperCase()}${selectedRole ? ` - ${selectedRole}` : ''}] ${inputText}`)
      setIsProcessing(false)
    }, 1000)
  }

  const handleDetectTone = () => {
    alert('Tone detection feature - would analyze current tone of input text')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText)
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1250)
  }

  const handleShare = () => {
    navigator.share({text: outputText})

  }

  const handleToneSelect = (toneId: SetStateAction<string>) => {
    setSelectedTone(toneId)
    setIsDropdownOpen(false)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 id={"demo"} className="text-4xl font-bold text-gray-900 mb-4">Try AlterTone Now</h2>
          <p className="text-xl text-gray-600">Experience the magic of AI-powered tone transformation</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200 p-8">
          {/* Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Your Original Text</label>
            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter the text you want to transform..."
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none resize-none text-gray-700"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Role input */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Role (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Mentor, Interviewer, Coach..."
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-gray-700"
              />
            </div>

            {/* Temperature */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Creativity Level: {temperature}
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-blue-500"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Precise</span>
                <span>Creative</span>
              </div>
            </div>
          </div>

          {/* Tone Selection */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">Choose Your Tone</label>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl flex items-center justify-between text-left hover:border-gray-300 transition-all duration-200 bg-white"
              >
                <span className="font-medium text-gray-700">{selectedToneLabel}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}/>
              </button>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl z-10 max-h-60 overflow-y-auto">
                  {toneOptions.map(tone => (
                    <button
                      key={tone.id}
                      onClick={() => handleToneSelect(tone.id)}
                      className={`w-full p-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                        selectedTone === tone.id ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                      }`}
                    >
                      {tone.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={handleDetectTone}
              className="flex items-center gap-2 px-6 py-3 cursor-pointer border-2 border-gray-300 text-gray-700 rounded-xl hover:scale-105 hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
            >
              <Settings className="w-4 h-4"/>
              Detect Tone
            </button>

            <button
              onClick={handleApplyTone}
              disabled={!inputText.trim() || isProcessing}
              className="flex items-center gap-2 px-8 py-3 cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:scale-105 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Sparkles className="w-4 h-4"/>
              {isProcessing ? 'Transforming...' : 'Apply Tone'}
            </button>
          </div>

          {/* Output */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">Transformed Text</label>
            <div className="relative">
              <div
                className="w-full h-32 p-4 border-2 border-gray-200 rounded-2xl bg-gray-50 text-gray-700 overflow-auto">
                {isProcessing ? (
                  <div className="flex items-center gap-2 text-blue-600">
                    <div
                      className="animate-spin w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                    Transforming your text...
                  </div>
                ) : outputText ? (
                  <div className="animate-fade-in">{outputText}</div>
                ) : (
                  <div className="text-gray-400">Your transformed text will appear here...</div>
                )}
              </div>

              {outputText && !isProcessing && (
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={() => setOutputText("")}
                    className="p-2 text-gray-400 hover:scale-110 hover:text-blue-500 transition-transform cursor-pointer"
                  >
                    <Trash2 className={"w-4 h-4"}/>
                  </button>
                  <button
                    onClick={handleCopy}
                    className="p-2 text-gray-400 hover:scale-110 hover:text-blue-500 transition-transform cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className={"w-4 h-4"}/> : <Copy className={"w-4 h-4"}/>}
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 text-gray-400 hover:scale-110 hover:text-blue-500 transition-transform cursor-pointer"
                    title="Share"
                  >
                    <Share2 className="w-4 h-4"/>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}