import React from 'react'

export default function SmHeaderIcons({ Icon }) {
    return (
        <div>
            <div className="h-12 w-12 mt-2 mx-0 sm:mx-1 md:mx-3 lg:mx-6 p-3 flex justify-between items-center cursor-pointer text-white">
                <Icon className="h-12 w-12 text-white" />
            </div>
        </div>
    )
}
