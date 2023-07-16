import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { Open_Sans } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";
import PreLoader from "./components/PreLoader";
import { notFound } from "next/navigation";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitor Schelb Portfolio",
  description: "This is my personal website.",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <PreLoader>
            <div className="h-screen flex flex-row justify-start overflow-hidden">
              <Sidebar />
              <div className="flex-1">{children}</div>
            </div>
          </PreLoader>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}