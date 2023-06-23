import { HiOutlineFolder } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { ProjectProp } from "../shared/types";
import Link from "next/link";

export default function ProjectCard({ project }: ProjectProp) {
  return (
    <div
      className="flex
      flex-col
      justify-between
      bg-bcg2
      rounded-lg
      h-[400px]
      w-full
      md:w-[250px]
      p-4
      md:absolute
      md:right-0"
    >
      <header className="flex flex-col">
        <div className="flex justify-between items-center">
          <HiOutlineFolder className="text-4xl" />
          <div className="flex gap-4 text-xl">
            <Link href="/" />
            <SiGithub />

            <Link href="/" />
            <FiExternalLink />
          </div>
        </div>
        <h2 className="font-bold text-2xl">{project.title}</h2>
      </header>
      <p>{project.description}</p>
      <p className="">{project.technologies}</p>
    </div>
  );
}
