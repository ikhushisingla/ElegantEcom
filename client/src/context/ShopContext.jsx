"use client";
import all_product from "@/assets/all_product";
import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
//creating empty card for cart for which our key value will be product id and product value will be quantity of product that we have added in cart
const getDefaultCard = () => {
  let cart = {}
  for (let index = 0; index < 300+1; index++) {
    cart[index] = 0;
  }
  return cart
}

const ShopContextProvider = (props) => {
  const [allproduct,setAll_Product] = useState([])
  const [cartItem, setCartItem] = useState(getDefaultCard())

  useEffect(() => {
    fetch("http://localhost:4000/allproduct")
      .then((response) => response.json())
      .then((data) => setAll_Product(data))
  },[])
  
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const totalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount+=itemInfo.new_price * cartItem[item]
      }
    }
    return totalAmount
  }

  const totalCartItem = () => {
    let totalItem = 0
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem+=cartItem[item]
      }
    }
    return totalItem
  }

  const contextValue = { all_product, cartItem ,addToCart,removeFromCart,totalCartAmount,totalCartItem};  

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
