import Image from 'next/image';
import SeeMoreBtn from './SeeMoreBtn';

export default function YourShortcutRow({ src, title, icon = false }) {
  return (
    <div className='flex items-center space-x-2 pl-2 w-full py-2 hover:bg-[#303031] rounded-xl cursor-pointer'>
      {src && (
        <Image src={src} alt={title} className='w-10 h-10 xl:w-8 xl:h-8 cursor-pointer mr-2 p-[2px]  hover:animate-pulse'
          width={35} height={35} />
      )}
      {icon && <SeeMoreBtn />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}
