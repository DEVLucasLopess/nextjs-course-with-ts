import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

export const Header = () => {
  return (
    <nav className="flex items-center justify-center bg-primary py-4  ">
      <ul className="flex gap-4 ">
        <li>
          <Link href="/">Página Inicial</Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/blog" className="flex gap-1 items-center">
            Blog
            <MdOpenInNew />
          </Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};
