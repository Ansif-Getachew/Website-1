
export const codeExamples = {
    "App.jsx" : `
        
import { useState } from "react";
import {WebLio AI} from "@weblio/ai";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Simple Counter</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

    `,
"Hero.jsx" : `
import { useState } from "react";

export default function Hero() {
  const [active, setActive] = useState(false);

  return (
    <section className="hero">
      <h1>Build Amazing Apps</h1>
      <p>Modern React components made simple and fast.</p>

      <button onClick={() => setActive(!active)}>
        {active ? "Started 🚀" : "Get Started"}
      </button>
    </section>
  );
}    
 `,
"Navbar.jsx" : `
        
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">WebLio</h2>

      <ul className={"nav-links " + (open ? "show" : "")}>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>
    </nav>
  );
}`,
}

export const floatingCards = {
  "App.jsx" : {
    bgColor: "bg-blue-500/15",
    iconColor : "text-blue-400/70",
    textColor : "text-blue-200",
    contentColor : "text-blue-300/25",
    icon : "AI",
    title : "Smart Completion",
    content : "A smart AI powered code suggetion in real time",
  },
  "Hero.jsx" : {
    bgColor: "bg-green-500/15",
    iconColor : "text-green-400/70",
    textColor : "text-green-200",
    contentColor : "text-green-300/25",
    icon : "AI",
    title : "Auto Animation",
    content : "Dynamic typing effect animations",
  },
  "Navbar.jsx" : {
    bgColor: "bg-yellow-500/15",
    iconColor : "text-yellow-400/70",
    textColor : "text-yellow-200",
    contentColor : "text-yellow-300/25",
    icon : "AI",
    title : "Smart Completion",
    content : "Intelligent code search across you project",
  },
}