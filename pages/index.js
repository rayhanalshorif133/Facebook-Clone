import HeaderNew from '@/components/HeaderNew'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/feed/Index'
import Widgets from '@/components/widgets/Index'
import userController from '@/controllers/UserController'
import { getSession, useSession } from 'next-auth/react'
import Head from 'next/head'


export default function Home() {

  const { data: session } = useSession();

  if (!session) return <Login />;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <link rel="icon" href="/assets/icons/facebook_logo_icon.ico" sizes="any" />
        <title>Facebook</title>
      </Head>
      <HeaderNew />
      {/* <Header /> */}
      <main className='flex bg-[#18191A]'>
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  userController.userCreateOrUpdate(session);

  return {
    props: {
      session,
    }
  }
}
