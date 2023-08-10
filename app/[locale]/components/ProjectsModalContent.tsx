import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import { useProjects } from "@/app/contexts/ProjectsContext";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ProjectsModalContent() {
  const { currentIndex, project, pictures } = useProjects();

  const t = useTranslations("ProjectsCard");

  const features = t(`${project.id}.features`).split(",");

  return (
    <section>
      <div className="flex relative max-w-full max-h-[300px] border-b-2 border-gray-three shadow-sm">
        <Image
          priority={true}
          src={pictures[currentIndex]}
          alt={project.id}
          width={1000}
          height={300}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:..."
        />
      </div>
      <div className="flex flex-col font-raleway gap-2 mt-4 p-6">
        <div>
          <h1 className="text-gray-three text-3xl font-bold">
            {t(`${project.id}.title`)}
          </h1>
          <h2 className="text-gray-zero font-bold text-sm uppercase">
            {t(`${project.id}.subtitle`)}
          </h2>
        </div>
        <span className="block border-b border-gray-zero w-full" />
        <p className="text-justify text-sm">{t(`${project.id}.about`)}</p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex justify-between flex-wrap">
            {features.map((feat) => (
              <p
                key={feat}
                className="inline-block bg-gray-three text-clean-white px-2 py-1 m-1 text-xs font-semibold shadow-md before:content-['➤'] before:mr-2"
              >
                {feat}
              </p>
            ))}
          </div>
          <div className="flex justify-between flex-wrap mb-6">
            {project.technologies.split(" ").map((technology, index) => (
              <span
                key={index}
                className="inline-block bg-gray-zero text-clean-white px-2 py-1 m-1 shadow-md font-firacode text-xs font-medium"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div className="w-full absolute bottom-0 left-0 right-0 flex justify-center items-center h-10 bg-gray-three text-clean-white font-raleway font-semibold gap-2">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={0}
            href={project.deployURL}
          >
            {t("Common.visit")}
          </Link>
          <GoLinkExternal className="text-lg" />
        </div>
      </footer>
    </section>
  );
}
