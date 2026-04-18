import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-zinc-900/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-3 text-white tracking-tight">Selected Projects</h2>
          <p className="text-zinc-500 text-base max-w-2xl leading-relaxed">
            A curated selection of my work across systems architecture, full-stack applications, and network tooling. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all duration-200 flex flex-col h-full">
              <div className="aspect-video rounded-lg bg-zinc-950 mb-5 overflow-hidden border border-zinc-800/80">
                 {project.image ? (
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-zinc-700 text-sm">Preview Unavailable</div>
                 )}
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white tracking-tight">{project.title}</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                     <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-zinc-950 border border-zinc-800 rounded text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-zinc-800/60 pt-4 flex items-center justify-between">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white hover:text-blue-400 transition-colors">
                    View Live <span className="ml-1 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
