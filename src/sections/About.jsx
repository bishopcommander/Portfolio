import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-md shadow-zinc-200/50 dark:shadow-none transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-[4/5] rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden relative shadow-lg transition-colors">
                 <img src="/profile.png" alt="About Me" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight transition-colors">About</h2>
              <div className="space-y-6 text-zinc-600 dark:text-zinc-400 text-base leading-relaxed transition-colors">
                <p>
                  I am a Student Developer with a strong foundation in <span className="text-zinc-900 dark:text-zinc-200 transition-colors">Java Full Stack Development</span>. I enjoy building structured web applications, understanding systems end-to-end, and continuously refining my technical skills.
                </p>
                <p>
                  My core stack is built on Java, Spring Boot, and MySQL. I prioritize clean architecture and solid backend fundamentals. Right now, I am expanding my expertise by mastering the MERN Stack (MongoDB, Express.js, React.js, Node.js) to build more dynamic user interfaces.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-10 mt-10 border-t border-zinc-200 dark:border-zinc-800/60 pt-8 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="block text-xl font-semibold text-zinc-900 dark:text-white tracking-tight transition-colors">Java</span>
                    <span className="text-[11px] text-zinc-500 font-medium tracking-wider uppercase mt-1">Full Stack</span>
                  </div>
                  <div className="flex gap-2 text-zinc-400 dark:text-zinc-500">
                    <FaJava className="w-5 h-5 hover:text-zinc-900 dark:hover:text-white transition-colors" title="Java" />
                    <SiSpringboot className="w-5 h-5 hover:text-green-500 transition-colors" title="Spring Boot" />
                    <SiMysql className="w-5 h-5 hover:text-blue-500 transition-colors" title="MySQL" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="block text-xl font-semibold text-zinc-900 dark:text-white tracking-tight transition-colors">MERN</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-500 font-medium tracking-wider border px-1.5 py-0.5 rounded border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/30 uppercase transition-colors">Exploring</span>
                  </div>
                  <div className="flex gap-2 text-zinc-400 dark:text-zinc-500">
                    <SiMongodb className="w-5 h-5 hover:text-green-500 transition-colors" title="MongoDB" />
                    <SiExpress className="w-5 h-5 hover:text-zinc-900 dark:hover:text-white transition-colors" title="Express.js" />
                    <SiReact className="w-5 h-5 hover:text-blue-400 transition-colors" title="React" />
                    <SiNodedotjs className="w-5 h-5 hover:text-green-600 transition-colors" title="Node.js" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
