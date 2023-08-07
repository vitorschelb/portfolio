import "../globals.css";

import { Inter } from "next/font/google";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

import PreLoader from "./components/PreLoader";
import Sidebar from "./components/Sidebar";
import { Props } from "../shared/Data";
import MobileNavBar from "./components/MobileNavBar";
import ToggleLanguageDesktop from "./components/ToggleLanguageDesktop";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Vitor Schelb Portfolio",
  description: "This is my personal website.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PreLoader>
            <div className="h-screen relative flex flex-row justify-start overflow-hidden">
              <ToggleLanguageDesktop />
              <MobileNavBar />
              <Sidebar />
              <div className="flex-1">{children}</div>
            </div>
          </PreLoader>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
