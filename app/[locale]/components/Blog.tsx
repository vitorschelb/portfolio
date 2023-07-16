"use client";
import { useTranslations } from "next-intl";

export default function Blog() {
  const t = useTranslations("Blog");
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-clean-white md:px-20 2xl:px-36">
      <div className="flex items-center justify-center">
      <h2 className="font-bold text-2xl lg:text-5xl font-poppins text-gray-three">
          {t("alert")}
        </h2>
      </div>
    </section>
  );
}
