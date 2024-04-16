"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Image from "next/image";
import cross from "../../assets/cross_icon.png";

const listproduct = () => {
  const [allProduct, setAllProduct] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproduct")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    //taki list update hoje
    await fetchInfo();
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center w-[100%] pl-4 m-8 border-r-6 pr-2 bg-slate-50">
        <h1 className="text-5xl pt-3 pb-3">All products list</h1>
        <div className="grid grid-cols-6 gap-5 w-[100%] pt-4">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div>
          <hr />
          {allProduct.map((product, idx) => {
            return (
              <div key={idx} className="grid grid-cols-6 gap-7 w-[100%] pt-4 items-center m-auto">
                <Image alt="img" src={product.image} width={100} height={100} className="xl:ml-0" />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <Image
                  alt="img"
                  onClick={() => {
                    remove_product(product.id);
                  }}
                  src={cross}
                  width={10}
                  height={1}
                  className="cursor-pointer"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default listproduct;
