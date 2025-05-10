'use client'

import Loading from '@/app/loading'
import { AppProps } from 'next/app'
import React, { useEffect, useState } from 'react'
import "../app/globals.css";

export default function MyApp({Component, pageProps}:AppProps) {
const [loading, setLoading] = useState(true)

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 4000)
}, [])
    

  return (
    <>
    {loading ? <Loading/> :    
    <Component {...pageProps}/>
    }
    </>
  )
}
