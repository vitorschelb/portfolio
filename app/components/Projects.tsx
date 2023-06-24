"use client";
import ProjectsCarousel from "./ProjectsCarousel";


export default function Projects() {
  return (
    <section className="flex flex-col justify-center h-screen px-8 bg-clean-white md:pl-20 2xl:pl-36 ">
      
        <div className="flex items-center justify-around mb-6">
          <h1 className="tracking-super font-bold font-poppins mr-10">PROJECTS</h1>
          <span className="w-full border-gray-zero border-b" />
        </div>
        <div className="">
          <ProjectsCarousel />
        </div>
      
    </section>
  );
}
