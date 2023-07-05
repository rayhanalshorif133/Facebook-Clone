import React from 'react'
import { useSession } from 'next-auth/react';
import { RxCross2 } from "react-icons/rx";
import { BiSolidLockAlt, BiSolidDownArrow, BiSmile, BiImageAdd } from 'react-icons/bi';
import { LuImagePlus } from "react-icons/lu";
import { FaMobileScreen } from "react-icons/fa6";

export default function Body() {

    const { data: session } = useSession();

    const handleImageInput = () => {
        console.log("handleImageInput");
    }
 
    return (
        <div className="pl-4 pr-1">
                            <div className="flex items-start py-3">
                                <div className="">
                                    <img className='h-10 w-10 rounded-full' src={session?.user?.image} />
                                </div>
                                <div className="ml-3 text-white">
                                    <div className=''>
                                        <h2 className='text-base'>{session?.user?.name}</h2>
                                    </div>
                                    <div className='flex h-6 w-auto bg-[#3A3B3C] rounded-md p-1 px-2 cursor-pointer justify-center align-middle'>
                                        <BiSolidLockAlt className='h-4 w-4 text-[#E1E3E8]' />
                                        <span className='text-xs font-semibold text-[#E1E3E8] mx-1'>Only me</span>
                                        <BiSolidDownArrow className='h-[10px] w-[10px] text-[#E1E3E8] mt-[6px]' />
                                    </div>
                                </div>
                            </div>
                            {/* Input */}
                            <div className='flex pb-3'>
                                <div className='w-full'>
                                    <textarea className='text-[#E1E3E8] p-2 w-full resize-none bg-transparent focus:outline-none outline-none' placeholder="What's on your mind?"></textarea>
                                </div>
                                <div className='cursor-pointer'>
                                    <BiSmile className='h-7 w-7 mx-2 mt-1 text-sm text-gray-400' />
                                </div>
                            </div>
                            {/* image input */}
                            <div className='py-3 pr-2'>
                                <div className='h-auto w-full border-1 border-gray-500 rounded-xl'>
                                    <div className='h-56 w-[97%] bg-[#323436] hover:bg-[#47494A] cursor-pointer p-4 justify-center items-center flex mx-auto rounded-xl mt-2 relative'>
                                        <div className="absolute top-2 right-2 h-8 w-8 flex items-center cursor-pointer bg-[#414141] hover:bg-[#4e4f50] rounded-full text-gray-500" onClick={handleImageInput}>
                                            <RxCross2 className="h-6 w-6 mx-auto items-center text-gray-300" />
                                        </div>
                                        <div className="">
                                            <div className='h-10 w-10 bg-[#47494A] rounded-full items-center justify-center flex mx-auto'>
                                                <LuImagePlus className='h-6 w-6 items-center justify-center m-auto flex' />
                                            </div>
                                            <div className='items-center justify-center flex mx-auto'>
                                                <h2>Add Photos/Videos</h2>
                                            </div>
                                            <div className='items-center justify-center flex mx-auto'>
                                                <p className="text-sm text-[#9EA1A3]">or drag and drop</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='h-16 w-[97%] bg-[#323436] p-4 rounded-xl mt-2 ml-2 mb-2 flex justify-between'>
                                        <div className="flex">
                                            <div className="h-10 w-10 flex items-center cursor-pointer bg-[#414141] hover:bg-[#4e4f50] rounded-full text-gray-500">
                                                <FaMobileScreen className='h-6 w-6 items-center justify-center m-auto flex text-white' />
                                            </div>
                                            <div className="items-center justify-center m-auto">
                                                <h2 className="text-sm m-2 ml-3">Add photos from your mobile device.</h2>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="h-5 w-7 px-7 py-[1.1rem] cursor-pointer rounded-lg  bg-[#414141] flex items-center justify-center m-auto">
                                                <h2 className="text-sm font-semibold">Add</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        )
}