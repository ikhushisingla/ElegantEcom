"use client";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import NewCollection from "@/components/newcollection/newcollection";
import Newsletter from "@/components/newsletter/newsletter";
import Offer from "@/components/offer/offer";
import Popular from "@/components/popular/popular";
import React from "react";

const Shop = () => {
  return (
    <div className="mx-auto w-full">
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter />
    </div>
  );
};

export default Shop;
