import Header from '@/components/Header/Index'
import Login from '@/components/Login/index'
import Feed from '@/components/feed/Index'
import Widgets from '@/components/home/widgets/Index'
import userController from '@/controllers/UserController'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'
import Sidebar from '@/components/home/sidebar/Index'


export default function Home() {

  const { data: session } = useSession();

  if (!session) return <Login />;
  // userController.userCreateOrUpdate(session);
  return (
    <div className='h-screen  overflow-hidden bg-[#18191A]'>
      <Head>
        <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
        <title>Facebook</title>
      </Head>
      <Header />
      
      <main className='xl:flex bg-[#18191A]'>
        <Sidebar />
        <Feed />
        <span className='hidden xl:inline-flex'><Widgets /></span>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  if(session){
    userController.userCreateOrUpdate(session);
  }

  return {
    props: {
      session,
    }
  }
}
