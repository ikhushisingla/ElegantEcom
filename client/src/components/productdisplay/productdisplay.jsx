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
    <div className="flex justify-evenly mt-6">
      <div className="flex gap-4 lg:ml-10">
        <div className="flex flex-col gap-4">
          <Image src={product.image} alt="img" className="h-32 w-28"/>
          <Image src={product.image} alt="img" className="h-32 w-28"/>
          <Image src={product.image} alt="img" className="h-32 w-28"/>
          <Image src={product.image} alt="img" className="h-32 w-28"/>
        </div>
        <div>
          <Image src={product.image} alt="img" className="h-[560px] w-[450px]"/>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        <div className="flex gap-1 items-center mt-6">
          <Image src={star } alt="img" />
          <Image src={star } alt="img" />
          <Image src={ star} alt="img" />
          <Image src={ star} alt="img" />
          <Image src={star_dull} alt="img" />
          <p className="text-lg ml-2">122 Reviews</p>
        </div>
        <div className="flex gap-3 mt-4 items-center">
          <div className="text-slate-500 font-bold text-xl line-through">${ product.old_price}</div>
          <div className="text-red-500 font-bold text-xl">${ product.new_price}</div>
        </div>
        <div className="text-lg font-semibold mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Atque ut veniam consequatur quos amet alias sed moli <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="mt-5">
          <h1 className="text-xl font-bold">Select size</h1>
          <div className="flex gap-5 mt-2 items-center ">
            <div className="cursor-pointer border border-r-1 px-3 py-2 bg-slate-50">S</div>
            <div className="cursor-pointer border border-r-1 px-3 py-2 bg-slate-50">M</div>
            <div className="cursor-pointer border border-r-1 px-3 py-2 bg-slate-50">L</div>
            <div className="cursor-pointer border border-r-1 px-3 py-2 bg-slate-50">XL</div>
            <div className="cursor-pointer border border-r-1 px-3 py-2 bg-slate-50">2XL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} className="border border-r-2 rounded-full w-32 p-2 mt-5 hover:bg-slate-100">Add to Cart</button>
        <div className="mt-5">
        <p className="text-lg"><span className="text-lg font-semibold">Category: </span>{ product.category}</p>
        <p className="text-lg"><span className="text-lg font-semibold">Tags: </span>Modern, Latest </p>
        </div>
      </div>
    </div>
  );
};

export default Productdisplay;
``;
