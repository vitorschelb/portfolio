import { StaticImageData } from "next/image";
import podcodar from "../../public/podcodar.jpeg";
import portfolio from "../../public/portfolio.png";

export type Project = {
  id: string;
  image: StaticImageData;
  repoURL: string;
  deployURL: string;
  technologies: string;
};

type Icon = {
  id: string;
  title: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type AboutItem = {
  text: string;
};

//TODO: Use only messages to store data.

export const projectsData: Project[] = [
  {
    id: "my-portfolio",
    image: portfolio,
    repoURL: "/",
    deployURL: "/",
    technologies:
      "Next TypeScript Tailwind Framer-Motion ChakraUI Next-intl Nodemailer",
  },
  {
    id: "podcodar-app",
    image: podcodar,
    repoURL: "https://github.com/nicolasbrandao/fake-store",
    deployURL: "/",
    technologies:
      "Next TypeScript NextAuth Prisma Docker Tailwind-Styled-Components Zod",
  },
];

export const iconList: Icon[] = [
  { id: "SiReact", title: "React" },
  { id: "SiRedux", title: "Redux" },
  { id: "SiTailwindcss", title: "Tailwind" },
  { id: "SiNextdotjs", title: "Next" },
  { id: "SiJavascript", title: "JavaScript" },
  { id: "SiTypescript", title: "TypeScript" },
  { id: "SiHtml5", title: "HTML" },
  { id: "SiCss3", title: "CSS" },
  { id: "SiGit", title: "Git" },
  { id: "SiPrisma", title: "Prisma" },
  { id: "SiDocker", title: "Docker" },
  { id: "TbFramer", title: "Framer Motion" },
];

export default projectsData;
