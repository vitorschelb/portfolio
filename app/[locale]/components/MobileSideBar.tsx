"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { NavItem } from "../../shared/Data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";

export default function MobileSideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const t = useTranslations("Sidebar");

  // const variant = useBreakpointValue({
  //   sm: "320px",
  //   md: "768px",
  //   lg: "960px",
  //   xl: "1200px",
  //   "2xl": "1536px",
  // });

  const navList: NavItem[] = [
    { label: t("navList_home_label"), href: "/" },
    { label: t("navList_about_label"), href: "/about" },
    { label: t("navList_blog_label"), href: "/blog" },
    { label: t("navList_projects_label"), href: "/projects" },
    { label: t("navList_contact_label"), href: "/contact" },
  ];

  return (
    <>
      <HamburgerIcon fontSize={"3xl"} marginLeft={"4"} onClick={onOpen} />
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent css={{ backgroundColor: "rgb(51, 51, 51)" }}>
          <DrawerCloseButton fontSize={"2xl"} textColor={"white"} />
          <DrawerHeader margin="auto" className="hidden md:hidden ls:hidden xs:flex xs:max-w-[300px] sm:max-h-[300px]">
            <Image
              src="/me.webp"
              alt="Image of an 30 years old man's face"
              className="object-cover h-full w-full"
              placeholder="blur"
              width={300}
              height={300}
              blurDataURL="data:..."
              priority={true}
            />
          </DrawerHeader>
          <DrawerBody p={"0"}>
            <div className="flex flex-col items-center justify-evenly h-full text-clean-white ">
              <ul className="w-full">
                {navList.map((navItem, i) => (
                  <Link
                    key={i}
                    href={navItem.href}
                    aria-label={navItem.label}
                    tabIndex={0}
                    onClick={onClose}
                  >
                    <li className="p-3 xs:p-2 w-full text-center border-gray-two border-b">
                      {navItem.label}
                    </li>
                  </Link>
                ))}
              </ul>
              <div className="flex text-2xl gap-4 p-3 text-clean-white">
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
