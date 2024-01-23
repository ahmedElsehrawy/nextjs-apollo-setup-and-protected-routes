import React from "react";
import Card from "./Card";
//@ts-ignore
import { UilTimes } from "@iconscout/react-unicons";

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  children: React.ReactNode;
  height?: string;
  width?: string;
}

const Modal = ({ isOpen, setIsOpen, children, height, width }: Props) => {
  return (
    isOpen && (
      <div className="fixed inset-y-0 inset-x-0 flex justify-center items-center">
        <div
          className="absolute inset-y-0 inset-x-0 bg-gray opacity-50 "
          onClick={() => {
            setIsOpen(false);
          }}
        />
        <Card
          height={height ? height : "undefined"}
          width={width ? width : "undefined"}
        >
          <div
            className="relative bg-darkBlue2"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <UilTimes className="absolute -top-7 -right-7 h-8 w-8 rounded-md bg-white shadow-sm cursor-pointer" />
          </div>
          {children}
        </Card>
      </div>
    )
  );
};

export default Modal;
