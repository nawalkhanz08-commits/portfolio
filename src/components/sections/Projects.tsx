import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from '../ui/Icons';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 2,
    title: 'FutureHome',
    description: 'A website for solar installations and sanitary appliances, featuring a responsive design and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    category: 'Frontend',
    tech: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/nawalkhanz08-commits',
    demo: '#'
  },
  {
    id: 3,
    title: 'Restaurant Management System',
    description: 'A full-stack solution for restaurants to manage inventory, staff shifts, and online orders with real-time updates.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop',
    category: 'Full Stack',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/nawalkhanz08-commits',
    demo: '#'
  },
  {
    id: 4,
    title: 'AI Chat Assistant',
    description: 'An intelligent conversational agent capable of answering complex queries and generating code snippets.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    category: 'AI',
    tech: ['React', 'OpenAI', 'Tailwind'],
    github: 'https://github.com/nawalkhanz08-commits',
    demo: '#'
  }
];

const categories = ['All', 'Frontend', 'Full Stack', 'UI Design', 'AI'];

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-5 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-5xl font-bold text-white mb-6 text-center w-full tracking-wide">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-12" />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] border-transparent' 
                    : 'glass text-secondary-text hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="group relative h-full"
              >
                <div className="h-full glass rounded-3xl overflow-hidden flex flex-col border border-white/10 transition-all duration-500 hover:border-primary/50 hover:shadow-[0_10px_40px_rgba(59,130,246,0.2)] hover:-translate-y-2">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080C18] via-transparent to-transparent opacity-80" />
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md text-white rounded-full border border-white/20 shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 bg-[#080C18]/60 backdrop-blur-sm -mt-2 rounded-t-3xl border-t border-white/5">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-secondary-text leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-semibold text-blue-200 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mt-auto">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl glass border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                      >
                        <Github size={18} /> GitHub
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
