import Image from "next/image";

export default function HeaderNew() {
 return (
  <div className="flex justify-between bg-[#242526] h-14 shadow-sm border-b border-gray-700">
   <div className="text-white">
    <Image className="m-2 ml-4" src="/assets/images/logos/facebook_logo.png" width={40} height={40} />
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
