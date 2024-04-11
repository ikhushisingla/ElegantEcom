'use client'

import React from 'react'

const descriptionbox = () => {
  return (
    <div className='flex flex-col lg:ml-36 lg:mr-36 mt-14'>
      <div className='flex'>
        <div className='flex items-center justify-center text-xl w-40 h-16 border border-solid-2'>Description</div>
        <div className='flex flex-row items-center justify-center text-xl w-44 h-16 border border-solid-2 bg-slate-50'>Reviews 122</div>
      </div>
      <div className='flex flex-col gap-6 border border-r-2 p-12'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium architecto iusto consectetur eveniet totam dolor culpa, unde temporibus harum asperiores. Iusto saepe accusamus velit aperiam rerum voluptatum quas molestias voluptate!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium iure perspiciatis, sequi cupiditate aperiam eius nesciunt error quibusdam voluptate itaque quidem illo nam sapiente iste doloremque obcaecati tempora deserunt libero?</p>
      </div>
    </div>
  )
}

export default descriptionbox