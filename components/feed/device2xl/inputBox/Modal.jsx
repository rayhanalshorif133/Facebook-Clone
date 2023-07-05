import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { useSession } from 'next-auth/react';
import { BiSolidLockAlt, BiSolidDownArrow,BiSmile } from 'react-icons/bi';

export default function Modal({ show, handleModal }) {

    const { data: session } = useSession();

    return (
        <>
            {
                show === true && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#0E0E0E] bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-[#242526] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                {/* Header:start */}
                                <div className="my-2 py-3 px-2 flex border-b-1 border-gray-700">
                                    <div className='items-center text-center mx-auto'>
                                        <h2 className="text-xl font-semibold text-white">Create Post</h2>
                                    </div>
                                    <div className="h-10 w-10 flex items-center cursor-pointer bg-[#414141] hover:bg-[#4e4f50] rounded-full text-gray-500" onClick={handleModal}>
                                        <RxCross2 className="h-6 w-6 mx-auto items-center text-gray-300" />
                                    </div>
                                </div>
                                {/* Header:end */}
                                {/* Body:start */}
                                <div className="pl-4 pr-1">
                                    <div className="flex items-start py-3">
                                        <div className="">
                                            <img className='h-10 w-10 rounded-full' src={session?.user?.image} />
                                        </div>
                                        <div className="ml-3 text-white">
                                            <div className=''>
                                                <h2 className='text-base'>{session?.user?.name}</h2>
                                            </div>
                                            <div className='flex h-6 w-auto bg-[#3A3B3C] rounded-md p-1 px-3 cursor-pointer justify-center align-middle'>
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
                                        <div>
                                            <BiSmile className='h-7 w-7 mx-2 mt-1 text-sm text-gray-400' />
                                        </div>
                                    </div>
                                    {/* image input */}
                                </div>
                                {/* Body:end */}
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}
