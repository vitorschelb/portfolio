"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  const [openMenu, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!openMenu);
  };
  return (
    <nav className="">
      <div className="md:hidden absolute px-5 py-5">
        <AiOutlineMenu
          className="text-2xl cursor-pointer "
          onClick={handleMenu}
        />
      </div>

      {/* Desktop Menu */}

      <div className="hidden md:block md:w-80 items-center h-screen bg-gray-one shadow-xl">
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="p-3 text-center text-stone-one font-semibold border-b w-full border-gray-two hover:border-orange-300 hover:text-orange-300 ease-in-out duration-500">
            <Link href="/">HOME</Link>
          </li>

          <li className="p-3 text-center text-stone-one font-semibold border-b w-full border-gray-two hover:border-orange-300 hover:text-orange-300 ease-in-out duration-500">
            <Link href="/about">ABOUT</Link>
          </li>

          <li className="p-3 text-center text-stone-one font-semibold border-b w-full border-gray-two hover:border-orange-300 hover:text-orange-300 ease-in-out duration-500">
            <Link className="px-5 py-4" href="/techstack">
              TECH STACK
            </Link>
          </li>

          <li className="p-3 text-center text-stone-one font-semibold border-b w-full border-gray-two hover:border-orange-300 hover:text-orange-300 ease-in-out duration-500">
            <Link className="px-5 py-4" href="/techstack">
              PROJECTS
            </Link>
          </li>

          <li className="p-3 text-stone-one font-semibold hover:text-orange-300 ease-in-out duration-500">
            <Link className="px-5 py-4" href="/techstack">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
