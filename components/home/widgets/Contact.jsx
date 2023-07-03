import Image from 'next/image'
import React from 'react'

export default function Contact({name,src}) {
  return (
    <div className='flex items-center space-x-3 mb-2 relative hover:bg-[#303031] text-white cursor-pointer p-2 rounded-xl'>
        <img src={src} 
        width={50}
        height={50}
        layout='fixed'
        className='rounded-full'/>
        <p>{name}</p>
        <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce'></div>
    </div>
  )
}
