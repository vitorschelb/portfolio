import { Project } from "@/app/shared/Data";
import { ImEye } from "react-icons/im";


import Image from "next/image";

type ProjectProp = {
  project: Project;
};

export default function ProjectImageCard({ project }: ProjectProp) {
  return (
    <div className="flex flex-col justify-center p-4 group bg-gray-three bg-opacity-20 hover:bg-opacity-50 cursor-pointer shadow-md">
      <div className="relative flex min-w-[500px] min-h-[500px] shadow-sm">
        <Image
          src={project.image}
          alt="one"
          width={500}
          height={500}
          className="object-cover h-full w-full "
        />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <ImEye className="text-gray-three text-8xl group-hover:animate-float" />
        </div>
      </div>
    </div>
  );
}
