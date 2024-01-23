import React from "react";
//@ts-ignore
import { UilLockAlt, UilEyeSlash } from "@iconscout/react-unicons";

interface Props {
  type: "text" | "password" | "number" | "checkbox";
  name: string;
  label: string;
}

const Input = ({ label, name, type }: Props) => {
  return (
    <>
      <label htmlFor={name} className="text-formText leading-10">
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          type={type}
          className={`h-12 w-full rounded-md text-gray4 outline-none border-[1px] border-gray2 border-opacity-10 mb-6 ${
            type === "password" ? "px-8" : "px-3"
          }`}
        />
        {type === "password" && (
          <>
            <UilLockAlt className="absolute h-6 w-4 top-3 left-3" />
            <UilEyeSlash className="absolute h-6 w-4 top-3 right-3" />
          </>
        )}
      </div>
    </>
  );
};

export default Input;
