import { Class } from "@/components/course-content/components/Class";
import { CourseHeader } from "@/components/course-header/CourseHeader";
import { StartCourse } from "@/components/startCourse/StartCourse";
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
        <div className="w-full min-[880px]:max-w-[880px] px-2 flex flex-col gap-4 md:flex-row-reverse">
          <div className="flex-1">
            <StartCourse
              idClass="1"
              imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
              idCourse="1"
            />
          </div>
          <div className="flex-[2]">
            <h1 className="text-2xl font-bold mb-4">Detalhes do Curso</h1>
            <CourseHeader />

            <Class
              title="NextJS, TailwindCSS e Typescript: #00 - Apresentação do projeto"
              playerUrl={`/player/{courseId}/{classId}`}
            />
          </div>
        </div>
      </main>
    </>
  );
}
