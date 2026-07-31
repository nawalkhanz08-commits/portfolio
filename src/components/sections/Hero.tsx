import { motion, type Variants } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Code, Monitor, Brain, Briefcase, ArrowRight, Download } from 'lucide-react';
import avatarImg from '../../assets/avatar.png';

export const Hero = () => {
  const stats = [
    { icon: Code, line1: "5+", line2: "Projects Completed" },
    { icon: Monitor, line1: "Full Stack", line2: "Developer" },
    { icon: Brain, line1: "AI & Modern", line2: "Web Apps" },
    { icon: Briefcase, line1: "Available", line2: "for Freelance" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="home" className="min-h-screen pt-40 md:pt-48 pb-20 flex flex-col justify-center relative overflow-hidden">
      
      {/* Animated Background Glows & Particles (pure CSS representation) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Blobs */}
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[140px] mix-blend-screen animate-blob" />
        <div className="absolute top-[40%] right-[10%] w-[25rem] h-[25rem] bg-secondary/15 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
        {/* Particle-like small glows */}
        <div className="absolute top-[30%] left-[40%] w-4 h-4 bg-white/40 rounded-full blur-[2px] animate-pulse" />
        <div className="absolute top-[60%] right-[30%] w-3 h-3 bg-primary/60 rounded-full blur-[1px] animate-bounce" />
        <div className="absolute bottom-[20%] left-[20%] w-5 h-5 bg-secondary/40 rounded-full blur-[3px] animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-5 relative z-10 flex flex-col">
        
        {/* Top Row: Strict Two Column Layout to prevent overlap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
            
            {/* Welcome Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="px-5 py-2.5 rounded-full glass border border-primary/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] flex items-center justify-center bg-white/5 backdrop-blur-md hover:border-primary/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-300">
                <span className="text-white text-sm font-medium tracking-wide">✨ Welcome to my Portfolio</span>
              </div>
            </motion.div>

            {/* Heading: I am Nawal Khan */}
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 tracking-wide"
            >
              👋 Hello, I'm Nawal Khan
            </motion.h2>

            {/* Main Title: Full Stack Web Developer (Reduced Size) */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-black leading-[1.15] mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-primary drop-shadow-[0_0_20px_rgba(59,130,246,0.4)] pb-2 min-h-[95px] sm:min-h-[115px] md:min-h-[140px] lg:min-h-[160px] flex items-center lg:items-start"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React Developer',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h1>

            {/* About Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="w-full lg:max-w-xl text-secondary-text text-[16px] md:text-[18px] leading-[1.9] tracking-wide mb-10"
            >
              Building scalable AI-powered web applications. I specialize in creating clean, modern, and high-performance digital experiences.
            </motion.p>

            {/* Call To Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
            >
              {/* Primary Button */}
              <a 
                href="#projects"
                className="group relative flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl bg-gradient-to-r from-primary to-blue-600 text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10">View Projects</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Button */}
              <a 
                href="/resume.pdf"
                download="Nawal_Khan_Resume.pdf"
                className="group flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-xl glass border border-white/20 text-white font-medium text-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 hover:border-white/40"
              >
                <span>Download Resume</span>
                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: AI Illustration (No overlap) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex justify-center w-full"
          >
            <motion.img 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={avatarImg} 
              alt="Developer 3D Illustration" 
              className="w-full max-w-[400px] lg:max-w-[500px] object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.5)]"
            />
          </motion.div>

        </div>

        {/* Bottom Row: Stats Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-white/10 shadow-xl hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-white shadow-inner">
                <stat.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="text-white font-bold text-2xl mb-1">{stat.line1}</span>
              <span className="text-secondary-text font-medium text-sm tracking-wide">{stat.line2}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
