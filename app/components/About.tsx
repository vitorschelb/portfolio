"use client";
import Image from "next/image";
import me from "../../public/me.jpeg";
import { aboutList } from "../shared/Data";

export default function About() {
  return (
    <section className="grid-cols-1 h-screen grid px-8 bg-clean-white md:px-20 2xl:px-36 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-around mb-6">
          <h1 className="tracking-super text-xl font-poppins font-bold mr-10 text-gray-three">
            ABOUT
          </h1>
          <span className="w-full border-gray-zero border-b" />
        </div>
        <ul>
          {aboutList.map((aboutItem, i) => (
            <li
              key={i}
              className="flex mb-2 text-justify text-sm text-gray-zero before:content-['➤'] before:mr-2"
            >
              {aboutItem.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-full items-center justify-center hidden md:flex">
        <div className="h-96 w-60">
          <Image
            src={me}
            alt="me"
            className="object-cover h-full w-full shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
