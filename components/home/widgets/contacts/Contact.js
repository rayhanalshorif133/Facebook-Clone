import Image from 'next/image'
import React from 'react'

export default function Contact({image,name}) {
  return (
    <div className='flex justify-start items-center h-12 rounded-xl hover:bg-gray-hover p-3 cursor-pointer'>
        <Image src={image} alt='birthday_gift' height={32} width={32} className='h-8 w-8 justify-center items-center rounded-full' />
        <h2 className='text-white p-1 ml-2'>
            <strong className='font-semibold text-md'>{name}</strong>
        </h2>
    </div>
  )
}