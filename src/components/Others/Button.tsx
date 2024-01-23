"use client";

import React, { MouseEvent } from "react";

interface Props {
  htmlType?: "reset" | "submit" | "button";
  type?: "primary" | "secondary";
  children: React.ReactNode;
  icon?: React.ReactNode;
  height?: string;
  width?: string;
  onClick: any;
}

const Button = ({
  htmlType,
  type,
  children,
  icon,
  height,
  width,
  onClick,
}: Props) => {
  const primary =
    "bg-gradient-to-r from-[#FF8B42] via-39-[#FA665D] via-[#F95D63] to-[#F7417A] text-white";
  const secondary = "bg-secondaryBtn text-gray2 ";
  return (
    <button
      type={htmlType || "button"}
      onClick={onClick}
      className={`flex justify-center items-center  ${height && height} ${
        width || "w-fit"
      }  gap-2  sm:px-2 lg:px-6 py-1 md:text-md lg:text-lg rounded-xl ${
        type === "secondary" ? secondary : primary
      }`}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
