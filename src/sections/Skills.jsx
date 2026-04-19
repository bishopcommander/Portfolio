import { 
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiVuedotjs, SiFramer,
  SiNodedotjs, SiExpress, SiPython, SiPostgresql, SiMongodb, SiGraphql,
  SiGit 
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Vue.js", Icon: SiVuedotjs },
      { name: "Framer Motion", Icon: SiFramer }
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "Python", Icon: SiPython },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MongoDB", Icon: SiMongodb },
      { name: "GraphQL", Icon: SiGraphql }
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", Icon: SiGit }
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 border-t border-zinc-200 dark:border-zinc-900/50 bg-zinc-50/50 dark:bg-zinc-950/20 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-14">
          <h2 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white tracking-tight transition-colors">Technologies</h2>
          <p className="text-zinc-600 dark:text-zinc-500 text-base max-w-2xl transition-colors">
            The core tools and languages I rely on for system design and application development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/80 rounded-xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-1 shadow-md shadow-zinc-200/50 hover:shadow-lg dark:shadow-none dark:hover:shadow-none transition-all duration-300">
              <h3 className="text-base font-semibold mb-5 text-zinc-900 dark:text-white transition-colors">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill.name} 
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/50 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50 cursor-default transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  >
                    <skill.Icon className="w-4 h-4" />
                    {skill.name}
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
