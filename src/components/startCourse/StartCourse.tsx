"use client";
import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";
import { useInView } from "react-intersection-observer";

interface StartCourseProps {
  idCourse: string;
  idClass: string;
  imageUrl: string;
}

export const StartCourse = ({
  imageUrl,
  idCourse,
  idClass,
}: StartCourseProps) => {
  const { ref, inView } = useInView({ threshold: 0.3, initialInView: true });

  return (
    <>
      <div
        ref={ref}
        className="p-2 px-2 bg-paper rounded-md flex flex-col gap-4 md:sticky md:top-18"
      >
        StartCourse
        <Link
          href={`/player/${idCourse}/${idClass}`}
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="w-ful bg-red bg-cover bg-no-repeat aspect-video bg-center"
        >
          <div className="w-full h-full flex items-center justify-center bg-background rounded opacity-0 hover:opacity-70 transition-opacity">
            <MdPlayCircleOutline size={58} />
          </div>
        </Link>
        <Link
          href={`/player/${idCourse}/${idClass}`}
          className="bg-primary p-2 px-3 rounded text-center"
        >
          Começando curso
        </Link>
      </div>

      {!inView && (
        <div className="p-2 bg-paper rounded-md flex flex-col gap-4 absolute left-0 w-full top-24 items-center justify-center">
          <h1>Você está prestes a iniciar o curso</h1>
          <Link
            href={`/player/${idCourse}/${idClass}`}
            className="bg-primary p-2 px-3 rounded text-center w-100%"
          >
            Começando curso
          </Link>
        </div>
      )}
    </>
  );
};
