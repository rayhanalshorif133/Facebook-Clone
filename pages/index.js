import React from 'react'
import LoginPage  from '@/components/auth/login/Index';
import { getSession, useSession } from 'next-auth/react'
import Dashboard from '@/components/home/Dashboard';

export default function index({session}) {
  if (session) {
    return (<Dashboard session={session}/>)
  }else{
    return (<LoginPage />)
  }
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    }// In seconds after a successful request to validate the request
  }
}


