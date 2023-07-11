import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'
import { FaPhotoVideo } from 'react-icons/fa'
import { inputContext } from '../Index';
import CreatePostModal from './createModal/Index';
import LoadingPostModal from './loadingPostModal/Index';

export const smallDevicePostModalContext = React.createContext();


export default function InputBox() {
    const { data: session } = useSession();


    const { handleModal, show, isPosting, setIsPosting } = React.useContext(inputContext);

    const smallDevicePostModalContextValue = {
        handleModal, show, isPosting, setIsPosting
      }

    const { image } = session?.user;
    return (
        <div className='bg-[#242526] h-auto 2xl:hidden w-full z-40 text-white'>
            <div className="justify-between bg-[#242526] w-full h-auto 2xl:hidden border-t-2 border-black flex">
                <div className="">
                    <Image src={image} alt='facebook_profile_image'
                        className="rounded-full cursor-pointer ml-2 w-10 h-10 md:w-14 sm:my-0 md:my-1 md:h-14 items-center justify-center text-center m-auto hover:animate-pulse"
                        width={30} height={30} />
                </div>
                <div className="w-8/12 md:w-9/12 my-2 items-center flex">
                    <span className="bg-[#323436] h-10 w-6 py-2 rounded-l-full"></span>
                    <input onClick={handleModal} className="focus:outline-none caret-white-800	text-white py-2 bg-[#323436] rounded-r-full w-full" placeholder="What's on your mind?" />
                </div>
                <div className="text-white" onClick={handleModal}>
                    <FaPhotoVideo className="h-5 w-5 mt-3 ml-2 items-center text-center" />
                    <p className="mt-1 text-sm mr-3">Photo</p>
                </div>
            </div>
            <smallDevicePostModalContext.Provider value={smallDevicePostModalContextValue}>
                <CreatePostModal />
                <LoadingPostModal />
            </smallDevicePostModalContext.Provider>
        </div>
    )
}