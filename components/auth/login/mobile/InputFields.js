import React from 'react'

export default function InputFields(props) {

    const { placeholder } = props;

    return (
        <div>
            <input type="text" placeholder={placeholder} className='w-full h-11 py-0 border border-gray-300 shadow-sm bg-gray-100 shadow-gray-100 rounded-md px-3 mb-2 focus:outline-none focus:ring-1 focus:ring-[#303030] focus:border-transparent' />
        </div>
    )
}
