import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'
import { FaPhotoVideo } from 'react-icons/fa'

export default function InputBox() {
    const { data: session } = useSession();

    const { image } = session?.user;
    return (
        <div className='bg-[#242526] h-auto xl:hidden w-full'>
            <div className="justify-between bg-[#242526] w-full h-auto xl:hidden border-t-2 border-black flex">
                <div className="">
                    <Image  src={image} alt='facebook_profile_image'
                        className="rounded-full cursor-pointer ml-2 w-12 h-12 md:w-14 sm:my-0 md:my-1 md:h-14 items-center justify-center text-center m-auto hover:animate-pulse"
                        width={40} height={40} />
                </div>
                <div className="w-8/12 md:w-9/12 my-2 items-center flex">
                    <span className="bg-[#323436] h-10 w-6 py-2 rounded-l-full"></span>
                    <input className="focus:outline-none caret-white-800	text-white py-2 bg-[#323436] rounded-r-full w-full" placeholder="What's on your mind?" />
                </div>
                <div className="text-white">
                    <FaPhotoVideo className="h-5 w-5 mt-3 ml-2 items-center text-center" />
                    <p className="mt-1 text-sm mr-3">Photo</p>
                </div>
            </div>
        </div>
    )
}
