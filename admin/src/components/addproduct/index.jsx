"use client";
import React, { useState } from "react";
import Image from 'next/image'
import upload from "../../assets/upload_area.svg"
import Sidebar from "../sidebar/Sidebar";
const AddProduct = () => {
  const [image, setImage] = useState(false)
  const [productDetail, setProductDetail] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price:""
  })
  const imagehandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetail({...productDetail,[e.target.name]:e.target.value})
  }

  const addProduct = async() => {
    console.log(productDetail)
    let responseData;
    let product = productDetail;
    let formData = new FormData()
    formData.append('product', image)
    
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept:'application/json',
      },
      body:formData,
    }).then((res) => res.json()).then((data) => { responseData = data })
    
    if (responseData.success) {
      product.image = responseData.image_url
      console.log(product)
      await fetch('http://localhost:4000/addproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{data.success?alert("Product added"): alert("Failed to add Product")})
    }
  }
  return (
    <div className="flex bg-slate-50 h-screen">
      <Sidebar/>
          <div className="box-border w-[100%] max-w-3xl gap-5 pt-7 pb-7 pr-12 pl-12 mt-5 mb-5 ml-8 mr-8 border-r-6 border bg-white object-contain">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold text-slate-500">Product title</p>
              <input value={productDetail.name} onChange={changeHandler} type="text" placeholder="Type here" name="name" className="focus:outline-none text-slate-200 border p-2"/>
            </div>
            <div className="flex md:flex-row flex-col pt-5 justify-between">
              <div className= "w-[100%] gap-2">
                <p className="text-lg font-semibold text-slate-500">Price</p>
                <input value={productDetail.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" className="focus:outline-none text-black border p-2 w-64"/>
              </div>
              <div className="w-[100%] md:ml-40 gap-2 max-md:mt-3">
                <p className="text-lg font-semibold text-slate-500">Offer Price</p>
                <input value={productDetail.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" className="focus:outline-none text-black border p-2 w-64"/>
              </div>
            </div>
            <div className="w-[100%] pt-5">
              <p className="text-lg font-semibold text-slate-500">Product Category</p>
              <select value={productDetail.category} onChange={changeHandler} name="category" className="p-1 border border-r-2 mt-3 focus:outline-none">
                <option value="women">women</option>
                <option value="men">men</option>
                <option value="kid">kid</option>
              </select>
            </div>
            <div className="flex md:flex-col gap-3 max-md:items-center">
                <div className="mt-7 mb-8">
                  <label htmlFor="file-input">
                    <Image alt="img" src={image?URL.createObjectURL(image):upload} className="object-contain " width={100} height={100}/>
                  </label>
                  <input onChange={imagehandler} type="file" name="image" id="file-input" hidden/>
                </div>
                <button onClick={()=>{addProduct()}} className="sm:flex sm:items-center sm:justify-center border p-2 rounded-3xl bg-blue-300 text-white md:w-32 sm:w-36 sm:h-8">Add Product</button>
            </div>
          </div>
    </div>
    
  )
}

export default AddProduct;
