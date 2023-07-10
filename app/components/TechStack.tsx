"use client";
import { icons } from "../shared/Data";
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

export default function TechStack() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-clean-white md:px-20 2xl:px-36">
      <div className="items-center justify-center">
        <div className="flex items-center justify-around mb-6">
          <h1 className="tracking-super text-xl font-poppins font-bold text-gray-three">
            TECH STACK
          </h1>
          <span className="w-1/2 border-b border-gray-zero" />
        </div>
        <div className="flex flex-wrap justify-start mb-6">
          {iconElements.map((item) => {
            const iconName = item.props.name;
            const iconTitle = icons.find((icon) => icon.id === iconName)?.title;
            return (
              <div
                key={iconName}
                className="flex my-3 w-1/2 md:w-1/3 xl:w-1/4 flex-col justify-center items-center hover:animate-float"
              >
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
