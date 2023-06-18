import "./globals.css";
import { Montserrat } from "next/font/google";
import Sidebar from "./components/Sidebar";
import { Metadata } from "next";
import { PropsWithChildren } from "react";


/* Adicionar font corretamente */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vitor Schelb Portfolio",
  description: "This is my personal website.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
