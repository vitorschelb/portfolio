import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function MobileNavbar() {
  const [openMenu, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!openMenu);
  };

  return (
    <nav className="lg:hidden">
      <div className="px-5 py-5 absolute">
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={handleMenu}
        />
      </div>

      {/* Mobile Menu */}

      <div
        className={
          openMenu
            ? "absolute flex flex-col justify-center w-64 h-screen bg-gray-three transition-transform duration-500 transform translate-x-0"
            : "absolute flex flex-col justify-center w-64 h-screen bg-gray-three transition-transform duration-500 transform -translate-x-full"
        }
      >
        <div className="absolute flex justify-end w-full top-6 right-6">
          <AiOutlineClose
            onClick={handleMenu}
            className="text-2xl text-clean-white mb-4"
          />
        </div>
        <ul className="flex flex-col items-center justify-center h-full text-clean-white ">
          <li className="p-3 w-full text-center border-gray-two border-b" >
            <Link onClick={handleMenu} href="/">HOME</Link>
          </li>

          <li className="p-3 w-full text-center border-gray-two border-b">
            <Link onClick={handleMenu} href="/about">ABOUT</Link>
          </li>

          <li className="p-3 w-full text-center border-gray-two border-b">
            <Link onClick={handleMenu} className="px-5 py-4" href="/techstack">
              TECH STACK
            </Link>
          </li>

          <li className="p-3 w-full text-center border-gray-two border-b">
            <Link onClick={handleMenu} className="px-5 py-4" href="/projects">
              PROJECTS
            </Link>
          </li>

          <li className="p-3 w-full text-center">
            <Link onClick={handleMenu} className="px-5 py-4" href="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
