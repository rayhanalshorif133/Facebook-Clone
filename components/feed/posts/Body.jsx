import React from 'react'
import ShowLikesAndComments from './_partials/ShowLikesAndComments'

export default function Body({ post }) {

    const { image, description } = post;

    return (
        <div className='mx-2 justify-start pb-2'>
            <p className='text-gray-300 text-base ml-2 my-2'>
                {description.length > 450 ? <>
                    {description.slice(0,450)} ... <span className="text-base font-bold hover:underline cursor-pointer">See more</span>
                </> : description}

            </p>
            {
                image && <img className='h-30 w-full rounded-sm' src={image} alt='image' />
            }
            <ShowLikesAndComments number={1} />
        </div>
    )
}

