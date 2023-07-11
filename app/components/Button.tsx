import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};
export default function Button({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="font-medium text-center p-4 w-44 bg-gray-three text-clean-white border-2 border-gray-three shadow-sm font-poppins hover:bg-clean-white hover:shadow-md hover:text-gray-three hover:underline ease-in-out duration-500 md:p-6"
    >
      {children}
    </Link>
  );
}
