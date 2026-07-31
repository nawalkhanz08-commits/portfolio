
import { motion, AnimatePresence } from 'framer-motion';


const projects = [
  {
    id: 1,
    title: 'FutureHome - Solar Platform',
    description: 'An interactive web portal showcasing renewable energy products and services. Built responsive grid layouts for mobile, tablet, and desktop screens.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
    category: 'Frontend',
    tech: ['HTML5', 'CSS3', 'Tailwind', 'JavaScript'],
    github: 'https://github.com/nawalkhanz08-commits',
    demo: '#'
  },
  {
    id: 2,
    title: 'Netflix Interface Clone',
    description: 'A dynamic streaming UI replica featuring real-time movie catalogue fetching via API integration. Implemented modular React components and state management.',
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=800&auto=format&fit=crop',
    category: 'Frontend',
    tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/nawalkhanz08-commits',
    demo: '#'
  },
  {
    id: 3,
    title: 'Coffee Shop Interactive App',
    description: 'An engaging storefront website highlighting featured products, menus, and business info with smooth scrolling, intuitive UI navigation, and responsive media queries.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop',
    category: 'Frontend',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/nawalkhanz08-commits',
    demo: '#'
  }
];

export const Projects = () => {

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
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full mb-16" />
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {projects.map((project) => (
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
