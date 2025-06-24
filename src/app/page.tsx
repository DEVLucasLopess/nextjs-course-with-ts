import { Card } from "@/components/card/Card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página inicial do projeto!",
};

export default function pageHome() {
  "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg";

  return (
    <>
      <div className="flex items-center justify-center height-100">
        <h1 className="text-3xl font-bold">Home page</h1>
      </div>
      <Card
        href="/cursos/Id-123"
        imageUrl="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
        title="Curso de Api Rest, Node e Typescript"
        description={`
                      367 visualizações 11 de jul. de 2024 ✪ Prioridade para membros em 6
            de junho de 2024 RIO GRANDE DO SUL Precisa de ajuda? Solicite uma
            ajuda particular: https://forms.gle/Pu1aT2LsbU1nuTTDA No processo de
            desenvolvimento, as vezes precisamos criar componentes e outros
            recursos que nos farão performar muito melhor no futuro. A criação
            de bons componentes de interface é o segredo para um desenvolvimento
            rápido de uma aplicação frontend. Nessa vamos criar junto o
            componente de card da nossa aplicação, esse componente será usado em
            toda a nossa plataforma de cursos, e tem as melhores práticas de
            desenvolvimento aplicadas. Links mencionados no vídeo: 📖
            Repositório do projeto - https://github.com/lvsouza/youtube-ne... 🅵
            Protótipo - https://www.figma.com/community/file/... 🗨️ Discord - /
            discord Outros cursos no canal: 🔔 NextJS, TailwindCSS e Typescript
            - • NextJS, TailwindCSS e Typescript: #00 - Ap... 🎩 Figma para DEVs
            - • Figma para DEVs: #00 - Apresentação do curso ☪️ Curso de
            estilização no React - • Estilização no React: Aula 00 - Curso de
            f... ⭐️ Curso de React com typescript - • Curso de react: Aula 01 -
            Começando com Re... 👑 React, Material UI 5 e Typescript - • React,
            Material UI 5 e Typescript: #00 - I... 🏆 Curso de API Rest, Node e
            Typescript - • API Rest, Node e Typescript: #00 - Apresen... Livros
            recomendados: 📘 Código limpo - https://amzn.to/43Xiick 📘
            Arquitetura limpa - https://amzn.to/3ZMCStr 📘 Migrando sistemas
            monolíticos - https://amzn.to/45ByPDZ 📘 The Micro SaaS Handbook -
            https://amzn.to/4jCan93 Conteúdo: 0:00 | Introdução 0:44 | O que
            faremos nessa aula 2:33 | Iniciando a construção do componente de
            Card 10:00 | Como utilizar as APIs do YouTube 19:00 | Deixando
            imagem não arrastavel 19:30 | Ajustando o CSS do card 27:00 |
            Adicionando link no card 30:00 | Configurando card para modo desktop
            32:30 | Commit dos ajustes 33:00 | Finalização e agradecimentos
            CODARSE - Tela inicial, de cursos e components`}
      />
    </>
  );
}
