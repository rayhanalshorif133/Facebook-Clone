import React from 'react'
import { LuImagePlus } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';

export default function ImagePlaceHolder(props) {

    const {handleImageInput,handleImageInputToggle,handleUploadInputImage,imageInputRef} = props;

    return (
        <div onClick={handleImageInput} className='h-56 w-[97%] bg-[#323436] hover:bg-[#47494A] cursor-pointer p-4 justify-center items-center flex mx-auto rounded-xl mt-2 relative'>
            <div className="absolute top-2 right-2 h-8 w-8 flex items-center cursor-pointer bg-[#414141] hover:bg-[#4e4f50] rounded-full text-gray-500" onClick={handleImageInputToggle}>
                <RxCross2 className="h-6 w-6 mx-auto items-center text-gray-300" />
            </div>
            <div className="">
                <div className='h-10 w-10 bg-[#47494A] rounded-full items-center justify-center flex mx-auto'>
                    <LuImagePlus className='h-6 w-6 items-center justify-center m-auto flex' />
                </div>
                <div className='items-center justify-center flex mx-auto'>
                    <h2>Add Photos/Videos</h2>
                </div>
                <div className='items-center justify-center flex mx-auto'>
                    <p className="text-sm text-[#9EA1A3]">or drag and drop</p>
                </div>
            </div>
            <input type="file" onChange={handleUploadInputImage} name="inputImage" hidden ref={imageInputRef} />
        </div>
    )
}
