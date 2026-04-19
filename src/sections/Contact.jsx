import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate form submission delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 border-t border-zinc-200 dark:border-zinc-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-2xl">
        <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-3xl p-8 md:p-12 shadow-md shadow-zinc-200/50 dark:shadow-none transition-all duration-300">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-white tracking-tight transition-colors">Get in touch</h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-base leading-relaxed transition-colors">
              I'm currently open for new opportunities. Feel free to drop a message or reach out on <a href="https://github.com/bishopcommander" target="_blank" rel="noopener noreferrer" className="text-zinc-900 dark:text-zinc-300 hover:text-blue-500 dark:hover:text-white underline underline-offset-4 transition-colors font-medium">GitHub</a>.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest pl-0.5 transition-colors">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className={`w-full bg-zinc-50 dark:bg-zinc-900/50 border rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 shadow-sm dark:shadow-none focus:outline-none focus:ring-1 transition-all ${status === 'error' && !formData.name.trim() ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50 hover:border-zinc-300 dark:hover:border-zinc-700'}`}
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest pl-0.5 transition-colors">Email</label>
                <input 
                  type="text" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`w-full bg-zinc-50 dark:bg-zinc-900/50 border rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 shadow-sm dark:shadow-none focus:outline-none focus:ring-1 transition-all ${status === 'error' && (!formData.email.trim() || !validateEmail(formData.email)) ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50 hover:border-zinc-300 dark:hover:border-zinc-700'}`}
                />
              </div>
            </div>
            
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest pl-0.5 transition-colors">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className={`w-full bg-zinc-50 dark:bg-zinc-900/50 border rounded-lg px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 shadow-sm dark:shadow-none focus:outline-none focus:ring-1 transition-all resize-none ${status === 'error' && !formData.message.trim() ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:border-blue-500 focus:ring-blue-500/50 hover:border-zinc-300 dark:hover:border-zinc-700'}`}
              ></textarea>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 w-full relative">
                {status === 'error' && (
                  <p className="absolute text-xs leading-none font-medium text-red-500 dark:text-red-400 flex items-center gap-1.5 inset-y-0 min-h-max align-middle mt-1.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {errorMessage}
                  </p>
                )}
                {status === 'success' && (
                  <p className="absolute text-xs leading-none font-medium text-green-600 dark:text-green-400 flex items-center gap-1.5 animate-pulse inset-y-0 min-h-max align-middle mt-1.5">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Sent successfully.
                  </p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="group w-full sm:w-auto min-w-[120px] px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-md shadow-zinc-300/50 hover:shadow-lg dark:hover:shadow-none dark:shadow-none hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex justify-center items-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-zinc-400 dark:text-zinc-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending</span>
                  </>
                ) : (
                  <>
                    <span>Send</span>
                    <svg className="w-4 h-4 text-zinc-400 dark:text-zinc-500 group-hover:text-white dark:group-hover:text-black group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
