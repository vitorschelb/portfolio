"use client";

import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { navList } from "../shared/Data";

export default function Sidebar() {
  return (
    <nav className="">
      {/* Desktop Menu */}

      <div className="h-screen items-center p-3 bg-gray-three text-clean-white font-poppins font-medium text-center shadow-xl hidden lg:block lg:w-64">
        <ul className="flex w-full flex-col items-center justify-center h-full">
          {navList.map((navItem, i) => (
            <Link key={i} href={navItem.href} className="p-3 border-b w-full border-gray-two hover:text-gray-three hover:bg-white ease-in-out duration-500">
              <li >
                {navItem.label}
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex justify-center mb-10 items-center text-2xl mt-8 gap-4 text-clean-white">
          <Link href="/">
            <SiGithub />
          </Link>

          <Link href="/">
            <SiLinkedin />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}

      <MobileNavbar />
    </nav>
  );
}
