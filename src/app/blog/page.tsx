import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página de blog!",
};

export default function pageBlog() {
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold">Página de blog</h1>
      </div>
    </>
  );
}
