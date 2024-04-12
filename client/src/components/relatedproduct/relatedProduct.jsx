'use client'

import React from 'react'
import data_product from '@/assets/data'
import Item from '../item/Item'
const relatedProduct = () => {
  return (
      <div className='flex flex-col items-center gap-3 mt-6 '>
          <h1 className='text-2xl font-bold'>Related Products</h1>
          <hr className='w-48 h-2' />
          <div className='mt-12 grid grid-cols-6 md:grid-cols-6'>
              {data_product.map((ele,idx) => {
                  return (
                      <Item key={idx}
                      id={ele.id}
                      name={ele.name}
                      image={ele.image}
                      new_price={ele.new_price}
                      old_price={ele.old_price}/>
                  )
              })}
          </div>
    </div>
  )
}

export default relatedProduct