import React from "react";
import Image from "next/image";
import p1 from "@/components/Images/p1.webp";
import { type ClassValue } from "clsx";

const Promotions = () => {
  return (
    <div className="mt-6">
      <h2
        className="text-blue-600  items-center justify-center flex
        font-semibold"
      >
        PROMOTIONS
      </h2>
      <h1
        className="scroll-m-20 text-4xl font-extrabold tracking-tight
       lg:text-5xl  items-center justify-center flex"
      >
        Our Promotions Events
      </h1>
      <div>
        <div className="flex flex-col">
          <div className="max-w-sm flex  p-3 border bg-gray-200  mt-5 ml-500 ">
            <div className="shrink-0">
              <h3 className="scroll-m-20 items-start text-2xl font-semibold tracking-tight">
                GET UP TO 60%
              </h3>
              For the summer season
            </div>
            <Image
              className=" flex"
              src={p1}
              height={250}
              width={250}
              alt="p1"
            />
          </div>
          <div className="max-w-lg  p-3 border bg-gray-400  mt-5 ml-500 gap-10">
            {" "}
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              GET 30% Off
            </h3>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              USE PROMO CODE
            </h4>
          </div>
        </div>

        {/* right  */}
        <div></div>

        {/* left */}

        <div></div>
      </div>
    </div>
  );
};
export default Promotions;
