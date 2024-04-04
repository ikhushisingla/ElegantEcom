'use client'
import React from 'react'
import exclusive_img from "@/components/assets/exclusive_image.png"
import Image from 'next/image'

const Offer = () => {
  return (
      <div className='flex m-auto w-2/3 bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50 mt-16'>
          <div className='flex-1 flex flex-col justify-center gap-2 ml-14'>
              <h1 className='text-5xl'>Exclusive</h1>
              <h1 className='text-5xl'>Offers for you</h1>
              <p className='text-2xl'>Only on bestseller products</p>
              <button className='border border-black w-28 rounded-full mt-3 ml-20'>Check Now</button>
          </div>
          <div className='flex-1 flex items-center justify-end pt-3'>
              <Image src={exclusive_img}/>
          </div>
    </div>
  )
}

export default Offer