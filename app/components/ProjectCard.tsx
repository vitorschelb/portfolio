import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { Project } from "../shared/Data";

type ProjectProp = {
  project: Project;
  currentIndex: number;
  totalSlides: number;
};

export default function ProjectCard({
  project,
  currentIndex,
  totalSlides,
}: ProjectProp) {
  return (
    <div className="flex flex-col h-full w-full md:max-w-[300px] p-4 bg-gray-three bg-opacity-20 justify-between shadow-md">
      <div className="flex items-center mb-6">
        <h1 className="font-bold tracking-widest text-lg font-poppins">
          {project.title}
        </h1>
        <span className="w-full border-gray-zero ml-4 border-b" />
      </div>

      <div className="bg-gray-three bg-opacity-30 p-4 shadow-sm">
        <p className="text-justify font-medium text-sm">
          {project.description}
        </p>
      </div>

      <div className="bg-gray-three bg-opacity-30 p-4">
        <p className="text-justify font-medium font-firacode text-sm">
          {project.technologies}
        </p>
      </div>

      <div className="flex justify-between mt-4 text-gray-three">
        <span>
          {currentIndex + 1} / {totalSlides}
        </span>

        <div className="flex gap-2 text-2xl"> 
          <Link href="/" />
          <SiGithub />
          <Link href="/" />
          <FiExternalLink />
        </div>
      </div>
    </div>
  );
}
