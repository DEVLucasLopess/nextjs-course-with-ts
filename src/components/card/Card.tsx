import Image from "next/image";
import Link from "next/link";

export type iCardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
};

export const Card = ({ description, href, image, title }: iCardProps) => {
  return (
    <>
      <Link href={href} className="hover:no-underline">
        <article className="flex flex-col gap-2 p-2 rounded sm:hover:bg-primary">
          <Image
            src={image}
            alt={title}
            width={1000}
            className="aspect-video object-cover rounded-2xl"
            height={0}
            draggable={false}
          />

          <h4 className="font-extrabold text-lg">{title}</h4>
          <p className="text-sm line-clamp-3">{description}</p>
        </article>
      </Link>
    </>
  );
};
