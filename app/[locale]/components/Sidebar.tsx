"use client";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useTranslations } from "next-intl";
import { NavItem } from "../../shared/Data";
import Link from "next-intl/link";
import MobileSidebar from "./MobileSidebar";

export default function Sidebar() {
  const t = useTranslations("Sidebar");

  const navList: NavItem[] = [
    { label: t("navList_home_label"), href: "/" },
    { label: t("navList_about_label"), href: "/about" },
    { label: t("navList_blog_label"), href: "/blog" },
    { label: t("navList_projects_label"), href: "/projects" },
    { label: t("navList_contact_label"), href: "/contact" },
  ];

  return (
    <nav>
      <div className="h-screen hidden lg:flex lg:flex-col lg:w-64 items-center justify-center bg-gray-three text-clean-white font-poppins font-medium text-center shadow-xl">
        <ul className="flex flex-col w-full">
          {navList.map((navItem, i) => (
            <Link
              key={i}
              href={navItem.href}
              tabIndex={0}
              aria-label={navItem.label}
              className="p-3 w-full border-b border-gray-two hover:text-gray-three hover:bg-white ease-in-out duration-500"
            >
              <li>{navItem.label}</li>
            </Link>
          ))}
        </ul>
        <div className="mt-10 flex gap-4 text-clean-white text-2xl">
          <Link
            tabIndex={0}
            aria-label="Github"
            href="https://github.com/vitorschelb"
          >
            <SiGithub className="hover:text-gray-two ease-in-out duration-500" />
          </Link>
          <Link
            tabIndex={0}
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/vitor-schelb-37b109124/?originalSubdomain=br"
          >
            <SiLinkedin className="hover:text-gray-two ease-in-out duration-500" />
          </Link>
        </div>
      </div>

    </nav>
  );
}
