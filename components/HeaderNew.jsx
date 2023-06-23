import Image from "next/image";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";


export default function HeaderNew() {

 const [isFocusSearch, setIsFocusSearch] = useState(true);

 const handleSearchOption = () => {
  setIsFocusSearch(false);
 }
 const handleSearchOptionReset = () => {
  setIsFocusSearch(true);
 }

 return (
  <div className="flex justify-between bg-[#242526] h-14 shadow-sm border-b border-gray-700">
   <div className="text-white flex">
    {
     isFocusSearch ? <Image className="m-2 ml-4" src="/assets/images/logos/facebook_logo.png" width={40} height={40} alt="facebook_logo" /> : <div onClick={handleSearchOptionReset} className="w-10 h-10 m-2 mr-2 ml-4 p-2 cursor-pointer hover:bg-[#3A3B3C] rounded-full items-center text-center mx-auto">
      <FiArrowLeft className="w-5 h-5 mt-[2px] text-gray-300 text-center items-center mx-auto font-bold" />
     </div>
    }
    <div className="flex rounded-full bg-[#3A3B3C] items-center h-10 mt-2 px-5" alt="facebook logo">

     {
      isFocusSearch && <FaSearch className="w-5 h-5 text-gray-400 mr-2" />
     }
     <input onClick={handleSearchOption} className="hidden md:inline-flex bg-[#3A3B3C] outline-none rounded-full h-6 w-52 text-white placeholder-gray-400" type="text" placeholder="Search Facebook" />
    </div>
   </div>
   <div>
    Buttons
   </div>
   <div>
    right
   </div>
  </div>
 )
}
