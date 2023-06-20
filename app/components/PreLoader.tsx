"use client";
import { PropsWithChildren } from "react";

import { motion, AnimatePresence, animate } from "framer-motion";

export default function PreLoader({ children }: PropsWithChildren) {

  return (
    <AnimatePresence>
      <div className="w-screen h-screen bg-gray-three">
        <div className="flex justify-center items-center h-full w-full absolute">
          <div className="w-0 h-full border-r absolute animate-grow border-gray-three"/>
        </div>
        <motion.div
          key={1}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          variants={{
            initialState: {
              opacity: 1,
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
