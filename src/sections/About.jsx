export default function About() {
  return (
    <section id="about" className="py-24 border-t border-zinc-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="w-full md:w-1/3">
            <div className="aspect-[4/5] rounded-xl border border-zinc-800 overflow-hidden relative shadow-lg">
               <img src="/profile.png" alt="About Me" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-6 text-white tracking-tight">About</h2>
            <div className="space-y-6 text-zinc-400 text-base leading-relaxed">
              <p>
                I am a Student Developer with a strong foundation in <span className="text-zinc-200">Java Full Stack Development</span>. I enjoy building structured web applications, understanding systems end-to-end, and continuously refining my technical skills.
              </p>
              <p>
                My core stack is built on Java, Spring Boot, and MySQL. I prioritize clean architecture and solid backend fundamentals. Right now, I am expanding my expertise by mastering the MERN Stack (MongoDB, Express.js, React.js, Node.js) to build more dynamic user interfaces.
              </p>
            </div>
            
            <div className="flex gap-10 mt-10 border-t border-zinc-800/60 pt-8">
              <div>
                <span className="block text-xl font-semibold text-white mb-1 tracking-tight">Java</span>
                <span className="text-[11px] text-zinc-500 font-medium tracking-wider uppercase">Core Stack</span>
              </div>
              <div>
                <span className="block text-xl font-semibold text-white mb-1 tracking-tight">MERN</span>
                <span className="text-[11px] text-zinc-500 font-medium tracking-wider border px-1.5 py-0.5 rounded border-zinc-700 bg-zinc-800/30 uppercase">Exploring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
