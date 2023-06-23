import userController from '@/controllers/UserController';
import { useSession } from "next-auth/react";
import Image from 'next/image';
import { BiCart } from "react-icons/bi";
import { FaBell, FaChevronDown, FaFontAwesomeFlag, FaHome, FaRocketchat, FaUsers } from "react-icons/fa";
import { FiPlayCircle } from "react-icons/fi";
import { HiViewGrid } from "react-icons/hi";
import HeaderIcon from './HeaderIcon';


export default function Header() {

    const { data: session } = useSession()
    const logoUrl = 'https://links.papareact.com/5me';


    return (
        <div className='flex sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md'>
            {/* Left Side */}
            <div className='flex items-center flex-grow'>
                <Image src={logoUrl} width={40} height={40} layout="fixed" alt='logo' />
                <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500' type="text" placeholder="Search Facebook" />
                </div>
            </div>
            {/* Middle Section */}
            <div className='flex justify-center flex-grow'>
                <div className='flex space-x-6 md:space-x-2 '>
                    <HeaderIcon active={true} Icon={FaHome} />
                    <HeaderIcon Icon={FaFontAwesomeFlag} />
                    <HeaderIcon Icon={FiPlayCircle} />
                    <HeaderIcon Icon={BiCart} />
                    <HeaderIcon Icon={FaUsers} />
                </div>
            </div>
            <div className='flex items-center sm:space-x-2 justify-end flex-grow'>
                {/* Profile Pic */}
                <Image
                    onClick={() => userController.handleLogout(session)}
                    className='rounded-full cursor-pointer'
                    src={session?.user?.image}
                    width={40}
                    height={40}
                    layout='fixed'
                    alt='profile pic'
                />

                <p className='whitespace-nowrap font-semibold pr-3'>{session?.user?.name}</p>
                <HiViewGrid className='icon' />
                <FaRocketchat className='icon' />
                <FaBell className='icon' />
                <FaChevronDown className='icon' />
            </div>
        </div>
    )
}
