"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { MdCheck, MdContentCopy } from "react-icons/md";

interface ContentCopyProps {
  children?: React.ReactNode;
  title?: string;
  content?: string;
}

export const ContentCopy = ({ children, title, content }: ContentCopyProps) => {
  const [copied, setCopied] = useState<Boolean>(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return;
  }, [copied]);

  const handleCopy = () => {
    navigator.clipboard.writeText(content || "");
    setCopied(true);
  };

  return (
    <>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>{children}</DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="p-2 m-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 mt-1">
            <span>{title}</span>
            <div className="flex items-center gap-2">
              <input
                value={content}
                className="bg-background p-1 px-2 rounded"
                onFocus={(e) => e.target.select()}
                readOnly
              />
              <button
                onClick={handleCopy}
                className="p-1 rounded cursor-pointer"
              >
                {copied ? (
                  <MdCheck className="text-green-500" />
                ) : (
                  <MdContentCopy />
                )}
              </button>
            </div>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};
