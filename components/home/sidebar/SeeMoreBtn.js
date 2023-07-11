import React from 'react'
import { FaChevronDown } from "react-icons/fa";

export default function SeeMoreBtn() {
    return (
        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#444546]'>
            <FaChevronDown className='text-white text-sm' />
        </div>
    )
}