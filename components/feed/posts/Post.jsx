import React from 'react'
import Header from './Header';
import { useSession } from 'next-auth/react';
import Body from './Body';
import Footer from './Footer';
import CancelPost from './cancelPost/Index';



export default function Post({ post }) {



    const { image, name } = post.author;
    const [cancelPost, setCancelPost] = React.useState(false);

    const handleCancelPost = () => {
        setCancelPost(true);
    }


    const [showEmoji, setShowEmoji] = React.useState(false);

    const handlePopupReactEmoji = (e) => {
        setShowEmoji(!showEmoji);
    }


    return (
        <>
            {cancelPost ? <CancelPost post={post} /> :
                <div className='bg-[#242526] h-auto w-full rounded-xl mt-2'>
                    <Header image={image} name={name} cancelPost={handleCancelPost} />
                    <Body post={post} showEmoji={showEmoji}/>
                    <Footer handlePopupReactEmoji={handlePopupReactEmoji}/>
                </div>
            }
        </>
    )
}
