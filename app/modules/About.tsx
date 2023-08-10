"use client";
import Image from "next/image";
import { iconList } from "../shared/Data";

import {
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiDocker,
  SiPrisma,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { useTranslations } from "next-intl";

const iconElements = [
  <SiReact key={1} name="SiReact" />,
  <SiRedux key={3} name="SiRedux" />,
  <SiNextdotjs key={4} name="SiNextdotjs" />,
  <SiDocker key={5} name="SiDocker" />,
  <SiPrisma key={6} name="SiPrisma" />,
  <SiTypescript key={7} name="SiTypescript" />,
  <SiTailwindcss key={8} name="SiTailwindcss" />,
  <SiJavascript key={9} name="SiJavascript" />,
  <SiHtml5 key={10} name="SiHtml5" />,
  <SiCss3 key={11} name="SiCss3" />,
  <SiGit key={12} name="SiGit" />,
  <TbBrandFramerMotion key={13} name="TbFramer" />,
];

export default function About() {
  const t = useTranslations("About");

  const aboutList = t("about_list").split(".,");

  return (
    <section className="h-screen bg-clean-white overflow-auto grid grid-cols-1 px-8 gap-10 md:px-20 lg:grid-cols-3 2xl:px-36 2xl:grid-cols-2 ">
      <div className="col-span-2 mt-24 flex flex-col gap-6 lg:justify-center 2xl:col-span-1">
        <div className="flex justify-around items-center">
          <h1 className="text-xl font-bold tracking-super mr-10 font-poppins text-gray-three">
            {t("title")}
          </h1>
          <span className="border-b border-gray-zero w-full" />
        </div>
        <ul>
          {aboutList.map((aboutItem) => (
            <li
              key={aboutItem}
              className="flex mb-2 text-justify text-gray-zero before:content-['➤'] before:mr-2"
            >
              {aboutItem}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex justify-around items-center">
            <h1 className="text-xl font-bold tracking-super mr-10 font-poppins text-gray-three">
              STACK
            </h1>
            <span className="border-b border-gray-zero w-full" />
          </div>
          <div className="flex flex-wrap justify-center">
            {iconElements.map((iconElement) => {
              const iconName = iconElement.props.name;
              const iconTitle = iconList.find(
                (iconItem) => iconItem.id === iconName
              )?.title;
              return (
                <div
                  key={iconName}
                  className="w-24 my-2 flex flex-col justify-center items-center sm:w-2/12 2xl:w-1/4"
                >
                  <div className="text-2xl z-0 opacity-90 2xl:text-4xl">
                    {iconElement}
                  </div>
                  <p className="mt-1 text-xs font-firacode">{iconTitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex justify-center items-center">
        <div className="h-96 w-60 2xl:h-3/6 2xl:w-6/12">
          <Image
            src="/me.webp"
            alt="Photo of a 30-year-old man's face"
            className="h-full w-full object-cover shadow-sm"
            priority = {true}
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
