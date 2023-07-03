import Loading from '@/components/Loading';
import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react'

export default function Index() {

    const [sponsored, setSponsored] = useState('');

    useEffect(() => {
        axios.get('/api/sponsored').then(res => {
            const data = res.data?.data;
            const length = data?.length - 1;
            // find random number
            const min = 0, max = length;
            const random = Math.floor(Math.random() * (max - min + 1)) + min;
            setSponsored(data[random]);
        });
    }, []);


    return (
        <div className='border-b-1 border-gray-500 pb-2'>
            <h2 className='font-semibold text-base text-gray-400'>Sponsored</h2>
            <Suspense fallback={<Loading isBg={false} />}>
                <a href={sponsored?.url} target='_blank' className='flex flex-col space-y-2 mt-2 cursor-pointer'>
                    <div className='flex items-center justify-between hover:bg-[#303031] rounded-xl p-1'>
                        <img className='w-28 h-28 m-2 rounded-sm' src={sponsored?.src} alt='' />
                        <div className='flex flex-col space-y-1 justify-start items-start m-auto'>
                            <h2 className='font-bold text-md text-white'>{sponsored?.title}</h2>
                            <p className='text-xs text-gray-400'>
                                {sponsored?.description}
                            </p>
                        </div>
                    </div>
                </a>
            </Suspense>
        </div>
    )
}
