import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página dos cursos!",
};

export default function pageCursos() {
  return (
    <>
      <div className="h-full">
        <Section title="Todos os cursos" variant="grid" />
      </div>
    </>
  );
}
