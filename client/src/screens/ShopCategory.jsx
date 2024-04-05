'use client'
import { ShopContext } from '@/context/ShopContext'
import React, { useContext } from 'react'
import Image from 'next/image'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div>
      <Image src={props.banner} alt='img'/>
      <div>

      </div>
    </div>
  )
}

export default ShopCategory