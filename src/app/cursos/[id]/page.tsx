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
      <div className="mt-8 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Pagina de Contato {params.id}</h1>
      </div>
    </>
  );
}
