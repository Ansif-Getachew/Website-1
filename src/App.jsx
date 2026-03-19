import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="min-h-screen w-full text-white bg-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;