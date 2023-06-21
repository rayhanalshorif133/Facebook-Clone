import Image from 'next/image'
import React, { useRef,useState } from 'react'
import { useSession } from "next-auth/react"
import { FaVideo, FaCamera, FaSmile } from "react-icons/fa";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import postController from '@/controllers/PostController';




export default function InputBox() {

    const { data: session } = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost,setImageToPost] = useState(null);
    const [sendImage,setSendImage] = useState(null);

    const sendPost = (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        const data = {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: Date.now(),
        }
        postController.create(data,sendImage);
        inputRef.current.value = '';
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();

        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            setSendImage(e.target.files[0]);
            uploadBytesResumableData(e.target.files[0]);
        }
        
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }

    }

    const removeImage = () => {
        setImageToPost(null);
    }


    return (
        <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
            <div className='flex space-x-4 items-center p-4'>
                <Image src={session.user.image}
                    height={40} width={40} layout="fixed" className="rounded-full" alt='profile-image' />
                <form className='flex flex-1'>
                    <input type="text" placeholder={`What's on your mind, ${session.user.name}?`}
                        ref={inputRef}
                        className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none" />
                    <button hidden onClick={sendPost} type='submit'>Submit</button>
                </form>

                {imageToPost && 
                <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                    <img className='h-10 object-contain' src={imageToPost} alt="uploaded image"/>
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>}

            </div>
            <div className='flex justify-evenly p-3 border-t'>
                <div className='inputIcon'>
                    <FaVideo className='text-red-500 h-7 cursor-pointer' />
                    <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
                </div>
                <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
                    <FaCamera className='text-green-500 h-7 cursor-pointer' />
                    <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
                    <input ref={filePickerRef} hidden onChange={addImageToPost} type='file' />
                </div>
                <div className='inputIcon'>
                    <FaSmile className='text-yellow-500 h-7 cursor-pointer' />
                    <p className='text-xs sm:text-sm xl:text-base'>
                        Feeling/Activity
                    </p>
                </div>
            </div>
        </div>
    )
}



