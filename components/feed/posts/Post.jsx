import React from 'react'
import Header from './Header';
import { useSession } from 'next-auth/react';


export default function Post() {
    const { data: session } = useSession();

    const { image, name } = session?.user;
    return (
        <div className='bg-[#242526] h-auto w-full rounded-xl mt-2'>
            <Header image={image} name={name} />
            <div className='mx-2 justify-start pb-2'>
                <p className='text-gray-300 text-base ml-2 my-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                    optio, eaque rerum! Provident similique accusantium nemo autem
                    ... <span className="text-base font-bold hover:underline cursor-pointer">See more</span>
                </p>
                <img className='h-30 w-full rounded-sm' src='https://links.papareact.com/4zn' alt='' />
            </div>
        </div>
    )
}
