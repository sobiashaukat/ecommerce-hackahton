import { Product } from "./types";
import p1 from "@/components/Images/p1.webp";
import p2 from "../components/Images/p2.webp";
import p4 from "../components/Images/p4.webp";
import p3 from "../components/Images/p3.png";
import p7 from "../components/Images/p7.webp";

export const Products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    category: "female",
    image: p1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    category: "male",
    image: p2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 40,
    category: "female",
    image: p3,
  },
  {
    id: 4,
    name: "Product 4",
    price: 80,
    category: "kids",
    image: p4,
  },
  {
    id: 5,
    name: "Product 5",
    price: 90,
    category: "male",
    image: p7,
  },
];
