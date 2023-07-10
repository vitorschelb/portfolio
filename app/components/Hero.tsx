"use client";
import Image from "next/image";
import me from "../../public/me.jpeg";
import Typed from "react-typed";

export default function Hero() {
  return (
    <section className="grid-cols-1 grid h-screen px-8 bg-clean-white md:px-20 2xl:px-36 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col justify-center">
        <h1 className="mb-8 tracking-widest">Hello there, my name is</h1>
        <h2 className="mb-6 text-gray-three font-poppins font-bold text-5xl">
          VITOR SCHELB
        </h2>
        <span className="block w-16 mb-6 border-gray-three border-b-4" />

        <h2 className="mb-6 text-gray-zero font-poppins font-light text-xl tracking-tighter md:text-2xl md:tracking-normal">
          Dynamic{" "}
          <Typed
            className="text-gray-three font-open-sans font-bold"
            strings={["Front-end developer"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="mb-16 text-gray-zero text-justify">
          Passionate about turning ideas into reality, constantly improving my
          technical skills and ability to connect different areas to create
          optimal solutions for both users and code maintainers.
        </p>

        <div className="flex 2xl:justify-start 2xl:gap-8 md:justify-between">
          <button className="p-6 w-44 bg-gray-three text-clean-white font-poppins font-medium border-gray-three border-2 shadow-sm hover:underline hover:bg-clean-white hover:shadow-md hover:text-gray-three ease-in-out duration-500">
            <span>Download CV</span>
          </button>
          <button
            type="submit"
            className="p-6 w-44 bg-gray-three text-clean-white font-poppins font-medium border-gray-three border-2 shadow-sm hover:underline hover:bg-clean-white hover:shadow-md hover:text-gray-three ease-in-out duration-500"
          >
            LinkedIn
          </button>
        </div>
      </div>

      <div className="h-full items-center justify-center hidden md:flex">
        <div className="h-96 w-60">
          <Image
            src={me}
            alt="me"
            className="object-cover h-full w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
