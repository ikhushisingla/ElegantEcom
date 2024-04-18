'use client'
import React, { useContext } from "react";
import Image from 'next/image'
import star from "@/assets/star_icon.png"
import star_dull from "@/assets/star_dull_icon.png"
import { ShopContext } from "@/context/ShopContext";
const Productdisplay = (props) => {
  const { product } = props
  const {addToCart}=useContext(ShopContext)
  return (
    <div className=" flex justify-evenly mt-6 lg:gap-5 md:ml-20 md:gap-12 sm:ml-16 sm:gap-6">
      <div className="flex gap-4 lg:ml-10 sm:gap-2">
        <div className="flex flex-col gap-4 sm:gap-2">
          <Image src={product.image} alt="img" className="h-32 w-28 md:h-24 md:w-24 sm:w-20 sm:h-20" width={40} height={40}/>
          <Image src={product.image} alt="img" className="h-32 w-28 md:h-24 md:w-24 sm:w-20 sm:h-20" width={40} height={40}/>
          <Image src={product.image} alt="img" className="h-32 w-28 md:h-24 md:w-24 sm:w-20 sm:h-20"/>
          <Image src={product.image} alt="img" className="h-32 w-28 md:h-24 md:w-24 sm:w-20 sm:h-20" width={40} height={40}/>
        </div>
        <div>
          <Image src={product.image} alt="img" className="h-[560px] w-[450px] md:h-[410px] sm:h-[344px] sm:w-[300px]" width={80} height={80}/>
        </div>
      </div>
      <div className="flex flex-col lg:gap-3 md:gap-1 sm:gap-1">
        <h1 className="text-4xl md:text-2xl font-bold sm:text-xl">{product.name}</h1>
        <div className="flex gap-1 items-center mt-6 md:mt-1 sm:mt-0">
          <Image src={star } alt="img" width={20} height={20}/>
          <Image src={star } alt="img" width={20} height={20}/>
          <Image src={ star} alt="img" width={20} height={20}/>
          <Image src={ star} alt="img" width={20} height={20}/>
          <Image src={star_dull} alt="img" width={20} height={20}/>
          <p className="text-lg ml-2 md:text-md sm:text-md">122 Reviews</p>
        </div>
        <div className="flex gap-3 mt-4 items-center md:mt-2 sm:mt-0">
          <div className="text-slate-500 font-bold lg:text-xl md:text-lg line-through sm:text-sm">${ product.old_price}</div> 
          <div className="text-red-500 md:text-lg font-bold lg:text-xl sm:text-sm">${ product.new_price}</div>
        </div>
        <div className="lg:text-lg font-semibold mt-5 md:mt-1 sm:mt-0 sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Atque ut veniam consequatur quos amet alias sed moli <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="lg:mt-5 sm:mt-1">
          <h1 className="lg:text-xl font-bold md:text-lg sm:text-sm">Select size</h1>
          <div className="flex gap-5 mt-2 items-center md:gap-3 md:mt-1 sm:mt-1 sm:text-xs sm:gap-2">
            <div className="cursor-pointer border border-r-1 lg:px-3 lg:py-2 bg-slate-50 sm:px-2 sm:py-1">S</div>
            <div className="cursor-pointer border border-r-1 lg:px-3 lg:py-2 bg-slate-50 sm:px-2 sm:py-1">M</div>
            <div className="cursor-pointer border border-r-1 lg:px-3 lg:py-2 bg-slate-50 sm:px-2 sm:py-1">L</div>
            <div className="cursor-pointer border border-r-1 lg:px-3 lg:py-2 bg-slate-50 sm:px-2 sm:py-1">XL</div>
            <div className="cursor-pointer border border-r-1 lg:px-3 lg:py-2 bg-slate-50 sm:px-2 sm:py-1">2XL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="border border-r-2 rounded-full lg:w-32 lg:p-2 lg:mt-5 hover:bg-slate-100 sm:mt-1 sm:text-sm sm:p-1 sm:w-28">Add to Cart</button>
        <div className="mt-5 lg:flex lg:gap-3 lg:mt-2 sm:mt-0">
        <p className="lg:text-lg lg:text-slate-600 sm:text-sm"><span className="lg:text-lg font-semibold text-black sm:text-sm">Category: </span>{ product.category}</p>
        <p className="lg:text-lg lg:text-slate-600 sm:text-sm"><span className="lg:text-lg font-semibold text-black sm:text-sm">Tags: </span>Modern, Latest </p>
        </div>        
      </div>
    </div>
  );
};

export default Productdisplay;
``;
