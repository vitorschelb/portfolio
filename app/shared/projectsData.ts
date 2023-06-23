import { Project } from "./types";
import one from "../../public/one.jpg";
import three from "../../public/three.jpg";

const projectsData: Project[] = [
  {
    id: "literary-ambience",
    image: one,
    repoURL: "https://github.com/nicolasbrandao/fake-store",
    deployURL: "/",
    title: "LiteraryAmbience",
    description:
      "Transforme trechos de livros em experiências imersivas. Narração, som e animações trazem cada página à vida. Descubra a magia da leitura.",
    technologies: "Next TypeScript Tailwind Framer-Motion",
  },
  {
    id: "tour-companion",
    image: three,
    repoURL: "https://github.com/nicolasbrandao/fake-store",
    deployURL: "/",
    title: "TourCompanion",
    description:
      "Descubra passeios personalizados, guias avaliados e preços transparentes em uma plataforma intuitiva. Explore o mundo com confiança ao lado dos melhores guias locais.",
    technologies: "Next Prisma TypeScript Tailwind",
  },
];
export default projectsData;
