import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";
import { useProjects } from "@/app/contexts/ProjectsContext";
import { useTranslations } from "next-intl";

export default function ProjectsModalContent() {
  const { currentIndex, project, pictures } = useProjects();
  const t = useTranslations("ProjectsCard");

  const featureKeys = [
    "feat_one",
    "feat_two",
    "feat_three",
    "feat_four",
    "feat_five",
    "feat_six",
  ];

  return (
    <section>
      <div className="flex max-w-full max-h-full border-b-2 border-gray-three shadow-sm">
        <Image
          priority={true}
          src={pictures[currentIndex]}
          alt="one"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col font-raleway gap-2 mt-4 p-6">
        <div>
          <h1 className="text-gray-three text-3xl font-bold">
            {t(`${project.id}.title` as any)}
          </h1>
          <h2 className="text-gray-zero font-bold text-sm uppercase">
            {t(`${project.id}.subtitle` as any)}
          </h2>
        </div>
        <span className="block border-b border-gray-zero w-full" />
        <p className="text-justify text-sm">
          {t(`${project.id}.about` as any)}
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <h3 className="font-raleway font-bold">{t("Common.features")}</h3>
          {featureKeys.map((featKey, i) => (
            <p className="text-justify text-xs font-semibold" key={i}>
              {t(`${project.id}.${featKey}` as any)}
            </p>
          ))}

          <h3 className="font-raleway font-bold">{t("Common.technologies")}</h3>
          <div className="flex flex-wrap bg-purple-800">
            {project.technologies.split(" ").map((technology, index) => (
              <span
                key={index}
                className="inline-block bg-gray-three text-white rounded-md px-2 py-1 m-1"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div className="w-full flex justify-center items-center h-10 bg-gray-three text-clean-white font-raleway font-semibold gap-2">
          <p>Acesse</p>
          <GoLinkExternal className="text-lg" />
        </div>
      </footer>
    </section>
  );
}
function useTranslation(arg0: string) {
  throw new Error("Function not implemented.");
}
