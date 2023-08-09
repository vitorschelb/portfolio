import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { ChakraProvider, Tooltip } from "@chakra-ui/react";
import { useProjects } from "@/app/contexts/ProjectsContext";


export default function ProjectCard() {
  const { currentIndex, project, totalSlides } = useProjects();
  
  const t = useTranslations("ProjectsCard");
 

  return (
    <ChakraProvider>
      <div className="flex flex-col h-full w-full md:max-w-[300px] p-4 bg-gray-three bg-opacity-20 justify-between shadow-md">
        <div className="flex items-center mb-6">
          <h1 className="font-bold tracking-widest text-lg font-poppins">
            {t(`${project.id}.title` as any)}
          </h1>
          <span className="w-full border-gray-zero ml-4 border-b" />
        </div>

        <div className="bg-gray-three bg-opacity-30 p-2 shadow-sm">
          <p className="text-justify font-medium text-sm mb-3">
            {t(`${project.id}.description` as any)}
          </p>

          <p className="text-justify text-xs font-firacode">
            {project.technologies}
          </p>
        </div>

        <div className="flex justify-between mt-4 font-bold text-gray-three">
          <span>
            {currentIndex + 1} / {totalSlides}
          </span>

          <div className="flex gap-2 text-2xl">
            <Link
              tabIndex={0}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              href={project.repoURL}
              className="hover:text-gray-two ease-in-out duration-500 hover:animate-pulse"
            >
              <Tooltip label="GitHub">
                <span>
                  <SiGithub />
                </span>
              </Tooltip>
            </Link>
            <Link
              tabIndex={0}
              aria-label="Website"
              target="_blank"
              rel="noopener noreferrer"
              href={project.deployURL}
              className="hover:text-gray-two ease-in-out duration-500 hover:animate-pulse"
            >
              <Tooltip label="Website">
                <span>
                  <FiExternalLink />
                </span>
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
