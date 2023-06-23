"use client";

import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import projectsData from "../shared/projectsData";
import { ProjectCarouselProps } from "../shared/types";


export default function ProjectsCarousel({ projects }: ProjectCarouselProps)  {
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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  //No lugar dos botoes de passar com group hover, adicionar o cartão de cada projeto. RELATIVE GROUP NA MAIN DIV QUE TIREI
  //Tranferir os botões do interior para baixo como previous e next
  //    src={slides[currentIndex]}
  return (
    <div className="flex flex-col w-100 h-100">
      <div className="flex">
      <Image
            src={slides[currentIndex]}
            alt="one"
            width={800}
            height={400}
          />
        <ProjectCard project={projectsData[currentIndex]} />
      </div>

      <div className="flex justify-between">
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
