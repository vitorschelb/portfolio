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

export const navList: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT", href: "/contact" },
];

export const aboutList: AboutItem[] = [
  {
    text: "Currently, I work in the development and project mentoring team at PodCodar.",
  },
  {
    text: "I perceive programming as a powerful tool for social transformation. My objective is to develop innovative solutions, streamline processes, and build technologies that can yield positive impacts in various areas of life.",
  },
  {
    text: "Master's degree in Theory of History and Digital Humanities, focusing on the impacts of technological transformations on the practices of remembering and forgetting among users in social media networks.",
  },
  {
    text: "Seven years of classroom experience as an educator, I have effectively managed and supervised internship teams and extension projects.",
  },
];

export default projectsData;
