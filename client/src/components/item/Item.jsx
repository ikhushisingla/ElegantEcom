'use client'

import Image from 'next/image'
import React from 'react'

const Item = (props) => {
  return (
      <div className='w-auto hover:shadow-2xl'>
          <Image src={props.image} alt='img'  className='w-60'/>
          <p className='mt-2 mb-2 font-semibold text-lg'>{props.name}</p>
          <div className='flex gap-5'>
              <div className='font-semibold text-slate-400'>
                  ${props.new_price}
              </div>
              <div className='font-semibold text-slate-400 line-through'>
                  ${props.old_price}
              </div>
          </div>
    </div>
  )
}

export default Item