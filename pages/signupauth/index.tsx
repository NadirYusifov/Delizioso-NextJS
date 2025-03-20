'use client'

import { useState } from "react"
import { Button } from "@mui/material"
import { useFormik } from "formik"
import Link from "next/link"
import LoginImage from "../../public/login1.png"
import GoogleImage from "../../public/googlelogo.svg"
import Image from "next/image"
import { IoEye, IoEyeOff } from "react-icons/io5"

export default function SignUpSection() {
  const [showpsw, setShowPsw] = useState(false)

  const formik = useFormik({
    initialValues: {
      fullanme: "",
      email: "",
      password: "",
      toggle: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section>
      <div className="w-full h-screen grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center">
        <div className="container">
          <div>
            <h3 className="text-[50px] font-bold leading-[100%]">Sign Up</h3>
            <p className="text-[20px] text-irish-coffee pt-3 pb-10 leading-[200%] font-normal">Don't have an account? <Link href="/login"><span className="text-sky-500">Log in</span></Link></p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col relative space-y-4">
              <input
                className="bg-infusion/15 p-4 border-none outline-none rounded-lg placeholder:text-grullo"
                id="fullanme"
                name="fullanme"
                placeholder="Full Name"
                onChange={formik.handleChange}
                required
              />
              <input
                className="bg-infusion/15 p-4 border-none outline-none rounded-lg placeholder:text-grullo"
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                onChange={formik.handleChange}
                required
              />
              <div className="relative">
                <input
                  className="w-full bg-infusion/15 p-4 border-none outline-none rounded-lg placeholder:text-grullo"
                  id="password"
                  name="password"
                  type={showpsw ? "text": "password"}
                  placeholder="Password"
                  onChange={formik.handleChange}
                  required
                />
                <button type="button" className="text-[23px] absolute top-0 bottom-0 right-3 text-irish-coffee" onClick={() => setShowPsw(!showpsw)}>
                  {showpsw ? <span><IoEye /></span> : <span><IoEyeOff /></span>}
                </button>
              </div>
              <div className="text-[16px] flex items-center justify-between text-irish-coffee py-8">
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
                <Button className="text-[16px] bg-dark-orange text-white p-4 rounded-lg leading-[100%] font-medium normal-case">Sign up</Button>
                <Button className="border-solid text-[16px] border-2 border-irish-coffee text-medium-roast rounded-lg p-4 mt-4 leading-[100%] normal-case"><Image className="mr-2" src={GoogleImage} width={25} height={25} alt="google-logo" />Sign up with google</Button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full h-screen absolute right-0 overflow-hidden hidden lg:block -z-10">
          <Image className="w-full" src={LoginImage} width={900} height={900} quality={100} alt="signup-image" />
        </div>
      </div>
    </section>
  )
}
