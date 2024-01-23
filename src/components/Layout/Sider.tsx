"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  className: string;
}

const links: { key: number; link: string; name: string }[] = [
  { key: 1, link: "/home", name: "Dashboard" },
  { key: 2, link: "/roles", name: "Roles & Permissions" },
  { key: 3, link: "/users", name: "Users" },
  { key: 4, link: "/vendor", name: "Vendor" },
  { key: 5, link: "/consumers", name: "Consumers" },
  { key: 6, link: "/orders", name: "Orders" },
  { key: 7, link: "/advertising", name: "Advertising System" },
  { key: 8, link: "/subscriptions", name: "Subscriptions" },
  { key: 9, link: "/setting", name: "Setting" },
];

const Sider = ({ className }: Props) => {
  const pathname = usePathname();
  return (
    <div className={className}>
      <div className="text-center mb-3 text-white">
        <Link href="/home">
          <h1>ElWekala</h1>
        </Link>
      </div>
      <div className="w-full">
        {links.map((link) => (
          <Link
            key={link.key}
            href={link.link}
            className={`block py-2 px-4 mb-1 cursor-pointer rounded-md hover:bg-gray ${
              pathname === link.link && `bg-gray `
            } text-linksTexts  transition duration-300 ease-in-out`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sider;
