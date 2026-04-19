import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white tracking-tight transition-colors">Selected Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-base max-w-2xl leading-relaxed transition-colors">
            A curated selection of my work across systems architecture, full-stack applications, and network tooling. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-md shadow-zinc-200/50 hover:shadow-xl hover:shadow-zinc-200/60 dark:shadow-none dark:hover:shadow-none">
              <div className="aspect-video rounded-lg bg-zinc-100 dark:bg-zinc-950 mb-5 overflow-hidden border border-zinc-200 dark:border-zinc-800/80 transition-colors">
                 {project.image ? (
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                 ) : (
                   <div className="w-full h-full flex items-center justify-center text-zinc-500 dark:text-zinc-700 text-sm transition-colors">Preview Unavailable</div>
                 )}
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white tracking-tight transition-colors">{project.title}</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                     <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded text-zinc-700 dark:text-zinc-300 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="border-t border-zinc-200 dark:border-zinc-800/60 pt-4 flex items-center justify-between transition-colors">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    View Live <span className="ml-1 text-zinc-400 dark:text-zinc-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all">→</span>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors" aria-label="GitHub Repository">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
