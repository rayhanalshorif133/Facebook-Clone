import React from 'react'

export default function SingleItem({title,image}) {
    return (
        <>
            <img className='w-10 h-10 cursor-pointer hover:scale-110 transition-all ease-in-out' src={image} alt={title} />
        </>
    )
}
