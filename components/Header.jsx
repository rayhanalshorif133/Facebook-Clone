import Image from 'next/image'
import React from 'react'
import HeaderIcon from './HeaderIcon';
import { FaHome, FaFontAwesomeFlag, FaUsers } from "react-icons/fa";
import { IoPlayOutline } from "react-icons/io5";
import { BiCart } from "react-icons/bi";


export default function Header() {

    const logoUrl = 'https://links.papareact.com/5me';


    return (
        <div>
            {/* Left Side */}
            <div className='flex items-center'>
                <Image src={logoUrl} width={40} height={40} layout="fixed" alt='logo' />
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className='flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/* Middle Section */}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2 '>
                    <HeaderIcon Icon={FaHome} />
                    <HeaderIcon Icon={FaFontAwesomeFlag} />
                    <HeaderIcon Icon={IoPlayOutline} />
                    <HeaderIcon Icon={BiCart} />
                    <HeaderIcon Icon={FaUsers} />
                </div>
            </div>
            <div>
                Right
            </div>
        </div>
    )
}
