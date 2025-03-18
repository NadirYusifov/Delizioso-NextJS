'use client'

import React, { useState } from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import LoginImage from "../../public/loginauth.png"
import GoogleImage from "../../public/googlelogo.svg"

export default function LoginSection() {
  const [showpsw, showpswdSet] = useState()


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      toggle: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section className="h-screen">
      <div className=" w-full h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        <div className="container">
          <div>
            <h3 className="text-[50px] font-bold leading-[100%]">Login</h3>
            <p className="text-[20px] text-irish-coffee pt-3 pb-10 leading-[200%] font-normal">Don't have an account? <Link href="/"><span className="text-sky-500">Sign up</span></Link></p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col">
              <input
                className="bg-infusion/15 p-4 border-none outline-none rounded-lg mb-4 placeholder:text-grullo"
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                onChange={formik.handleChange}
              />
              <input
                className="bg-infusion/15 p-4 border-none outline-none rounded-lg mt-3 placeholder:text-grullo"
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                onChange={formik.handleChange}
              />
              <div className="text-[16px] flex items-center justify-between text-irish-coffee py-10">
                <label>
                  <input
                    className="accent-dark-orange scale-125"
                    name="toggle"
                    type="checkbox"
                    value="Rememberme"
                    onChange={formik.handleChange}
                  />
                  <span className="ml-2 text-irish-coffee pl-2">Remember me</span>
                </label>
                <Link href="/">Forget Password?</Link>
              </div>
              <div className="flex flex-col">
                <Button className="!text-[16px] !bg-dark-orange !text-white !p-4 !rounded-lg !leading-[100%] !font-medium !capitalize" type="submit">Log in</Button>
                <Button className="!border-solid !text-[16px] !border-2 !border-irish-coffee !text-medium-roast !rounded-lg !p-4 !mt-4 !leading-[100%] !capitalize"><Image className="mr-2" src={GoogleImage} width={25} height={25} alt="google-logo" />Log in with google</Button>
              </div>
            </div>
          </form>
          <div className="text-center text-pale-silver pt-14">
            <p>Copyright © 2022 Delizioso</p>
          </div>
        </div>
        <div className="w-full h-screen overflow-hidden hidden lg:block">
          <Image className="w-full" src={LoginImage} width={200} height={200} alt="login-image" />
        </div>
      </div>
    </section>
  );
};