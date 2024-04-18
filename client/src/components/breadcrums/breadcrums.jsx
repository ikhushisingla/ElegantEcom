'use client'
import React from 'react'
import Image from 'next/image'
import arrow from "@/assets/breadcrum_arrow.png"

const Breadcrums = (props) => {
  const {product}=props
  return (
      <div className='flex flex-row gap-2 lg:ml-36 mt-3 items-center'>
          HOME <Image src={arrow} alt='img'/> SHOP <Image src={arrow} alt='img' width={5} height={5}/>{product.category}<Image src={arrow} alt='img' width={5} height={5}/>{product.name}
    </div>
  )
}

export default Breadcrums