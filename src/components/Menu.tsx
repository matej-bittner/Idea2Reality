"use client";
import React, { useState } from "react";
import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Domů",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "O Nás",
    url: "/about",
  },
  {
    id: 5,
    title: "Kontakt",
    url: "/contact",
  },
];
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      {!open ? (
        <button
          className="h-6 flex flex-col justify-between"
          onClick={() => setOpen(!open)}
        >
          <div className="w-8 bg-white h-1"></div>
          <div className="w-8 bg-white h-1"></div>
          <div className="w-8 bg-white h-1"></div>
        </button>
      ) : (
        <button
          className="h-7 flex flex-col justify-between "
          onClick={() => setOpen(!open)}
        >
          <div className="w-9 bg-white h-1 rotate-45 origin-left"></div>

          <div className="w-9 bg-white h-1 -rotate-45 origin-left"></div>
        </button>
      )}

      {open && (
        <div className="w-screen absolute left-0 top-[6rem] h-1/2 text-white flex flex-col justify-center items-center gap-7 bg-gradient-to-b from-gray-900 to-gray-800 border-t-2 border-gray-700 z-50">
          {links.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              className="text-3xl"
              href={item.url}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
