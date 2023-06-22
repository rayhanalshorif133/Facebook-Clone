import { data } from 'autoprefixer';
import Image from 'next/image';
import React from 'react'
import { FaComments,FaShare,FaThumbsUp } from "react-icons/fa";

export default function Post(props) {

    const { image, name, message, email, timestamp, postImage } = props;

    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <img className='rounded-full' height={40} width={40} src={image} alt="placeholder" />
                    <div>
                        <p className='font-medium'>{name}</p>
                        <p className='text-xs text-gray-400'>
                            22-Jun-2023
                        </p>
                    </div>
                </div>
                <p className='pt-4'>{message}</p>
            </div>
            {postImage && (
                <div className='relative h-56 md:h-96 bg-white'>
                    <Image src={postImage} fill alt="post image" />
                </div>
            )}

            {/* footer of post */}
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <FaThumbsUp className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <FaComments className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <FaShare className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div>
    )
}


