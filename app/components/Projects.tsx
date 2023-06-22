"use client";
import { AiFillCaretRight } from "react-icons/ai";
import Carousel from "./Carousel";

export default function Projects() {
  return (
    <section className="grid-cols-1 grid h-screen px-8 bg-clean-white md:pl-20 2xl:pl-36 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-around mb-6">
          <h1 className="tracking-super font-bold mr-10">PROJECTS</h1>
          <span className="w-full border-gray-zero border-b" />
        </div>

        <Carousel />
      </div>
    </section>
  );
}
