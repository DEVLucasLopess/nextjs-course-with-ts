import { CourseHeader } from "@/components/course-header/CourseHeader";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

// essa é o Metadata que será gerada para a página de detalhes do curso
// a função `generateMetadata` é do Next.js e é usada para gerar metadados dinâmicos
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Página de detalhes do curso ${params.id}`,
    description: `Detalhes do curso com ID ${params.id}`,
  };
}

export default function PageCourseDatails({ params }: Props) {
  return (
    <>
      <main className="max-w-full mt-8 flex justify-center w-full">
        <div className="w-full min-[880px]:max-w-[880px]">
          <CourseHeader />
        </div>
      </main>
    </>
  );
}
