import { motion } from 'framer-motion';
import { Cpu, Code2, Database, Globe } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Core Stack', value: 'Java / Spring', icon: Cpu },
    { label: 'Database', value: 'MySQL / MongoDB', icon: Database },
    { label: 'Frontend', value: 'React / Tailwind', icon: Globe },
    { label: 'Engineering', value: 'Clean Architecture', icon: Code2 },
  ];

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[2.5rem] overflow-hidden border-white/5"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Avatar Section */}
            <div className="lg:col-span-5 p-8 lg:p-12 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden glow-border relative z-10">
                  <img 
                    src="/profile.png" 
                    alt="About Me" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60" />
                </div>
                {/* Decorative Glow */}
                <div className="absolute -inset-4 bg-brand-cyan/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5">
                    <stat.icon className="w-5 h-5 text-brand-cyan mb-2" />
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">{stat.label}</p>
                    <p className="text-sm text-zinc-200 font-semibold">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 bg-white/5 border border-white/10 rounded-full w-fit">
                Engineering Identity
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight text-white">
                Designing systems with <br />
                <span className="text-brand-cyan">mathematical precision.</span>
              </h2>
              
              <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                <p>
                  I am a full-stack engineer driven by the intersection of <span className="text-zinc-200 font-medium">structured logic</span> and <span className="text-zinc-200 font-medium">intuitive design</span>. 
                  My background in Java and Spring Boot has instilled a deep appreciation for clean architecture and robust system design.
                </p>
                <p>
                  Currently, I'm bridging the gap between high-performance backends and modern frontend ecosystems. 
                  I believe that engineering is not just about writing code, but about <span className="text-brand-cyan/80">crafting sustainable solutions</span> that scale with human needs.
                </p>
              </div>

              <div className="mt-12 p-6 rounded-3xl bg-brand-cyan/5 border border-brand-cyan/10 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-sm font-mono text-brand-cyan/80 mb-2">// Philosophy</p>
                  <p className="text-zinc-300 italic font-medium">
                    "Complexity is easy. Simplicity is an engineering triumph."
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Code2 className="w-20 h-20 text-brand-cyan" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
