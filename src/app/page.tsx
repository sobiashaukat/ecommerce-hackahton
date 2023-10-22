import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import Promotions from "@/components/Promotions";
import ProductList from "@/components/Productlist";

export default function Home() {
  return (
    <div  className="flex flex-col mx-auto items-center w-full">
      <Hero />
      <Promotions />
      <ProductList />
    </div>
  );
}
