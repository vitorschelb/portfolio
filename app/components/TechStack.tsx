"use client";
import { icons } from "../shared/projectsData";
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
  SiMui,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb"

const iconElements = [
  <SiReact key={1} name="SiReact" />,
  <SiRedux key={3} name="SiRedux" />,
  <SiNextdotjs key={4} name="SiNextdotjs" />,
  <SiDocker key={5} name="SiDocker" />,
  <SiPrisma key={6} name="SiPrisma" />,
  <SiTypescript key={7} name="SiTypescript" />,
  <SiTailwindcss key={9} name="SiTailwindcss" />,
  <SiJavascript key={10} name="SiJavascript" />,
  <SiHtml5 key={11} name="SiHtml5" />,
  <SiCss3 key={12} name="SiCss3" />,
  <SiGit key={13} name="SiGit" />,
  <TbBrandFramerMotion key={14} name="TbFramer"/>,
];

export default function TechStack() {
  return (
    <section className="grid-cols-1 h-screen grid px-8 bg-clean-white md:px-20 2xl:px-36 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-around mb-6">
          <h1 className="tracking-super text-xl font-poppins font-bold text-gray-three">
            TECH STACK
          </h1>
          <span className="w-1/2 border-b border-gray-zero"/>
        </div>
        <div className="flex flex-wrap justify-start">
          {iconElements.map((item) => {
            const iconName = item.props.name;
            const iconTitle = icons.find(
              (icon: { id: any }) => icon.id === iconName
            )?.title;
            return (
              <div key={iconName} className="flex my-3 w-1/2 md:w-1/3 xl:w-1/4 flex-col justify-center items-center hover:animate-float">
                <div className="text-4xl opacity-90">{item}</div>
                <p className="font-firacode text-xs mt-1">{iconTitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
