import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MessageSquare, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] font-bold text-brand-cyan bg-brand-cyan/5 border border-brand-cyan/20 rounded-full">
              Communications
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight text-white">
              Initialize <br />
              <span className="text-zinc-500 italic">Connection.</span>
            </h2>
            <p className="text-zinc-500 text-lg max-w-md font-light mb-12">
              Currently accepting new engineering challenges and collaborative opportunities. 
              Let's build something technically superior.
            </p>

            <div className="space-y-6">
              <ContactMethod 
                icon={Mail} 
                label="Direct Protocol" 
                value="XYZ@gamil.com" 
                href="mailto:parth.contact@sys.dev"
              />
              <ContactMethod 
                icon={FaGithub} 
                label="Source Registry" 
                value="github.com/bishopcommander" 
                href="https://github.com/bishopcommander"
              />
              <ContactMethod 
                icon={FaLinkedin} 
                label="Professional Node" 
                value="linkedin.com/in/parth" 
                href="https://linkedin.com/in/parth"
              />
            </div>

            {/* Availability Status */}
            <div className="mt-12 p-6 rounded-3xl bg-green-500/5 border border-green-500/10 flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-widest">Availability Status</p>
                <p className="text-sm text-green-500/80">Available for new projects Q3 2026</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-[2.5rem] glow-border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Identity</label>
                <input 
                  type="text"
                  required
                  placeholder="Subject Name"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Communication Channel</label>
                <input 
                  type="email"
                  required
                  placeholder="name@domain.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 ml-1">Payload Description</label>
                <textarea 
                  required
                  rows="5"
                  placeholder="Describe the objective..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                disabled={status === 'submitting'}
                className={cn(
                  "w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300",
                  status === 'success' 
                    ? "bg-green-500 text-white" 
                    : "bg-white text-black hover:bg-brand-cyan active:scale-[0.98]"
                )}
              >
                {status === 'submitting' ? (
                  <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Payload Delivered</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Execute Connection</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactMethod({ icon: Icon, label, value, href }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-4 group p-2 -ml-2 rounded-2xl hover:bg-white/5 transition-all"
    >
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 group-hover:text-brand-cyan group-hover:border-brand-cyan/20 transition-all">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-600">{label}</p>
        <p className="text-sm text-zinc-300 font-medium">{value}</p>
      </div>
    </a>
  );
}
