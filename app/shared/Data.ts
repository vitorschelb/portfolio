import { StaticImageData } from "next/image";
import { z } from "zod";

import podcodar from "../../public/podcodar.webp";
import portfolio from "../../public/portfolio.webp";
import ecommerce from "../../public/ecommerce.webp";

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
  id: "my-portfolio" | "podcodar-app" | "ecommerce-app";
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
    repoURL: "https://https://github.com/vitorschelb/ecommerce-app",
    deployURL: "https://vitorschelb.dev",
    technologies:
      "Next TypeScript Tailwind Framer-Motion ChakraUI Next-intl Zod Nodemailer",
    about: "Portfiolio",
  },
  {
    id: "ecommerce-app",
    image: ecommerce,
    repoURL: "https://github.com/vitorschelb/portfolio",
    deployURL: "https://ecommerce-app-9lwc.vercel.app/",
    technologies:
      "Next TypeScript Tailwind Radix Sanity UseShoppingCart Stripe",
    about: "Ecommerce",
  },
  {
    id: "podcodar-app",
    image: podcodar,
    repoURL: "https://github.com/podcodar/app",
    deployURL: "https://github.com/podcodar/app",
    technologies:
      "Next TypeScript NextAuth Prisma Docker Tailwind-Styled-Components Zod",
    about: "Podcodar",
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
