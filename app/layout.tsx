import "./globals.css";
import { Open_Sans } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";
import PreLoader from "./components/PreLoader";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitor Schelb Portfolio",
  description: "This is my personal website.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <PreLoader>
          <div className="h-screen flex flex-row justify-start overflow-hidden">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
        </PreLoader>
      </body>
    </html>
  );
}
