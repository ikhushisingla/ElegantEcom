'use client'
import logo from "@/assets/nav-logo.svg"
import profile from "@/assets/nav-profile.svg"

import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
      <div className="flex items-center justify-between pt-2 pb-2 sm:pt-4 sm:pb-4 lg:pl-11 lg:pr-11 md:pl-7 md:pr-7 sm:pr-4 sm:pl-4 shadow-md bg-white">
          <Image alt='img' src={logo} className="sm:w-52 w-40"/>
          <Image src={profile} alt="img" className="sm:w-24 w-20"/>
    </div>
  )
}

export default navbar