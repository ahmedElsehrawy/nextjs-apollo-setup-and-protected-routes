import React from "react";
import Search from "./Search";

interface Props {
  children: React.ReactNode;
  styles: string;
}

const Content = ({ children, styles }: Props) => {
  return (
    <div className={styles}>
      <Search placeholder="Search" />
      {children}
    </div>
  );
};

export default Content;
