"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

// Instale os módulos do Swiper

export default function MobileCarousel() {
  return (
    <div className="lg:hidden flex justify-center items-center p-4 my-6 bg-gray-three bg-opacity-20">
      <Swiper
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        className="my-swiper"
      >
        <SwiperSlide className="swiper-slide">
          <div className="flex max-w-[500px] max-h-[500px] shadow-sm">
            <Image
              priority={true}
              src="/portfolio.png"
              alt="one"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-w-[500px] max-h-[500px] shadow-sm">
            <Image
              priority={true}
              src="/podcodar.png"
              alt="one"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
