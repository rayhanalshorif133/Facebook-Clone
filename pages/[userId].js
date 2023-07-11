import Profile from '@/components/profile/ProfileIndex';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import React, { useEffect } from 'react'
import Header from '@/components/header/Index'
import axios from 'axios';

export default function userProfile({userId,session}) {

    useEffect(() => {
        axios.post('/api/user/modify',session);
    }, []);

    return (
        <div className='h-screen bg-[#18191A] overflow-x-hidden scrollbar-hide'>
            <Head>
                <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
                <title>Facebook</title>
            </Head>
            <Header />
            <main className='xl:flex bg-[#18191A]'>
                Hey
            </main>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { params } = context;
    const session = await getSession(context);
    const userId = params.userId;
    console.log(userId);
    return {
        props: {
            userId: userId,
            session:session
        }
    }
}

