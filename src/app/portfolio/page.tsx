import React from "react";
import Link from "next/link";
import Image from "next/image";

const PortfolioPage = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 2xl:px-40 h-[calc(100vh-96px)]">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Our Works</h1>
        <h2 className="text-3xl">Choose Galery</h2>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center mt-8 gap-4 xl:justify-around ">
        <div className="border-2 border-white max-w-[400px] h-[40vh] md:h-auto aspect-[3/4] md:w-1/3  relative rounded-md overflow-clip hover:scale-105 transition-all duration-200">
          <Link href="/" className="">
            <Image
              src="/illustration.png"
              alt=""
              fill
              className="object-cover"
            />
          </Link>
        </div>
        <div className="border-2 border-white max-w-[400px] h-[40vh] md:h-auto   aspect-[3/4] md:w-1/3 relative rounded-md overflow-clip hover:scale-105 transition-all duration-200">
          <Link href="/">
            <Image src="/websites.jpg" alt="" fill className="object-cover" />
          </Link>
        </div>
        <div className="border-2 border-white max-w-[400px] h-[40vh] md:h-auto  aspect-[3/4] md:w-1/3 relative rounded-md overflow-clip hover:scale-105 transition-all duration-200">
          <Link href="/">
            <Image src="/apps.jpg" alt="" fill className="object-cover" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
