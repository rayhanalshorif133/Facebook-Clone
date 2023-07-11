import React, { useState } from "react";
import Image from "next/image";
import { useSession } from 'next-auth/react';
import { ImSpinner11 } from 'react-icons/im';

export default function Header({handlePopDown}) {
    const { data: session } = useSession();

  const { image, name } = session?.user;
  return (
    <div className='p-5'>
          <div className='flex justify-between h-10 3xl:h-12 4xl:h-16 w-full hover:bg-[#3A3B3C] rounded-xl cursor-pointer'>
            <div className='flex items-center justify-center px-3'>
              <div className=''>
                <Image onClick={() => handlePopDown()} src={image} alt='facebook_profile_image' className="rounded-full cursor-pointer mr-5 h-8 w-8  3xl:h-9 3xl:w-9 4xl:h-10 4xl:w-10 items-center justify-center text-center m-auto hover:animate-pulse"
                  width={40} height={40} />
              </div>
              <div className='flex items-center justify-center'>
                <h2 className='text-base font-semibold text-white'>{name}</h2>
              </div>
            </div>
            <div className='flex items-center justify-center px-3'>
              <div className="h-6 w-6 3xl:h-7 4xl:h-8 3xl:w-7 4xl:w-8 hover:border-3 border-gray-900 rounded-full flex items-center justify-center group cursor-pointer">
                <ImSpinner11 className="h-4 w-4 3xl:h-5 4xl:h-6 3xl:w-5 4xl:w-6 text-gray-400 hover:text-gray-300 hover:animate-spin" />
              </div>
            </div>
          </div>
          <div className="h-[1px] w-11/12 bg-gray-600 flex mx-auto justify-center mt-1"></div>
          <div className='flex justify-between h-8 3xl:h-10 4xl:h-12 w-full hover:bg-[#3A3B3C] rounded-xl cursor-pointer mt-2'>
            <div className='flex items-center justify-center px-3'>
              <h2 className='text-base font-semibold text-[#4395FF]'>
                See all profiles
              </h2>
            </div>
            <div className='flex items-center justify-center px-3'>
              <div className="flex items-center justify-center bg-red-500 h-4 w-4 rounded-full">
                <h2 className='text-sm font-semibold text-white'>1</h2>
              </div>
            </div>
          </div>
        </div>
  )
}
