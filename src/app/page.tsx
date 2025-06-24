import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página inicial do projeto!",
};

export default function pageHome() {
  return (
    <>
      <div className="flex items-center justify-center height-100">
        <h1 className="text-3xl font-bold">Home page</h1>
      </div>
      <Card />
    </>
  );
}
