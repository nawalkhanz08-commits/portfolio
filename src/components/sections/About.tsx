import { motion } from 'framer-motion';


export const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="max-w-7xl w-full mx-auto px-5">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[28px] md:text-5xl font-bold text-white mb-4 text-center w-full">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center flex flex-col gap-6"
          >
            <p className="text-base md:text-xl text-secondary-text leading-relaxed font-light">
              I am Nawal Khan, a 17-year-old passionate Full Stack Web Developer who enjoys building modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-base md:text-xl text-secondary-text leading-relaxed font-light">
              I have completed a Full Stack Web Development course and continuously improve my skills by building real-world projects. I enjoy solving problems, learning new technologies, and creating clean, modern user experiences.
            </p>
            <p className="text-base md:text-xl text-secondary-text leading-relaxed font-light">
              My goal is to become a professional software engineer and contribute to innovative products while continuously expanding my knowledge in web development and AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
