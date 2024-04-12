'use client'
import React from 'react'
import exclusive_img from "@/assets/exclusive_image.png"
import Image from 'next/image'

const Offer = () => {
  return (
      <div className='flex m-auto bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50 mt-16'>
          <div className='flex-1 flex flex-col justify-center md:gap-2 md:pl-44 gap-1 sm:pl-32'>
              <h1 className='md:text-5xl sm:text-3xl text-2xl'>Exclusive</h1>
              <h1 className='md:text-5xl sm:text-3xl text-2xl'>Offers for you</h1>
              <p className='md:text-2xl sm:text-xl text-lg'>Only on bestseller products</p>
              <button className='border border-black w-28 rounded-full mt-3 ml-20 sm:ml-0'>Check Now</button>
          </div>
          <div className='flex-1 flex items-center pt-3'>
              <Image src={exclusive_img} alt='img'/>
          </div>
    </div>
  )
}

export default Offer