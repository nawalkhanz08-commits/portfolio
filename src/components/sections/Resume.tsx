import { motion } from 'framer-motion';
import { Download, ExternalLink, GraduationCap, Briefcase, Award, Globe, Zap, Code, User, MapPin, Mail, Phone, Layout, FileSpreadsheet } from 'lucide-react';

export const Resume = () => {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-5 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-5xl font-bold text-white mb-6 text-center w-full tracking-wide">
            My <span className="text-primary">Resume</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-10" />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white font-semibold text-lg hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 w-full sm:w-auto"
            >
              <ExternalLink size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              View Resume
            </a>
            <a 
              href="/resume.pdf" 
              download="Nawal_Khan_Resume.pdf"
              className="group flex items-center justify-center gap-2 px-8 py-3.5 rounded-full glass border border-white/20 text-white font-semibold text-lg hover:scale-105 hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-full sm:w-auto"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Resume Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Main Column (2/3 width) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header / Summary Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <h3 className="text-3xl font-bold text-white mb-2">Nawal Khan</h3>
              <div className="flex flex-wrap gap-4 text-secondary-text mb-6 text-sm font-medium">
                <span className="flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> Lahore, Punjab, Pakistan</span>
                <span className="flex items-center gap-1.5"><Mail size={16} className="text-primary" /> nawalkhanz08@gmail.com</span>
                <span className="flex items-center gap-1.5"><Phone size={16} className="text-primary" /> +92 330 4621246</span>
              </div>
              <div className="pt-6 border-t border-white/10">
                <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-3">
                  <User size={20} className="text-primary" /> Professional Summary
                </h4>
                <p className="text-secondary-text leading-relaxed">
                  Motivated AI Web Developer with hands-on experience building modern full-stack web applications using React, JavaScript, Tailwind CSS, Node.js, and Supabase. Passionate about AI integrations, responsive UI/UX design, and solving real-world problems through technology. Experienced working remotely with US-based teams.
                </p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Briefcase size={20} className="text-primary" /> Experience
              </h4>
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <h5 className="text-lg font-bold text-white">Remote Team Collaboration</h5>
                  <p className="text-primary font-medium text-sm mb-2">US-based Teams</p>
                  <p className="text-secondary-text text-sm">Experience working seamlessly in a remote environment, collaborating efficiently with international teams to deliver high-quality web solutions.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <h5 className="text-lg font-bold text-white">Microsoft Excel Data Management</h5>
                  <p className="text-primary font-medium text-sm mb-2">1 Year Experience</p>
                  <p className="text-secondary-text text-sm">Handling complex spreadsheets, data analysis, and documentation.</p>
                </div>
              </div>
            </motion.div>

            {/* Featured Projects Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Code size={20} className="text-primary" /> Featured Projects
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                  <h5 className="font-bold text-white mb-2">AI-Powered Future Home Platform</h5>
                  <p className="text-secondary-text text-sm mb-3">React, Tailwind CSS, Supabase Authentication & Database.</p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                  <h5 className="font-bold text-white mb-2">BrowserOS</h5>
                  <p className="text-secondary-text text-sm mb-3">Browser-based desktop environment with draggable windows, taskbar, and management.</p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors md:col-span-2">
                  <h5 className="font-bold text-white mb-2">Restaurant Management System</h5>
                  <p className="text-secondary-text text-sm mb-3">Responsive dashboard with modern UI/UX for managing restaurant operations.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column (1/3 width) */}
          <div className="space-y-8">
            
            {/* Technical Skills Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Zap size={20} className="text-primary" /> Technical Skills
              </h4>
              
              <div className="space-y-4">
                <div>
                  <h6 className="text-white text-sm font-semibold mb-2">Frontend</h6>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map(s => <span key={s} className="px-3 py-1 bg-primary/10 border border-primary/20 text-blue-200 text-xs rounded-full">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h6 className="text-white text-sm font-semibold mb-2">Backend & DB</h6>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'Express.js', 'Supabase', 'SQL'].map(s => <span key={s} className="px-3 py-1 bg-secondary/10 border border-secondary/20 text-purple-200 text-xs rounded-full">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h6 className="text-white text-sm font-semibold mb-2">AI & Automation</h6>
                  <div className="flex flex-wrap gap-2">
                    {['OpenAI APIs', 'AI Integrations', 'Prompt Engineering', 'AI Workflow Automation'].map(s => <span key={s} className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-200 text-xs rounded-full">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h6 className="text-white text-sm font-semibold mb-2">Tools</h6>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'VS Code', 'Cursor AI', 'Antigravity', 'Postman', 'Figma', 'Canva'].map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full">{s}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education & Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="mb-6">
                <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-3">
                  <GraduationCap size={20} className="text-primary" /> Education
                </h4>
                <p className="text-secondary-text text-sm">Intermediate</p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-3">
                  <Globe size={20} className="text-primary" /> Languages
                </h4>
                <div className="flex gap-4">
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">English</span>
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Urdu</span>
                </div>
              </div>
            </motion.div>

            {/* Strengths Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
                <Zap size={20} className="text-primary" /> Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Problem Solving', 'Fast Learner', 'Team Collaboration', 
                  'Communication', 'Time Management', 'Attention to Detail', 
                  'Adaptability', 'Continuous Learning'
                ].map((s) => (
                  <span key={s} className="px-3 py-1.5 glass border border-white/10 text-gray-300 text-xs rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Certifications Section (Full Width Grid) */}
        <div className="mt-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-3xl font-bold text-white mb-10 text-center"
          >
            <Award size={28} className="text-primary" /> Certifications
          </motion.h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Cert 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={100} />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Code size={28} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-white tracking-wide">AI Web Development Diploma</h5>
                  <p className="text-primary font-medium text-sm">Duration: 3 Months</p>
                </div>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed relative z-10">
                Completed a comprehensive AI Web Development Diploma covering React.js, JavaScript, Tailwind CSS, Node.js, Express.js, Supabase, AI Integrations, Prompt Engineering, and Full Stack Web Development.
              </p>
            </motion.div>

            {/* Cert 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileSpreadsheet size={100} />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                  <FileSpreadsheet size={28} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-white tracking-wide">Microsoft Excel Diploma</h5>
                </div>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed relative z-10">
                Completed a Microsoft Excel Diploma covering Advanced Excel, Formulas, Functions, Data Analysis, Pivot Tables, Charts, Reporting, and Spreadsheet Automation.
              </p>
            </motion.div>

            {/* Cert 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Layout size={100} />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <Layout size={28} />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-white tracking-wide">Web Development Certification</h5>
                </div>
              </div>
              <p className="text-secondary-text text-sm leading-relaxed relative z-10">
                Completed a Web Development Certification covering HTML5, CSS3, JavaScript, Responsive Design, and Modern Frontend Development.
              </p>
            </motion.div>



          </div>
        </div>

      </div>
    </section>
  );
};
