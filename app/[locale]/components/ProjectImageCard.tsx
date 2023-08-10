import Image from "next/image";
import ProjectsModal from "./ProjectsModal";
import { useProjects } from "@/app/contexts/ProjectsContext";


export default function ProjectImageCard() {
  const { currentIndex, pictures } = useProjects();
  
  return (
    <div className="flex flex-col justify-center p-4 group bg-[#CFD3D6] hover:bg-opacity-50 cursor-pointer shadow-md">
      <div className="relative flex max-w-[500px] max-h-[500px] shadow-sm">
        <Image
          priority={true}
          src={pictures[currentIndex]}
          alt="one"
          width={500}
          height={500}
          className="object-cover h-full w-full "
          placeholder="blur"
          blurDataURL="data:..."
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <ProjectsModal />
        </div>
      </div>
    </div>
  );
}
