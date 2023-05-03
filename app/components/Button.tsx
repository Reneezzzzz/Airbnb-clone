"use client";
import React from "react";
import { IconBase, IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outlined?: boolean;
  small?: boolean;
  icon?: IconType;
}

function Button({
  label,
  onClick,
  disabled,
  outlined,
  small,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
    relative
    disabled:opacity-50
    disabled:cursor-not-allowed
    rounded-lg
    hover:opacity-80
    transition
    w-full
    ${
      outlined
        ? "bg-white border-2 border-black text-black"
        : "bg-rose-500 text-white border-rose-500"
    }
    ${small ? "py-1 px-2 text-sm" : "py-2 px-4 text-base"}
  `}
    >
      {Icon && (
        <Icon
          size={24}
          className="absolute
        left-4
        top:3"
        />
      )}
      {label}
    </button>
  );
}

export default Button;
