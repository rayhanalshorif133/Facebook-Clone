import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { useForm } from "react-hook-form"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { smallDevicePostModalContext } from '../InputBox';



export default function Index() {

    const [uploadImage, setUploadImage] = useState(null);
    const { data: session } = useSession();
    const { handleModal,show,isPosting, setIsPosting } = React.useContext(smallDevicePostModalContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const createNewPost = (data) => {
        handleModal();
        setIsPosting(true);
        axios.post('/api/post/create', {
            user: session?.user,
            post_des: data.post_description,
            post_image: uploadImage
        }).then((res) => {
            setTimeout(() => {
                setIsPosting(false);
            },3000);
        })
      }
    

      useEffect(() => {
        setUploadImage(null)
      },[show])

   
  return (
    <>
    {
        show === true && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-[#0E0E0E] bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-[#242526] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <Header handleModal={handleModal}/>
                        <Body uploadImage={uploadImage} setUploadImage={setUploadImage} register={register}/>
                        <Footer handleSubmit={handleSubmit} createNewPost={createNewPost}/>
                    </div>
                </div>
            </div>
        </div>
    }
</>
  )
}