"use client";

import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeroSection() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <div ref={heroRef} className="max-w-[1200px] mx-auto px-4 py-16">
      <motion.div 
        style={{ y }}
        className="flex flex-col lg:flex-row items-center justify-between gap-12"
      >
        {/* Left side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-5xl lg:text-6xl font-bold text-neutral-800 mb-6"
          >
            Master languages with{" "}
            <span className="text-green-500 relative">
              Triolingo
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isHeroInView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-0 left-0 w-full h-1 bg-green-500 origin-left"
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-xl text-neutral-600 mb-8 max-w-[600px] mx-auto lg:mx-0"
          >
            Your personalized language learning journey starts here. 
            Practice with interactive exercises and track your progress.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <ClerkLoading>
              <Loader className="size-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton>
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button size="lg" variant="secondaryOutline" className="w-full sm:w-auto">
                    I already have an account
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                  <Link href="/learn">Continue Learning</Link>
                </Button>
              </SignedIn>
            </ClerkLoaded>
          </motion.div>
        </motion.div>

        {/* Right side - Hero Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={isHeroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-[500px] aspect-square"
        >
          <Image 
            src="../images/hero.svg" 
            fill 
            alt="Hero" 
            className="object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}