"use client";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Card, iCardProps } from "../card/Card";
import { UIEvent, useRef, useState } from "react";

interface ISectionProps {
  title?: string;
  items: iCardProps[];
  variant?: "grid" | "h-list";
}

export const Section = ({ title, items, variant = "grid" }: ISectionProps) => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [scrollAt, setScrollAt] = useState<"start" | "midlle" | "end">("start");

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
    if (event.currentTarget.scrollLeft === 0) {
      setScrollAt("start");
    } else if (
      event.currentTarget.scrollWidth - event.currentTarget.clientWidth ===
      event.currentTarget.scrollLeft
    ) {
      setScrollAt("end");
    } else {
      setScrollAt("midlle");
    }
  };

  // função que scrolla horizontalmente a lista de cards
  const handleSetScroll = (scroll: number) => {
    const currentScrollLeft = scrollRef.current?.scrollLeft || 0;
    scrollRef.current?.scrollTo({
      behavior: "smooth",
      left: currentScrollLeft + scroll,
    });
  };

  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        <h2 className="font-bold text-xl ">{title}</h2>

        <ul
          onScroll={handleScroll}
          ref={scrollRef}
          className="grid gap-2 grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3  data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto"
          data-variant={variant}
        >
          {variant === "h-list" && (
            <button
              disabled={scrollAt === "start"}
              onClick={() => handleSetScroll(-160)}
              className="h-14 w-14 bg-primary rounded-full hidden sm:flex items-center justify-center sticky my-auto left-0 cursor-pointer -ml-14 disabled:opacity-0 transition-opacity active:opacity-80"
            >
              <MdKeyboardArrowLeft size={32} />
            </button>
          )}

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

          {variant === "h-list" && (
            <button
              disabled={scrollAt === "end"}
              onClick={() => handleSetScroll(160)}
              className="h-14 w-14 bg-primary rounded-full hidden sm:flex items-center justify-center sticky my-auto right-0 cursor-pointer -ml-14 disabled:opacity-0 transition-opacity active:opacity-80"
            >
              <MdKeyboardArrowRight size={32} />
            </button>
          )}
        </ul>
      </section>
    </>
  );
};
