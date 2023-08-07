"use client";

import ProjectCard from "./ProjectCard";
import { useState } from "react";
import projectsData from "../../shared/Data";
import { AnimatePresence, motion } from "framer-motion";
import ProjectImageCard from "./ProjectImageCard";
import {IoMdArrowRoundForward, IoMdArrowRoundBack} from "react-icons/io";

const variants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: {
      x: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
      opacity: {
        duration: 0.2,
      },
    },
  },
};

export default function ProjectsCarousel() {
  const slides = projectsData.map((project) => project.image);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="hidden lg:flex flex-col items-center md:flex-row min-h-[600px] md:min-h-[400px] justify-center gap-10">
        <div>
          <button
            tabIndex={0}
            aria-label="Previous"
            className="flex justify-center items-center text-2xl w-12 h-12 p-2 rounded-full bg-gray-three text-clean-white border-gray-three border-2 shadow-sm hover:underline hover:bg-clean-white hover:shadow-md hover:text-gray-three ease-in-out duration-500"
            onClick={prevSlide}
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="gap-30 md:flex"
          >
            <ProjectImageCard project={projectsData[currentIndex]} />

          </motion.div>
        </AnimatePresence>
            <div>
              <ProjectCard
                project={projectsData[currentIndex]}
                currentIndex={currentIndex}
                totalSlides={slides.length}
              />
            </div>
        <div>
          <button
            tabIndex={0}
            aria-label="Next"
            className="flex justify-center items-center text-2xl w-12 h-12 rounded-full bg-gray-three text-clean-white border-gray-three border-2 shadow-sm hover:underline hover:bg-clean-white hover:shadow-md hover:text-gray-three ease-in-out duration-500"
            onClick={nextSlide}
          >
            <IoMdArrowRoundForward />
          </button>
        </div>
      </div>
    </>
  );
}
