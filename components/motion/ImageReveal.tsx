"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function ImageReveal({
  children,
  className = "",
  delay = 0.2,
  duration = 1.1,
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: "inset(12% 0% 12% 0% round 24px)", opacity: 0, scale: 0.96 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 24px)", opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
