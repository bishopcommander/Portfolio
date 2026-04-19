import { useState, useEffect } from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-[rgb(9,9,11)]/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800/50 py-4 shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-5xl">
          <a href="#" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight transition-colors">Bishop.</a>
          <div className="flex items-center gap-6">
            <ul className="hidden md:flex space-x-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <li><a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a></li>
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-zinc-500 text-sm border-t border-zinc-200 dark:border-zinc-800/50 transition-colors duration-300">
        <p>© {new Date().getFullYear()} Bishop. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
