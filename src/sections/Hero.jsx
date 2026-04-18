export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container mx-auto px-6 max-w-3xl z-10 mt-16 md:mt-0 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          Available for Opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
          Hi, I'm Parth. <br />
          <span className="text-zinc-500">I build reliable web apps.</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-normal leading-relaxed md:mx-0 mx-auto">
          Student Developer with a strong foundation in <span className="text-zinc-200 font-medium">Java Full Stack Development</span>, currently expanding my expertise in the modern MERN Stack ecosystem.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <a href="#projects" className="w-full sm:w-auto px-6 py-2.5 bg-white text-black text-sm rounded-lg font-semibold hover:bg-zinc-200 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="w-full sm:w-auto px-6 py-2.5 bg-zinc-900 text-zinc-200 text-sm rounded-lg font-medium border border-zinc-800 hover:bg-zinc-800 hover:text-white transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
