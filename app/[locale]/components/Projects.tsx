"use client";
import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects() {
  return (
    <section className="flex flex-col justify-center h-screen bg-clean-white md:px-20 2xl:px-36">
      <div className="flex items-center justify-around mb-10">
        <h1 className="tracking-super text-xl font-bold font-poppins mr-10 text-gray-three">
          PROJECTS
        </h1>
        <span className="w-full border-gray-zero border-b"/>
      </div>

      <ProjectsCarousel />
    </section>
  );
}
