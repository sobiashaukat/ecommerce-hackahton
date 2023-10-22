import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import header from "/public/header.webp";
import Image from "next/image";
import logo1 from "@/components/Images/logo1.webp";
import logo2 from "@/components/Images/logo2.webp";
import logo3 from "@/components/Images/logo3.webp";
import logo4 from "@/components/Images/logo4.webp";

const Hero = () => {
  return (
    <div className=" 0">
      <section className="flex flex-col lg:flex-row
      
      gap-y-10 py-6">
        {/* left div */}
        <div className="flex-1">
          <Badge
            className="py-3 px-6 rounded-lg
            bg-blue-200 text-blue-600 hover:bg-blue-200"
          >
            Badge
          </Badge>

          <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight 
    mt-6 lg:text-5xl"
          >
            An Industrial Take on Streetwear
          </h1>

          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfits as long as you
            wear Dineoutfits.
          </p>
          <Button className="bg-black h-12 px-8 mt-4">Start Shopping</Button>

          <div className="flex gap-x-12 justify-between  mt-10">
            <Image src={logo1} alt="logo1" />
            <Image src={logo2} alt="logo2" />
            <Image src={logo3} alt="logo3" />
            <Image src={logo4} alt="logo4" />
          </div>
        </div>

        {/* Right Div */}
        <div className="flex-1 bg-rose-200 rounded-full">
          <Image src={header} alt="header" />
        </div>
      </section>
    </div>
  );
};
export default Hero;
