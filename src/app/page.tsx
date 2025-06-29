import { Section } from "@/components/section/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página inicial do projeto!",
};

export default function pageHome() {
  "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg";

  return (
    <main className="h-full">
      <Section title="Veja mais cursos" variant="h-list" />
    </main>
  );
}
