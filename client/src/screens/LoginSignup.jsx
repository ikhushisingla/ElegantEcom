"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const LoginSignup = () => {
  const router = useRouter();

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      router.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  const signup = async () => {
    console.log("signup function executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    console.log(responseData);
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      router.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center w-full bg-gradient-to-b from-indigo-200 via-purple-200 to-pink-50 ">
      <div className=" m-auto border border-r-1 border-black px-10 py-16 bg-white">
        <h1 className="mb-12 font-semibold text-3xl">{state}</h1>
        <div className="flex flex-col gap-6">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Name"
              className="bg-transparent focus:outline-none border border-r-1 p-2"
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email"
            className="bg-transparent focus:outline-none border border-r-1 p-2"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
            className="bg-transparent focus:outline-none border border-r-1 p-2"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
          className="m-auto mt-5 mb-2 border border-r-1 rounded-full p-1 w-32 hover:bg-slate-100"
        >
          Continue
        </button>
        {state === "Login" ? (
          <p className="mt-3">
            Create an acount?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-green-500 cursor-pointer"
            >
              Signup here
            </span>
          </p>
        ) : (
          <p>
            Already have an acount?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-green-500 cursor-pointer "
            >
              Login here
            </span>
          </p>
        )}

        <div className="flex gap-2 mt-2">
          <input type="checkbox" name="" id="" className="bg-transparent focus:outline-none" />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
