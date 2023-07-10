import { signOut } from 'next-auth/react'
import React from 'react'

export default function Dashboard() {
    return (
        <div>
            Dashboard
            <div className='flex justify-between mx-auto items-center w-11/12 mt-16'>
                <button onClick={() => signOut()} className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full'>
                    Sign Out
                </button>
            </div>
        </div>
    )
}
