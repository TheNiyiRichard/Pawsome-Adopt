import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, type = "submit", className, variant, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        `flex items-center justify-center rounded-lg hover:opacity-90 ${
          variant === "transparent"
            ? "border-[2px] border-slate-200 px-6 py-2 text-black"
            : "border-none bg-gradient-to-tr from-pink-400 via-pink-400 via-40% to-indigo-500 px-6 py-2 text-white shadow-sm"
        }`,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
