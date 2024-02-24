import React from "react";

import Menu from "@/components/Menu";
import NavLink from "@/components/NavLink";
import DarkMode from "@/components/DarkMode";

const links = [
  {
    id: 1,
    title: "Domů",
    url: "/",
  },
  {
    id: 2,
    title: "Porfolio",
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
const Navbar = () => {
  return (
    <div className="w-screen h-[6rem] justify-between items-center flex px-4 md:px-10 xl:px-20 2xl:px-40">
      {/*Logo*/}
      <div>
        <p className="text-3xl">lamamia</p>
      </div>
      {/*navigace*/}
      <div className="hidden md:flex gap-8">
        <DarkMode />
        {links.map((item) => (
          <NavLink key={item.id} item={item} />
        ))}
      </div>
      {/*mobilní navigace*/}
      <div className="md:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
