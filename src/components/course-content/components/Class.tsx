import Link from "next/link";
import { MdPlayCircleOutline } from "react-icons/md";

interface ClassProps {
  title: string;
  playerUrl: string;
}

export const Class = ({ title, playerUrl }: ClassProps) => {
  return (
    <Link href={playerUrl}>
      <div className="flex items-center justify-center gap-3 p-4">
        <MdPlayCircleOutline size={24} />
        {title}
      </div>
    </Link>
  );
};
