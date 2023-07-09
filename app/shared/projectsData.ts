import one from "../../public/one.jpg";
import three from "../../public/three.jpg";
import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  image: StaticImageData;
  repoURL: string;
  deployURL: string;
  title: string;
  description: string;
  technologies: string;
};

const projectsData: Project[] = [
  {
    id: "literary-ambience",
    image: one,
    repoURL: "https://github.com/nicolasbrandao/fake-store",
    deployURL: "/",
    title: "BookAura",
    description:
      "Transforme trechos de livros em experiências imersivas. Narração, som e animações trazem cada página à vida. Descubra a magia da leitura.",
    technologies: "Next TypeScript Tailwind Framer-Motion",
  },
  {
    id: "tour-companion",
    image: three,
    repoURL: "https://github.com/nicolasbrandao/fake-store",
    deployURL: "/",
    title: "TourBuddy",
    description:
      "Descubra passeios e guias avaliados em uma plataforma intuitiva. Explore o mundo com confiança ao lado dos melhores guias locais.",
    technologies: "Next TypeScript Tailwind Prisma",
  },
];

export const icons = [
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
