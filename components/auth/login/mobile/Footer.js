import React from 'react'

export default function Footer() {
    return (
        <div className='w-full mx-auto text-center justify-center'>
            <div className='flex justify-between mx-auto items-center w-11/12 mt-16'>
                <div className='text-sm text-gray-600 font-medium'>
                    <p>English (UK)</p>
                    <p>অসমীয়া</p>
                    <p>नेपाली</p>
                    <p>Português (Brasil)</p>
                </div>
                <div className='text-sm text-gray-600 font-medium'>
                    <p>বাংলা</p>
                    <p>हिन्दी</p>
                    <p>Español</p>
                </div>
            </div>
            <div className='flex flex-col justify-center mx-auto items-center w-11/12 mt-4'>
                <h2 className='text-xs text-gray-400'>About · Help · More</h2>
                <h2 className='text-sm mt-3 font-bold text-gray-400'>Meta © 2023</h2>
            </div>
        </div>
    )
}
