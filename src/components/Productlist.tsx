import Image, { StaticImageData } from "next/image";
import React from "react";

import p2 from "../components/Images/p2.webp";
import p4 from "../components/Images/p4.webp";
import p3 from "../components/Images/p3.png";
import Promotions from "@/components/Promotions";
import ProductCard from "./ProductCard";
import p7 from "../components/Images/p7.webp";
import { Products } from "@/utils/mock";

const ProductList = () => {

 const products = Products.slice(0, 6)
  ;
 
  // console.log(productChunks);
  return (
    <div  className="mt-20 flex-col  flex justify-evenly placeholder-opacity-10">
      <div>
        <h2
          className="text-blue-600  items-center justify-center flex
font-semibold"
        >
          PRODUCTS
        </h2>

        <h6
          className="scroll-m-20 text-4xl font-extrabold tracking-tight
lg:text-5xl  items-center justify-center flex"
        >
          Check What We Have
        </h6>
      </div>
      <div className="mt-16  gap-10 py-10 flex justify-evenly flex-wrap">
        {products.map((product) => (
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
    </div>
  );
};
export default ProductList;

{
  /*           
       <div>
        <Image src={p2} height={250} width={250} alt="p2" />
        <h3 className="font-bold text-lg">Flex Sweashirt</h3>
        <p className="font-bold text-lg">$104</p></div>
        <div>
        <Image src={p4} height={250} width={250} alt="p4" />
        <h3 className="font-bold text-lg">Flex Sweashirt</h3>
        <p className="font-bold text-lg">$104</p></div>
        <div>
        <Image src={p3} height={250} width={250} alt="p3" />
        <h3 className="font-bold text-lg">Flex Sweashirt</h3>
        <p className="font-bold text-lg">$104</p></div>  
        
        
        
             <ProductCard title="Sweashirt" price={104} img={p7}/>
         <ProductCard title="Raglanshirt" price={100} img={p3}/>
         <ProductCard title="Sashshirt" price={144} img={p4} />
        
        */
}
