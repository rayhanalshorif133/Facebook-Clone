import Image from 'next/image';
import React from 'react'

export default function StoryCard(props) {

    const { name, src, profile } = props;

  return (
    <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
        <Image src={profile} alt="" className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10" 
        width={40} height={40} />
         <Image src={src} alt="" className="h-screen object-cover filter brightness-75 rounded-full lg:rounded-3xl" 
        fill="cover" layout="fill" />
        <p className="absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">{name}</p>
    </div>
  )
}
