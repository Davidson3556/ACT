"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingScreenProps {
  minimumLoadTime?: number;
}

export default function LoadingScreen({ minimumLoadTime = 2000 }: LoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadTime);

    return () => clearTimeout(timer);
  }, [minimumLoadTime]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo with pulse animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/logo.svg"
                  alt="ACT Foundation"
                  width={120}
                  height={55}
                  priority
                  className="w-auto h-auto"
                />
              </motion.div>
            </motion.div>

            {/* Loading indicator */}
            <div className="flex flex-col items-center gap-4">
              {/* Animated dots */}
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: "var(--brand-primary)" }}
                  />
                ))}
              </div>

              {/* Loading text with shimmer effect */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-sm font-jost text-muted-foreground tracking-wider"
              >
                A.C.T Today, Transform Tomorrow
              </motion.p>
            </div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full w-1/2 rounded-full"
                style={{ 
                  background: "linear-gradient(90deg, var(--brand-primary), var(--color-gold), var(--brand-primary))" 
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
