import React from 'react'

export default function Item(props) {


    const { Icon, title, isRight = false } = props;

    return (
        <div className='flex justify-between h-8 3xl:h-10 4xl:h-12 w-full hover:bg-[#3A3B3C] rounded-xl cursor-pointer my-2 py-5'>
            <div className='flex items-center justify-center px-3'>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center m-auto h-6 3xl:h-7 4xl:h-8 w-6 3xl:w-7 4xl:w-8 rounded-full bg-[#4E4F50]'>
                        <Icon className='h-3 3xl:h-4 4xl:h-5 w-3 3xl:w-4 4xl:w-5 text-white m-auto'/>
                    </div>
                </div>
                <div className='flex items-center justify-center ml-3'>
                    <h2 className='text-base font-semibold text-white'>{title}</h2>
                </div>
            </div>
            <div className='flex items-center justify-center px-3'>
                sdcs
            </div>
        </div>
    )
}
