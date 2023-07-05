import React from 'react'
import FooterIcons from './FooterIcons'
import { IoMdPhotos } from 'react-icons/io';
import { FaUserTag } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { CgSmileMouthOpen } from 'react-icons/cg';
import { BsThreeDots } from "react-icons/bs";
import { HiGif } from "react-icons/hi2";

export default function Footer({ handleSubmit,createNewPost }) {
    return (
        <div className="pl-4 pr-3 py-3">
            <div className='h-auto w-full border-1 border-gray-500 rounded-xl'>
                <div className='flex justify-between items-center py-1 m-2'>
                    <div className=''>
                        <h2 className='font-semibold'>Add to your post</h2>
                    </div>
                    <div className='flex'>
                        <FooterIcons Icon={IoMdPhotos} isActive={true} color='text-green-500' />
                        <FooterIcons Icon={FaUserTag} color='text-blue-500' />
                        <FooterIcons Icon={CgSmileMouthOpen} color='text-yellow-500' />
                        <FooterIcons Icon={FaLocationDot} color='text-red-500' />
                        <FooterIcons Icon={HiGif} color='text-gray-400' />
                        <FooterIcons Icon={BsThreeDots} color='text-gray-400' />
                    </div>
                </div>

            </div>

            <form onSubmit={handleSubmit(createNewPost)}>
                <div className='mt-3 w-full'>
                    <button type='submit' className='bg-blue-500 text-white font-semibold rounded-md px-4 py-2 mt-3 w-full'>Post</button>
                </div>
            </form>
        </div>
    )
}