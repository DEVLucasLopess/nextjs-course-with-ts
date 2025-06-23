import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página dos cursos!",
};

export default function pageCursos() {
  return (
    <>
      <div className="flex items-center justify-center height-90">
        <h1 className="text-3xl font-bold">Página de Cursos</h1>
      </div>
    </>
  );
}
