'use client'
import Image from 'next/image'
import React from 'react'
import footer_logo from "@/assets/logo_big.png"
import ig_icon from "@/assets/instagram_icon.png"
import p_icon from "@/assets/pintester_icon.png"
import w_icon from "@/assets/whatsapp_icon.png"
const Footer = () => {
    return (
      <div >
            <div className='flex flex-col justify-evenly mt-12 items-center gap-6'>
                <div className='flex justify-center items-center gap-4'>
                    <Image src={footer_logo} alt='img' />
                    <h1 className='font-bold text-2xl'>3LEGANT</h1>
                </div>
                <div className='flex gap-8'>
                    <p>Company</p>
                    <p>Products</p>
                    <p>Office</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='flex gap-7'>
                    <div>
                        <Image src={ig_icon} alt='img'/>
                    </div>
                    <div>
                        <Image src={p_icon} alt='img'/>
                    </div>
                    <div>
                        <Image src={w_icon} alt='img'/>
                    </div>
                </div>
            </div>
            <hr className='mt-4'/>
            <div className='mt-2 flex flex-col gap-2 justify-center items-center'>
              <p className='mb-4'>Copyright@2024- All rights reserved</p>
            </div>
    </div>
  )
}

export default Footer