import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { Project } from "../../shared/Data";
import { useTranslations } from "next-intl";
import { ChakraProvider, Tooltip } from "@chakra-ui/react";

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

        <div className="bg-gray-three bg-opacity-30 p-4 md:text-xs lg:text-base shadow-sm">
          <p className="text-justify font-medium text">
            {t(`${project.id}.description` as any)}
          </p>
        </div>

        <div className="bg-gray-three bg-opacity-30 p-4">
          <p className="text-justify font-medium font-firacode text-sm md:text-xs lg:text-sm">
            {project.technologies}
          </p>
        </div>

        <div className="flex justify-between mt-4 text-gray-three">
          <span>
            {currentIndex + 1} / {totalSlides}
          </span>

          <div className="flex gap-2 text-2xl">
            <Link
              tabIndex={0}
              aria-label="GitHub"
              href="/"
              className="hover:text-gray-two ease-in-out duration-500"
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
              href="/"
              className="hover:text-gray-two ease-in-out duration-500"
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
