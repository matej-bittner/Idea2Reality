"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  item,
}: {
  item: { id: number; title: string; url: string };
}) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.url}
      key={item.id}
      className={`rounded-lg py-1.5 px-3 ${pathName === item.url && "bg-gray-600"}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
