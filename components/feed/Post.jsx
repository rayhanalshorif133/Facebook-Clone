import { data } from 'autoprefixer';
import React from 'react'

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
        </div>
    )
}


