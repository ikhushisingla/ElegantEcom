'use client'
import React, { useState } from 'react'
import logo from "@/components/assets/logo.png"
import cart_icon from "@/components/assets/cart_icon.png"
import Image from 'next/image'

const Navbar = () => {
    const [menu,setMenu]=useState("shop")
    return (
      <div className='flex justify-around items-center'>
        <div className='flex items-center gap-3'>
                <Image src={logo} alt='img'/>
                <p className='font-semibold text-lg'>3LEGANT</p>
            </div>
            <div className='flex gap-10 cursor-pointer'>
                <p onClick={() => { setMenu("shop") }}>Shop{ menu==="shop"?<hr/>:<></>}</p>
                <p onClick={()=>{setMenu("Women")}}>Women { menu==="Women"?<hr/>:<></>}</p>
                <p onClick={()=>{setMenu("Men")}}>Men { menu==="Men"?<hr/>:<></>}</p>
                <p onClick={()=>{setMenu("Kids")}}>Kids { menu==="Kids"?<hr/>:<></>}</p>
            </div>
            <div className='flex gap-3'>
                <button className=' text-lg border border-solid-1 rounded-full px-4'>Login</button>
                <Image src={cart_icon} alt='img' className='w-8' />
                <div className='w-5 h-5 flex justify-center items-center -ml-5 -mt-2 text-white bg-red-500 border rounded-full'>0</div>
            </div>
      </div>
    );
}


export default Navbar