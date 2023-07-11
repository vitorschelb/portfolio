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

export const navList = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "TECH STACK", href: "/techstack" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

export const aboutList = [
  {
    text: "Currently, I work in the development and project mentoring team at PodCodar.",
  },
  {
    text: "I perceive programming as a powerful tool for social transformation. My objective is to develop innovative solutions, streamline processes, and build technologies that can yield positive impacts in various areas of life.",
  },
  {
    text: " Seek to apply good development practices, with emphasis on clean, readable code, version control and suitable testing approach.",
  },
  {
    text: "   Master&apos;s degree in Theory of History and Digital Humanities, focusing on the impacts of technological transformations on the practices of remembering and forgetting among users in social media networks.",
  },
  {
    text: "Seven years of classroom experience as an educator, I have effectively managed and supervised internship teams and extension projects.",
  },
];
export default projectsData;
