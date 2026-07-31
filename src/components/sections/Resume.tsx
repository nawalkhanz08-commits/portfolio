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
                  Motivated and detail-oriented Web Developer skilled in designing and deploying responsive, modern web applications. Proficient across the front-end stack (React.js, JavaScript ES6+, Tailwind CSS, HTML5, CSS3) and back-end fundamentals (Node.js, Supabase, REST APIs, SQL). Combines technical application development with modern AI development workflows (Cursor, Claude, Google Antigravity) and hands-on experience in lead generation and client communications.
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
                  <h5 className="text-lg font-bold text-white">Web Development Contractor</h5>
                  <p className="text-primary font-medium text-sm mb-2">US-Based Company</p>
                  <p className="text-secondary-text text-sm">Built and maintained responsive web applications, collaborating with remote teams to translate specifications into scalable components.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <h5 className="text-lg font-bold text-white">Sales & Lead Generation Executive</h5>
                  <p className="text-primary font-medium text-sm mb-2">Client Services • 6 Months</p>
                  <p className="text-secondary-text text-sm">Market research, outreach via LinkedIn/Apollo.io, and client communication using HubSpot CRM.</p>
                </div>
                <div className="relative pl-6 border-l-2 border-primary/30">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <h5 className="text-lg font-bold text-white">Data Entry Operator</h5>
                  <p className="text-primary font-medium text-sm mb-2">Administrative Services • 1 Year</p>
                  <p className="text-secondary-text text-sm">Managed high-volume data records, data verification, and structured record management.</p>
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
                  <h5 className="font-bold text-white mb-2">FutureHome</h5>
                  <p className="text-secondary-text text-sm mb-3">Solar Equipment Platform built with HTML5, CSS3, Tailwind CSS, JavaScript.</p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                  <h5 className="font-bold text-white mb-2">Netflix Clone</h5>
                  <p className="text-secondary-text text-sm mb-3">Dynamic streaming UI with real-time movie fetching (React, Tailwind).</p>
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors md:col-span-2">
                  <h5 className="font-bold text-white mb-2">Coffee Shop App</h5>
                  <p className="text-secondary-text text-sm mb-3">Interactive storefront website highlighting featured products and menus.</p>
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
                  <h6 className="text-white text-sm font-semibold mb-2">Front-End</h6>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'].map(s => <span key={s} className="px-3 py-1 bg-primary/10 border border-primary/20 text-blue-200 text-xs rounded-full">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h6 className="text-white text-sm font-semibold mb-2">Back-End & DB</h6>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'REST APIs', 'Supabase', 'SQL'].map(s => <span key={s} className="px-3 py-1 bg-secondary/10 border border-secondary/20 text-purple-200 text-xs rounded-full">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h6 className="text-white text-sm font-semibold mb-2">Lead Gen & Sales</h6>
                  <div className="flex flex-wrap gap-2">
                    {['HubSpot CRM', 'LinkedIn Sales Nav', 'Apollo.io', 'Google Sheets'].map(s => <span key={s} className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-200 text-xs rounded-full">{s}</span>)}
                  </div>
                </div>
                <div>
                  <h6 className="text-white text-sm font-semibold mb-2">Developer & AI Tools</h6>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'VS Code', 'Cursor', 'Claude', 'Google Antigravity', 'Vercel'].map(s => <span key={s} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full">{s}</span>)}
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
                  <GraduationCap size={20} className="text-primary" /> Education & Certs
                </h4>
                <p className="text-secondary-text text-sm mb-2"><strong className="text-white">Diploma in Web Dev & AI</strong> - 2026</p>
                <p className="text-secondary-text text-sm"><strong className="text-white">Intermediate</strong> - In Progress</p>
              </div>
              <div>
                <h4 className="flex items-center gap-2 text-xl font-semibold text-white mb-3">
                  <Globe size={20} className="text-primary" /> Languages
                </h4>
                <div className="flex gap-4">
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">English (Prof)</span>
                  <span className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300">Urdu (Native)</span>
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
                  'Cross-functional Teamwork', 'Strategic Problem Solving', 
                  'Client Relationship Management', 'Time Management'
                ].map((s) => (
                  <span key={s} className="px-3 py-1.5 glass border border-white/10 text-gray-300 text-xs rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>


      </div>
    </section>
  );
};
