



import {Products} from "@/utils/mock";

import { StaticImageData } from "next/image";
import  Image from "next/image";


const getProductsDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  console.log(result);

  return (
    <div className="mt-16 gap-10 py-10 flex justify-evenly flex-wrap">
      {result.map((product) => (
        <div key={product.id} className="flex justify-between gap-6">
          <div>
            <Image src={product.image} alt={product.name} />
          </div>
          <div>
            Product Detail
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
