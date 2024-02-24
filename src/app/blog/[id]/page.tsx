import React from "react";
import Image from "next/image";

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Page = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="px-4 md:px-10 xl:px-20 2xl:px-40 ">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-8 gap-2 h-[calc(100vh-96px)] md:h-auto md:min-h-[400px] ">
        {/*text*/}
        <div className="flex gap-7 flex-col md:w-1/2 md:h-auto h:2/3 sm:h-1/2 justify-center">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p>{data.body}</p>
          <div className="flex items-center gap-3">
            <Image
              src="/blog.jpg"
              width={40}
              height={40}
              alt=""
              className="rounded-full"
            />
            <p>Matej Bittner</p>
          </div>
        </div>
        {/*image*/}
        <div className="md:w-1/2 md:h-auto h-1/3 sm:h-1/2 relative ">
          <Image src="/blog.jpg" fill className="object-contain " alt="" />
        </div>
      </div>
      <div className="flex flex-col mt-2 gap-4 ">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad autem
          doloribus fuga magni porro provident saepe soluta. Dolore, doloremque
          earum est fuga harum nostrum. Adipisci aliquid at aut autem blanditiis
          cumque distinctio dolor eligendi, error fuga id illo in ipsam ipsum
          iure iusto modi mollitia natus perspiciatis porro, possimus provident
          quae quibusdam sequi tempore ut vero. Eum repellendus sit velit vitae?
          Ad delectus deleniti dolore dolores exercitationem facere illo
          inventore itaque laudantium minus nam natus nemo neque nihil omnis
          praesentium quisquam quo reiciendis repudiandae sint, soluta ut
          voluptate! Asperiores dolores doloribus eum hic impedit nisi! Illum
          labore molestiae reprehenderit voluptas.
        </p>
        <p>@Matej Bittner 2024</p>
      </div>
    </div>
  );
};

export default Page;
