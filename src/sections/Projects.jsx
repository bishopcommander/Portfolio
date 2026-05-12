import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ExternalLink, Layers, Zap } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { cn } from '../lib/utils';

// Redesigned Projects Section

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-purple bg-brand-purple/5 border border-brand-purple/20 rounded-full w-fit">
            Production Registry
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Featured <span className="text-zinc-500 italic">Systems.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl font-light">
            A collection of engineered solutions focusing on scalability, 
            performance optimization, and technical craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {projects.map((project, index) => {
            const isFlagship = project.title === "QuantEdge";
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative",
                  isFlagship ? "md:col-span-8" : "md:col-span-4",
                  index === 2 ? "md:col-span-5" : "",
                  index === 3 ? "md:col-span-7" : ""
                )}
              >
                <ProjectCard project={project} isFlagship={isFlagship} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isFlagship }) {
  return (
    <div className="glass-card h-full rounded-[2rem] overflow-hidden flex flex-col glow-border group-hover:border-brand-cyan/30 transition-all duration-500">
      {/* Image Preview Area */}
      <div className={cn(
        "relative overflow-hidden bg-zinc-950",
        isFlagship ? "aspect-[21/9]" : "aspect-video"
      )}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent" />
        
        {/* Status Indicator */}
        <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
          <span className="text-[10px] font-bold text-white uppercase tracking-widest">v1.0.0 — LIVE</span>
        </div>

        {/* Links Overlay */}
        <div className="absolute bottom-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <a 
            href={project.github} 
            className="p-3 rounded-full bg-white/10 hover:bg-brand-cyan text-white hover:text-black backdrop-blur-md border border-white/10 transition-all"
            target="_blank" rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href={project.link} 
            className="p-3 rounded-full bg-white text-black hover:bg-brand-cyan border border-white transition-all"
            target="_blank" rel="noopener noreferrer"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
            <Zap className="w-4 h-4 text-brand-cyan" />
          </div>
          <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
          {project.techStack.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-[10px] font-bold text-zinc-400 bg-white/5 border border-white/5 rounded-full uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
