import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitor Schelb Portfolio",
  description: "This is my personal website.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className="grid grid-cols-6">
        <div className="bg-gray-200 col-span-1">
          <Sidebar />
        </div>
        <div className="bg-gray-200 col-span-5">{children}</div>
      </body>
    </html>
  );
}
