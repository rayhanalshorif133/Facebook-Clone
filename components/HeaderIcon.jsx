import React from 'react'

export default function HeaderIcon({ Icon, active = false }) {



    const headerIconMain = `flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500  hover:text-blue-500 ${active? "text-blue-500" : "text-gray-500"}`;

    return (
        <div className={headerIconMain}>
            <Icon className="h-6 w-6 text-center mx-auto" />
        </div>
    )
}
