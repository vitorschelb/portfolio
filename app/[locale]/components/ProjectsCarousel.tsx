"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import projectsData from "../../shared/Data";
import { AnimatePresence, motion } from "framer-motion";

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
      <div className="flex flex-col min-h-[600px] md:min-h-[450px] justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            variants={variants}
            animate="animate"
            initial="initial"
            exit="exit"
            className="grid items-center justify-around md:flex"
          >
            <div className="flex md:max-w-lg 2xl:max-w-2xl bg-gray-three bg-opacity-20 p-4 md:shadow-md">
              <Image
                src={slides[currentIndex]}
                alt="one"
                width={500}
                height={500}
                className="object-cover object-center h-full w-full shadow-md"
              />
            </div>
            <div>
              <ProjectCard
                project={projectsData[currentIndex]}
                currentIndex={currentIndex}
                totalSlides={slides.length}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-evenly 2xl:mt-10 ">
        <button
          tabIndex={0}
          aria-label="Previous"
          className="p-6 w-44 bg-gray-three text-clean-white font-poppins font-medium border-gray-three border-2 shadow-sm hover:underline hover:bg-clean-white hover:shadow-md hover:text-gray-three ease-in-out duration-500"
          onClick={prevSlide}
        >
          Previous
        </button>
        <button
          tabIndex={0}
          aria-label="Next"
          className="p-6 w-44 bg-gray-three text-clean-white font-poppins font-medium border-gray-three border-2 shadow-sm hover:underline hover:bg-clean-white hover:shadow-md hover:text-gray-three ease-in-out duration-500"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </>
  );
}
