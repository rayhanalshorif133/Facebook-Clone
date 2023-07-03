import React from 'react'

export default function ItemsInRow(props) {

    const { src, Icon, title, is1st } = props;

    return (
        <div className={`flex flex-col space-y-2 cursor-pointer ${is1st == true && "mt-2"}`}>
            <div className='flex items-center justify-between hover:bg-[#303031]  rounded-xl p-1'>
                {
                    src && <div className='flex justify-around items-center'>
                        <img className='w-8 h-8 m-2 rounded-full' src={src} alt='' />
                        <h3 className='font-semibold text-sm text-white'>{title}</h3>
                    </div>
                }
                {
                    Icon && <div className='flex justify-around items-center'>
                        <Icon className='w-5 h-5 m-2 ml-5 rounded-full text-gray-400' />
                        <h3 className='font-semibold text-sm text-gray-400'>{title}</h3>
                    </div>
                }
            </div>
        </div>
    )
}
