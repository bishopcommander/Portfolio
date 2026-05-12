import { motion } from 'framer-motion';
import { Cpu, Globe, Database, Cog, Server, Layers } from 'lucide-react';
import { SiSpringboot, SiMysql, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiDocker, SiGithub, SiTailwindcss, SiPostman } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const techGroups = [
  {
    title: "Backend Core",
    icon: Server,
    color: "text-brand-cyan",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
    ]
  },
  {
    title: "Database Systems",
    icon: Database,
    color: "text-brand-purple",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ]
  },
  {
    title: "Frontend Engineering",
    icon: Globe,
    color: "text-brand-blue",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Cog,
    color: "text-zinc-400",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Git / GitHub", icon: SiGithub },
      { name: "Postman", icon: SiPostman },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 bg-white/5 border border-white/10 rounded-full">
            Technical Infrastructure
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Tech <span className="text-brand-cyan">Matrix.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl font-light md:mx-0 mx-auto">
            A comprehensive overview of the technologies I utilize to architect and 
            deploy high-performance engineering solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-[2rem] glow-border hover:border-brand-cyan/20 transition-all duration-500 group"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-2.5 rounded-2xl bg-white/5 border border-white/10 ${group.color}`}>
                  <group.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{group.title}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all cursor-default"
                  >
                    <skill.icon className="w-4 h-4 text-zinc-500 group-hover:text-brand-cyan transition-colors" />
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-200 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
