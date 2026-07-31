import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-7xl px-4 transition-all duration-300`}
      >
        <div 
          className={`flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300 ${
            scrolled ? 'glass border-white/10 shadow-lg shadow-black/20' : 'bg-transparent border-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#home" className="text-3xl font-bold tracking-tighter text-white font-sans flex items-center justify-center gap-1">
            N<span className="text-primary">K</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative text-[15px] font-medium text-secondary-text hover:text-white transition-colors py-2 group"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Side Icons Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 mr-2 px-3 py-1.5 rounded-full glass border border-green-500/20 bg-green-500/10 hover:border-green-500/40 hover:bg-green-500/20 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
              </span>
              <span className="text-[11px] font-semibold text-green-400 tracking-wide uppercase">Available</span>
            </div>
            <a
              href="https://wa.me/923304621246"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-[#22c55e] hover:border-[#22c55e] hover:scale-[1.08] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="https://github.com/nawalkhanz08-commits"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary hover:scale-[1.08] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nawalkhanz08@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary hover:scale-[1.08] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <MdEmail size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 relative z-[60] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-[280px] sm:w-[320px] bg-surface/95 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col z-50 md:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8 mt-2">
                <span className="text-xl font-bold text-white tracking-tight">Menu</span>
              </div>
              
              <ul className="flex flex-col gap-2 mb-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-secondary-text hover:text-white hover:bg-white/5 rounded-lg px-4 py-3 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center gap-4 mt-auto">
                <a
                  href="https://wa.me/923304621246"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-[#22c55e] hover:border-[#22c55e] hover:scale-[1.08] hover:shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all duration-300"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://github.com/nawalkhanz08-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary hover:scale-[1.08] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nawalkhanz08@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary hover:scale-[1.08] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                >
                  <MdEmail size={24} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
