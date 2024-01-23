import React from "react";
import Sider from "./Sider";
import Content from "./Content";

interface Props {
  children: React.ReactNode;
}

const ShopLayout = ({ children }: Props) => {
  return (
    <div className="w-full min-h-screen bg-background relative ">
      <Sider className="hidden lg:block fixed left-0 inset-y-0 w-0 lg:w-56 xl:w-64 2xl:w-80 bg-gradient-to-b from-darkBlue to-darkBlue2 py-4" />
      <Content styles="absolute left-0 lg:left-56 xl:left-64 2xl:left-80 p-4 right-0 h-full box-border">
        {children}
      </Content>
    </div>
  );
};

export default ShopLayout;
