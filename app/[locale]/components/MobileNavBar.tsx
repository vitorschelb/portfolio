"use client";
import { ChakraProvider } from "@chakra-ui/react";
import MobileSideBar from "./MobileSideBar";
import ToggleLanguageMobile from "./ToggleLanguageMobile";


export default function MobileNavBar() {
  return (
    <ChakraProvider>
      <nav className="lg:hidden z-10 flex justify-between items-center absolute h-30 w-screen top-0 bg-clean-white shadow-sm">
        <MobileSideBar />
        <ToggleLanguageMobile  />
      </nav>
    </ChakraProvider>
  );
}
