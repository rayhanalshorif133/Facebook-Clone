import React from 'react'
import Header from './Header';
import { useSession } from 'next-auth/react';
import Body from './Body';
import Footer from './Footer';


export default function Post(props) {

    const {number} = props;

    const { data: session } = useSession();

    const { image, name } = session?.user;
    return (
        <div className='bg-[#242526] h-auto w-full rounded-xl mt-2'>
            <Header image={image} name={name} />
            <Body number={number}/> 
            <Footer/>
        </div>
    )
}
