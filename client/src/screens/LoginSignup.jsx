'use client'
import React from 'react'

const LoginSignup = () => {
  return (
    <div className='h-screen flex justify-center items-center w-full bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50 '>
      <div className=' m-auto border border-r-1 border-black px-10 py-16 bg-white'>
        <h1 className='mb-12 font-semibold text-3xl'>Sign Up</h1>
        <div className='flex flex-col gap-6'>
          <input type='text' placeholder='Name' className='bg-transparent focus:outline-none border border-r-1 p-2'/>
          <input type='email' placeholder='Email' className='bg-transparent focus:outline-none border border-r-1 p-2'/>
          <input type='password' placeholder='Password' className='bg-transparent focus:outline-none border border-r-1 p-2'/>
        </div>
        <button className='m-auto mt-3 mb-2 border border-r-1 rounded-full p-1 w-32 hover:bg-slate-100'>Continue</button>
        <p>Already have an acount? <span className='text-green-500'>Login here</span></p>
        <div className='flex gap-2 mt-2'>
          <input type='checkbox' name='' id='' className='bg-transparent focus:outline-none'/>
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup