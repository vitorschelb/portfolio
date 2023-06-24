"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import { ProjectCarouselProps } from "../shared/types";

export default function ProjectsCarousel({ projects}: ProjectCarouselProps) {
  const slides = projects.map((project) => project.image);

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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  //No lugar dos botoes de passar com group hover, adicionar o cartão de cada projeto. RELATIVE GROUP NA MAIN DIV QUE TIREI
  //Tranferir os botões do interior para baixo como previous e next
  //    src={slides[currentIndex]}
  return (
    <div className="flex flex-col w-full ">
      <div className="flex items-center justify-around">
        <div className="flex flex-1 md:max-w-sm md:max-h-sm 2xl:max-w-xl 2xl:max-h-xl">
          <Image
            src={slides[currentIndex]}
            alt="one"
            width={500}
            height={400}
            className="object-cover h-full w-full"
          />
        </div>

        <div className="">
          <ProjectCard project={projects[currentIndex]} />
        </div>
      </div>

      <div className="flex justify-around">
        <button
          className="p-2 w-28 bg-gray-three text-clean-white font-poppins font-medium border-gray-three border-2 cursor-pointer hover:underline hover:bg-clean-white hover:text-gray-three ease-in-out duration-500 "
          onClick={prevSlide}
        >
          PREVIOUS
        </button>
        <button
          className="p-2 w-28 bg-gray-three text-clean-white font-poppins font-medium border-gray-three border-2 cursor-pointer hover:underline hover:bg-clean-white hover:text-gray-three ease-in-out duration-500 "
          onClick={nextSlide}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

//      <div className="flex top-4 justify-center py-2">
// {slides.map((_, slideIndex) => (
//   <div
//     key={slideIndex}
//     onClick={() => goToSlide(slideIndex)}
//     className="text-2xl cursor-pointer"
//   >
//     <RxDotFilled />
//   </div>
// ))}
// </div>
