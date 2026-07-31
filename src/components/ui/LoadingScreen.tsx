import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress over 1.5 seconds
    const duration = 1500;
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 300); // slight delay after reaching 100% before triggering exit
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080C18]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl font-bold text-white mb-10 tracking-tighter"
        >
          N<span className="text-primary">K</span>
        </motion.div>
        
        {/* Progress Bar Container */}
        <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mb-6 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          {/* Progress Bar Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>
        
        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-primary/80 text-sm font-semibold tracking-[0.2em] uppercase flex items-center gap-2"
        >
          Initializing Portfolio <span className="text-white">{Math.round(progress)}%</span>
        </motion.div>
      </div>
    </motion.div>
  );
};
