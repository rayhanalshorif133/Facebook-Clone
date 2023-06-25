import Image from "next/image";
import { useState } from "react";
import { FaSearch, FaHome, FaUserFriends, FaFacebookMessenger, FaBell, FaTv, FaStore, FaGamepad } from "react-icons/fa";
import { FiArrowLeft, FiHome } from "react-icons/fi";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import HeaderMiddleIcons from "./HeaderMiddleIcons";
import {  useSession } from 'next-auth/react';
import HeaderRightIcons from "./HeaderRightIcons";
import userController from "@/controllers/UserController";


export default function Index() {

  const [isFocusSearch, setIsFocusSearch] = useState(true);
  const { data: session } = useSession();

  const { image } = session?.user;

  // const image = 'https://picsum.photos/300/300?random=1';


  const handleSearchOption = () => {
    setIsFocusSearch(false);
  }
  const handleSearchOptionReset = () => {
    setIsFocusSearch(true);
  }

  return (
    <div className="flex bg-[#242526] h-14 shadow-sm border-b border-gray-700">
      <div className="text-white flex">
        {
          isFocusSearch ? <Image className="m-2 ml-4" src="/assets/images/logos/facebook_logo.png" width={40} height={40} alt="facebook_logo" /> : <div onClick={handleSearchOptionReset} className="w-10 h-10 m-2 mr-2 ml-4 p-2 cursor-pointer hover:bg-[#3A3B3C] rounded-full items-center text-center mx-auto">
            <FiArrowLeft className="w-5 h-5 mt-[2px] text-gray-300 text-center items-center mx-auto font-bold" />
          </div>
        }
        <div className="flex rounded-full bg-[#3A3B3C] items-center h-10 mt-2 px-5" alt="facebook logo">

          {
            isFocusSearch && <FaSearch className="w-4 h-4 text-gray-300 mr-2 transition ease-in-out delay-150" />
          }
          <input onClick={handleSearchOption} className="hidden md:inline-flex bg-[#3A3B3C] outline-none rounded-full h-6 w-44 text-white placeholder-gray-400" type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className='flex justify-center ml-[18rem] mr-[26.8rem]'>
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderMiddleIcons Icon={FaHome} active={true}/>
          <HeaderMiddleIcons Icon={FaUserFriends} />
          <HeaderMiddleIcons Icon={FaTv} />
          <HeaderMiddleIcons Icon={FaStore} />
          <HeaderMiddleIcons Icon={FaGamepad} />
        </div>
      </div>
      <div className="flex space-x-2">
        <HeaderRightIcons Icon={BsFillGrid3X3GapFill} />
        <HeaderRightIcons Icon={FaFacebookMessenger} />
        <HeaderRightIcons Icon={FaBell} />
        <Image onClick={() => userController.handleLogout()} src={image} alt='facebook_profile_image' className="rounded-full cursor-pointer mr-5 w-10 h-10 items-center justify-center text-center m-auto hover:animate-pulse"
          width={40} height={40} />
      </div>
    </div>
  )
}
