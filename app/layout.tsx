import "./globals.css";
import { Open_Sans } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

const openSans = Open_Sans({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Vitor Schelb Portfolio",
  description: "This is my personal website.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
