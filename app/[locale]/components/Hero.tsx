"use client";
import Image from "next/image";
import Typed from "react-typed";
import Button from "./Button";
import { useTranslations } from "next-intl";



export default function Hero() {
  const t = useTranslations("Hero");
  
  return (
    <section className="grid h-screen grid-cols-1 px-8 bg-clean-white md:grid-cols-2 md:px-20 md:gap-10 2xl:px-36">
      <div className="flex flex-col justify-center gap-7 mt-10 ">
        <h1 className="tracking-widest">{t("presentation")}</h1>
        <h2 className="font-bold text-5xl font-poppins text-gray-three">
          VITOR SCHELB
        </h2>
        <span className="block border-b-4 w-16 border-gray-three" />

        <h2 className="font-light text-xl tracking-tighter h-8 font-poppins text-gray-zero mb-6 md:text-2xl md:tracking-normal">
          Dynamic{" "}
          <Typed
            className="font-bold text-gray-three font-open-sans"
            strings={["Front-end developer"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-justify mb-6 text-gray-zero">{t("description")}</p>

        <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-start lg:gap-8 2xl:justify-start">
          <Button aria-label="Download CV" href={"https://drive.google.com/drive/folders/1oC0u7sHQbww3NYNVcddHTg1hlMn0ZXor?usp=drive_link"}>Curriculum</Button>
          <Button aria-label="LinkedIn" href="https://www.linkedin.com/in/vitor-schelb-37b109124/?originalSubdomain=br">
            LinkedIn
          </Button>
        </div>
      </div>

      <div className="hidden h-full md:flex items-center justify-center">
        <div className="h-96 w-60 2xl:h-3/6 2xl:w-6/12">
          <Image
            src="/me.jpeg"
            alt="Photo of a 30-year-old man's face"
            className="object-cover h-full w-full"
            priority
            width={500}
            height={300}
          />
        </div>
      </div>

    </section>
  );
}
