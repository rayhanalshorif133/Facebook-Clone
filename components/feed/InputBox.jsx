import Image from 'next/image'
import React from 'react'
import { useSession } from "next-auth/react"

export default function InputBox() {

    const { data:session, status } = useSession()

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 items-center p-4'>
            <Image src={session.user.image} 
            height={40} width={40} layout="fixed" className="rounded-full"/>
            <form className='flex flex-1'>
                <input type="text" placeholder={`What's on your mind, ${session.user.name}?`} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"/>
            </form>
        </div>
        <div></div>
    </div>
  )
}
