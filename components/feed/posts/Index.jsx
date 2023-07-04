import React from 'react'
import Post from './Post';

export default function Index() {

    const countOfPost = 20;

    return (
        <div className=''>
            {
                 Array(countOfPost).fill().map((_, i) => (
                    <Post key={i} number={i +1} />
                ))
            }
        </div>
    )
}
