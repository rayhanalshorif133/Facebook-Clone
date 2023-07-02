import userController from "@/controllers/UserController";
import { useSession } from 'next-auth/react';
import Image from "next/image";
import { useState } from "react";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaBars, FaBell, FaFacebookMessenger, FaGamepad, FaHome, FaSearch, FaStore, FaTv, FaUserFriends } from "react-icons/fa";
import { FiArrowLeft, FiHome, FiUsers } from "react-icons/fi";
import HeaderMiddleIcons from "./HeaderMiddleIcons";
import HeaderRightIcons from "./HeaderRightIcons";
import SmHeaderIcons from "./_partials/SmHeaderIcons";


export default function Index() {

  const [isFocusSearch, setIsFocusSearch] = useState(true);
  const { data: session } = useSession();

  const { image } = session?.user;



  const handleSearchOption = () => {
    setIsFocusSearch(false);
  }
  const handleSearchOptionReset = () => {
    setIsFocusSearch(true);
  }

  return (
    <div className="">
      {/* For Small Device */}
      <div className="bg-[#242526] h-auto xl:hidden">
        <div className="flex justify-between px-3">
          <div>
            <h2 className="text-white text-[2rem] font-bold">facebook</h2>
          </div>
          <div className="flex">
            <FaSearch className="w-10 h-10 text-gray-300  mt-2 mr-2 p-2 bg-[#3A3B3C] rounded-full" />
            <FaBars className="w-10 h-10 text-gray-300  mt-2 mr-2 p-2 bg-[#3A3B3C] rounded-full" />
          </div>
        </div>
        <div className="flex justify-between px-3 divide-y divide-blue-200">
          <div className="flex mx-auto">
            {/* Just  */}
            <SmHeaderIcons Icon={FiHome} active={true} />
            <SmHeaderIcons Icon={FaUserFriends} />
            <SmHeaderIcons Icon={FaFacebookMessenger} />
            <SmHeaderIcons Icon={FaTv} />
            <SmHeaderIcons Icon={FaBell} />
            <SmHeaderIcons Icon={FaStore} />
          </div>
        </div>
      </div>

      {/* For Large Device */}
      <div className="flex bg-[#242526] h-14 shadow-sm border-b border-gray-700 sm:hidden xl:inline-flex w-full">
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
            <input onClick={handleSearchOption} placeholder="Search Facebook" className="caret-white  hidden md:inline-flex outline-none bg-[#3A3B3C] w-44" />

          </div>
        </div>
        <div className='flex justify-center sm:mx-[3rem] xl:ml-[6rem] 2xl:mx-auto xl:mr-[26.8rem]'>
          <div className='flex space-x-6 xl:space-x-1 md:space-x-2'>
            <HeaderMiddleIcons Icon={FaHome} active={true} />
            <HeaderMiddleIcons Icon={FiUsers} />
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
    </div>
  )
}
