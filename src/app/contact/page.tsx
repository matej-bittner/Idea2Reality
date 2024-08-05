import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="px-4 md:px-10 xl:px-20 2xl:px-40 h-[calc(100vh-96px)] flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold ">Let´s Keep in Touch</h1>
      <div className="flex flex-col w-full h-full mt-10 justify-center md:flex-row">
        <div className="hidden sm:block sm:w-full sm:h-1/3 sm:relative sm:mb-6 md:h-full md:w-1/2 ">
          <Image
            src="/contact.png"
            alt=""
            fill
            className="object-contain md:max-h-[600px]  my-auto "
          />
        </div>
        <div className="flex justify-center items-center  md:h-full md:w-1/2">
          <form
            className="flex flex-col gap-4 justify-center items-center w-[80%]"
            action=""
          >
            <input
              className="h-8 w-full border-2 rounded-md py-4 px-3 bg-transparent text-white"
              type="text"
              placeholder="Name"
            />
            <input
              className="h-8 w-full border-2 rounded-md py-4 px-3 bg-transparent text-white"
              type="text"
              placeholder="email"
            />
            <textarea
              className=" w-full border-2 rounded-md py-2 px-3 bg-transparent text-white"
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="message"
            ></textarea>
            <button className="px-7 py-3 bg-green-700 text-white lg:self-start rounded-md self-start">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
