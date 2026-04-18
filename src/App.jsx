import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50 bg-[rgb(9,9,11)]/80 backdrop-blur-md border-b border-zinc-800/50 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-5xl">
          <a href="#" className="text-xl font-semibold text-zinc-100 tracking-tight">Bishop.</a>
          <ul className="hidden md:flex space-x-8 text-sm font-medium text-zinc-400">
            <li><a href="#about" className="hover:text-zinc-100 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-zinc-100 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-800/50">
        <p>© {new Date().getFullYear()} Bishop. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
