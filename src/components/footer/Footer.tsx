import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="max-sm:hidden bottom-0 left-0 w-full bg-primary text-white px-4 md:flex items-center justify-around z-50">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold">Footer Component</h1>
        <p className="mt-2">
          This is a footer component that stays at the bottom of the page.
        </p>
      </div>
      <nav className="mt-3 grid grid-cols-1 text-center gap-5 md:flex md:gap-10">
        <div>
          <Link href="/cursos">Cursos</Link>
        </div>

        <div>
          <Link href="/contato">Contato</Link>
        </div>
        <div className="md:flex md:gap-1 md:items-center">
          <Link href="/blog">Blog</Link>
          <MdOpenInNew className="hidden md:block" />
        </div>
      </nav>
    </footer>
  );
};
