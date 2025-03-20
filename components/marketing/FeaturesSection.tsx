"use client";

import { BookOpen, Brain, Target } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BookOpen className="size-8 text-green-500" />,
    title: "Interactive Learning",
    description: "Engage with dynamic exercises that adapt to your progress"
  },
  {
    icon: <Brain className="size-8 text-green-500" />,
    title: "Progress Tracking",
    description: "Monitor your improvement with detailed statistics"
  },
  {
    icon: <Target className="size-8 text-green-500" />,
    title: "Personalized Experience",
    description: "Learn at your own pace with customized content"
  }
];

export function FeaturesSection() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-16 hidden md:block">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
              className="mb-4"
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-neutral-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 