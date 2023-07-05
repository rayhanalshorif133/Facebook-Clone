import React from 'react'
import Header from './Header';
import { useSession } from 'next-auth/react';
import Body from './Body';
import Footer from './Footer';


export default function Post({post}) {



    const { image, name } = post.author;


    return (
        <div className='bg-[#242526] h-auto w-full rounded-xl mt-2'>
            <Header image={image} name={name} />
            <Body post={post}/> 
            <Footer/>
        </div>
    )
}
