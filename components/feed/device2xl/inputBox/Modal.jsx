import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function Modal({ show, handleModal }) {
    return (
        <>
            {
                show === true && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#0E0E0E] bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="relative transform overflow-hidden rounded-lg bg-[#242526] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="my-2 py-3 px-2 flex">
                                    <div className='items-center text-center mx-auto'>
                                        <h2 className="text-xl font-semibold text-white">Create Post</h2>
                                    </div>
                                    <div className="h-8 w-8 flex items-center cursor-pointer hover:bg-gray-hover md:hover:bg-gray-hover rounded-full text-gray-500" onClick={handleModal}>
                                        <RxCross2 className="h-6 w-6 mx-auto items-center text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


        </>
    )
}
