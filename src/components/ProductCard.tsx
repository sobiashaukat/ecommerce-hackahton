

import React from "react"

import Image, {StaticImageData} from "next/image"
import Link from "next/link"



import p2 from "../components/Images/p2.webp"
import p4 from "../components/Images/p4.webp"
import p3 from "../components/Images/p3.png"
import AddToCart  from "@/components/AddToCart"



function ProductCard(props:{title:string,price:number,Category:string,
  img:StaticImageData, id:number;}) {
  console.log (props.title)
  return(
    <Link  href={`/products/${props.id}`}>
    <div className="py-5">
    <Image className="max-w-sm flex h-80 object-cover border hover:scale-105 duration-300
     bg-gray-300  mt-5 ml-500" src={props.img} alt="product" />
    <h3 className="font-bold text-lg mt-3">{props.title} </h3>
    <p className="font-bold text-lg">${props.price}</p>
    <p className="font-bold text-lg">{props.Category}</p>
    <p className="font-bold text-lg">
      Catogery{""}
      <span className="text-base font-normal capitalize">
      {props.Category}
      </span>
      </p>
    <AddToCart />
    </div>
    </Link >
    

  )

}
export default ProductCard


  


  