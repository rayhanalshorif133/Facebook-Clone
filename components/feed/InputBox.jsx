import Image from 'next/image'
import React from 'react'
import { useSession } from "next-auth/react"
import { FaVideo,FaCamera,FaSmile } from "react-icons/fa";


export default function InputBox() {

    const { data: session, status } = useSession();


    const sendPost = (e) => {
        e.preventDefault();
    }

    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 items-center p-4'>
                <Image src={session.user.image}
                    height={40} width={40} layout="fixed" className="rounded-full" />
                <form className='flex flex-1'>
                    <input type="text" placeholder={`What's on your mind, ${session.user.name}?`} className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" />
                    <button hidden onClick={sendPost} type='submit'>Submit</button>
                </form>
            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <FaVideo className='text-red-500 h-7 cursor-pointer' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div className='inputIcon'>
                    <FaCamera className='text-green-500 h-7 cursor-pointer' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                </div>
                <div className='inputIcon'>
                    <FaSmile className='text-yellow-500 h-7 cursor-pointer' />
                    <p className='text-xs sm:text-sm xl:text-base'>
                        Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
    )
}
