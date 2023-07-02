import React from 'react'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';

export default function AddReelCard() {
    const { data: session } = useSession();

    const { name, image } = session?.user;

    return (
        <div className='p-1 flex flex-col ml-4 cursor-pointer'>
            <div className='overflow-visible'>
                <div className="h-[12rem] w-28 rounded-lg object-cover" style={{ backgroundImage: `linear-gradient(45deg,#FFA545,#ED41A5)` }}>
                    <div className="rounded-full text-white items-center flex">
                        <div>
                        </div>
                        <h2 className="text-white text-[1rem] font-bold justify-center mx-auto items-center mt-40">
                            Create Reel
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
