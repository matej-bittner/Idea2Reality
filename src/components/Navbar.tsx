import React from "react";

import Menu from "@/components/Menu";
import NavLink from "@/components/NavLink";
import DarkMode from "@/components/DarkMode";

const links = [
  {
    id: 1,
    title: "Home",
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
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];
const Navbar = () => {
  return (
    <div className="w-screen h-[6rem] justify-between items-center flex px-4 md:px-10 xl:px-20 2xl:px-40">
      {/*Logo*/}
      <div>
        <p className="text-3xl text-slate-200">Idea2Reality</p>
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
