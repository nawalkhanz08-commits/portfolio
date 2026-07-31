import React from 'react';
import { cn } from '../../utils/cn';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glow?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, glow = false, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'glass-card relative overflow-hidden p-4 md:p-6',
          glow && 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-primary/30',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
