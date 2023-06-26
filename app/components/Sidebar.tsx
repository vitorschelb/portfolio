"use client";

import Link from "next/link";

import MobileNavbar from "./MobileNavbar";

export default function Sidebar() {

  return (
    <nav className="">

      {/* Desktop Menu */}

      <div className="h-screen items-center p-3 bg-gray-three text-clean-white font-poppins font-medium text-center shadow-xl hidden lg:block lg:w-64">
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
            <Link className="px-5 py-4" href="/projects">
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

    <MobileNavbar />
    </nav>
  );
}
