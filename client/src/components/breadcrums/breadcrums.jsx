'use client'
import React from 'react'
import Image from 'next/image'
import arrow from "@/components/assets/breadcrum_arrow.png"

const Breadcrums = (props) => {
  const {product}=props
  return (
      <div className='flex flex-row gap-2 mt-3 items-center'>
          HOME <Image src={arrow} alt='img'/> SHOP <Image src={arrow} alt='img'/>{product.category}<Image src={arrow} alt='img'/>{product.name}
    </div>
  )
}

export default Breadcrums