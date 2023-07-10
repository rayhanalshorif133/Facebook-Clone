import React from 'react'
import Header from '@/components/header/Index'
import Head from 'next/head'

export default function Dashboard() {
    return (
        <div className='h-screen bg-[#18191A] overflow-x-hidden'>
            <Head>
                <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
                <title>Facebook</title>
            </Head>
            <Header />
        </div>
    )
}
