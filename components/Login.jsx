import Image from 'next/image'
import React from 'react'
import { signIn } from "next-auth/react"


export default function Login() {
  return (
    <div className='grid place-items-center'>
        <Image src="https://links.papareact.com/t4i" width={400} height={400} objectFit="contain" />
        <h1 className='mt-10 p-3 bg-blue-500 rounded-full text-white text-center cursor-pointer' onClick={signIn}>
            Login With Facebook
        </h1>
    </div>
  )
}
