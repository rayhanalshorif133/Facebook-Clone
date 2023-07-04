import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'
import { FaVideo,FaPhotoVideo } from 'react-icons/fa';
import {CgSmileMouthOpen} from 'react-icons/cg';
import {IoMdPhotos} from 'react-icons/io';

export default function InputBox() {

  const { data: session } = useSession();

  const { image, name } = session?.user;

  return (
    <div className='bg-[#242526] h-auto w-full'>
      <div className='flex justify-start m-2 pb-2 border-b-1 border-gray-600'>
        <Image src={image} alt={name} height={40} width={40} className='ml-2 h-10 w-10 rounded-full cursor-pointer' />
        <input type='text' className='bg-[#3a3b3c] text-white rounded-full h-10 w-11/12 px-5 ml-2 mr-2 outline-none focus:outline-none ' placeholder={`What's on your mind, ${name}?`} />
      </div>
      <div className='flex justify-around p-2'>
        <div className='inputBox'>
          <FaVideo className='inputBoxIcon text-red-500' />
          <h2 className='text-base'>Live Video</h2>
        </div>
        <div className='inputBox'>
          <IoMdPhotos className='inputBoxIcon text-green-500 '/>
          <h2 className='text-base'>Photo/Video</h2>
        </div>
        <div className='inputBox'>
          <CgSmileMouthOpen className='inputBoxIcon text-yellow-500' />
          <h2 className='text-base'>
            Feeling/Activity
          </h2>
        </div>
      </div>
    </div>
  )
}
