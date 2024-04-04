'use client'
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import NewCollection from '@/components/newcollection/NewCollection'
import Newsletter from '@/components/newsletter/Newsletter'
import Offer from '@/components/offer/Offer'
import Popular from '@/components/popular/Popular'
import React from 'react'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter />
      <Footer/>
    </div>
  )
}

export default Shop