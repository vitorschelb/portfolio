"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { NavItem } from "../../shared/Data";
import { useTranslations } from "next-intl";

export default function MobileSidebar() {
  const [openMenu, setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!openMenu);
  };

  const t = useTranslations("Sidebar");

  const navList: NavItem[] = [
    { label: t("navList_home_label"), href: "/" },
    { label: t("navList_about_label"), href: "/about" },
    { label: t("navList_blog_label"), href: "/blog" },
    { label: t("navList_projects_label"), href: "/projects" },
    { label: t("navList_contact_label"), href: "/contact" },
  ];

  return (
    <nav className="lg:hidden">
      <div className="p-5">
        <AiOutlineMenu
          tabIndex={0}
          aria-label="Open Menu"
          className="text-2xl text-gray-three cursor-pointer"
          onClick={handleMenu}
        />
      </div>

      <div
        className={
          openMenu
            ? "absolute flex flex-col justify-center w-64 h-screen bg-gray-three transition-transform duration-500 transform translate-x-0 z-10"
            : "absolute flex flex-col justify-center w-64 h-screen bg-gray-three transition-transform duration-500 transform -translate-x-full z-10"
        }
      >
        <div className="absolute flex justify-end w-full top-6 right-6">
          <AiOutlineClose
            tabIndex={0}
            aria-label="Close Menu"
            onClick={handleMenu}
            className="text-2xl text-clean-white mb-4"
          />
        </div>
        <div>
          <Image
            src="/me.jpeg"
            alt="Image of an 30 years old man's face"
            className="object-cover h-full w-full"
            priority
            width={500}
            height={300}
          />
        </div>
        <div className="flex flex-col items-center justify-evenly h-full text-clean-white ">
          <ul className="w-full">
            {navList.map((navItem, i) => (
              <Link
                key={i}
                onClick={handleMenu}
                href={navItem.href}
                aria-label={navItem.label}
                tabIndex={0}
              >
                <li className="p-3 w-full text-center border-gray-two border-b">
                  {navItem.label}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center items-center text-2xl gap-4 mb-36 text-clean-white">
            <Link
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              href="https://github.com/vitorschelb"
            >
              <SiGithub />
            </Link>
            <Link
              tabIndex={0}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/vitor-schelb-37b109124/?originalSubdomain=br"
            >
              <SiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
