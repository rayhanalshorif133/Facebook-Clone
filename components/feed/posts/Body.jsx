import React from 'react'
import ShowLikesAndComments from './_partials/ShowLikesAndComments'
import ShowEmoji from './ShowEmoji';

export default function Body({ post,showEmoji }) {

    const { image, description } = post;

    return (
        <div className='mx-2 justify-start pb-2 relative'>
            <p className='text-gray-300 text-base ml-2 my-2'>
                {description.length > 450 ? <>
                    {description.slice(0, 450)} ... <span className="text-base font-bold hover:underline cursor-pointer">See more</span>
                </> : description}

            </p>
            {
                image && <img className='h-30 w-full rounded-sm' src={image} alt='image' />
            }
            {
                showEmoji === true && <ShowEmoji />
            }
            <ShowLikesAndComments number={1} />
        </div>
    )
}

