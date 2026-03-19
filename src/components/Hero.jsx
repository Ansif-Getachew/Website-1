import { useState, useEffect, useMemo } from "react"
import { ChevronDown } from "lucide-react"
import { X } from "lucide-react"
import { Sparkles, Sparkle, ArrowRight, PlayIcon, TriangleAlert } from "lucide-react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { codeExamples, floatingCards } from "../data/codeExamples"
import { ScrollingAnimation } from "./ScrollingAnimation"

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState("App.jsx")
  const [showLanguages, setShowLanguages] = useState(false)

  const tabs = ["App.jsx", "Hero.jsx", "Navbar.jsx"]
  const currentFloatingCard = floatingCards[activeTab]

  // 🔥 Optimized mouse tracking
  useEffect(() => {
    let animationFrameId

    const handleMouseMove = (e) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // 🎨 Memoized gradient style
  const gradientStyle = useMemo(() => {
    return {
      background: `radial-gradient(
        400px circle at ${mousePosition.x}px ${mousePosition.y}px,
        rgba(34, 0, 252, 0.4),
        transparent 40%
      )`,
    }
  }, [mousePosition])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ScrollingAnimation>
        {/* Background spotlight */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={gradientStyle}
        />

        <div className="relative max-w-7xl text-center mx-auto w-full mt-30">
          <div className="max-w-7xl mx-auto fel felx-col lg:grid lg:grid-cols-2 relative">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-5 sm:mb-6 animate-in slide-in-from-bottom duration-400">
                <Sparkles className="w-5 h-5 text-purple-400" />

                <span className="text-sm md:text-md font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Introducing WebLio AI
                </span>

              </div>
              <div className="space-x-2 px-2 sm:px-3 py-2 bg-yellow-500/50 border border-yellow-500/30 rounded-full mb-5 sm:mb-6 animate-in slide-in-from-bottom duration-400">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <TriangleAlert />

                  <span className="font-bold">This is a website made for skill developing purpose, not a real website!</span>

                </div>
              </div>
              
              <h1 className="text-5xl xl:text-7xl md:text-5xl lg:text-7xl space-x-3 flex flex-col font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-400 delay-200 leading-tight">
                <span className="bg-gradient-to-r from-blue-400/30 to-purple-500 bg-clip-text text-transparent font-mono">Build Faster &</span>
                <span className="bg-gradient-to-l from-white-400 to-blue-400/100 bg-clip-text text-transparent">Code Better</span>
                <span className="bg-gradient-to-t from-cyan-500/20 via-cyan-400 to-blue-800 bg-clip-text text-transparent font-mono">With WebLio AI</span>
              </h1>

              <p className="text-md sm:text-base lg:text-lg text-gray-400 justify-center items-center max-w-2xl mx-auto lg:mx-0 mb-5 lg:mb-7 sm:mb-3 animate-in slide-in-from-top duration-400 delay-400 leading-relaxed">
                Accelerate you workflow with smart AI completion, <br></br>
                fast debugging and automated testing 10x faster. 
              </p>

              <div className="flex flex-col lg:flex-row items-center jusitify-center lg:flex-start gap-3 md:gap-5 mb-8 sm:mb-10 animate-in slide-in-from-bottom duration-400 delay-600">
                <button className="group w-full sm:w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-br from-cyan-400 to-purple-600/50 rounded-xl font-bold text-md md:text-base transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
                  <span>
                    Start coding for free
                  </span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-5 transition-transform duration-300" />
                </button>

                <button className="group w-full sm:w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 border border-white/15 backdrop-blur-md rounded-xl font-bold text-md md:text-base transition-all duration-300 hover:bg-white/25 flex items-center justify-center space-x-3">
                  <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/50 duration-300 transition-colors">
                    <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                  </div>
                  <span>Watch Demo</span>
                </button>

              </div>

            </div>
            <div className="order-2 relative w-full">
              <div className="relative left-5 top-[-20px] bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-xl p-3 sm:p-2 h-[530px] items-center justify-center shadow-2xl">
                <div className="bg-gradient-to-br from-purple-400/5 mt-3 to-blue-600/5 rounded-xl border border-white/10 h-[500px] overflow-hidden flex flex-col">
                  {/* IDE Header */}
                  <div className="flex items-center justify-between px-5 py-3 bg-white/5 border-b border-white/10">
                    {/* Left side */}
                    <div className="flex items-center space-x-4">
                      {/* Mac buttons */}
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <span className="text-gray-400 text-sm font-bold">
                        WebLio AI
                      </span>
                      <span className="text-gray-400 absolute right-8 text-sm">
                        React App
                      </span>
                      <span className="font-bold bg-blue-800 px-2 rounded-xl text-sm absolute right-30">
                        AI
                      </span>
                    </div>

                    {/* Right side icon */}
                    <button
                      className="text-gray-400 hover:text-white cursor-pointer transition"
                      onClick={() => setShowLanguages((prev) => !prev)}
                    >
                      {showLanguages ? (
                        <X className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {showLanguages && (
                      <div className="absolute top-10 right-2 mt-2 w-44 rounded-lg border border-white/5 bg-slate-850 shadow-lg p-3 animate-in duration-400 slide-in-from-top">
                        <ul className="space-y-2 text-sm font-bold">
                          <li className="transition bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                            React
                          </li>
                          <li className="transition bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                            JavaScript
                          </li>
                          <li className="transition bg-gradient-to-r from-blue-400 to-purple-700 bg-clip-text text-transparent">
                            Tailwind CSS
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tabs */}
                  <div className="px-3 pt-3">
                    <div className="flex space-x-2 overflow-x-auto">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-3 py-2 text-xs sm:text-sm border rounded-t-lg font-bold backdrop-blur-sm transition-all duration-300 whitespace-nowrap ${
                            activeTab === tab
                              ? "text-white bg-blue-500/20 border-blue-400/20"
                              : "text-gray-400 bg-white/5 border-white/10 hover:text-white"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="group flex-1 overflow-y-auto p-3 border border-white/10 rounded-lg text-left">
                    <SyntaxHighlighter
                      language="javascript"
                      style={nightOwl}
                      customStyle={{
                        margin: 0,
                        borderRadius: "8px",
                        fontSize: "14px",
                        lineHeight: "1.5",
                        border: "1px solid #2a2a2a",
                        background: "transparent",
                      }}
                    >
                      {codeExamples[activeTab] || "// No code available"}
                    </SyntaxHighlighter>
                  </div>

                  {/* Floating card */}
                  <div
                    className={`hidden rounded-lg lg:block absolute top-110 right-10 transform translate-x-10 translate-y-10 ${currentFloatingCard.bgColor} backdrop-blur-xl p-4 border border-white/5 shadow-4xl`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div
                        className={`w-5 h-5 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}
                      >
                        {currentFloatingCard.icon}
                      </div>

                      <span
                        className={`text-md font-bold ${currentFloatingCard.textColor}`}
                      >
                        {currentFloatingCard.title}
                      </span>
                    </div>

                    <div
                      className={`text-left text-md font-mono ${currentFloatingCard.textColor}`}
                    >
                      {currentFloatingCard.content}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollingAnimation>
    </section>
  )
}