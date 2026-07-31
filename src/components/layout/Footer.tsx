import { ArrowUp, Mail } from 'lucide-react';
import { Github } from '../ui/Icons';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#080C18]/80 backdrop-blur-xl relative z-20">
      <div className="max-w-7xl w-full mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-4xl font-bold tracking-tighter text-white mb-4 block">
              N<span className="text-primary">K</span>
            </a>
            <p className="text-secondary-text max-w-sm leading-relaxed">
              Building fast, scalable, beautiful web applications with modern technologies and exceptional user experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <h3 className="text-white font-semibold mb-6 text-lg tracking-wide">Connect</h3>
            <div className="flex gap-4 justify-center md:justify-end">
              <a 
                href="https://wa.me/923304621246" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-secondary-text hover:text-[#22c55e] hover:border-[#22c55e] hover:scale-110 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300"
              >
                <FaWhatsapp size={22} />
              </a>
              <a 
                href="https://github.com/nawalkhanz08-commits" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-secondary-text hover:text-primary hover:border-primary hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nawalkhanz08@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Email"
                className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-secondary-text hover:text-primary hover:border-primary hover:scale-110 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-secondary-text text-sm mt-6 md:mt-0 font-medium">
            &copy; {new Date().getFullYear()} Nawal Khan. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
