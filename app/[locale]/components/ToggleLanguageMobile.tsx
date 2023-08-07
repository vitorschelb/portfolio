"use client";
import React from "react";
import Link from "next-intl/link";
import { ChakraProvider, Tooltip } from "@chakra-ui/react";
import { useLocale } from "next-intl";

export default function ToggleLanguageMobile() {
  const lgSelected = "bg-gray-three shadow-sm text-clean-white";
  const locale = useLocale();

  return (
    <ChakraProvider>
      <div className="flex gap-4 p-4 font-medium font-poppins border-gray-three text-xs">
        <Tooltip aria-label="Change language to English" label="English">
          <Link
            className={`p-2 ${locale === "en" ? lgSelected : ""}`}
            href="/"
            locale="en"
          >
            <p>EN</p>
          </Link>
        </Tooltip>
        <Tooltip aria-label="Mudar Linguagem para Portugues" label="Português">
          <Link
            href="/"
            locale="pt"
            className={`p-2 ${locale === "pt" ? lgSelected : ""}`}
          >
            <p>PT</p>
          </Link>
        </Tooltip>
      </div>
    </ChakraProvider>
  );
}
