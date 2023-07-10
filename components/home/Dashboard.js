import React from 'react'
import Header from '@/components/header/Index'
import Sidebar from '@/components/home/sidebar/Index'
import Widgets from '@/components/home/widgets/Index'
import Feed from '@/components/feed/Index'
import Head from 'next/head'

export default function Dashboard() {
    return (
        <div className='h-screen bg-[#18191A] overflow-x-hidden'>
            <Head>
                <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
                <title>Facebook</title>
            </Head>
            <Header />
            <main className='xl:flex bg-[#18191A]'>
                <span className='hidden 2xl:inline-flex'><Sidebar /></span>
                <Feed />
                <span className='hidden 2xl:inline-flex'><Widgets /></span>
            </main>
        </div>
    )
}
