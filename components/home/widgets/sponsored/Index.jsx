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
            <h2 className='font-bold text-lg text-gray-400'>Sponsored</h2>
            <div className='flex flex-col space-y-2 mt-5 cursor-pointer'>
                <Suspense fallback={<Loading isBg={false} />}>
                    <div className='flex items-center justify-between hover:bg-[#303031] rounded-xl p-2'>
                        <img className='w-28 h-28 m-2 rounded-sm' src='https://picsum.photos/200' alt='' />
                        <div className='flex flex-col space-y-1 justify-start items-start m-auto'>
                            <h2 className='font-bold text-md text-white'>NextJS</h2>
                            <p className='text-xs text-gray-400'>NextJS is the React Framework for Production</p>
                        </div>
                    </div>
                </Suspense>
            </div>
        </div>
    )
}
