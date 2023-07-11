import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function Header({handleModal}) {
    return (
    <div className="my-2 py-2 px-2 flex border-b-1 border-gray-700">
        <div className='items-center text-center mx-auto'>
            <h2 className="text-xl font-bold text-white">Create Post</h2>
        </div>
        <div className="h-10 w-10 flex items-center cursor-pointer bg-[#414141] hover:bg-[#4e4f50] rounded-full text-gray-500" onClick={handleModal}>
            <RxCross2 className="h-6 w-6 mx-auto items-center text-gray-300" />
        </div>
    </div>
);
}