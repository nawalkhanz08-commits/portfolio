import { motion, type Variants } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinkedin
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiSupabase, SiVercel, SiNetlify, SiHubspot
} from 'react-icons/si';
import { TbApi, TbBrandVscode } from 'react-icons/tb';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'group-hover:text-[#E34F26]' },
  { name: 'CSS3', icon: FaCss3Alt, color: 'group-hover:text-[#1572B6]' },
  { name: 'JavaScript', icon: FaJs, color: 'group-hover:text-[#F7DF1E]' },
  { name: 'React', icon: FaReact, color: 'group-hover:text-[#61DAFB]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'group-hover:text-[#06B6D4]' },
  { name: 'Node.js', icon: FaNodeJs, color: 'group-hover:text-[#339933]' },
  { name: 'Supabase', icon: SiSupabase, color: 'group-hover:text-[#3FCF8E]' },
  { name: 'REST API', icon: TbApi, color: 'group-hover:text-[#38BDF8]' },
  { name: 'HubSpot', icon: SiHubspot, color: 'group-hover:text-[#FF7A59]' },
  { name: 'LinkedIn', icon: FaLinkedin, color: 'group-hover:text-[#0077b5]' },
  { name: 'Git', icon: FaGitAlt, color: 'group-hover:text-[#F05032]' },
  { name: 'GitHub', icon: FaGithub, color: 'group-hover:text-white' },
  { name: 'VS Code', icon: TbBrandVscode, color: 'group-hover:text-[#007ACC]' },
  { name: 'Vercel', icon: SiVercel, color: 'group-hover:text-white' },
  { name: 'Netlify', icon: SiNetlify, color: 'group-hover:text-[#00C7B7]' },
];

export const Skills = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-5 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-5xl font-bold text-white mb-6 text-center w-full">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
            >
              <div 
                className="group flex flex-col items-center justify-center gap-3 w-28 h-28 md:w-36 md:h-36 rounded-2xl glass border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] cursor-default"
              >
                <skill.icon size={48} className={`text-secondary-text transition-colors duration-300 ${skill.color}`} />
                <span className="text-sm md:text-base font-medium text-secondary-text group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
