"use client";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { PropsWithChildren } from "react";

const transitionVariants: Variants = {
  initial: { opacity: 0, y: 5 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
};

export const PageTransition = ({ children }: PropsWithChildren) => {
  return (
    <AnimatePresence>
      <div className="bg-clean-white">
        <motion.div
          className="bg-clean-white"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={transitionVariants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
