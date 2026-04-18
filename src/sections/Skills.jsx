const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    title: "Tools & Others",
    skills: ["Git"],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-zinc-900/50 bg-zinc-950/20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-3 text-white tracking-tight">Technologies</h2>
          <p className="text-zinc-500 text-base max-w-2xl">
            The core tools and languages I rely on for system design and application development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-zinc-900/30 border border-zinc-800/80 rounded-xl p-6 hover:border-zinc-700 transition-colors">
              <h3 className="text-base font-semibold mb-5 text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-zinc-800/50 rounded text-sm text-zinc-300 border border-zinc-700/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
