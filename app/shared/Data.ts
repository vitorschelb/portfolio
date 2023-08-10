import { StaticImageData } from "next/image";
import podcodar from "../../public/podcodar.png";
import portfolio from "../../public/portfolio.png";
import { z } from "zod";

export type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export const feedbackSchema = z.object({
  name: z
    .string()
    .nonempty("* Obrigatory field")
    .min(3, "* 2 characters minimum"),
  email: z.string().nonempty("* Obrigatory field").email("* Invalid email"),
  message: z.string().nonempty("* Obrigatory field"),
});

export type Project = {
  id: "my-portfolio" | "podcodar-app";
  image: StaticImageData;
  repoURL: string;
  deployURL: string;
  technologies: string;
  about: string;
};

type Icon = {
  id: string;
  title: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export const projectsData: Project[] = [
  {
    id: "my-portfolio",
    image: portfolio,
    repoURL: "https://github.com/vitorschelb/portfolio",
    deployURL: "https://vitorschelb.dev",
    technologies:
      "Next TypeScript Tailwind Framer-Motion ChakraUI Next-intl Zod Nodemailer",
    about: "PORTIFAS",
  },
  {
    id: "podcodar-app",
    image: podcodar,
    repoURL: "https://github.com/podcodar/app",
    deployURL: "https://github.com/podcodar/app",
    technologies:
      "Next TypeScript NextAuth Prisma Docker Tailwind-Styled-Components Zod",
    about: "PODCODAR",
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
