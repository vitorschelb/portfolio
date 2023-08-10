"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ProjectsModal from "./ProjectsModal";
import projectsData from "@/app/shared/Data";
import { useState } from "react";

export default function ProjectMobileCarousel() {
  const t = useTranslations("ProjectsCard");
  const [activeModalIndex, setActiveModalIndex] = useState(0);

  return (
    <div className="lg:hidden z-0 flex justify-center items-center p-2 my-6 bg-[#CFD3D6]">
      <Swiper
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        modules={[Pagination, EffectCoverflow]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="MySwiper"
      >
        {projectsData.map((projectItem, activeModalIndex) => (
          <SwiperSlide key={activeModalIndex} onClick={() => alert("CLICOU!")}>
            <div className="flex max-w-[600px] max-h-[700px] shadow-sm">
              <Image
                priority={true}
                src={projectItem.image}
                alt={projectItem.id}
                width={600}
                height={700}
                className="object-cover h-full w-full relative"
                placeholder="blur"
                blurDataURL="data:..."
              />
              <h1 className="font-poppins text-xs font-semibold text-gray-three tracking-widest shadow-sm bg-[#CFD3D6] absolute m-2 p-1">
                {t(`${projectItem.id}.title`)}
              </h1>
              <ProjectsModal projectIndex={activeModalIndex} />
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
