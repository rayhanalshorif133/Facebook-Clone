import React from 'react'
import LoginPage  from '@/components/auth/login/Index';
import { useSession } from 'next-auth/react'
import Dashboard from '@/components/home/Dashboard';

export default function index() {
  const { data: session } = useSession();
  if (session) {
    return (<Dashboard />)
  }else{
    return (<LoginPage />)
  }
}


