"use client";

import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/clerk-react";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <div className="relative bg-gradient-to-br from-green-600 to-green-700 text-white py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />

      <div className="max-w-[1200px] mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready to Start Learning?
          </motion.h2>
          <motion.p 
            className="text-xl mb-12 max-w-[600px] mx-auto text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Join thousands of successful language learners and start your journey today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <SignedOut>
              <SignUpButton>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-green-600 hover:bg-white/90 hover:text-green-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Now
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white text-green-600 hover:bg-white/90 hover:text-green-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 