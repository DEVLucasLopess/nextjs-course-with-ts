"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();

  return (
    <nav className="max-md:block md:flex items-center justify-star md:justify-around bg-primary px-6 py-4">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Link href="/" className="md:text-white md:font-bold md:text-xl">
          Logo
        </Link>
        <button className="mr-6 mt-0.5 cursor-pointer md:hidden">
          <MdMenu className="text-white md:hidden size-6" />
        </button>
      </div>
      <ul className="flex gap-4 text-white items-center">
        <li>
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline max-md:hidden"
          >
            Página Inicial
          </Link>
        </li>
        <li>
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline max-md:hidden"
          >
            Cursos
          </Link>
        </li>
        <li>
          <Link
            href="/contato"
            data-active={currentPath === "/contato"}
            className="data-[active=true]:underline max-md:hidden"
          >
            Contato
          </Link>
        </li>
        <li>
          <Link href="/blog" className="flex gap-1 items-center max-md:hidden">
            Blog
            <MdOpenInNew />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
