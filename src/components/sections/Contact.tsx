import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Github } from '../ui/Icons';
import { FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nawalkhanz08@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent("Hi Nawal, I found your portfolio and would like to discuss a project with you!");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl w-full mx-auto px-5 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-5xl font-bold text-white mb-6 text-center w-full tracking-wide">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center text-center relative overflow-hidden"
        >
          {/* Subtle background glow in the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-[100px] pointer-events-none" />

          <h3 className="text-3xl font-bold text-white mb-6">Let's build something amazing together.</h3>
          
          <p className="text-secondary-text text-lg leading-relaxed max-w-2xl mb-12">
            I'm currently available for freelance projects and open to new opportunities. 
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            {/* WhatsApp Large Button */}
            <a 
              href={`https://wa.me/923304621246?text=${whatsappMessage}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#22c55e]/10 border border-[#22c55e]/30 text-[#22c55e] font-semibold text-lg hover:bg-[#22c55e] hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:-translate-y-1"
            >
              <FaWhatsapp size={28} />
              WhatsApp Me
            </a>

            {/* Email Copy Button */}
            <button 
              onClick={handleCopyEmail}
              className="flex-1 w-full flex items-center justify-center gap-3 px-8 py-5 rounded-2xl glass border border-white/10 text-white font-semibold text-lg hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="copied"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-400"
                  >
                    <CheckCircle2 size={24} />
                    <span>Copied ✓</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <Mail size={24} />
                    <span>Copy Email</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 w-full flex flex-col items-center">
            <p className="text-secondary-text mb-6 font-medium">Or find me on social media</p>
            <div className="flex gap-6">
              <a 
                href="https://github.com/nawalkhanz08-commits"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </a>
              {/* Additional socials can be added here if needed */}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
