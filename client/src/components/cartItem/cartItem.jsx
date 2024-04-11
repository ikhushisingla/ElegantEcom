'use client'
import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import Image from 'next/image'
import remove_icon from "@/assets/cart_cross_icon.png"
import './cartItem.css'

const CartItem = () => {
  const {all_product,cartItem,removeFromCart,totalCartAmount}=useContext(ShopContext)
  return (
    <div className='mt-24 mb-24 ml-40'>
      <div class="tablename">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='w-11/12 '/>
      {all_product.map((ele) => {
        if (cartItem[ele.id] > 0) {
          return (
            <div >
              <div className='tablename'>
                <Image src={ele.image}  alt='img' className='w-20'/>
                <p className='text-slate-500'>{ele.name}</p>
                <p className='text-slate-500'>${ ele.new_price}</p>
                <button className='text-slate-500 w-fit '>{ cartItem[ele.id]}</button>
                <p className='text-slate-500'>${ele.new_price * cartItem[ele.id]}</p>
                <Image src={remove_icon} onClick={()=>{removeFromCart(ele.id)}} alt='img' className='cursor-pointer'/>
              </div>
              <hr className='w-11/12 '/>
            </div>
          )
        }
        else return null
      })}
      <div className='flex mt-16'>
        <div className='flex flex-1 flex-col mr-48 gap-1'>
          <h1 className='text-2xl font-semibold'>Cart Total Summary</h1>
          <div className='flex justify-between pt-4 pb-4 text-slate-600'>
            <p>Subtotal</p>
            <p >${ totalCartAmount()}</p>
          </div>
          <hr className='w-12/12'/>
          <div className='flex justify-between pt-4 pb-4 text-slate-600'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr className='w-12/12'/>
          <div className='flex justify-between pt-4 pb-4 font-bold'>
            <h1>Total</h1>
            <h1>${ totalCartAmount()}</h1>
          </div>
          <button className='outline-none border hover:bg-slate-100 h-14 w-64 font-semibold'>Proceed to checkout</button>
        </div>

        <div className='flex flex-col gap-3 mr-10 items-center '>
        <p className='text-xl font-semibold'>If you have a promo code enter it here</p>
        <div className="flex items-center justify-between border h-12 bg-slate-50">
        <input
          placeholder="Promo"
          className=" w-52 focus:outline-none ml-4 bg-transparent"
        />
              <button className="cursor-pointer w-32 h-12 bg-black
         border-l-2 border-black  text-white">Enter</button>
      </div>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem