import React from 'react'
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { BiWorld } from 'react-icons/bi';
import { BsThreeDots } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

export default function Header({image,name,cancelPost}) {

    return (
        <div className='flex justify-between m-2 mb-4'>
            <div className='flex justify-center items-center mt-2'>
                <Image src={image} alt={name} height={40} width={40} className='ml-2 h-10 w-10 rounded-full cursor-pointer' />
                <div className='ml-2'>
                    <h2 className='text-base font-bold'>{name}</h2>
                    <div className="flex">
                        <div>
                            <h3 className='text-[12px] text-gray-300 font-semibold'>
                                About an one hour ago .
                            </h3>
                        </div>
                        <div className="items-center m-auto ml-[2px] cursor-pointer">
                            <BiWorld className='text-[12px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className={`h-8 w-8 flex items-center cursor-pointer hover:bg-gray-hover md:hover:bg-gray-hover rounded-full text-gray-500`}>
                    <BsThreeDots className="h-6 w-6 mx-auto items-center text-gray-300" />
                </div>
                <div onClick={cancelPost} className={`h-8 w-8 flex items-center cursor-pointer hover:bg-gray-hover md:hover:bg-gray-hover rounded-full text-gray-500`}>
                    <RxCross2 className="h-6 w-6 mx-auto items-center text-gray-300" />
                </div>
            </div>
        </div>
    )
}
