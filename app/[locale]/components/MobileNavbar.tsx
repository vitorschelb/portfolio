import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { navList } from "../../shared/Data";

export default function MobileNavbar() {
  const [openMenu, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!openMenu);
  };

  return (
    <nav className="lg:hidden">
      <div className="px-5 py-5 absolute">
        <AiOutlineMenu
          className="text-2xl text-gray-three cursor-pointer"
          onClick={handleMenu}
        />
      </div>

      {/* Mobile Menu */}

      <div
        className={
          openMenu
            ? "absolute flex flex-col justify-center w-64 h-screen bg-gray-three transition-transform duration-500 transform translate-x-0 z-10"
            : "absolute flex flex-col justify-center w-64 h-screen bg-gray-three transition-transform duration-500 transform -translate-x-full z-10"
        }
      >
        <div className="absolute flex justify-end w-full top-6 right-6">
          <AiOutlineClose
            onClick={handleMenu}
            className="text-2xl text-clean-white mb-4"
          />
        </div>
        <div className="h-50 w-25">
          <Image
            src="/me.jpeg"
            alt="me"
            className="object-cover h-full w-full"
            priority
            width={500}
            height={300} 
          />
        </div>
        <div className="flex flex-col items-center justify-evenly h-full text-clean-white ">
          <ul className="w-full">
            {navList.map((navItem, i) => (
              <Link key={i} onClick={handleMenu} href={navItem.href}>
                <li className="p-3 w-full text-center border-gray-two border-b">
                  {navItem.label}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center items-center text-2xl gap-4 text-clean-white">
            <Link href="https://github.com/vitorschelb">
              <SiGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/vitor-schelb-37b109124/?originalSubdomain=br">
              <SiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}