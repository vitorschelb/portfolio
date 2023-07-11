"use client";

import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { navList } from "../shared/Data";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function Sidebar() {
  return (
    <nav>
      {/* Desktop Menu */}

      <div className="h-screen hidden lg:flex lg:flex-col lg:w-64 items-center justify-center bg-gray-three text-clean-white font-poppins font-medium text-center shadow-xl">
        <ul className="flex flex-col w-full">
          {navList.map((navItem, i) => (
            <Link
              key={i}
              href={navItem.href}
              className="p-3 w-full border-b border-gray-two hover:text-gray-three hover:bg-white ease-in-out duration-500"
            >
              <li>{navItem.label}</li>
            </Link>
          ))}
        </ul>
        <div className="mt-10 flex gap-4 text-clean-white text-2xl">
          <Link href="/">
            <SiGithub className="hover:text-gray-two ease-in-out duration-500" />
          </Link>

          <Link href="/">
            <SiLinkedin className="hover:text-gray-two ease-in-out duration-500" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}

      <MobileNavbar />
    </nav>
  );
}
