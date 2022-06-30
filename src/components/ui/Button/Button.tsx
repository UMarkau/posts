import React from "react";
import { classNames } from "../../utils";

interface IProps {
  children: React.ReactNode;
  onClick: () => void;
  primary?: boolean;
  className?: string;
}

export const Button = ({ children, onClick, primary, className }: IProps) => {
  return (
    <button
      className={classNames(
        primary
          ? "text-white bg-blue-700"
          : "text-gray-500 border-solid border-gray-300 border-[1px]",
        `rounded h-8 w-1/3 sm:w-20 w-1/3 sm:w-20 ${className}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
