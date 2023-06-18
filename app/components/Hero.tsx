import Image from "next/image";
import home from "../../public/home.png";

export default function Hero() {
  return (
    <section className="h-screen grid grid-cols-2 gap-10 bg-stone-one md:pl-20 2xl:pl-36 ">
      <div className="flex flex-col justify-center space-y-4">
        <div className="mb-8">
          <h1 className="mb-6 tracking-widest">Hello there, my name is</h1>
          <h2 className="text-4xl tracking-widest font-bold text-gray-bold">
            &lt; VITOR SCHELB /&gt;
          </h2>
        </div>

        <div className="text-justify">
          <p className="mb-6">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          </p>
          <p className="mb-12">
            Eum ducimus officia qui ad. Expedita tempora, sunt obcaecati
            voluptates accusantium doloribus eveniet praesentium ipsa ullam,
            aliquam corrupti suscipit quo alias?
          </p>
        </div>
        {/*FAZER CLASSES CUSTOM PARA TEXTO E BOTÕES */}
        <div className="flex justify-between">
          <button className="py-2 h-10 w-40 bg-gray-one text-stone-one font-semibold tracking-widest text-sm">
            <span>DOWNLOAD CV</span>
          </button>
          <button className="py-2 h-10 w-40 bg-gray-bold text-stone-one font-semibold tracking-widest text-sm">
            <span>CONTACT</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center h-full">
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
