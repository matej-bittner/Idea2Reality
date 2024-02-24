import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)]  px-4 md:px-10 xl:px-20 2xl:px-40 flex flex-col gap-4 md:justify-center items-center ">
      <div className=" w-full h-[200px] md:h-1/3 bg-[url('/websites.jpg')] bg-no-repeat bg-cover bg-center"></div>
      <div className=" flex flex-col md:h-2/3 gap-4 md:gap-10 md:flex-row  items-center md:w-full md:justify-around ">
        <div className="md:w-1/2 md:max-w-[400px]  flex flex-col gap-4 ">
          <h1 className="text-2xl font-bold ">Who Are We?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            doloribus dolorum ea eos eum, eveniet
          </p>

          <p>
            {" "}
            id impedit praesentium quidem ratione repellat saepe similique sunt
            ullam voluptatibus! A facere iusto perferendis sequi voluptatibus!{" "}
          </p>

          <p>
            Accusamus, deleniti eum nesciunt nobis officia quaerat soluta. Atque
            autem dicta earum error esse, excepturi fugiat incidunt
            reprehenderit repudiandae similique! Aliquam dicta magnam nobis
            officiis, reiciendis temporibus ut.
          </p>
        </div>
        <div className="md:w-1/2 md:max-w-[400px] flex flex-col gap-4">
          <h1 className="text-2xl font-bold ">What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            doloribus dolorum ea eos eum, eveniet id impedit praesentium quidem
            ratione repellat saepe similique sunt ullam voluptatibus
          </p>
          <ul className="gap-2 flex flex-col">
            <li>- Creative Illstrations</li>

            <li>- Dynamic Websites</li>
            <li>- Fast and Handy Mobile Apps</li>
          </ul>
          <Link
            href="/contact"
            className="px-7 py-3 bg-green-700 text-white lg:self-start rounded-md mx-auto md:self-start md:mx-0"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
