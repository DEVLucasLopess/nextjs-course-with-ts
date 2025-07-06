"use client";

import { useState } from "react";

interface CollapsibleTextProps {
  numberOfLinesWhenClosed: number;
  children: React.ReactNode;
}

export const CollapsibleText = ({
  children,
  numberOfLinesWhenClosed,
}: CollapsibleTextProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-end gap-2">
      <p
        data-open={open}
        style={
          {
            "--number-of-lines-when-closed": numberOfLinesWhenClosed,
          } as any
        }
        className="data-[open=false]:line-clamp-[var(--number-of-lines-when-closed)]"
      >
        {children}
      </p>
      <button onClick={() => setOpen(!open)} className="cursor-pointer">
        {open ? "... ver menos" : "... ver mais"}
      </button>
    </div>
  );
};
