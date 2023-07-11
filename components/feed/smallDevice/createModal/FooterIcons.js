import React from 'react'

export default function FooterIcons({ Icon,isActive = false, color }) {
    return (
        <div className={`h-9 w-9 ${isActive? 'bg-black' : "bg-transparent hover:bg-gray-hover" } justify-center flex items-center rounded-full cursor-pointer ml-1`}>
            <Icon className={`h-6 w-6 ${color}`} />
        </div>
    )
}