import React from 'react'

import {BsChevronRight} from 'react-icons/bs'

export default function Item(props) {


    const { Icon, title, isRight = false, action = () => {
        console.log(props.title)
    }} = props;

    return (
        <div className='flex justify-between h-8 3xl:h-10 4xl:h-12 w-full hover:bg-[#3A3B3C] rounded-xl cursor-pointer my-2 py-5'>
            <div onClick={action} className='flex items-center justify-center px-3'>
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center m-auto h-7 3xl:h-8 4xl:h-9 w-7 3xl:w-8 4xl:w-9 rounded-full bg-[#4E4F50]'>
                        <Icon className='h-4 3xl:h-5 4xl:h-5 w-4 3xl:w-5 4xl:w-6 text-white m-auto'/>
                    </div>
                </div>
                <div className='flex items-center justify-center ml-3'>
                    <h2 className='text-base font-semibold text-white'>{title}</h2>
                </div>
            </div>
            <div className='flex items-center justify-center px-3'>
                {isRight === true && <BsChevronRight className='h-3 3xl:h-4 4xl:h-5 w-3 3xl:w-4 4xl:w-5 text-white'/> }
            </div>
        </div>
    )
}
