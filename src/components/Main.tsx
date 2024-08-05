import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-screen h-[calc(100vh-6rem)] items-center px-4 md:px-10 xl:px-20 2xl:px-40 flex flex-col lg:flex-row lg:gap-2">
      {/*text + tlacitko*/}
      <section className="h-full flex flex-col justify-center items-center gap-20 text-center lg:text-left lg:flex-1">
        <h1 className="text-6xl font-bold bg-gradient-to-b from-green-700 to-white text-transparent bg-clip-text pb-3">
          Better Design for your digital products.
        </h1>
        <h2 className="text-2xl">
          Turning your idea into Reality. We bring together the teams form the
          global tech industry.
        </h2>
        <Link
          className="px-4 py-3 bg-green-700 text-white lg:self-start rounded-md "
          href="/portfolio"
        >
          See Our Works
        </Link>
      </section>
      {/*obrazek*/}
      <section className="hidden lg:flex lg:flex-1 lg:h-full max-h-[600px] lg:relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </section>
    </div>
  );
};

export default Main;
