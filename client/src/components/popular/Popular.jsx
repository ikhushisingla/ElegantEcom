"use client";

import React, { useState , useEffect } from "react";
// import data_product from "../../assets/data";
import Item from "../item/Item";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopular(data));
  }, []);
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-semibold mt-3">Popular in Women</h1>
      <hr className="w-52" />
      <div className="mt-6 grid grid-cols-6">
        {popular.map((ele, idx) => {
          return (
            <Item
              key={idx}
              id={ele.id}
              name={ele.name}
              image={ele.image}
              new_price={ele.new_price}
              old_price={ele.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
