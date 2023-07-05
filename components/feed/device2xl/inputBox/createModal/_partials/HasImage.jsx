import React from 'react'

export default function HasImage({ image }) {
    return (
        <div className='cursor-pointer p-4 justify-center items-center flex mx-auto rounded-xl mt-2'>
            <img src={image} alt="upload image" className='h-60 w-[97%] ' />
        </div>
    )
}
