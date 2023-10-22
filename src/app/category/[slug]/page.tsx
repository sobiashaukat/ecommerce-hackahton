

import {Products} from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category:string) => {
   return Products.filter((product) => product.category === category);
}




  export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductsByCategory(params.slug);
    return  <div className="mt-16  gap-10  py-10
     flex justify-evenly flex-wrap">
    {result.map((product) => (
      <ProductCard
        key={product.id}
        title={product.name}
        price={product.price}
        Category={product.category? product.category : '' }
        img={product.image as StaticImageData}
        id={product.id}
      />
    ))}
  </div>
  }