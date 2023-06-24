"use client";
import Image from "next/image";
import home from "../../public/home.png";
import { AiFillCaretRight } from "react-icons/ai";

export default function About() {
  return (
    <section className="grid-cols-1 grid h-screen px-8 bg-clean-white md:pl-20 2xl:pl-36 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-around mb-6">
          <h1 className="tracking-super font-poppins font-bold mr-10">ABOUT</h1>
          <span className="w-full border-gray-zero border-b" />
        </div>

        <ul>
          <li className="flex mb-2 text-gray-zero">
            <AiFillCaretRight className="mr-2 text-3xl text-gray-zero" />
            Currently, I work in the development and mentoring team for
            community projects at PodCodar.
          </li>
          <li className="flex mb-2 text-gray-zero">
            <AiFillCaretRight className="mr-2 text-3xl text-gray-zero" />
            Currently, I work in the development and mentoring team for
            community projects at PodCodar.
          </li>
          <li className="flex mb-2 text-gray-zero">
            <AiFillCaretRight className="mr-2 text-3xl text-gray-zero" />
            Currently, I work in the development and mentoring team for
            community projects at PodCodar.
          </li>
          <li className="flex mb-2 text-gray-zero">
            <AiFillCaretRight className="mr-2 text-3xl text-gray-zero" />
            Currently, I work in the development and mentoring team for
            community projects at PodCodar.
          </li>
        </ul>
      </div>

      <div className="h-full items-center justify-center hidden md:flex">
        <div className="h-96 w-60">
          <Image
            src={home}
            alt="home"
            className="object-cover h-full w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
