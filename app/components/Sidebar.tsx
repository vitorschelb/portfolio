"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Sidebar() {
  const [openMenu, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!openMenu);
  };

  return (
    <nav>
      <div className="px-5 py-5 absolute md:hidden">
        <AiOutlineMenu
          className="text-2xl cursor-pointer "
          onClick={handleMenu}
        />
      </div>

      {/* Desktop Menu */}

      <div className="h-screen items-center p-3 bg-gray-three text-clean-white font-poppins font-medium text-center shadow-xl hidden md:block md:w-64">
        <ul className="flex flex-col items-center justify-center h-full">
          <li className="p-3 border-b w-full border-gray-two hover:text-gray-three  hover:bg-white ease-in-out duration-500">
            <Link href="/">HOME</Link>
          </li>

          <li className="p-3 border-b w-full border-gray-two hover:text-gray-three hover:bg-white ease-in-out duration-500">
            <Link href="/about">ABOUT</Link>
          </li>

          <li className="p-3 border-b w-full border-gray-two hover:text-gray-three hover:bg-white ease-in-out duration-500">
            <Link className="px-5 py-4" href="/techstack">
              TECH STACK
            </Link>
          </li>

          <li className="p-3 border-b w-full border-gray-two hover:text-gray-three hover:bg-white ease-in-out duration-500">
            <Link className="px-5 py-4" href="/techstack">
              PROJECTS
            </Link>
          </li>

          <li className="p-3 w-full hover:text-gray-three hover:bg-white ease-in-out duration-500">
            <Link className="px-5 py-4" href="/techstack">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}

      <div
        className={
          openMenu
            ? "absolute flex flex-col justify-center w-64 h-screen bg-gray-three"
            : "hidden"
        }
      >
        <div className="absolute flex justify-end w-full top-6 right-6">
          <AiOutlineClose
            onClick={handleMenu}
            className="text-2xl text-clean-white mb-4"
          />
        </div>
        <ul className="flex flex-col items-center justify-center h-full text-clean-white">
          <li className="p-3 w-full text-center border-gray-two border-b">
            <Link href="/">HOME</Link>
          </li>

          <li className="p-3 w-full text-center border-gray-two border-b">
            <Link href="/about">ABOUT</Link>
          </li>

          <li className="p-3 w-full text-center border-gray-two border-b">
            <Link className="px-5 py-4" href="/techstack">
              TECH STACK
            </Link>
          </li>

          <li className="p-3 w-full text-center border-gray-two border-b">
            <Link className="px-5 py-4" href="/techstack">
              PROJECTS
            </Link>
          </li>

          <li className="p-3 w-full text-center">
            <Link className="px-5 py-4" href="/techstack">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
