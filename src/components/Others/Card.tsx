import React from "react";

interface Props {
  children: React.ReactNode;
  width?: string;
  height?: string;
}

const Card = ({ children, width, height }: Props) => {
  return (
    <div
      className={`z-50 p-4 bg-white shadow-custom shadow-gray5 rounded-xl ${
        width && width
      } ${height ? height : "min-h-[calc(100vh-9rem)]"}`}
    >
      {children}
    </div>
  );
};

export default Card;
