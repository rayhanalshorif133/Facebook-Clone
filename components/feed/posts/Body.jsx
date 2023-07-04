import React from 'react'
import ShowLikesAndComments from './_partials/ShowLikesAndComments'

export default function Body(props) {

    const {number} = props;

    const url = `https://picsum.photos/1080/720?random=${number}`;

    return (
        <div className='mx-2 justify-start pb-2'>
            <p className='text-gray-300 text-base ml-2 my-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem
                ... <span className="text-base font-bold hover:underline cursor-pointer">See more</span>
            </p>
            <img className='h-30 w-full rounded-sm' src={url} alt='image' />
            <ShowLikesAndComments number={number}/>
        </div>
    )
}

