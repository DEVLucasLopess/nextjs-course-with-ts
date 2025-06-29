import { Card, iCardProps } from "../card/Card";

interface ISectionProps {
  title?: string;
  items: iCardProps[];
  variant?: "grid" | "h-list";
}

export const Section = ({ title, items, variant = "grid" }: ISectionProps) => {
  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        <h2 className="font-bold text-xl ">{title}</h2>

        <ul
          className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3  data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
          data-variant={variant}
        >
          {items.map((item) => (
            <li
              key={item.title}
              data-variant={variant}
              className="w-full data-[variant=h-list]:sm:w-72"
            >
              <Card
                href={item.href}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
