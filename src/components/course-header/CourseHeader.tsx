export const CourseHeader = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-extrabold text-xl">Curso de Figma para DEVs</h1>
      <p>
        Como bons desenvolvedores que somos, precisamos sempre expandir nosso
        leque de habilidades. A habilidade de criar bons protótipos pode ser
        decisivo na hora de fechar com um cliente. Além de permitir entender e
        assimilar melhor uma tela que precisa ser desenvolvida. Nessa aula que
        apresentar a você o que vamos ver nesse curso, e introduzir a vocês a
        uma das melhores ferramentas de prototipação do mercado.
      </p>
      <div className="flex gap-2 items-center">
        <button className="py-2 px-4 bg-paper rounded-full">
          Compartilhar
        </button>
        <span>48 aulas</span>
      </div>
    </div>
  );
};
