import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de contato!",
};

export default function pageContato() {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold">Pagina de Contato</h1>
      </div>
    </>
  );
}
