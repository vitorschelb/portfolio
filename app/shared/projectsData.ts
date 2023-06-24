import { Project } from "./types";
import one from "../../public/one.jpg";
import three from "../../public/three.jpg";

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
export default projectsData;
