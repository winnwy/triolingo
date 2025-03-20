"use client";

import { ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="size-6 text-green-500" />
      </motion.div>
    </motion.div>
  );
} 