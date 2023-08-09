"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { AddIcon } from "@chakra-ui/icons";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import projectsData from "@/app/shared/Data";
import { useTranslations } from "next-intl";

export default function ProjectMobileCarousel() {
  const t = useTranslations("ProjectsCard");

  return (
    <div className="lg:hidden flex justify-center items-center p-2 my-6 bg-[#CFD3D6]">
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
      {projectsData.map((projectItem, i) => (
        <SwiperSlide key={projectItem.id}>
          
          <div className="flex max-w-[600px] max-h-[700px] shadow-sm">
            <Image
              priority={true}
              src={projectItem.image}
              alt={projectItem.id}
              width={600}
              height={700}
              className="object-cover h-full w-full relative"
            />
            <h1 className="font-poppins text-xs font-semibold text-gray-three tracking-widest shadow-sm bg-[#CFD3D6] absolute m-2 p-1">
            {t(`${projectItem.id}.title` as any)}
            </h1>
            <div className="absolute bottom-0 right-0 bg-[#CFD3D6] m-2 p-1 rounded-full">
              <AddIcon className="text-2xl text-gray-three animate-pulse ease-in-out duration-1000" />
            </div>
          </div>
        </SwiperSlide>
      ))}

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
