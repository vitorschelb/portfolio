"use client";

import { useTranslations } from "next-intl";
import MobileCarousel from "./MobileCarousel";
import ProjectsCarousel from "./ProjectsCarousel";

export default function Projects() {
  const t = useTranslations("Projects");
  return (
    <section className="flex flex-col justify-center h-screen bg-clean-white gap-6 px-8 md:px-20 2xl:px-36">
      <div className="flex items-center justify-around">
        <h1 className="tracking-super text-xl font-bold font-poppins mr-10 text-gray-three">
          {t("title")}
        </h1>
        <span className="w-full border-gray-zero border-b" />
      </div>

      <ProjectsCarousel />
      <MobileCarousel />  
      <span className="w-full border-gray-zero border-b" />
    </section>
  );
}
