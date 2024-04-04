'use client'

import Image from 'next/image'
import React from 'react'
import hand_icon from "@/components/assets/hand_icon.png"
import arrow from "@/components/assets/arrow.png"
import hero_image from "@/components/assets/hero_image.png"
const Hero = () => {
  return (
      <div className='flex bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50'>
          <div className='flex flex-1 flex-col justify-center gap-5 pl-44'>
              <h1 className='text-6xl font-semibold'>New Arrivals Only</h1>
              <div>
                  <div className='flex items-center gap-3'>
                      <p className='text-3xl'>New</p>
                      <Image src={hand_icon} alt='img' className='w-10'/>
                  </div>
                  <p className='text-3xl'>Collection</p>
                  <p className='text-3xl'>for everyone</p>
              </div>
              <div>
                  <div className='flex justify-center items-center gap-4 w-80 h-20 mt-7 border border-r-2 border-black rounded-full '>
                      <p className='text-2xl cursor-pointer'> Latest collections</p>
                      <Image src={ arrow} alt='img'/>
                  </div>
              </div>
          </div>
          <div className='flex-1 flex items-center justify-center'>
              <Image src={hero_image} alt='img'/>
          </div>
    </div>
  )
}

export default Hero