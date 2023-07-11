import Image from "next/image";
import me from "../../public/me.jpeg";
import { aboutList } from "../shared/Data";

export default function About() {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 gap-10 px-8 md:px-20 2xl:px-36 h-screen bg-clean-white">
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-around mb-6">
          <h1 className="text-xl mr-10 font-bold font-poppins tracking-super text-gray-three">
            ABOUT
          </h1>
          <span className="border-b w-full border-gray-zero" />
        </div>
        <ul>
          {aboutList.map((aboutItem, i) => (
            <li key={i} className="flex mb-2 text-justify text-gray-zero before:content-['➤'] before:mr-2">
              {aboutItem.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:flex items-center justify-center">
        <div className="h-96 2xl:h-3/6 w-60 2xl:w-6/12">
          <Image
            src={me}
            alt="Photo of a 30-year-old man's face"
            className="object-cover h-full w-full shadow-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}