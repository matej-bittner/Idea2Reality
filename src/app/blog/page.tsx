import React from "react";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10",
    {
      next: { revalidate: 10 },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const BlogPage = async () => {
  const data = await getData();

  return (
    <div className="px-4 md:px-10 xl:px-20 2xl:px-40 flex flex-col  h-auto w-full">
      {data.map((item: any) => (
        <Link href={`/blog/1${item.id}`} id={item.id} key={item.id}>
          <div className="w-full flex flex-col gap-3 py-4 text-center justify-center items-center rounded-md hover:bg-gray-800 md:flex-row md:justify-between md:px-4">
            <div className="relative w-[200px] h-[200px]">
              <Image
                src="/illustration.png"
                fill
                alt=""
                className="rounded-md"
              />
            </div>
            <div className=" md:h-[200px] md:w-[calc(100%-200px-24px)] md:flex md:flex-col md:justify-center md:gap-6 md:text-left">
              <h1 className="text-2xl">{item.title}</h1>
              <p>20.2.2024</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPage;
