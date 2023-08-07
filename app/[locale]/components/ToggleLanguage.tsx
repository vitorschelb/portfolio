"use client";
import React from "react";
import Link from "next-intl/link";
import { ChakraProvider, Tooltip } from "@chakra-ui/react";
import { useLocale } from "next-intl";

export default function ToggleLanguage() {
  const lgSelected = "bg-gray-three shadow-sm text-clean-white";
  const locale = useLocale()

  return (
    <ChakraProvider>
      <div className="flex absolute top-0 gap-4 right-0 p-5">
        <Tooltip aria-label="Change language to English" label="English">
          <Link
            className={`text-sm p-2 border-gray-three ${
              locale === "en" ? lgSelected : ""
            }`}
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
            className={`text-sm border-gray-three p-2 ${
              locale === "pt" ? lgSelected : ""
            }`}
          >
            <p>PT</p>
          </Link>
        </Tooltip>
      </div>
    </ChakraProvider>
  );
}
