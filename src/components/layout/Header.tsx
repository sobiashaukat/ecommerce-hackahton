import logo from "/public/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

import React from "react";
const menuItems = [
    { label: 'Female', href: '/' },
    { label: 'Male', href: '/' },
    { label: 'Kids', href: '/' },
    { label: 'All Products', href: '/' }
  ];





const Header = () => {
  return (
    <div className="flex justify-between  container items-center my-4 mx-6">
      <Link href={"/"}>
      <Image src={logo} alt="logo" className="w-40" />
      </Link>
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"products"}>All Products</Link>
        </li>
      </ul>
      <Input className="flex max-w-[250px] mx-6  my-4 border-2 
       h-2"  placeholder="What are you looking for" />
      <div
        className="h-10 w-10 rounded-full bg-gray-200 
           flex justify-center items-center"
      >
        <ShoppingCart className="h-6 w-6" />
      </div>
    </div>
  );
};
export default Header;
