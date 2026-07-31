import { motion } from 'framer-motion';
import { Briefcase, Target, Database, Calendar, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Web Development Contractor',
    date: 'US-Based Company',
    icon: Briefcase,
    description: '',
    details: [
      'Technologies: React.js, JavaScript (ES6+), HTML5, Tailwind CSS',
      'Built and maintained responsive, performance-optimized web applications for international client specifications.',
      'Collaborated with cross-functional remote teams to translate project specifications into scalable front-end components.',
      'Optimized page layout performance and ensured seamless cross-browser compatibility.'
    ]
  },
  {
    id: 2,
    title: 'Sales & Lead Generation Executive',
    date: 'Client Services • 6 Months',
    icon: Target,
    description: '',
    details: [
      'Conducted market research and outreach using tools like LinkedIn Sales Navigator and Apollo.io to identify high-potential business leads.',
      'Managed direct client communications and outreach via HubSpot CRM, enhancing pipeline growth and client satisfaction.',
      'Strengthened professional negotiation, active listening, and technical communication skills.'
    ]
  },
  {
    id: 3,
    title: 'Data Entry Operator',
    date: 'Administrative Services • 1 Year',
    icon: Database,
    description: '',
    details: [
      'Managed high-volume data records in Google Sheets and databases with strict adherence to accuracy and formatting standards.',
      'Performed data verification, error audits, and structured record management.'
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl w-full mx-auto px-5 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[32px] md:text-5xl font-bold text-white mb-6 text-center w-full tracking-wide">
            Work <span className="text-secondary">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent rounded-full origin-top"
          />

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#080C18] border-4 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)] mt-1.5 md:mt-0">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-start md:pl-12' : 'md:justify-end md:pr-12'} w-full`}>
                  <div className="w-full glass p-8 rounded-3xl border border-white/10 hover:border-primary/40 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] transition-all duration-300 group hover:-translate-y-2">
                    
                    <div className="flex items-center gap-4 mb-4 text-primary font-medium">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        <exp.icon size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-wide">{exp.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold mb-6 uppercase tracking-wider">
                      <Calendar size={16} />
                      <span>{exp.date}</span>
                    </div>
                    
                    {exp.description && (
                      <p className="text-secondary-text leading-relaxed text-base">
                        {exp.description}
                      </p>
                    )}

                    {exp.details && exp.details.length > 0 && (
                      <ul className="space-y-3 mt-4 text-secondary-text text-base">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-secondary shrink-0 mt-0.5" />
                            <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: detail.replace(/^(.*?)\s–/, '<strong class="text-white">$1</strong> &ndash;') }} />
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
