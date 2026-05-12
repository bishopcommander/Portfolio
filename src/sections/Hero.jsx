import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal as TerminalIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
            System Status: Operational
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9] text-white">
            I build <span className="text-glow text-brand-cyan">scalable</span> <br />
            backend systems.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-xl font-light leading-relaxed">
            Full-stack engineer specializing in high-performance architectures, 
            modern web ecosystems, and <span className="text-zinc-300 font-medium">engineering refined user experiences</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black text-sm font-bold rounded-full flex items-center gap-2 hover:bg-brand-cyan transition-colors"
            >
              Explore Systems <ArrowUpRight className="w-4 h-4" />
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-bg-card border border-white/10 text-white text-sm font-bold rounded-full flex items-center gap-2 hover:border-brand-cyan/50 transition-colors"
            >
              Contact Node
            </motion.a>
          </div>
        </motion.div>

        {/* Engineering Visual (Terminal Widget) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative perspective-1000 hidden lg:block"
        >
          <div className="glass-card rounded-2xl p-1 overflow-hidden glow-border">
            <div className="bg-bg-dark rounded-xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                  <TerminalIcon className="w-3 h-3" />
                  bash — portfolio.sys
                </div>
                <div className="w-10" />
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm space-y-3">
                <div className="flex gap-3">
                  <span className="text-brand-cyan">➜</span>
                  <span className="text-zinc-300">neofetch</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-[11px]">
                  <div className="space-y-1">
                    <p className="text-brand-purple">BISHOP @ PROD-SERVER</p>
                    <p className="text-zinc-500">-------------------</p>
                    <p><span className="text-zinc-500">OS:</span> CyberOS v4.2.0</p>
                    <p><span className="text-zinc-500">Kernel:</span> React-Vite-Hybrid</p>
                    <p><span className="text-zinc-500">Uptime:</span> 99.99%</p>
                    <p><span className="text-zinc-500">Shell:</span> ZSH 5.8</p>
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-zinc-500">Resolution:</span> 4K Ultra-Retina</p>
                    <p><span className="text-zinc-500">UI:</span> Minimal-Glass</p>
                    <p><span className="text-zinc-500">CPU:</span> Neural Engine x16</p>
                    <p><span className="text-zinc-500">Memory:</span> 64GB Virtual</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <span className="text-brand-cyan">➜</span>
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-5 bg-brand-cyan"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Glows */}
          <div className="absolute -z-10 -inset-4 bg-brand-cyan/20 blur-3xl opacity-20 rounded-full" />
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-brand-cyan to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}
