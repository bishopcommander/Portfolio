import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-bg-dark selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-cyan origin-left z-[100] shadow-[0_0_10px_rgba(0,242,255,0.5)]" 
        style={{ scaleX }} 
      />

      {/* Background Layers */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-[0.15]" />
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute -top-[10%] -left-[5%] w-[70%] h-[70%] bg-brand-cyan/10 blur-[150px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] bg-brand-purple/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[0%] left-[10%] w-[50%] h-[50%] bg-brand-blue/5 blur-[150px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-6">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card px-8 py-3 rounded-full flex items-center gap-12"
        >
          <a href="#" className="text-xl font-bold text-white tracking-tighter hover:text-brand-cyan transition-colors">
            BISHOP<span className="text-brand-cyan">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-cyan transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="relative z-10 py-12 px-6 border-t border-white/5 bg-bg-dark/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
              <span className="text-brand-cyan text-xs font-bold">B</span>
            </div>
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Engineered by Bishop.
            </p>
          </div>
          <div className="flex gap-6 text-zinc-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Custom Cursor Glow */}
      <MouseGlow />
    </div>
  );
}

function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-[99] overflow-hidden"
      animate={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.05), transparent 40%)`
      }}
    />
  ); 
}

export default App;
