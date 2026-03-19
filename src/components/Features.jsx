import { Bold } from "lucide-react"
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs"
import {ScrollingAnimation } from './ScrollingAnimation'
const features = [
    {
        title: "AI Code Completion",
        description: "Get realtime, intelligent code suggestion that understand your project's context and instantly complete lines, functions, and even fulll blocks of code.",
        codeSnippet: `function handleSubmit {
        // AI suggests line
        const data = await fetch("/api/submit");
        // Auto completed by AI
        };`,
        imagePosition: "right",
    },

    {
        title: "Automated Testing",
        description: "Intelligent code suggetion powered by advanced AI that learns from your patterns.",
        codeSnippet: `decribe("User Authenication", () => {
            // Auto-generated test
            it("should login succesfully", () => {
                // Test implementation
                });
            });`,
        imagePosition: "left",
    },

    {
        title: "Smart Debugging",
        description: "Intelligent code suggetion powered by advanced AI that learns from your patterns.",
        codeSnippet: `// Result 
        const=("Result Processing");
        // Output 
        `,
        imagePosition: "right",
    },
]


export default function Features() {
    return (
        <section 
          id="features" 
          className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
        >
            <ScrollingAnimation>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-15 sm:mb-20 lg:mb-14">
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-mono mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-400">
                            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                                Your Complete Development 
                            </span>
                            <br />
                            <span className="bg-gradient-to-br from-blue-900 to-cyan-300 bg-clip-text text-transparent">
                                Workflow 
                            </span>
                        </h2>
                    </div>
                    <div className="space-y-15 md:space-y-25 sm:space-y-20">
                        <div>
                            {features.map((feature, key) => (
                                <div key={key} className={`flex flex-col lg:flex-row items-center m-8 sm:m-12 space-y-3 space-x-3 gap-3 ${feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""}`}>
                                    {/** Code Section */}
                                    <div className="flex-1 w-full">
                                        <div className="relative group">
                                            <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-500/10 p-5 sm:p-7 rounded-xl  backdrop-blur-xl border border-white/10">
                                                {/** IDE Interface */}
                                                    <div className="bg-gray-950/30 rounded-xl p-3 sm:p-4 font-mono border border-white/10">
                                                        <div className="flex items-center space-x-5 mb-2 lg:mb-4">
                                                            <div className="flex space-x-1 space-y-1">
                                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                                            </div>
                                                            <span className="text-gray-400 text-sm font-bold lg:text-md ">
                                                                {feature.title}
                                                            </span>
                                                        </div>
                                                        <div className="rounded-lg">
                                                            <SyntaxHighlighter
                                                                language="javascript"
                                                                style={nightOwl}
                                                                customStyle={{
                                                                margin: 0,
                                                                borderRadius: "8px",
                                                                text: Bold,
                                                                fontSize: "16px",
                                                                lineHeight: "1.5",
                                                                border: "1px solid #2a2a2a",
                                                                background: "transparent",
                                                                }} 
                                                                wrapLines={true}
                                                            >
                                                            {feature.codeSnippet}
                                                            </SyntaxHighlighter> 
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/** Text Section */}
                                    <div className="flex-1 w-full ">
                                        <div className="max-w-lg mx-auto lg:mx-0 lg-text-left ">
                                            <h3 className="text-5xl lg:text-5xl sm:text-3xl font-bold mb-3 sm:mb-5 text-white">{feature.title}</h3>
                                            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ScrollingAnimation>
        </section>
    )
}