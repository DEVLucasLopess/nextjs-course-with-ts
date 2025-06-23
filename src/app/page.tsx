import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página inicial do projeto!",
};

export default function pageHome() {
  return (
    <div>
      <>
        <button>Home</button>
      </>
    </div>
  );
}
