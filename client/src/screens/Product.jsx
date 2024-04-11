'use client'

import Breadcrums from '@/components/breadcrums/Breadcrums'
import Productdisplay from '@/components/productdisplay/productdisplay'
import Descriptionbox from "@/components/description/descriptionbox"
import RelatedProduct from '@/components/relatedproduct/relatedProduct'
import { ShopContext } from '@/context/ShopContext'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react'

const Product = () => {
  const { all_product } = useContext(ShopContext)
  const {productId} = useParams()
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrums product={product} />
      <Productdisplay product={product} />
      <Descriptionbox />
      <RelatedProduct/>
    </div>
  )
}

export default Product