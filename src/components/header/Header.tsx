"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdMenu, MdOpenInNew } from "react-icons/md";

export const Header = () => {
  const currentPath = usePathname();
  const [title, setTitle] = useState<string>("");
  const [drawer, setDrawer] = useState<boolean>(false);

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  const handleDrawerOpen = (value: boolean) => {
    setDrawer(value);
  };

  return (
    <>
      <nav className="footer-nav w-full max-md:block md:flex fixed top-0 right-0 left-0 items-center justify-star md:justify-around bg-primary px-6 py-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="md:text-white md:font-bold md:text-xl">
            Logo
          </Link>
          <button
            onClick={() => handleDrawerOpen(true)}
            className="mt-0.5 cursor-pointer md:hidden"
          >
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
            <Link
              href="/blog"
              className="flex gap-1 items-center max-md:hidden"
            >
              Blog
              <MdOpenInNew />
            </Link>
          </li>
        </ul>

        <div
          data-open={drawer}
          onClick={() => handleDrawerOpen(false)}
          className="bg-gradient-to-r from-background h-full fixed top-0 left-0 bottom-0 right-0 md:hidden transition-transform data-[open=false]:-translate-x-full"
        >
          <ul className="flex gap-4 flex-col h-full p-4 w-60 border border-gray-700 bg-background">
            <li className="">
              <Link
                href="/"
                data-active={currentPath === "/"}
                className="data-[active=true]:underline"
              >
                Página Inicial
              </Link>
            </li>
            <li className="">
              <Link
                href="/cursos"
                data-active={currentPath === "/cursos"}
                className="data-[active=true]:underline"
              >
                Cursos
              </Link>
            </li>
            <li className="">
              <Link
                href="/contato"
                data-active={currentPath === "/contato"}
                className="data-[active=true]:underline"
              >
                Contato
              </Link>
            </li>
            <li>
              <Link href="/blog" className="flex gap-1 items-center">
                Blog
                <MdOpenInNew />
              </Link>
            </li>
          </ul>
        </div>
        <h1>{currentPath ? title : undefined}</h1>
      </nav>
      <div className="h-18 md:h-10" />
    </>
  );
};
