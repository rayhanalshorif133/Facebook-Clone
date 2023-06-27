import Image from 'next/image'
import React from 'react'
import SeeMoreBtn from './SeeMoreBtn'


export default function SidebarRow({ src, title,profileImage = false, icon = false }) {
  return (
    <div className='flex items-center space-x-2 pl-2 w-full py-2 hover:bg-[#303031] rounded-xl cursor-pointer'>
      {src && (
        <Image src={src} alt={title} className={`${profileImage? "rounded-full w-10 h-10" : "w-8 h-8"} cursor-pointer mr-2 p-[2px]  hover:animate-pulse`}
          width={35} height={35} />
      )}
      {icon && <SeeMoreBtn/>}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}