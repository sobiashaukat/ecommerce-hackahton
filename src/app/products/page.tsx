
import {Products} from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from 'next/image';




const AllProducts = () => {
    return( 
    <div className="mt-16 py-10 grid grid-cols-3
   ">
    {Products.map((product) => (
      <ProductCard
        key={product.id}
        title={product.name}
        price={product.price}
        Category={product.category ? product.category : ''}
        img={product.image as StaticImageData}
        id={product.id}/>
    
    ))}
    </div>
    );
}
export default AllProducts